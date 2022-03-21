export default class LocalStorageUtil {
  constructor(keyName) {
    this.keyName = keyName;
  }

  getSettings() {
    const settingsLocalStorage = localStorage.getItem(this.keyName);
    if (settingsLocalStorage !== null) {
      return JSON.parse(settingsLocalStorage);
    }
    return {};
  }

  addSettings(key, value) {
    let settings = this.getSettings();
    settings[key] = value;
    localStorage.setItem(this.keyName, JSON.stringify(settings));
  }
}

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

let resultsPicturesQuiz = {
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
localStorage.setItem(
  "resultsPicturesQuiz",
  JSON.stringify(resultsPicturesQuiz)
);
