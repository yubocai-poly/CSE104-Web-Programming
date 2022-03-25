const title1 = document.querySelector('h1');
title1.addEventListener('click', actionClicked1);

function actionClicked1(event) {
    const element = document.querySelector('div');
    element.classList.remove("square");
    element.classList.add("circle");
}