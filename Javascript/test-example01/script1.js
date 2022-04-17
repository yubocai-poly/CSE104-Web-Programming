"use strict";

const colorElement = document.querySelector('#colorElement');

const N = 50;
for (let k = 0; k < N; k++) {
    const newElement = document.createElement('div');
    newElement.classList.add('box');
    newElement.classList.add('selectable');
    newElement.style.backgroundColor = 'red';
    document.querySelector('body').appendChild(newElement);
    newElement.addEventListener('click', action);
}


function action(event) {
    let elementStyle = event.currentTarget.style;
    if (elementStyle.backgroundColor == 'red') {
        elementStyle.backgroundColor = colorElement.value;
    } else {
        elementStyle.backgroundColor = 'red';
    }
}