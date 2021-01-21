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

// function
function addItem(event){
    const item = event.target.id;
    const list = document.querySelector('.list');

    list.insertAdjacentHTML('beforeend', renderItemTemplate(item));

}

function renderItemTemplate(item){
    return  `<li class="items pink ${item}">
    <img src="imgs/pink_t.png" alt="${item}"/>
    <p>pink ${item}, small </p>
    </li>`
}

function randomColor(){
    
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
