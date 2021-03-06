import { localStorageArrAndAnswer } from "./startQuiz";
import MethodsForQuiz from "./methodsForQuiz";
let methodsForQuiz = new MethodsForQuiz();

function quizAboutArtist(
  wrapper,
  progress,
  img,
  wrapperAnswers,
  popup,
  popupFinish
) {
  let resultsQuiz = JSON.parse(localStorage.getItem("resultsQuiz"));
  let settings = JSON.parse(localStorage.getItem("settingsApp"));

  let arrayWithQuestions = localStorageArrAndAnswer.getSettings().arr,
    arrayWithAnswers = localStorageArrAndAnswer.getSettings().answers,
    randomQuestion = methodsForQuiz
      .shuffleArray(arrayWithQuestions)
      .splice(0, 10),
    progressBlock = wrapper.querySelector(progress),
    answersBlock = wrapper.querySelector(wrapperAnswers),
    imgBlock = wrapper.querySelector(img),
    popUp = wrapper.querySelector(popup),
    popUpFinish = wrapper.querySelector(popupFinish),
    btnNext = popUp.querySelector(".popup-next"),
    seconds = wrapper.querySelector(".seconds"),
    timerId = null,
    indexOfQuestion = 0, //индекс текущего вопроса
    countTrueAnswers = 0; //счетчик правильных ответов

  function timer() {
    if (+settings.timeToAnswer == false) return;

    let time = +settings.timeToAnswer;
    seconds.textContent = time.toString().padStart(2, "0");
    timerId = setInterval(() => {
      time--;
      seconds.textContent = time.toString().padStart(2, "0");
      if (+time == 0) {
        clearInterval(timerId);
        getTrueAnswer(false);
      }
    }, 1000);
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
        clearInterval(timerId);
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
      methodsForQuiz.toCreateAudio(check);
    } else {
      spanImage.classList.remove("true");
      spanImage.classList.add("false");
      spanImage.textContent = "cancel";
      popUp.classList.add("active");
      progressBlock.children[indexOfQuestion].style.backgroundColor = "red";
      methodsForQuiz.toCreateAudio(check);
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

  function load({ author, imageNum }) {
    imgBlock.style.backgroundImage = `url("./${imageNum}full.webp")`;

    let answers = methodsForQuiz.answersRandom(
      arrayWithAnswers,
      randomQuestion[indexOfQuestion].author
    );

    methodsForQuiz.toCreateAnswers(answers, "DIV", "answer", answersBlock);
    getAnswer(author);
    timer();
  }

  methodsForQuiz.toCreateProgress(
    randomQuestion,
    "DIV",
    "progress-item",
    progressBlock
  );

  load(randomQuestion[indexOfQuestion]);

  btnNext.addEventListener("click", finishRound);
}

export { quizAboutArtist };
