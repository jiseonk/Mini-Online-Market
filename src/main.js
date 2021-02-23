import {
  $blueBtn,
  $yellowBtn,
  $pinkBtn,
  $tshirtBtn,
  $skirtBtn,
  $pantsBtn,
  $itemContainer,
  $navbar,
} from "./dom.js";

import { addItem } from "./addItem.js";

const app = () => {
  $navbar.addEventListener("click", clickHandler);
};

const clickHandler = ({ target }) => {
  if (target.classList.contains("imgBtn")) {
    addItem(target);
  }
};

app();
