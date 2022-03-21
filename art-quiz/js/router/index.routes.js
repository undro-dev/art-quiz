import { pages } from "../../views/pages";

const body = document.querySelector("body");

const router = (route) => {
  body.innerHTML = "";

  switch (route) {
    case "#/": {
      return body.appendChild(pages.mainPage());
    }
    case "#/settings":
      return body.appendChild(pages.setting());
    case "#/categories":
      return body.appendChild(pages.categories());
    case "#/categories-pictures":
      return body.appendChild(pages.categoriesPictureQuiz());
    case "#/quiz":
      return body.appendChild(pages.artistQuiz());
    case "#/quiz-pictures":
      return body.appendChild(pages.picturesQuiz());
    default:
      return console.log("404!!!");
  }
};

export default router;
