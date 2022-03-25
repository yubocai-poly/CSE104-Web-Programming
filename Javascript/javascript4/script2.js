"use strict";

const box = document.querySelectorAll(".Box");

for (let k = 0; k < box.length; k++) {
    const element = box[k];
    // use element here ...
    element.addEventListener('click', clickOnBox)
}

function clickOnBox(event) {
    const element = event.currentTarget;
    const newElement = document.createElement("div");
    element.textContent = 'Selected' + "\n" + element.id;
}