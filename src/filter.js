export const filter = (target) => {
  const color = target.id;
  const $blueClothes = getItem("blue");
  const $pinkClothes = getItem("pink");
  const $yellowClothes = getItem("yellow");

  if (color === "blue") {
    render($blueClothes, $pinkClothes, $yellowClothes);
  } else if (color === "pink") {
    render($pinkClothes, $blueClothes, $yellowClothes);
  } else if (color === "yellow") {
    render($yellowClothes, $pinkClothes, $blueClothes);
  } else {
    console.log("error!");
  }
};

const render = (selectedColor, deselectedColorOne, deselectedColorTwo) => {
  showItem(selectedColor);
  hideItem(deselectedColorOne);
  hideItem(deselectedColorTwo);
};

export const getItem = (color) => {
  return document.getElementsByClassName(color);
};

export const showItem = (items) => {
  for (let i = 0; i < items.length; i++) {
    items[i].style.display = "flex";
  }
};

const hideItem = (items) => {
  for (let i = 0; i < items.length; i++) {
    items[i].style.display = "none";
  }
};
