"use strict";

//lesson 3


//задание - 1
//С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
console.log(' задание 1 ');

let p1 = 0;
while (p1 <= 100) {
    let i = 2;
    let flag = true;
    while (flag && p1 > i) {
        if (p1 % i == 0) {
            flag = false;
        }
        i++;
    }
    if (flag && p1 > 1) {
        console.log('простоте число - ' + p1);
    }
    p1++;
}

//задание - 2
//С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
console.log(' задание 2 ');

let productPrise = []; // массив для хранение цен товара
productPrise[0] = 0; //в первом элементе массива в последствие сохраним сумму корзины, наверное такая себе идея, но пока сложим сюда

// испольльзуем функцию рандома для присвоения ценииков товару в масcиве
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и //минимум включаются
}

//присвоем цены 5 товарам
for (let i = 1; i <= 5; i++) {
    productPrise[i] = getRandomIntInclusive(200, 1500);
    console.log('Номер товара ' + i);
    console.log('Ценна товара ' + productPrise[i]);
}

for (let i = 1; i < productPrise.length; i++) {
    productPrise[0] = productPrise[0] + productPrise[i];
}

console.log('Итого в сумма корзины - ' + productPrise[0]);


//задание - 3
//Товары в корзине хранятся в массиве. Задачи:
//a) Организовать такой массив для хранения товаров в корзине;
//b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

console.log(' задание 3 ');

// часть а сдеелана в заданиее 2 тут часть б


function countBasketPrice(arr) {
    for( let i = 1; i < arr.length; ++i) {
        productPrise[0] = productPrise[0] + productPrise[i];
    }
}

productPrise [0] = 0;
countBasketPrice(productPrise);
console.log('Итого задание 3 сумма корзины - ' + productPrise[0]);

//задание - 4
//4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:for(…){// здесь пусто}

console.log(' задание 4 ');
for (let i = 0; i <= 9; console.log(i++));

//задание - 5
//5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
//x
//xx
//xxx
//xxxx
//xxxxx

console.log(' задание 5 ');

let textX = [];
textX[0] = 'x';
for (let i = 0; i <= 20; i++) {
    textX[i + 1] = textX[i] + 'x';
    console.log(textX[i]);
}
