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


//2. Реализовать корзину из урока 3 на базе объектов
console.log(' задание 2 ');

let productBasket = [
    {
        idProductv: 1,
        nameProduct: "iphon12",
        priseProduct: 99000,
        descriptionProduct: "White 256Gb",
    },
    {
        idProductv: 2,
        nameProduct: "iphon11",
        priseProduct: 54000,
        descriptionProduct: "White 128Gb",
    },
    {
        idProductv: 3,
        nameProduct: "iphon10",
        priseProduct: 32000,
        descriptionProduct: "White 128Gb",
    },
];

function countBasketPrice(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; ++i) {
        total += arr[i].priseProduct;
        console.log(' тотвар в массиве ' + i + ' стоимость ' + arr[i].priseProduct);
    }
    return total;
}
console.log(' сумма корзины по товарам '+ countBasketPrice(productBasket));

