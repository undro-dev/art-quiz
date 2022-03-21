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
                ><div class="btn artist-quiz">Художники</div></a
              >
              <a href="#/categories-pictures"
                ><div class="btn pictures">Картины</div></a
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
