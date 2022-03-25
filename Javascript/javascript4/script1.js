"use strict";

const box1 = document.querySelector("#Box1");
const box2 = document.querySelector("#Box2");
const box3 = document.querySelector("#Box3");

box1.addEventListener("click", clickOnBox);
box2.addEventListener("click", clickOnBox);
box3.addEventListener("click", clickOnBox);

function clickOnBox(event) {
    const element = event.currentTarget;
    const newElement = document.createElement("div");
    element.textContent = 'Selected' + "\n" + element.id;
}