"use strict";

const boxElement = document.querySelector(".box");
let leftPos = 0;

requestAnimationFrame(animationLoop)
    // 这个函数被 requestAnimationFrame 调用，每一帧都会调用这个函数

// This function is continuously called by requestAnimationFrame
function animationLoop(currentTime) {

    boxElement.style.left = `${leftPos}px`;
    leftPos = leftPos + 1;

    if (currentTime > 2000) // after the webpage run 2s
    {
        boxElement.style.backgroundColor = "green";
    }
    if (currentTime > 4000) // after the webpage run 4s
    {
        boxElement.style.backgroundColor = "yellow";
        boxElement.style.width = "200px";
        boxElement.textContent = "Animated in JavaScript!";
    }

    requestAnimationFrame(animationLoop);
}