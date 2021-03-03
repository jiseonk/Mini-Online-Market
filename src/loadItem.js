import { displayItems } from "./displayItem.js";

export const loadItems = async () => {
  const response = await request();
  const items = response.items;

  displayItems(items);
};

const request = async () => {
  try {
    const response = await fetch("../data/data.json");
    if (!response.ok) {
      throw new Error(response.status);
    }

    return await response.json();
  } catch (e) {
    console.log(e);
    return e;
  }
};
