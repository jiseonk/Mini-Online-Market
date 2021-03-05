import { loadItems } from "./loadItem.js";
import { $logoContainer, $navbar } from "./dom.js";
import { filter } from "./filter.js";
import { showAllList } from "./logo.js";

const app = async () => {
  await loadItems();

  $navbar.addEventListener("click", filter);
  $logoContainer.addEventListener("click", showAllList);
};

app();
