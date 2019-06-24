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

var $cart = document.createElement('div');
$cart.classList.add('cart');
if (cart.length === 0) {
    $cart.innerHTML = 'Корзина пуста';
} else {
    $cart.innerHTML = 'В корзине: ' + cart.length + '​ товаров на сумму ' + sum + ' ​рублей';
}
document.body.appendChild($cart);
