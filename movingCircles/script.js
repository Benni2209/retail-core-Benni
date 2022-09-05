'use strict'
let x = window.innerWidth;
let y = window.innerHeight;
let angle;
let idNum;
document.querySelector('Body').style.backgroundColor = "cyan";
//creates a new circle element
const newElement = function (posX, posY, size, speed) {
    idNum = posX;
    const circleHTML = document.createElement("div");
    const content = document.createTextNode('');
    circleHTML.style.cssText = `background-color: rgb(${Math.trunc(Math.random()* 255 + 0)}, ${Math.trunc(Math.random()* 255 + 0)}, ${Math.trunc(Math.random()* 255 + 0) }); border-style: solid; border-radius: 900px; position: absolute; width: ${size}px; height:${size}px; margin-top:${posY}px; margin-left:${posX}px;`;
    circleHTML.appendChild(content);
    document.querySelector("Body").appendChild(circleHTML);
    randomeMovement(circleHTML,posX,posY, size, randomizer(-5, 2))
    hoverAndClickEvent(circleHTML, size);
}
//Controls randomized movement speed, keeps circles in boundary on resize most of the time
const randomeMovement = function (element, posX, posY, size, speed) {
    let speedX = speed;
    let speedY = speed;
    setInterval(function () {
        if(posX >= x-size || posX <=0){
            speedX > 0? speedX = -1 * speedX : speedX = -1 * speedX;
        }
        else if(posY >=y-size || posY <= 0) {
            speedY > 0? speedY = -1 * speedY : speedY = -1 * speedY ;
        }
        element.style.marginLeft = `${posX += speedX}px`}, 10);
    setInterval(function () {
        element.style.marginTop = `${posY += speedY}px`
    }, 10);
    window.addEventListener('resize', function (){
        x = window.innerWidth;
        y = window.innerHeight;
        let indexPxX = element.style.marginLeft.indexOf('px');
        let horizontal = element.style.marginLeft.slice(0, indexPxX);
        let indexPxY = element.style.marginTop.indexOf('px')
        let vertical = element.style.marginTop.slice(0,indexPxY);
        vertical = Number(vertical);
        if(horizontal > x-size) {
            element.style.marginLeft = `${x-size-20}px`
            posX = `${x-size}px`
            return posX;}
        if(vertical > y){
            element.style.marginTop = `${y-size-20}px`
            posY = `${y-size-20}px`
            console.log(posY);
            return posY;
        }
    });
}
//Handles clicking and hovering
const hoverAndClickEvent = function (element, size){
    element.addEventListener('mouseover', function() {
        element.style.width = `${size + 20}px`
        element.style.height = `${size + 20}px`
        element.style.backgroundSize = `${size + 20}px`
    })
    element.addEventListener('mouseout', function() {
        element.style.width = `${size-20}px`
        element.style.height = `${size-20}px`
        element.style.backgroundSize = `${size - 20}px`
    })
    element.addEventListener('click', function() {
        element.style.backgroundImage = "url('Screenshot from 2022-09-05 11-21-29.png')"
        element.style.backgroundPosition = "center"
        element.style.backgroundRepeat = "no-repeat"
        element.style.backgroundSize = `${size}px`
    })
}
//returns a randome number that isn't 0
const randomizer  = function (max, min){
    let random = Math.trunc(Math.random()* max + min);
    if (random === 0){
        if (max < 0) {
            return random + Math.trunc(Math.random()* max + -1);
        }
        else {
            return random + Math.trunc(Math.random()* max + 1);
        }
    }
    else {
        return random;
    }
}
//controls how many circles are going to be created
const objects = prompt('How many circles?');
const createElements = function(numPrompt){
    let elementArray = []
    for(let i = 0; i < numPrompt; i++) {
        elementArray[i] = newElement(randomizer(x - 400,1), randomizer(y - 400,1),randomizer(400,1), randomizer(5,1));
    }
}
createElements(objects);
