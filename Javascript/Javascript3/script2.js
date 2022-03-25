const title_circle = document.querySelector('.click_circle');
title_circle.addEventListener('click', actionClicked_circle);

function actionClicked_circle(event) {
    const element = document.querySelector('div');
    element.classList.add("circle");
}

const title_square = document.querySelector('.click_square');
title_square.addEventListener('click', actionClicked_square);

function actionClicked_square(event) {
    const element = document.querySelector('div');
    element.classList.remove("circle");
}

const title_red = document.querySelector('.click_red');
title_red.addEventListener('click', actionClicked_red);

function actionClicked_red(event) {
    const element = document.querySelector('div');
    element.classList.remove("yellow");
    element.classList.add("red");
}

const title_yellow = document.querySelector('.click_yellow');
title_yellow.addEventListener('click', actionClicked_yellow);

function actionClicked_yellow(event) {
    const element = document.querySelector('div');
    element.classList.remove("red");
    element.classList.add("yellow");
}