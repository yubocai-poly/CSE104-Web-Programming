const title_red = document.querySelector('.red');
title_red.addEventListener('click', actionClicked_red);

function actionClicked_red(event) {
    // Create a new element
    const newElement = document.createElement('p');
    newElement.textContent = 'Red !';

    // Add new element in the DOM
    const article = document.querySelector('body');
    article.appendChild(newElement);
}

const title_yellow = document.querySelector('.yellow');
title_yellow.addEventListener('click', actionClicked_yellow);

function actionClicked_yellow(event) {
    // Create a new element
    const newElement = document.createElement('p');
    newElement.textContent = 'Yellow !';

    // Add new element in the DOM
    const article = document.querySelector('body');
    article.appendChild(newElement);
}