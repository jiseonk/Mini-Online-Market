// Navbar buttons

let blueBtn = document.getElementById('blue');
let yellowBtn = document.getElementById('yellow');
let pinkBtn = document.getElementById('pink');
let tshirtBtn = document.getElementById('t-shirt');
let skirtBtn = document.getElementById('skirt');
let pantsBtn = document.getElementById('pants');

// Create Item lists
addNewItem();

// Clothes by color
let blueClothes = document.getElementsByClassName('blue');
let pinkClothes = document.getElementsByClassName('pink');
let yellowClothes = document.getElementsByClassName('yellow');

// Clothes by type
let tshirtClothes = document.getElementsByClassName('t-shirt');
let pantsClothes = document.getElementsByClassName('pants');
let skirtClothes = document.getElementsByClassName('skirt');

// logo
let logo = document.getElementById('logo');


// Click logo
logo.addEventListener('click', displayAllItems());


// Filtering by color
blueBtn.addEventListener('click', function(){
    hideAllItems();
    for(let i=0; i<blueClothes.length; i++){
        blueClothes[i].style.display = 'flex';
    }
});


pinkBtn.addEventListener('click', function(){
    hideAllItems();
    for(let i=0; i<pinkClothes.length; i++){
        pinkClothes[i].style.display = 'flex';
    }

});


yellowBtn.addEventListener('click', function(){
    hideAllItems();
    for(let i=0; i<yellowClothes.length; i++){
        yellowClothes[i].style.display = 'flex';
    }
});



// Filtering by type
tshirtBtn.addEventListener('onclick' ,function(){
    hideAllItems();
    for(let i=0; i<tshirtClothes.length; i++){
        tshirtClothes[i].style.display = 'flex';
    }

});

skirtBtn.addEventListener('onclick', function(){
    hideAllItems();
    for(let i=0; i<skirtClothes.length; i++){
        skirtClothes[i].style.display = 'flex';
    }
  
});

pantsBtn.addEventListener('onclick', function(){
    hideAllItems();
    for(let i=0; i<pantsClothes.length; i++){
        pantsClothes[i].style.display = 'flex';
    }
});

// functions

function addNewItem(){

    const list = document.querySelector('.list');
    const arr = ['t-shirt', 'pants', 'skirt'];

    for(let j=0; j<arr.length; j++){
        for(let i=0; i<5; i++){
            
            const color = randomColor();
            const size = randomSize();
            const newItem = renderItemTemplate(color, size, arr[j]);
    
            list.insertAdjacentHTML('beforeend', newItem);
        }
    }

}

function renderItemTemplate(color, size, item){

    return  `<li class="items ${color} ${item}">
        <img src="imgs/${color}_${item[0]}.png" alt="${item}"/>
        <p>${color} ${item}, ${size} </p>
        </li>`;
}

function randomColor(){
    let randomNumber = Math.floor(Math.random()*3);
    if(randomNumber === 0){
        return 'blue';
    } else  if(randomNumber === 1){
        return 'yellow';
    } else  if(randomNumber === 2){
        return 'pink';
    }
}

function randomSize(){
    let randomNumber = Math.floor(Math.random()*3);
    if(randomNumber === 0){
        return 'small';
    } else  if(randomNumber === 1){
        return 'medium';
    } else  if(randomNumber === 2){
        return 'large';
    }
}

function displayAllItems(){

    for(let i=0; i<blueClothes.length; i++){
        blueClothes[i].style.display = 'flex';
    }
    for(let i=0; i<pinkClothes.length; i++){
        pinkClothes[i].style.display = 'flex';
    }
    for(let i=0; i<yellowClothes.length; i++){
        yellowClothes[i].style.display = 'flex';
    }
}

function hideAllItems(){
    for(let i=0; i<blueClothes.length; i++){
        blueClothes[i].style.display = 'none';
    }
    for(let i=0; i<pinkClothes.length; i++){
        pinkClothes[i].style.display = 'none';
    }
    for(let i=0; i<yellowClothes.length; i++){
        yellowClothes[i].style.display = 'none';
    }
}