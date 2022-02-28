export default function settingsApp(
  settings,
  settingsGameOnTime,
  back,
  close,
  inputVolumeRange,
  btnMinus,
  btnPlus,
  inputCount,
  defaultBtn,
  saveBtn,
  localStorageSettings
) {
  const timeGameInput = settings.querySelector(settingsGameOnTime),
    btnBack = settings.querySelector(back),
    btnClose = settings.querySelector(close),
    inputVolume = settings.querySelector(inputVolumeRange),
    btnRemove = settings.querySelector(btnMinus),
    btnAdd = settings.querySelector(btnPlus),
    countTime = settings.querySelector(inputCount),
    btnDefault = settings.querySelector(defaultBtn),
    btnSave = settings.querySelector(saveBtn);

  timeGameInput.checked = localStorageSettings.getSettings().timeGame;

  const getVolumeValue = () => {
    return inputVolume.value;
  };

  const getTimeGameValue = () => {
    timeGameInput.checked ? countTime.textContent : (countTime.textContent = 0);

    return timeGameInput.checked;
  };

  const addTimeOnAnswer = () => {
    let time = Number(countTime.textContent);
    if (timeGameInput.checked) {
      if (time === 30) time = -5;
      time = time + 5;
      countTime.textContent = time;
    } else {
      countTime.textContent = 0;
    }
  };

  const removeTimeOnAnswer = () => {
    let time = Number(countTime.textContent);
    if (timeGameInput.checked) {
      if (time === 0) time = 35;
      time = time - 5;
      countTime.textContent = time;
    } else countTime.textContent = 0;
  };

  const defaultSettings = () => {
    localStorageSettings.addSettings("volume", 50);
    localStorageSettings.addSettings("timeGame", false);
    localStorageSettings.addSettings("timeToAnswer", 0);
    inputVolume.value = 50;
    timeGameInput.checked = false;
    countTime.textContent = 0;
  };

  function saveSettings() {
    localStorageSettings.addSettings("volume", getVolumeValue());
    localStorageSettings.addSettings("timeGame", getTimeGameValue());
    localStorageSettings.addSettings("timeToAnswer", countTime.textContent);
  }

  inputVolume.addEventListener("input", getVolumeValue);
  timeGameInput.addEventListener("input", getTimeGameValue);
  btnAdd.addEventListener("click", addTimeOnAnswer);
  btnRemove.addEventListener("click", removeTimeOnAnswer);
  btnDefault.addEventListener("click", defaultSettings);
  btnSave.addEventListener("click", saveSettings);
  btnBack.addEventListener("click", () => window.history.back());
  btnClose.addEventListener("click", () => window.history.back());
}
