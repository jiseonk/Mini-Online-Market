export const filter = ({ target }) => {
  const type = target.id;
  const $tshirt = getItem("tshirt");
  const $pants = getItem("pants");
  const $skirt = getItem("skirt");
  const $blueClothes = getItem("blue");
  const $pinkClothes = getItem("pink");
  const $yellowClothes = getItem("yellow");

  console.log(type);
  if (type === "blue") {
    render($blueClothes, $pinkClothes, $yellowClothes);
  } else if (type === "pink") {
    render($pinkClothes, $blueClothes, $yellowClothes);
  } else if (type === "yellow") {
    render($yellowClothes, $pinkClothes, $blueClothes);
  } else if (type === "t-shirt") {
    render($tshirt, $pants, $skirt);
  } else if (type === "pants") {
    render($pants, $skirt, $tshirt);
  } else if (type === "skirt") {
    render($skirt, $pants, $tshirt);
  } else {
    console.log("error!");
  }
};

const render = (selectedItem, deselectedItemOne, deselectedItemTwo) => {
  showItem(selectedItem);
  hideItem(deselectedItemOne);
  hideItem(deselectedItemTwo);
};

export const getItem = (type) => {
  return document.getElementsByClassName(type);
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
