import { localStorageArrAndAnswer } from "./startQuiz";
import MethodsForQuiz from "./methodsForQuiz";
let methodsForQuiz = new MethodsForQuiz();

function quizAboutPictures(
  wrapper,
  progress,
  wrapperAnswers,
  question,
  popup,
  popupFinish
) {
  let resultsPicturesQuiz = JSON.parse(
    localStorage.getItem("resultsPicturesQuiz")
  );
  let settings = JSON.parse(localStorage.getItem("settingsApp"));

  let arrayWithQuestions = localStorageArrAndAnswer.getSettings().arr,
    mainQuestion = wrapper.querySelector(question),
    questions = [...arrayWithQuestions],
    randomQuestion = methodsForQuiz.shuffleArray(questions).splice(0, 10),
    progressBlock = wrapper.querySelector(progress),
    answersBlock = wrapper.querySelector(wrapperAnswers),
    seconds = wrapper.querySelector(".seconds"),
    popUp = wrapper.querySelector(popup),
    popUpFinish = wrapper.querySelector(popupFinish),
    btnNext = popUp.querySelector(".popup-next"),
    timerId = null,
    indexOfQuestion = 0,
    countTrueAnswers = 0;

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

  //4 ответа для блока
  function toCreateAnswers(arrAnswers) {
    arrAnswers = methodsForQuiz.shuffleArray(arrAnswers);
    arrAnswers.forEach((el) => {
      let answer = document.createElement("DIV");
      answer.classList.add("picture-answer");
      answer.style.backgroundImage = `url("./${el}full.webp")`;
      answer.setAttribute("data-image", `${el}`);
      answersBlock.append(answer);
    });
  }

  //создаем рандомные ответы с одним правильным
  function answersRandom({ imageNum, author }) {
    let uniqueAnswers = [...arrayWithQuestions],
      arrWithAnswer = uniqueAnswers.filter((item) => item.author !== author),
      arrWithNumberImage = [];

    arrWithAnswer.forEach((item) => arrWithNumberImage.push(item.imageNum));

    let answersRandom = methodsForQuiz
      .shuffleArray(arrWithNumberImage)
      .splice(0, 3);
    answersRandom[3] = imageNum;
    return answersRandom;
  }

  function getAnswer(numImage) {
    let answersItem = wrapper.querySelectorAll(".picture-answer");
    answersItem.forEach((item) => {
      item.addEventListener("click", (e) => {
        clearInterval(timerId);
        if (
          e.target.getAttribute("data-image") === numImage &&
          e.target.classList.contains("picture-answer")
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

  //добавляем в попап актуальную информацию о картинах
  function addCorrectDataToPopup({ name, imageNum, author, year }) {
    let img = popUp.querySelector(".popup__img"),
      title = popUp.querySelector(".popup-title"),
      authorName = popUp.querySelector(".pop__text");
    img.style.backgroundImage = `url("./${imageNum}full.webp")`;
    title.textContent = `${name}`;
    authorName.textContent = `${author}, ${year}`;
  }

  function nextQuestion() {
    popUp.classList.remove("active");
    indexOfQuestion++;
    answersBlock.innerHTML = "";
    load(randomQuestion[indexOfQuestion]);
  }

  function finishRound() {
    if (indexOfQuestion < 9) {
      nextQuestion();
    } else {
      getFinishPopup(randomQuestion[indexOfQuestion]);
    }
  }
  function getFinishPopup({ category }) {
    let coreectAnswer = popUpFinish.querySelector(".сorrect-answers"),
      allQuestion = popUpFinish.querySelector(".all-question");
    popUp.classList.remove("active");
    popUpFinish.classList.add("active");
    coreectAnswer.textContent = `${countTrueAnswers}`;
    allQuestion.textContent = `${randomQuestion.length}`;
    resultsPicturesQuiz[category] = countTrueAnswers;
    localStorage.setItem(
      "resultsPicturesQuiz",
      JSON.stringify(resultsPicturesQuiz)
    );
  }

  function load({ author, imageNum }) {
    mainQuestion.textContent = `Какую из этих картин нарисовал ${author}?`;
    answersRandom(randomQuestion[indexOfQuestion]);
    toCreateAnswers(answersRandom(randomQuestion[indexOfQuestion]));
    getAnswer(imageNum);
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

export default quizAboutPictures;
