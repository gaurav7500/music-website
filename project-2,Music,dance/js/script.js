

"use strict"

function opneMenu() {
    let MyMenu = document.getElementById('MyMenu');
    MyMenu.classList.toggle("on")
}
function show() {

    let x = document.getElementById('form');
    let y = document.querySelector('.fa.sp2');
    x.classList.toggle("toggle-form");
    y.style = "opacity:0;"
}

function readmore() {
    let read = document.getElementById('read_more');
    let para = document.getElementById('demo');
    para.style = `height: auto;`;
    console.log(para);
}

function readmore2() {
    let read = document.getElementById('read_more');
    let para2 = document.getElementById('demo2');
    para2.style = `height: auto;`;
    console.log(para2);
}

let register =  document.getElementById('reg');
let btn = document.getElementById('form_reg');

register.addEventListener('click',()=>{
btn.style =`display: block`;
})