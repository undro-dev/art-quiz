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
