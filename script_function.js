"use strict";

let num = 20;  //Глобальная переменная

function showFirstMessage (text) {
    console.log(text);
    let num = 10;  //Локальная переменная
}

showFirstMessage ("Hello World!");
console.log(num);

// function calc (a, b) {
//     return (a + b);  //после return код фукнкции уже не читается.
// }

// console.log(calc(4, 3));
// console.log(calc(6, 2));

function ret() {
    let num = 50;

    //



    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
console.log("Hello!");
};

logger();

const calc = (a, b) => {
    console.log("1");
    return a + b;
}