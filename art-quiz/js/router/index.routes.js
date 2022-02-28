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
    case "#/quiz":
      return body.appendChild(pages.artistQuiz());
    default:
      return console.log("404!!!");
  }
};

export default router;
