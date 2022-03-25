const title = document.querySelector('img');
title.addEventListener('click', actionClicked);
let k = 0;

function actionClicked(event) {
    k += 1;
    if (k % 2 == 1) {
        title.src = "pic_02.jpeg"
    } else {
        title.src = "pic_01.jpeg"
    }
}