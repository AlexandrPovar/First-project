"use strict";

// let str = "some";
// let strObj = new String(str);  //такая конструкция не используется

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1, 2, 3]);


const soldier = {
    healht: 400,
    armor: 100,
    sayHello: function () {
        console.log("Hello!");
    }
};

const jonh = Object.create(soldier)

const jonh = {
    health: 100,
};

jonh.__proto__ = soldier;// устаревший формат

Object.setPrototypeOf(jonh, soldier);

// console.log(jonh.armor);
jonh.sayHello();





