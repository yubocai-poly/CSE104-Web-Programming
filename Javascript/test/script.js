"use strict";

const colorElement = document.querySelector('#colorElement');
const ani = document.querySelector(".animate")
ani.addEventListener("click", animation)


//create 12*12 matrix
const N = 12;
for (let j = 0; j < N; j++) {
    for (let k = 0; k < N; k++) {
        const newElement = document.createElement('div');
        newElement.classList.add('box');
        newElement.classList.add('selectable');
        document.querySelector('.result').appendChild(newElement);
        // add function
        newElement.addEventListener('click', action_color);
    }
    const newElement = document.createElement('br');
    document.querySelector('.result').appendChild(newElement);
}

function action_color(event) {
    let elementStyle = event.currentTarget.style;
    elementStyle.backgroundColor = colorElement.value;
    // remove this function of those be selected
    event.currentTarget.removeEventListener('click', action_color);
    // remove class selectable
    event.currentTarget.classList.remove('selectable');

}

const start = document.querySelector(".animate");
start.addEventListener("click", start_animation);

function start_animation(event) {
    start.textContent = "Stop Animation!";
    start.removeEventListener("click", start_animation);
    start.addEventListener("click", stop_animation);
}

function stop_animation(event) {
    start.textContent = "Animate Random Colors!!";

}

function animation(event) {
    requestAnimationFrame(frame);

}

function frame(currentTime) {
    const pixels = document.querySelectorAll(".box");

    let index = Math.floor(Math.random() * pixels.length);
    let color1 = Math.floor(Math.random() * 256);
    let color2 = Math.floor(Math.random() * 256);
    let color3 = Math.floor(Math.random() * 256);
    pixels[index].style.backgroundColor = `rgb(${color1},${color2},${color3})`;
    requestAnimationFrame(frame);


}