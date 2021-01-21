// Navbar buttons
let blue = document.getElementById('blue');
let yellow = document.getElementById('yellow');
let pink = document.getElementById('pink');
let tshirt = document.getElementById('tshirt');
let skirt = document.getElementById('skirt');
let pants = document.getElementById('pants');

// Clothes by color
let blueClothes = document.getElementsByClassName('blue');
let pinkClothes = document.getElementsByClassName('pink');
let yellowClothes = document.getElementsByClassName('yellow');

// Clothes by type
let tshirtClothes = document.getElementsByClassName('tshirt');
let pantsClothes = document.getElementsByClassName('pants');
let skirtClothes = document.getElementsByClassName('skirt');

// functions

addNewItem();

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



// logo
let logo = document.getElementById('logo');


// Click logo
logo.onclick = function(){

    for(let i=0; i<yellowClothes.length; i++){
        blueClothes[i].style.display = 'flex';
    }
    for(let i=0; i<yellowClothes.length; i++){
        pinkClothes[i].style.display = 'flex';
    }
    for(let i=0; i<yellowClothes.length; i++){
        yellowClothes[i].style.display = 'flex';
    }
}


// Filtering by color
blue.onclick = function(){

    for(let i=0; i<yellowClothes.length; i++){
        blueClothes[i].style.display = 'flex';
    }
    for(let i=0; i<pinkClothes.length; i++){
        pinkClothes[i].style.display = 'none';
    }
    for(let i=0; i<yellowClothes.length; i++){
        yellowClothes[i].style.display = 'none';
    }
}

pink.onclick = function(){
    
    for(let i=0; i<pinkClothes.length; i++){
        blueClothes[i].style.display = 'none';
    }
    for(let i=0; i<yellowClothes.length; i++){
        pinkClothes[i].style.display = 'flex';
    }
    for(let i=0; i<yellowClothes.length; i++){
        yellowClothes[i].style.display = 'none';
    }
}

yellow.onclick = function(){

    for(let i=0; i<pinkClothes.length; i++){
        blueClothes[i].style.display = 'none';
    }
    for(let i=0; i<yellowClothes.length; i++){
        pinkClothes[i].style.display = 'none';
    }
    for(let i=0; i<yellowClothes.length; i++){
        yellowClothes[i].style.display = 'flex';
    }
}



// Filtering by type
tshirt.onclick = function(){

    for(let i=0; i<yellowClothes.length; i++){
        tshirtClothes[i].style.display = 'flex';
    }
    for(let i=0; i<pinkClothes.length; i++){
        skirtClothes[i].style.display = 'none';
    }
    for(let i=0; i<yellowClothes.length; i++){
        pantsClothes[i].style.display = 'none';
    }
}

skirt.onclick = function(){

    for(let i=0; i<yellowClothes.length; i++){
        tshirtClothes[i].style.display = 'none';
    }
    for(let i=0; i<pinkClothes.length; i++){
        skirtClothes[i].style.display = 'flex';
    }
    for(let i=0; i<yellowClothes.length; i++){
        pantsClothes[i].style.display = 'none';
    }
}

pants.onclick = function(){

    for(let i=0; i<yellowClothes.length; i++){
        tshirtClothes[i].style.display = 'none';
    }
    for(let i=0; i<pinkClothes.length; i++){
        skirtClothes[i].style.display = 'none';
    }
    for(let i=0; i<yellowClothes.length; i++){
        pantsClothes[i].style.display = 'flex';
    }
}
