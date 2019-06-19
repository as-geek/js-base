//Первое задание

/**
 * Функция, преобразующая число в объект
 * @param {number} number Введённое число
 * @returns {object} Полученный объект
 */
function numberToObj(number) {
    if (isNaN(number) || number < 0 || number > 999) {
        console.log('Введите число от 0 до 999');
        return {};
    }

    var obj = {};
    obj.units = number % 10;
    obj.tens = (Math.floor(number / 10)) % 10;
    obj.hundreds = Math.floor(number / 100);

    return obj;
}

console.log(numberToObj(123));
console.log(numberToObj(987));
console.log(numberToObj(1000));
console.log(numberToObj(1));
console.log(numberToObj(50));
console.log(numberToObj(-777));
console.log(numberToObj('dhf'));

//Второе задание
var cart = [
    {
        name: 'Футболка',
        price: 1000,
        quantity: 3,
        count: countBasketPrice,
    },
    {
        name: 'Штаны',
        price: 1500,
        quantity: 1,
        count: countBasketPrice,
    },
    {
        name: 'Обувь',
        price: 800,
        quantity: 5,
        count: countBasketPrice,
    },
];

function countBasketPrice() {
    return this.price * this.quantity;
}

var sum = 0;
for (var i = 0; i < cart.length; i++) {
    sum += cart[i].count();
}

console.log(sum);