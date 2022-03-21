import images from "../data";
import LocalStorageUtil from "./localStorage";

const localStorageArrAndAnswer = new LocalStorageUtil("arrAndAnswersForQuiz");

function startQuiz(parent, selector) {
  const nowQuizCategory = parent.querySelectorAll(selector);

  function toGetArrayOfCategory() {
    let nowCategory,
      answers = [],
      answersImage = [];

    nowQuizCategory.forEach((item) => {
      item.addEventListener("click", (e) => {
        nowCategory = e.target.parentNode.dataset.category;

        let arr = images.filter((item) => item.category == nowCategory);
        arr.forEach((el) => {
          answers.push(el.author);
          answersImage.push(el.imageNum);
        });

        localStorageArrAndAnswer.addSettings("arr", arr);
        localStorageArrAndAnswer.addSettings("answers", answers);
        localStorageArrAndAnswer.addSettings("answersImage", answersImage);
      });
    });
  }
  toGetArrayOfCategory();
}

export { startQuiz, localStorageArrAndAnswer };
