import { showItem, getItem } from "./filter.js";

export const showAllList = () => {
  const $blueClothes = getItem("blue");
  const $pinkClothes = getItem("pink");
  const $yellowClothes = getItem("yellow");

  showItem($blueClothes);
  showItem($pinkClothes);
  showItem($yellowClothes);
};
