import { $itemContainer } from "./dom.js";

export const displayItems = (items) => {
  items.map((item) => {
    $itemContainer.insertAdjacentHTML("beforeend", itemTemplate(item));
  });
};

const itemTemplate = (item) => {
  return `<li class="items ${item.color} ${item.type}">
          <img src="${item.image}" alt="${item.type}"/>
          <p>${item.gender}, ${item.size}</p>
          </li>`;
};
