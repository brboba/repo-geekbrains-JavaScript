"use strict";

//задание 1 

let tc = prompt('Веедите значениее температуры в градусах цельсия')*1;
//tc переменная для хранеения значения температтуры в градусах ЦЕЛЬСИЯ
//tf переменная для хранеения значения температтуры в градусах ФАРИНГЕЙТТА

// функция преобразования значения градусов цеельсия в фарингейт
function transferTemperatur(temperatureC) {
    let tf = (9 / 5) * temperatureC + 32;
    return temperatureC + ' градусов цельсия будет равно ' + tf + ' градусов фаренгейта ';  
}

alert(transferTemperatur(tc)); // вызываем функцию 
console.log(' задание 1 ');
console.log(transferTemperatur(tc)); // отоброжаем в консоле результаты


//задание 2

let name = prompt('Веедите имя админа');

function textAdmin(name) {
    let admin = name;
    return ' admin – ' + admin;  
}

alert(textAdmin(name)); // вызываем функцию 
console.log(' задание 2 ');
console.log(textAdmin(name)); // отоброжаем в консоле результаты;*/

//задание 3

let n108="108";
alert(1008 + n108); // вызываем функцию окошком
console.log(' задание 3 ');
console.log(1008 + n108); // отоброжаем в консоле результаты;