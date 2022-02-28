import { localStorageArrAndAnswer } from "./startQuiz";

function quizAboutArtist(
  wrapper,
  progress,
  img,
  wrapperAnswers,
  popup,
  popupFinish
) {
  let resultsQuiz = JSON.parse(localStorage.getItem("resultsQuiz"));

  let arrayWithQuestions = localStorageArrAndAnswer.getSettings().arr,
    arrayWithAnswers = localStorageArrAndAnswer.getSettings().answers,
    randomQuestion = shuffleArray(arrayWithQuestions).splice(0, 10),
    progressBlock = wrapper.querySelector(progress),
    answersBlock = wrapper.querySelector(wrapperAnswers),
    imgBlock = wrapper.querySelector(img),
    popUp = wrapper.querySelector(popup),
    popUpFinish = wrapper.querySelector(popupFinish),
    btnNext = popUp.querySelector(".popup-next"),
    indexOfQuestion = 0, //индекс текущего вопроса
    countTrueAnswers = 0; //счетчик правильных ответов

  //Для сортировки вопросов и овтетов
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  //создали индикаторы правильных и неправильных ответов
  function toCreateProgress() {
    for (let i = 0; i < randomQuestion.length; i++) {
      let progressBlockItem = document.createElement("DIV");
      progressBlockItem.classList.add("progress-item");
      progressBlock.append(progressBlockItem);
    }
  }
  //4 ответа для блока
  function toCreateAnswers(arrAnswers) {
    arrAnswers = shuffleArray(arrAnswers);
    arrAnswers.forEach((el) => {
      let answer = document.createElement("DIV");
      answer.classList.add("answer");
      answer.textContent = el;
      answersBlock.append(answer);
    });
  }

  //добавляем в попап актуальную информацию о картинах
  function addCorrectDataToPopup({ name, imageNum, author, year }) {
    let img = popUp.querySelector(".popup__img"),
      title = popUp.querySelector(".popup-title"),
      authorName = popUp.querySelector(".pop__text");
    img.style.backgroundImage = `url("./${imageNum}full.webp")`;
    title.textContent = `${name}`;
    authorName.textContent = `${author}, ${year}`;
  }

  //проверяем ответ юзера и вызывем соответствующий попап с информацией
  function getAnswer(author) {
    let answersItem = answersBlock.querySelectorAll(".answer");
    answersItem.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (
          e.target.textContent === author &&
          e.target.classList.contains("answer")
        ) {
          countTrueAnswers++;
          getTrueAnswer(true);
        } else {
          getTrueAnswer(false);
        }
      });
    });
  }

  //от правильности ответа добавляем индикаторы
  function getTrueAnswer(check) {
    addCorrectDataToPopup(randomQuestion[indexOfQuestion]);
    let spanImage = popUp.querySelector(".answer-icon");

    if (check) {
      spanImage.classList.remove("false");
      spanImage.classList.add("true");
      spanImage.textContent = "check_circle";
      popUp.classList.add("active");
      progressBlock.children[indexOfQuestion].style.backgroundColor = "green";
    } else {
      spanImage.classList.remove("true");
      spanImage.classList.add("false");
      spanImage.textContent = "cancel";
      popUp.classList.add("active");
      progressBlock.children[indexOfQuestion].style.backgroundColor = "red";
    }
  }

  //при клике вызываем следующий вопрос
  function nextQuestion() {
    popUp.classList.remove("active");
    indexOfQuestion++;
    answersBlock.innerHTML = "";
    load(randomQuestion[indexOfQuestion]);
  }

  function getFinishPopup({ category }) {
    let coreectAnswer = popUpFinish.querySelector(".сorrect-answers"),
      allQuestion = popUpFinish.querySelector(".all-question");
    popUp.classList.remove("active");
    popUpFinish.classList.add("active");
    coreectAnswer.textContent = `${countTrueAnswers}`;
    allQuestion.textContent = `${randomQuestion.length}`;
    resultsQuiz[category] = countTrueAnswers;
    localStorage.setItem("resultsQuiz", JSON.stringify(resultsQuiz));
  }

  function finishRound() {
    if (indexOfQuestion < 9) {
      nextQuestion();
    } else {
      getFinishPopup(randomQuestion[indexOfQuestion]);
    }
  }
  //создаем рандомные ответы с одним правильным
  function answersRandom({ author }) {
    let ourAnswers = new Set([...arrayWithAnswers]);
    let answers = Array.from(ourAnswers);
    let index = answers.indexOf(author);
    answers.splice(index, 1);
    let answersRandom = shuffleArray(answers).splice(0, 3);
    answersRandom[3] = author;
    return answersRandom;
  }

  function load({ author, imageNum }) {
    imgBlock.style.backgroundImage = `url("./${imageNum}full.webp")`;
    toCreateAnswers(answersRandom(randomQuestion[indexOfQuestion]));
    getAnswer(author);
    console.log(countTrueAnswers);
  }
  toCreateProgress();
  load(randomQuestion[indexOfQuestion]);

  btnNext.addEventListener("click", finishRound);
}

export { quizAboutArtist };
