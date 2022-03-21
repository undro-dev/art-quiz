import quizAboutPictures from "../js/components/quizAboutPictures";

export default () => {
  const views = `<div class="container artists-quiz-container">
	<header class="artists-quiz-header">
	<a href="#/"
      ><span class="material-icons artists-quiz-header__icon"
        >home</span
      ></a
    >
		<p class="timer">
			<span class="minutes">00</span>:<span class="seconds">00</span>
		</p>
		<a href="#/categories-pictures"
      ><span class="material-icons artists-quiz-header__icon"
        >arrow_back</span
      ></a
    >
	</header>
	<main class="artists-quiz-main">
		<h1 class="main-question">Какую из этих картин нарисовал?</h1>
		<div class="main-question-image answers-pictures"></div>
		<div class="progress-pictures"></div>
	</main>
	<footer class="footer">
		<p class="dev-name">Vitaly Undro</p>
	</footer>
  <div id="popup" class="popup">
      <div class="popup__body">
        <div class="popup__content">
          <div class="popup__img">
            <span class="material-icons answer-icon"> cancel </span>
          </div>
          <h4 class="popup-title">name art</h4>
          <div class="pop__text">name author,<span id="year">1964</span></div>
          <button class="popup-next">Next</button>
        </div>
      </div>
    </div>
</div>
<div id="popup-finish" class="popup-finish">
<div class="popup-finish__body">
  <div class="popup__content">
    <div class="popup-finish__img"></div>
    <h4 class="popup-finish-title">Congratulations!</h4>
    <div class="popup-finish__result">
      <span class="сorrect-answers">0</span>/<span class="all-question"
        >0</span
      >
    </div>
    <div class="popup-finish-container-link">
      <a href="#/" class="popup-link"
        ><div class="popup-link__home">Home</div></a
      >
      <a href="#/categories-pictures" class="popup-link"
        ><div class="popup-link__categories">Next Quiz</div></a
      >
    </div>
  </div>
</div>
</div>`;

  const artistQuizWrapper = document.createElement("section");
  artistQuizWrapper.classList = "categories-quiz";
  artistQuizWrapper.innerHTML = views;

  quizAboutPictures(
    artistQuizWrapper,
    ".progress-pictures",
    ".answers-pictures",
    ".main-question",
    ".popup",
    ".popup-finish"
  );

  return artistQuizWrapper;
};
