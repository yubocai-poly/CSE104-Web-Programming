"use strict";

const img = document.querySelectorAll("img");

for (let k = 0; k < img.length; k++) {
    const element = img[k];
    // use element here ...
    element.addEventListener('click', actionClicked_img);
}

let result_array = []

function actionClicked_img(event) {
    const element = event.currentTarget;
    const result = document.querySelector(".result");
    if (result_array.length == 0) {
        result_array.push('You clicked on a ' + element.id);
    } else {
        result_array.push(' and then on a ' + element.id)
    }
    result.textContent = result_array
}

function actionClicked_button(event) {
    const button = document.querySelector(".cancel")
    let result_array = []
    result.textContent = result_array
}