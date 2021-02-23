import { $itemContainer } from "./dom.js";
import { itemTemplate } from "./template.js";

export const addItem = (target) => {
  const btn = target.closest("button");
  const item = btn.id;
  const color = createRandomColor();

  $itemContainer.insertAdjacentHTML("beforeend", itemTemplate(color, item));
};

const createRandomColor = () => {
  const num = Math.floor(Math.random() * 3);
  const obj = {
    0: "blue",
    1: "pink",
    2: "yellow",
  };

  return obj[num];
};

const displayAllItems = () => {
  for (let i = 0; i < blueClothes.length; i++) {
    blueClothes[i].style.display = "flex";
  }
  for (let i = 0; i < pinkClothes.length; i++) {
    pinkClothes[i].style.display = "flex";
  }
  for (let i = 0; i < yellowClothes.length; i++) {
    yellowClothes[i].style.display = "flex";
  }
};

const hideAllItems = () => {
  for (let i = 0; i < blueClothes.length; i++) {
    blueClothes[i].style.display = "none";
  }
  for (let i = 0; i < pinkClothes.length; i++) {
    pinkClothes[i].style.display = "none";
  }
  for (let i = 0; i < yellowClothes.length; i++) {
    yellowClothes[i].style.display = "none";
  }
};
