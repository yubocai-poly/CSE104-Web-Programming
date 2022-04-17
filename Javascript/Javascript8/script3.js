"use strict";

const radius = 50; // Radius of the circle
let y = 0; // height (/vertical) of the circle within the viewport
let circleElement = document.querySelector('.circle');
let currentTime1 = performance.now();
let circle_set = [];

main();

function main() {
    document.addEventListener('click', createCircle);
}

function createCircle(event) {
    const x = event.clientX;
    y = event.clientY;
    circleElement.style.top = `${y-radius}px`;
    circleElement.style.left = `${x-radius}px`;

    currentTime1 = performance.now();
    // 创建一个新的div圆，class为circle
    let new_circle = document.createElement('div');
    new_circle.className = 'circle';
    // 把这个圆加入到HTML中
    document.body.appendChild(new_circle);
    // 创建一个新的圆的动画
    // 在这个圆的动画中，每一帧都会调用frame函数
    circle_set.push(new_circle);


    requestAnimationFrame(frame);
}


function frame(currentTime) {
    // 对于每一个circle_set中的圆，都调用frame函数
    for (let i = 0; i < circle_set.length; i++) {
        let circle = circle_set[i];
        //对circle调用frame函数

        // 如果这个圆的动画已经结束，就删除这个圆
        if (currentTime - currentTime1 > 2000) {
            circle.remove();
        }
    }
    let y1 = y + (currentTime - currentTime1) * 0.1;
    circleElement.style.top = `${y1-radius}px`;
    requestAnimationFrame(frame);
}