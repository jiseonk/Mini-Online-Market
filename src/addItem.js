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
