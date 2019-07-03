//----------------Каталог--------------
var products = [
    {
        product__id: 1,
        product__name: 'Футболка',
        product__price: 1000,
        img: 'img/product9.jpg',
        alt: 'product9',
    },
    {
        product__id: 2,
        product__name: 'Штаны',
        product__price: 1500,
        img: 'img/product10.jpg',
        alt: 'product10',
    },
    {
        product__id: 3,
        product__name: 'Обувь',
        product__price: 800,
        img: 'img/product11.jpg',
        alt: 'product11',
    },
];

var $catalogProducts = document.querySelector('.catalog__products');
var $templateProduct = document.querySelector('.template-product').children[0];

/**
 * Функция собирает каталог товаров
 * @param {object} products Массив товаров
 */
function getCatalog(products) {
    for (var i = 0; i < products.length; i++) {
        var $product = $templateProduct.cloneNode(true);
        var keys = Object.keys(products[i]);
        var $buttonBay = $product.querySelector('.product__add');

        for (var j = 0; j < keys.length; j++) {
            var key = keys[j];
            var $element = $product.querySelector('.' + key);
            if (key === 'alt') {
                $product.querySelector('.product__img').alt = products[i][key];
            } else if (key === 'img') {
                $product.querySelector('.product__img').src = products[i][key];
            } else {
                $element.textContent = products[i][key];
            }
            $buttonBay.dataset[key] = products[i][key]; //Запись атрибутов в кнопку
        }
        $catalogProducts.appendChild($product);
    }
}

getCatalog(products);

//--------------Корзина----------
var cart = [];

var $cart = document.querySelector('.cart');
var $templateCart = document.querySelector('.template-cart').children[0];
var $cartDrop = document.createElement('div');
$cartDrop.classList.add('cart-drop');

var $cartNumber = document.createElement('div');
$cartNumber.classList.add('cart__number');

$catalogProducts.addEventListener('click', handleBuyClick);

/**
 * Функция проверяет по id наличие товара в корзине
 * @param {object} cartProduct Массив данных товара
 * @returns {number} Возвращает 1 или -1
 */
function indexOf(cartProduct) {
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].product__id === cartProduct.product__id) {
            return 1;
        }
    }
    return -1;
}

/**
 * Функция собирает данные с кнопки
 * @param event запускается по клику
 */
function handleBuyClick(event) {
    if (event.target.classList.contains('product__add')) {
        var cartProduct = {
            product__id: +event.target.dataset.product__id,
            product__name: event.target.dataset.product__name,
            product__price: event.target.dataset.product__price,
            img: event.target.dataset.img,
            alt: event.target.dataset.alt,
        };
        var idx = indexOf(cartProduct);

        if (idx === -1) {
            cartProduct.product__quantity = 1;
            cart.push(cartProduct);
        } else {
            cart[idx - 1].product__quantity++;
        }
        getCart(cartProduct);
        countBasketPrice(cart);
    }
}

// /**
//  * Функция отображает товары в корзине
//  * @param {object} cartProduct Массив товаров
//  */
function getCart(cartProduct) {
    var cartNumberSum = 0;

    for (var i = 0; i < cart.length; i++) {
        var $product = $templateCart.cloneNode(true);
        var keys = Object.keys(cart[i]);

        for (var j = 0; j < keys.length; j++) {
            var key = keys[j];
            var $element = $product.querySelector('.' + key);
            if (key === 'alt') {
                $product.querySelector('.cart-drop__img').alt = cart[i][key];
            } else if (key === 'img') {
                $product.querySelector('.cart-drop__img').src = cart[i][key];
            } else {
                $element.textContent = cart[i][key];
            }
        }
        $product.querySelector('.product__sum').textContent = countSum(i);
        $cartDrop.appendChild($product);
        $cartDrop.appendChild($total);
        $cartDrop.appendChild($cartDropCheckout);
        $cartDrop.appendChild($cartDropGo);
        $cart.appendChild($cartDrop);
        cartNumberSum += cart[i].product__quantity;
    }
    $cartNumber.textContent = cartNumberSum;
    $cart.appendChild($cartNumber);
}

var $total = document.createElement('div');
$total.classList.add('total');

var $totalP = document.createElement('p');
$totalP.classList.add('total__p');

var $totalSum = document.createElement('p');
$totalSum.classList.add('total__sum');

var $cartDropCheckout = document.createElement('a');
$cartDropCheckout.classList.add('cart-drop__checkout');
$cartDropCheckout.href = '#';
$cartDropCheckout.textContent = 'Checkout';

var $cartDropGo = document.createElement('a');
$cartDropGo.classList.add('cart-drop__go');
$cartDropGo.href = 'shopping-cart.html';
$cartDropGo.textContent = 'Go to cart';

/**
 * Функция считает содержимое корзины
 * @param {object} cart Массив товаров
 */
function countBasketPrice(cart) {

    var message = '';

    if (cart && cart.length > 0) {
        var sum = 0;
        var count = 0;

        for (var i = 0; i < cart.length; i++) {
            sum += cart[i].product__price * cart[i].product__quantity;
            count += cart[i].product__quantity;
        }
        message = 'TOTAL';
    }
    $totalP.textContent = message;
    $totalSum.textContent = '₽ ' + sum;
    $total.appendChild($totalP);
    $total.appendChild($totalSum);
    return sum;
}

/**
 * Функция считает общую стоимость одного товара
 * @param {number} i Порядковый номер товара в массиве
 * @returns {number} Сумма
 */
function countSum(i) {
    var sum = 0;
    sum = cart[i].product__price * cart[i].product__quantity;
    return sum;
}