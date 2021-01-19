// Buttons
let blue = document.getElementById('blue');
let yellow = document.getElementById('yellow');
let pink = document.getElementById('pink');

// Clothes
let blueClothes = document.getElementsByClassName('blue');
let pinkClothes = document.getElementsByClassName('pink');
let yellowClothes = document.getElementsByClassName('yellow');


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
