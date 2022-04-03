"use strict";

// Button
let contents = []

const button = document.querySelector("#button");
button.addEventListener('click', buttonClicked);
button.addEventListener('click', buttonClicked_text);

function buttonClicked(event) {
    console.log('clicked');
}

// Text entry
const textEntry = document.querySelector("#textEntry");
textEntry.addEventListener('change', textModified);

function textModified(event) {
    console.log('text modified into ', textEntry.value);
}

// showing contents when clicks the button
function buttonClicked_text(event) {
    const element = document.querySelector("p");
    element.textContent = "You typed the following text: " + textEntry.value;
}