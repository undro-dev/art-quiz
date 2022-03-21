export default class MethodsForQuiz {
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  toCreateProgress(array, element, classByElement, blockForElement) {
    for (let i = 0; i < array.length; i++) {
      let progressBlockItem = document.createElement(element);
      progressBlockItem.classList.add(classByElement);
      blockForElement.append(progressBlockItem);
    }
  }
  //создаем рандомные ответы с одним правильным
  answersRandom(array, item) {
    let ourAnswers = new Set([...array]);
    let answers = Array.from(ourAnswers);
    let index = answers.indexOf(item);
    answers.splice(index, 1);
    let answersRandom = this.shuffleArray(answers).splice(0, 3);
    answersRandom[3] = item;
    return answersRandom;
  }

  toCreateAnswers(array, element, classByElement, blockForAnswers) {
    array = this.shuffleArray(array);
    array.forEach((el) => {
      let answer = document.createElement(element);
      answer.classList.add(classByElement);
      answer.textContent = el;
      blockForAnswers.append(answer);
    });
  }

  timer(timeOfSettings, blockWithSeconds, id, cb) {
    if (+timeOfSettings.timeToAnswer == false) return;

    let time = +timeOfSettings.timeToAnswer;
    blockWithSeconds.textContent = time;

    id = setInterval(() => {
      time--;
      blockWithSeconds.textContent = time.toString().padStart(2, "0");
      if (+time == 0) {
        clearInterval(id);
        cb(false);
      }
    }, 1000);
  }
  toCreateAudio(marker) {
    let settings = JSON.parse(localStorage.getItem("settingsApp"));
    let audio = document.createElement("AUDIO");
    audio.volume = settings.volume / 100;
    if (marker) {
      audio.src = "./correct.mp3";
      audio.play();
    } else {
      audio.src = "./uncorrect.mp3";
      audio.play();
    }
  }
}
