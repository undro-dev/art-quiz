export default function toChangeCategories(categories, categoriesItem) {
  const itemCategories = categories.querySelectorAll(categoriesItem);
  function toCreateBlockRepeat() {
    let blockRepeat = document.createElement("DIV"),
      iconSpan = document.createElement("SPAN"),
      iconText = document.createElement("SPAN");

    blockRepeat.classList.add("repeat");
    iconSpan.classList.add("material-icons", "icon-replay");
    iconSpan.textContent = "replay";
    iconText.textContent = "Play again";
    blockRepeat.append(iconSpan);
    blockRepeat.append(iconText);
    return blockRepeat;
  }

  function addBlockRepeat(collection) {
    collection.forEach((item) => {
      item.append(toCreateBlockRepeat());
    });
  }
  function addOpacity(collection) {
    collection.forEach((item) => {
      item.addEventListener("mouseover", () => {
        const repeat = item.querySelector(".repeat");
        repeat.style.opacity = "1";
      });
    });
  }
  function removeOpacity(collection) {
    collection.forEach((item) => {
      item.addEventListener("mouseout", () => {
        const repeat = item.querySelector(".repeat");
        repeat.style.opacity = "0";
      });
    });
  }

  addBlockRepeat(itemCategories);
  addOpacity(itemCategories);
  removeOpacity(itemCategories);
}
