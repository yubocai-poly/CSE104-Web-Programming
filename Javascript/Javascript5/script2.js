"use strict";

// 改变box长度
const width1 = document.querySelector(".box");
const len_changer = document.querySelector("#length");
len_changer.addEventListener("input", getWidth);

function getWidth(event) {
    const width_number = document.querySelector("#length");
    width1.style.width = width_number.value + "%";
}

// 改变色彩
const color = document.querySelector(".box");
const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
color1.addEventListener("input", getColor);
color2.addEventListener("input", getColor);

function getColor(event) {
    color.style.background = `linear-gradient(45deg, ${color1.value}, ${color2.value})`;
}