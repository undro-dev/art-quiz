import toChangeCategories from "../js/components/toChangeCategories";
import { startQuiz } from "../js/components/startQuiz";

export default () => {
  let resultsQuiz = JSON.parse(localStorage.getItem("resultsQuiz"));
  const views = `<div class="container categories-container">
	<header class="categories-header">
		<div class="categories__logo"></div>
		<a class="categories__home-link" href="#/">Главная страница</a>
		<div class="empty-div"></div>
		<a href="#/settings"
			><span class="material-icons icon-settings">settings</span></a
		>
	</header>
	<main class="categories-main">
	<a class="categories-main__item-link" href="#/quiz">
				<div class="quiz-test portrait" data-category="portrait">
					<p class="quiz-test-logo-text">
						Portrait <span>${resultsQuiz.portrait}</span>/<span>10</span>
					</p>
					<div class="quiz-test-logo-img portrait-img"></div>
				</div>
			</a>
			<a class="categories-main__item-link" href="#/quiz">
				<div class="quiz-test landscape" data-category="landscape">
					<p class="quiz-test-logo-text">
						Landscape <span>${resultsQuiz.landscape}</span>/<span>10</span>
					</p>
					<div class="quiz-test-logo-img landscape-img"></div>
				</div>
			</a>
			<a class="categories-main__item-link" href="#/quiz">
				<div class="quiz-test impressionism" data-category="impressionism">
					<p class="quiz-test-logo-text">
						Impressionism <span>${resultsQuiz.impressionism}</span>/<span>10</span>
					</p>
					<div class="quiz-test-logo-img impressionism-img"></div>
				</div>
			</a>
			<a class="categories-main__item-link" href="#/quiz">
				<div class="quiz-test expressionism" data-category="expressionism">
					<p class="quiz-test-logo-text">
						Expressionism <span>${resultsQuiz.expressionism}</span>/<span>10</span>
					</p>
					<div class="quiz-test-logo-img expressionism-img"></div>
				</div>
			</a>
			<a class="categories-main__item-link" href="#/quiz">
				<div class="quiz-test avant-garde" data-category="avant-garde">
					<p class="quiz-test-logo-text">
						Avant-garde <span>${resultsQuiz["avant-garde"]}</span>/<span>10</span>
					</p>
					<div class="quiz-test-logo-img avant-garde-img"></div>
				</div>
			</a>
			<a class="categories-main__item-link" href="#/quiz">
				<div class="quiz-test realism" data-category="realism">
					<p class="quiz-test-logo-text">
						Realism <span>${resultsQuiz.realism}</span>/<span>10</span>
					</p>
					<div class="quiz-test-logo-img realism-img"></div>
				</div>
			</a>
			<a class="categories-main__item-link" href="#/quiz">
				<div class="quiz-test religion" data-category="religion">
					<p class="quiz-test-logo-text">
						Religion <span>${resultsQuiz.religion}</span>/<span>10</span>
					</p>
					<div class="quiz-test-logo-img religion-img"></div>
				</div>
			</a>
			<a class="categories-main__item-link" href="#/quiz">
				<div class="quiz-test renaissance" data-category="renaissance">
					<p class="quiz-test-logo-text">
						Renaissance <span>${resultsQuiz.renaissance}</span>/<span>10</span>
					</p>
					<div class="quiz-test-logo-img renaissance-img"></div>
				</div>
			</a>
			<a class="categories-main__item-link" href="#/quiz">
				<div class="quiz-test painting" data-category="painting">
					<p class="quiz-test-logo-text">
						Painting <span>${resultsQuiz.painting}</span>/<span>10</span>
					</p>
					<div class="quiz-test-logo-img painting-img"></div>
				</div>
			</a>
			<a class="categories-main__item-link" href="#/quiz">
				<div class="quiz-test marine" data-category="marine">
					<p class="quiz-test-logo-text">
						Marine <span>${resultsQuiz.marine}</span>/<span>10</span>
					</p>
					<div class="quiz-test-logo-img marine-img"></div>
				</div>
			</a>
			<a class="categories-main__item-link" href="#/quiz">
				<div class="quiz-test surrealism" data-category="surrealism">
					<p class="quiz-test-logo-text">
						Surrealism <span>${resultsQuiz.surrealism}</span>/<span>10</span>
					</p>
					<div class="quiz-test-logo-img surrealism-img"></div>
				</div>
			</a>
			<a class="categories-main__item-link" href="#/quiz">
				<div class="quiz-test romanticism" data-category="romanticism">
					<p class="quiz-test-logo-text">
						Romanticism <span>${resultsQuiz.romanticism}</span>/<span>10</span>
					</p>
					<div class="quiz-test-logo-img romanticism-img"></div>
				</div>
			</a>

	</main>
	<footer class="footer">
		<p class="dev-name">Vitaly Undro</p>
	</footer>
</div>`;

  const categories = document.createElement("section");
  categories.classList = "categories-quiz";
  categories.innerHTML = views;

  // toChangeCategories(categories, ".quiz-test");
  startQuiz(categories, ".quiz-test");

  return categories;
};
