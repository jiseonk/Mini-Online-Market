// Clothes by color
let blueClothes = document.getElementsByClassName("blue");
let pinkClothes = document.getElementsByClassName("pink");
let yellowClothes = document.getElementsByClassName("yellow");

// Clothes by type
let tshirtClothes = document.getElementsByClassName("t-shirt");
let pantsClothes = document.getElementsByClassName("pants");
let skirtClothes = document.getElementsByClassName("skirt");

// logo
let logo = document.getElementById("logo");

// Click logo
logo.addEventListener("click", displayAllItems());

blueBtn.addEventListener("click", function () {
  hideAllItems();
  for (let i = 0; i < blueClothes.length; i++) {
    blueClothes[i].style.display = "flex";
  }
});

pinkBtn.addEventListener("click", function () {
  hideAllItems();
  for (let i = 0; i < pinkClothes.length; i++) {
    pinkClothes[i].style.display = "flex";
  }
});

yellowBtn.addEventListener("click", function () {
  hideAllItems();
  for (let i = 0; i < yellowClothes.length; i++) {
    yellowClothes[i].style.display = "flex";
  }
});

tshirtBtn.addEventListener("click", function () {
  hideAllItems();
  for (let i = 0; i < tshirtClothes.length; i++) {
    tshirtClothes[i].style.display = "flex";
  }
});

skirtBtn.addEventListener("click", function () {
  hideAllItems();
  for (let i = 0; i < skirtClothes.length; i++) {
    skirtClothes[i].style.display = "flex";
  }
});

pantsBtn.addEventListener("click", function () {
  hideAllItems();
  for (let i = 0; i < pantsClothes.length; i++) {
    pantsClothes[i].style.display = "flex";
  }
});
