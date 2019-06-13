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

/**
 * Функция (+ - *) в зависимости от введённых данных
 * @param {number} g Первое число
 * @param {number} h Второе число
 * @returns {number} Результат
 */
function calculation(g, h) {
    if (g >= 0 && h >= 0) {
        return  g - h;
    } else if (g < 0 && h < 0) {
        return g * h;
    } else {
        return  g + h;
    }
}

alert(calculation(5, 10));
alert(calculation(-5, -10));
alert(calculation(5, -10));
alert(calculation(0, 0));

//Четвёртое задание
var k = 6;

switch (k) {
    case 0:
        console.log('0');
    case 1:
        console.log('1');
    case 2:
        console.log('2');
    case 3:
        console.log('3');
    case 4:
        console.log('4');
    case 5:
        console.log('5');
    case 6:
        console.log('6');
    case 7:
        console.log('7');
    case 8:
        console.log('8');
    case 9:
        console.log('9');
    case 10:
        console.log('10');
    case 11:
        console.log('11');
    case 12:
        console.log('12');
    case 13:
        console.log('13');
    case 14:
        console.log('14');
    default:
        console.log('15');
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
            break;
        case 'разность':
            result = subtraction(arg1, arg2);
            break;
        case 'произведение':
            result = multiplication(arg1, arg2);
            break;
        case 'деление':
            result = division(arg1, arg2);
            break;
        default:
            result = 'Не понятно';
    }
    return result;
}

alert(mathOperation(arg1, arg2, operation));

//Седьмое задание
/*
null не равно 0, т.к. 0 это число в переменной. А null это когда переменная обнуляется, даже 0 там нет
 */

//Восьмое задание

/**
 * Функция возведения в степень
 * @param {number} val Число
 * @param {number} pow Степень
 * @returns {number} Результат возведения в степень
 */
function power(val, pow) {
    if (pow <= 0) {
        return 1;
    }

    if (pow === 1) {
        return val;
    }

    return val * power(val, pow - 1);
}

console.log(power(10, 2));
