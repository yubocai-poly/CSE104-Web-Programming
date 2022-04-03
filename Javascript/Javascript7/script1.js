"use strict";

const box = document.querySelector(".Box");
document.addEventListener("keydown", KeyDown);

function KeyDown(event) {
    box.textContent += 'bala bala' + "\r"
}
// document.onkeydown = keyDown;