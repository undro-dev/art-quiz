import "./styles/index.scss";
import router from "./js/router/index.routes";

router(window.location.hash + "#/");
window.addEventListener("load", () => {
  window.addEventListener("hashchange", () => {
    router(window.location.hash);
  });
});
