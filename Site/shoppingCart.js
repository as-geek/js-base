var shoppingCart = [
    {
        product__id: 1,
        product__name: 'Футболка',
        product__price: 1000,
        product__quantity: 2,
        img: 'img/product9.jpg',
        alt: 'product9',
    },
    {
        product__id: 2,
        product__name: 'Штаны',
        product__price: 1500,
        product__quantity: 2,
        img: 'img/product10.jpg',
        alt: 'product10',
    },
    {
        product__id: 3,
        product__name: 'Обувь',
        product__price: 800,
        product__quantity: 2,
        img: 'img/product11.jpg',
        alt: 'product11',
    },
];

var $productDetailsFlex = document.querySelector('.product-details-flex');
var $templateShoppingCart = document.querySelector('.template-shopping-cart').children[0];

$productDetailsFlex.addEventListener('click', handleQuantityClick);

function handleQuantityClick(event) {
    console.log(event);
}

/**
 * Функция собирает каталог товаров
 * @param {object} shoppingCart Массив товаров
 */
function getShoppingCart(shoppingCart) {
    for (var i = 0; i < shoppingCart.length; i++) {
        var $product = $templateShoppingCart.cloneNode(true);
        var keys = Object.keys(shoppingCart[i]);

        for (var j = 0; j < keys.length; j++) {
            var key = keys[j];
            var $element = $product.querySelector('.' + key);
            if (key === 'alt') {
                $product.querySelector('.product-details__img').alt = shoppingCart[i][key];
            } else if (key === 'img') {
                $product.querySelector('.product-details__img').src = shoppingCart[i][key];
            } else {
                $element.textContent = shoppingCart[i][key];
            }
        }
        $product.querySelector('.product-details__subtotal__p').textContent = countSum(i);
        $productDetailsFlex.appendChild($product);
    }
}

getShoppingCart(shoppingCart);

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
    sum = shoppingCart[i].product__price * shoppingCart[i].product__quantity;
    return sum;
}

