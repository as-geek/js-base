//Первое задание

/**
 * Функция вывода простых чисел
 * @param {number} maxNumber Максимальное число, до которого выводить
 * @returns {Array} Массив простых чисел
 */
function primeNumber(maxNumber) {
    var arrPrimeNumber = [];
    var i = 0;
    while (i < maxNumber) {
        if (selectionNumbers(i) === true) {
            arrPrimeNumber.push(i)
        }
        i++;
    }
    return arrPrimeNumber;
}

/**
 * Функция подбора чисел
 * @param {number} number Число для проверки
 * @returns {boolean} True или false
 */
function selectionNumbers(number) {
    if (number < 2) {
        return false;
    }
    var denom = 2;
    while (denom < number) {
        if (number % denom === 0) {
            return false;
        }
        denom++;
    }
    return true;
}

primeNumber(100);
console.log(primeNumber(100));

//Второе задание
var arr = [
    ['Футболка', 1000, 3],
    ['Штаны', 1500, 1],
    ['Обувь', 800, 5]
];

/**
 * Функция подсчета стоимости корзины
 * @param {string|number} arr Массив данных (наименование, цена, колличество)
 * @returns {number} Сумма всех товаров
 */
function countBasketPrice(arr) {
    var arrTotal = [];
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        var total = arr[i][1] * arr[i][2];
        arrTotal.push(total);
        sum += arrTotal[i];
    }
    return sum;
}

console.log(countBasketPrice(arr));

//Третье задание
for (var i = 0; i < 10; console.log(i), i++);

//Четвёртое задание
var text = '';

for (var i = 0; i < 20; i++) {
    text += 'x';
    console.log(text);
}