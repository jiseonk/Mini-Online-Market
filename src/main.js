import { $logoContainer, $navbar } from "./dom.js";
import { addItem } from "./addItem.js";
import { filter } from "./filter.js";
import { showAllList } from "./logo.js";
import { loadItems } from "./loadItem.js";

const app = () => {
  $logoContainer.addEventListener("click", showAllList);
  $navbar.addEventListener("click", clickHandler);
};

const clickHandler = ({ target }) => {
  if (target.classList.contains("imgBtn")) {
    addItem(target);
  } else if (target.classList.contains("colorBtn")) {
    filter(target);
  }
};

loadItems()
  .then((items) => {
    console.log(items);
    //displayItems(items);
    //setEventListeners(items);
  })
  .catch(console.log);

app();
