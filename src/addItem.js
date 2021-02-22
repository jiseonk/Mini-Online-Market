function displayAllItems() {
  for (let i = 0; i < blueClothes.length; i++) {
    blueClothes[i].style.display = "flex";
  }
  for (let i = 0; i < pinkClothes.length; i++) {
    pinkClothes[i].style.display = "flex";
  }
  for (let i = 0; i < yellowClothes.length; i++) {
    yellowClothes[i].style.display = "flex";
  }
}

function hideAllItems() {
  for (let i = 0; i < blueClothes.length; i++) {
    blueClothes[i].style.display = "none";
  }
  for (let i = 0; i < pinkClothes.length; i++) {
    pinkClothes[i].style.display = "none";
  }
  for (let i = 0; i < yellowClothes.length; i++) {
    yellowClothes[i].style.display = "none";
  }
}
