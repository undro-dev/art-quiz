let resultsQuiz = {
  realism: 0,
  impressionism: 0,
  religion: 0,
  portrait: 0,
  renaissance: 0,
  painting: 0,
  landscape: 0,
  marine: 0,
  "avant-garde": 0,
  surrealism: 0,
  romanticism: 0,
  expressionism: 0,
};
localStorage.setItem("resultsQuiz", JSON.stringify(resultsQuiz));

export default () => {
  const views = `
	<div class="container main-page-container">
        <header class="header">
          <a href="#/settings"
            ><span class="material-icons icon-settings">settings</span></a
          >
        </header>
        <main class="main">
          <div class="block-content">
            <div class="block-content__img"></div>
            <div class="block-content__btns">
              <a href="#/categories"
                ><div class="btn artist-quiz">Artist quiz</div></a
              >
              <a href="#/categories"
                ><div class="btn pictures">Pictures quiz</div></a
              >
            </div>
          </div>
        </main>
        <footer class="footer">
          <p class="dev-name">Vitaly Undro</p>
        </footer>
      </div>`;

  const mainPage = document.createElement("section");
  mainPage.classList = "main-page";
  mainPage.innerHTML = views;

  // const settings = mainPage.querySelector(".icon-settings");

  return mainPage;
};
