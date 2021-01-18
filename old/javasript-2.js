"use strict";

//lesson 2

//задание - 1

//var a = 1, b = 1, c, d;

//c = ++a; alert(c);      // 2 
//в пееременнную "с" записывается значенние переменной "а" после ++a,что равноуенно записи a = a + 1 = 2;

//d = b++; alert(d);      // 1
// Использована постфиксной форма сначала происходит возвращение значения (1), а потом выполняется инкрементирование, по результату d = 1; b = 2;

//c = (2+ ++a); alert(c);      // 5
// переменная а равнялась уже 2, после ++a возвшается значение 3, и как результат значениее выражения 5, а перееменная "а" равна 3;
// 

//d = (2+ b++); alert(d);      // 4
// Использована постфиксной форма сначала происходит возвращение значения (2), а потом выполняется сложение, по результату d = 4; b = 3;

//alert(a);      // 3
// в "1" и "3" выражеенниее использовалось ++a, изначально a=1, после двух итераций ++a, "а" будет равно 3;

//alert(b);                    // 3
// в "2" и "4" выражеенниее использовалось b++, изначально b=1, после двух итераций b++, "b" будет равно 3;


//задание - 2

//alert('Задание – 2');
let a = 2;
let x = 1 + (a *= 2); // эквивалентно a = a * 2; x = 1 + a; итого 5
console.log(' задание 2 ');
console.log(x);

//задание - 3

alert('Задание – 3');
let p1 = Number(prompt('введите любое число'));
let p2 = Number(prompt('введите второе любое число'));

//если a и b положительные, вывести их разность;
if (p1>=0 && p2>=0) {
    alert(p1-p2);
};
//если а и b отрицательные, вывести их произведение;
if (p1<0 && p2<0) {
    alert(p1*p2);
};
//если а и b разных знаков, вывести их сумму;
if (p1<0 && p2>=0 || p1>=0 && p2<0) {
    alert(p1+p2);
};
//ноль можно считать положительным числом.

//задание - 4
//Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
console.log(' задание 4 ');
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
};

let p3 = getRandomIntInclusive(0, 15);
console.log('значение переменной ' + p3);

switch (p3){
    case 0:
        console.log('0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15');
        break;
    case 1:
        console.log('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15');
        break;
    case 2:
        console.log('3 4 5 6 7 8 9 10 11 12 13 14 15');
        break;
    case 3:
        console.log('4 5 6 7 8 9 10 11 12 13 14 15');
        break;
    case 4:
        console.log('5 6 7 8 9 10 11 12 13 14 15');
        break;
    case 5:
        console.log('6 7 8 9 10 11 12 13 14 15');
        break;
    case 6:
        console.log('7 8 9 10 11 12 13 14 15');
        break;
    case 7:
        console.log('7 8 9 10 11 12 13 14 15');
        break;
    case 8:
        console.log('8 9 10 11 12 13 14 15');
        break;
    case 9:
        console.log('9 10 11 12 13 14 15');
        break;
    case 10:
        console.log('10 11 12 13 14 15');
        break;
    case 11:
        console.log('11 12 13 14 15');
        break;
    case 12:
        console.log('12 13 14 15');
        break;
    case 13:
        console.log('13 14 15');
        break;
    case 14:
        console.log('14 15');
        break;
    case 15:
        console.log('15');
        break;
        
    default:
        console.log('конец switch');
}//надеюсь что все правильно понял

//задание - 5
//Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
console.log(' задание 5 ');

function OperationSum(arg1, arg2){
    return arg1 + arg2;
}
function OperationDeduction(arg1, arg2){
    return arg1 - arg2;
}
function OperationMultiply(arg1, arg2){
    return arg1 * arg2;
}
function OperationSplit(arg1, arg2){
    return arg1 / arg2;
}

let p51=OperationSum(p1, p2);
let p52=OperationDeduction(p1, p2);
let p53=OperationMultiply(p1, p2);
let p54=OperationSplit(p1, p2);

console.log('переменная 1 – ' + p1 + ' переменная 2 – ' + p2);
console.log('операци сложения ' + p51);
console.log('операци вычитания ' + p52);
console.log('операци умножения ' + p53);
if (p2 != 0) {
    console.log('операци деления ' + p54);
}
if (p2 == 0) {
    console.log('делениее на ноль!');
}
    
//задание - 6
//Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).
console.log(' задание 6 ');

let p6 = prompt('выберите операцию которую хотите произвести 1 - сложение; 2 - вычитание; 3 - умножение; 4 - деление');

function mathOperation(arg1, arg2, operation){
        switch (operation){
            case 1:
                    return ar1 + arg2;
                    break;
            case 2:
                    return ar1 - arg2;
                    break;
            case 3:
                    return ar1 * arg2;
                    break;
            case 4:
                    return ar1 / arg2;
                    break;
            default:
                    'оператор был не верно определен';
        }
     }

let p61=OperationSum(p1, p2, p6);

console.log('переменная 1 – ' + p1 + ' переменная 2 – ' + p2 + ' действие выбрано ' + p6);
console.log('результат ' + p61);

//задание - 7
//*Сравнить null и 0. Попробуйте объяснить результат.
console.log(' задание 7 ');

console.log( null > 0 );  // (1) false
console.log( null == 0 ); // (2) false
console.log( null >= 0 ); // (3) true

//Причина в том, что нестрогое равенство и сравнения > < >= <= работают по-разному. Сравнения преобразуют null в число, рассматривая его как 0. Поэтому выражение (3) null >= 0 истинно, а null > 0 ложно.
    
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

//end;
