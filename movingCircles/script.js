'use strict'
let x = window.innerWidth;
let y = window.innerHeight;
const z = 400;
const k = 20
document.querySelector('Body').style.backgroundColor = "cyan";

//gives out a prompt which asks for num of elements that are created
const objects = prompt('How many circles?');

/**
 * @param numPrompt makes putting in the prompt possible
 * Applies the randomizer to the element in order to randomize all its aspects, so position at start, speed, size etc.
 */

function createElements (numPrompt){
    const elementArray = []
    for(let i = 0; i < numPrompt; i++) {
        elementArray[i] = newElement(randomizer(x - z,1), randomizer(y - z,1),randomizer(z,1), randomizer(5,1));
    }
}

/**
 * creates a new html div element, which is placed at a randome location by cssText
 * @param posX explained below
 * @param posY explained below
 * @param size explained below
 * @param speed explained below
 */

createElements(objects);
function newElement (posX, posY, size, speed) {
    const circleHTML = document.createElement("div");
    const content = document.createTextNode('');
    circleHTML.style.cssText =
        `background-color: rgb(${Math.trunc(Math.random()* 255 + 0)}, 
        ${Math.trunc(Math.random()* 255 + 0)}, 
        ${Math.trunc(Math.random()* 255 + 0) }); 
        border-style: solid; 
        border-radius: 900px; 
        position: absolute; 
        width: ${size}px; 
        height:${size}px; 
        margin-top:${posY}px; 
        margin-left:${posX}px;`;
    circleHTML.appendChild(content);
    document.querySelector("Body").appendChild(circleHTML);
    randomeMovement(circleHTML,posX,posY, size, randomizer(-5, 2))
    hoverAndClickEvent(circleHTML, size);
}

/**
 * Controls the movement of each circle via intervals set to a certain tickrate(i think)
 * @param element is the html element created
 * @param posX randome starting position on x axis
 * @param posY same as above but on y axis, both are used to check whether the circles are still in window boundary and will bounce then back on the edge
 * @param size makes sure the the bounceback happens exactly as the ball reaches the edge
 * @param speed randome speed value which will be inverted as soon as the edge is reached
 */

function randomeMovement (element, posX, posY, size, speed) {
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
            element.style.marginLeft = `${x-size-k}px`
            posX = `${x-size}px`
            return posX;}
        if(vertical > y){
            element.style.marginTop = `${y-size-k}px`
            posY = `${y-size-20}px`
            console.log(posY);
            return posY;
        }
    });
}

/**
 *
 * @param element is the circle, to which hovering and clicking is applied
 * @param size is used to increase and decrease the width of the circle upon hovering
 * The function handles the actions of hovering and clicking the circle. The picture is applied on click with the event listener.
 * Same goes for the resize with mouseover and mouseout.
 */

function hoverAndClickEvent(element, size){
    element.addEventListener('mouseover', function() {
        element.style.width = `${size + k}px`
        element.style.height = `${size + k}px`
        element.style.backgroundSize = `${size + k}px`
    })
    element.addEventListener('mouseout', function() {
        element.style.width = `${size-k}px`
        element.style.height = `${size-k}px`
        element.style.backgroundSize = `${size - k}px`
    })
    element.addEventListener('click', function() {
        element.style.backgroundImage = "url('Screenshot from 2022-09-05 11-21-29.png')"
        element.style.backgroundPosition = "center"
        element.style.backgroundRepeat = "no-repeat"
        element.style.backgroundSize = `${size}px`
    })
}

/**
 *
 * @param max highest random number possible
 * @param min smallest random number possible
 * @returns {number} returns a randome number that isn't 0.
 * The number is supposed to be between 1 and the max value or between -1 and a set min value.
 */

function randomizer (max, min){
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


