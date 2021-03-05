import { loadItems } from "./loadItem.js";
import { $navbar } from "./dom.js";
import { filter } from "./filter.js";

const app = async () => {
  await loadItems();

  $navbar.addEventListener("click", filter);
};

app();
