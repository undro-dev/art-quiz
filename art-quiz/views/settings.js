import LocalStorageUtil from "../js/components/localStorage";
import settingsApp from "../js/components/settingsApp";
let localStorageUtil = new LocalStorageUtil("settingsApp");
localStorageUtil.addSettings("volume", 70);
localStorageUtil.addSettings("timeGame", false);
localStorageUtil.addSettings("timeToAnswer", 0);

export default () => {
  const views = `<div class="container settings-container">
  <header class="settings-header">
    <a href="#"
      ><span class="material-icons icon-settings arrow-back"
        >arrow_back</span
      ></a
    >
    <a href="#"
      ><span class="material-icons icon-settings close">close</span></a
    >
  </header>
  <main class="settings-main">
    <div class="wrapper-settings">
      <div class="wrapper-settings-item">
        <div class="volume-settings">
          <h2>Звук</h2>
          <input class="input-volume" type="range" value= ${
            localStorageUtil.getSettings().volume
          } />
          <div class="volume-icon">
            <span class="material-icons volume volume-up"
              >volume_off</span
            >
            <span class="material-icons volume volume-up">volume_up</span>
          </div>
        </div>
        <div class="time-settings">
          <h2>Игра на время</h2>
          <div class="onoffswitch">
            <input
              type="checkbox"
              name="onoffswitch"
              class="onoffswitch-checkbox"
              id="myonoffswitch"
              tabindex="0"
              checked
            />
            <label class="onoffswitch-label" for="myonoffswitch">
              <span class="onoffswitch-inner"></span>
              <span class="onoffswitch-switch"></span>
            </label>
          </div>
        </div>
        <div class="time-settings-answer">
          <h2>Время на вопрос</h2>
          <div class="wrapper-input">
            <div class="wrapper-input-btn" id="btn-remove">
              <span class="material-icons icon-settings"> remove </span>
            </div>
            <span class="wrapper-input-count">${
              localStorageUtil.getSettings().timeToAnswer
            }</span>
            <div class="wrapper-input-btn" id="btn-add">
              <span class="material-icons icon-settings"> add </span>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper-settings-btns">
        <button id="default" class="settings-btns">По умолчанию</button>
        <button id="save" class="settings-btns">Сохранить</button>
      </div>
    </div>
  </main>
  <footer class="footer">
    <p class="dev-name">Vitaly Undro</p>
  </footer>
</div>`;

  const settings = document.createElement("section");
  settings.classList = "settings";
  settings.innerHTML = views;

  settingsApp(
    settings,
    "#myonoffswitch",
    ".arrow-back",
    ".close",
    ".input-volume",
    "#btn-remove",
    "#btn-add",
    ".wrapper-input-count",
    "#default",
    "#save",
    localStorageUtil
  );
  return settings;
};
