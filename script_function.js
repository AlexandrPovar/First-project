"use strict";

let num = 20;  //Глобальная переменная

function showFirstMessage (text) {
    console.log(text);
    let num = 10;  //Локальная переменная
}

showFirstMessage ("Hello World!");
console.log(num);
 

function calc (a, b) {
    return (a + b);
}

console.log(calc(4, 3));