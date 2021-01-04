"use strict";

//lesson 3


//задание - 1
//1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
console.log(' задание 1 ');

//let inputNumber = prompt('Введите число от 0 до 999');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

let inputNumber = getRandomIntInclusive(0, 1509);
console.log(inputNumber);

let digit = {
    number: inputNumber
};

if (inputNumber <= 999) {
    getObject(digit);
} else {
    delete digit.number;
    console.log(' загаданное число большее 999 – ');
    console.log(digit);    
}

function getObject(numberToObject) {
    console.log(digit);
    
    digit.units = Math.floor(digit.number % 10);
    console.log(' еденицы – ' + digit.units);
    digit.tens = Math.floor(digit.number / 10 % 10);
    console.log(' десятки – ' + digit.tens);
    digit.hundreds = Math.floor(digit.number / 100 % 10);
    console.log(' сотнни – ' + digit.hundreds);

    console.log(digit);
}


//2. Для игры, реализованной на уроке, добавить возможность вывода хода номер n (номер задается пользователем)
//console.log(' задание 2 ');



//3. *На базе игры, созданной на уроке, реализовать игру «Кто хочет стать миллионером?»
//console.log(' задание 3 ');
