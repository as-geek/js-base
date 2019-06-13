//Первое задание
var a = 1, b = 1, c, d;
c = ++a; alert(c);          // 2    Сначала: a=1+1=2, потом: c=a=2 и alert(2)
d = b++; alert(d);          // 1    Сначала: d=b=1 и alert(1), потом b=1+1=2
c = (2 + ++a); alert(c);    // 5    Сначала: a=2+1=3, потом c=2+3=5 и alert(5)
d = (2 + b++); alert(d);    // 4    Сначала: d=2+2=4 и alert(4), потом b=2+1=3
alert(a);                   // 3    Последнее число, записанное в a=3
alert(b);                   // 3    Последнее число, записанное в b=3

//Второе задание
var f = 2;
var x = 1 + (f *= 2);
console.log(x);             // x=5

//Третье задание
var g = -5, h = -10, i;

if (g >= 0 && h >= 0) {
    i = g - h;
    console.log(i);
} else if (g < 0 && h < 0) {
    i = g * h;
    console.log(i);
} else {
    i = g + h;
    console.log(i);
}

//Четвёртое задание
var k = 6;

switch (k) {
    case 0:
        alert('0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15');
        break;
    case 1:
        alert('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15');
        break;
    case 2:
        alert('2 3 4 5 6 7 8 9 10 11 12 13 14 15');
        break;
    case 3:
        alert('3 4 5 6 7 8 9 10 11 12 13 14 15');
        break;
    case 4:
        alert('4 5 6 7 8 9 10 11 12 13 14 15');
        break;
    case 5:
        alert('5 6 7 8 9 10 11 12 13 14 15');
        break;
    case 6:
        alert('6 7 8 9 10 11 12 13 14 15');
        break;
    case 7:
        alert('7 8 9 10 11 12 13 14 15');
        break;
    case 8:
        alert('8 9 10 11 12 13 14 15');
        break;
    case 9:
        alert('9 10 11 12 13 14 15');
        break;
    case 10:
        alert('10 11 12 13 14 15');
        break;
    case 11:
        alert('11 12 13 14 15');
        break;
    case 12:
        alert('12 13 14 15');
        break;
    case 13:
        alert('13 14 15');
        break;
    case 14:
        alert('14 15');
        break;
    default:
        alert('15');
}

//Пятое задание
var m = 10, n = 2, o;

/**
 * Сумма чисел
 * @param {number} m Первое число
 * @param {number} n Второе число
 * @returns {number} Результат сложения
 */
function addition(m, n) {
    return m + n;
}

/**
 * Разность чисел
 * @param {number} m Первое число
 * @param {number} n Второе число
 * @returns {number} Результат вычитания
 */
function subtraction(m, n) {
    return m - n;
}

/**
 * Произведение чисел
 * @param {number} m Первое число
 * @param {number} n Второе число
 * @returns {number} Результат умножения
 */
function multiplication(m, n) {
    return m * n;
}

/**
 * Деление чисел
 * @param {number} m Первое число
 * @param {number} n Второе число
 * @returns {number} Результат деления
 */
function division(m, n) {
    return m / n;
}

o = addition(m, n);
console.log(o);

o = subtraction(m, n);
console.log(o);

o = multiplication(m, n);
console.log(o);

o = division(m, n);
console.log(o);

//Шестое задание
var arg1 = +prompt('Введите первое число');
var arg2 = +prompt('Введите второе число');
var operation = prompt('Введите название операции\nсумма/разность/произведение/деление');
var result;

/**
 * Математическая операция по запросу пользователя
 * @param {number} arg1 Первое число
 * @param {number} arg2 Второе число
 * @param {string} operation Операция
 * @returns {number|string} Результат операции
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'сумма':
            result = addition(arg1, arg2);
            // alert(result);
            break;
        case 'разность':
            result = subtraction(arg1, arg2);
            // alert(result);
            break;
        case 'произведение':
            result = multiplication(arg1, arg2);
            // alert(result);
            break;
        case 'деление':
            result = division(arg1, arg2);
            // alert(result);
            break;
        default:
            result = 'Не понятно';
    }
    return result;
}

mathOperation(arg1, arg2, operation);
alert(result);

//Седьмое задание
/*
null не равно 0, т.к. 0 это число в переменной. А null это когда переменная обнуляется, даже 0 там нет
 */

//Восьмое задание

//Не успел, к сожалению


/*var val;
var pow;

function power(val, pow) {
    if (pow === 1) {
        return 1;
    }

    return val * power(pow-1)
}
*/
