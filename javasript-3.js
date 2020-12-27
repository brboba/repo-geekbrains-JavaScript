"use strict";

//lesson 3

//задание - 1


    
//задание - 8
//*С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.
console.log(' задание 8 ');

let p81 = prompt('введите число кототрое будет возведено в степень');
let p82 = prompt('введите степень в кототрую хотите возвестти число');

// 2 2*2 2*2*2 2*2*2*2
function power(val, pow){
    if (pow == 1){
        return val;
        }
    else {
    return val * power(val, pow - 1);
    }
}
console.log(p81 + ' в степени ' + p82 + ' = ' + power(p81, p82));
