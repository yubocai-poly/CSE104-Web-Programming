"use strict";

document.onmousemove = function(event) {
    let x = event.clientX - 40;
    let y = event.clientY - 40;

    const mouse = document.querySelector(".mouse");
    mouse.style.transform = `translate(${x}px, ${y}px)`;
}

let color = ['green', 'red', 'yellow'];
let index = 0;
let remainder = 0;

document.addEventListener("keyup", keyenter)

function keyenter(event) {
    if (event.keyCode == 13) {
        index += 1;
        remainder = index % 3
        const mouse = document.querySelector(".mouse");
        mouse.style.backgroundColor = color[remainder];
    }
}