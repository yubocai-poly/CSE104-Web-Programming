"use strict";


const click = document.querySelector('.selectable');
click.addEventListener('click', click_copy);

function click_copy(event) {
    //先去给.brick selectable去除click事件
    click.removeEventListener('click', click_copy);
    //再去给.brick selectable去除selectable的class
    click.classList.remove('selectable');

    //开始创造新的div，添加到.wrapper中
    const newElement = document.createElement('div');
    newElement.classList.add('brick');
    newElement.classList.add('selectable');
    // JavaScript代码有顺序性，所以这里要先把newElement添加到body中，再把newElement添加到wrapper中
    newElement.addEventListener('click', click_copy);
    document.querySelector('.wrapper-brick').appendChild(newElement);

    click = newElement;


}