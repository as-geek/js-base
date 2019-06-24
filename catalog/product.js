var product = [
    {
        name: 'Футболка',
        price: 1000,
        img: 'img/product9.jpg',
        alt: 'product9',
        getName: getName,
        getPrice: getPrice,
        getImg: getImg,
        getAlt: getAlt,
    },
    {
        name: 'Штаны',
        price: 1500,
        img: 'img/product10.jpg',
        alt: 'product10',
        getName: getName,
        getPrice: getPrice,
        getImg: getImg,
        getAlt: getAlt,
    },
    {
        name: 'Обувь',
        price: 800,
        img: 'img/product11.jpg',
        alt: 'product11',
        getName: getName,
        getPrice: getPrice,
        getImg: getImg,
        getAlt: getAlt,
    },
];

function getName() {
    return this.name;
}

function getPrice() {
    return this.price;
}

function getImg() {
    return this.img;
}

function getAlt() {
    return this.alt;
}

for (var i in product) {
    var $catalogProducts = document.querySelector('.catalog__products');

    var $product = document.createElement('div');
    $product.classList.add('product');
    $catalogProducts.appendChild($product);

    var $productLink = document.createElement('a');
    $productLink.href = '#';
    $product.appendChild($productLink);

    var $productImg = document.createElement('img');
    $productImg.classList.add('product__img');
    $productImg.src = product[i].getImg();
    $productImg.alt = product[i].getAlt();
    $productLink.appendChild($productImg);

    var $productText = document.createElement('div');
    $productText.classList.add('product__text');
    $productLink.appendChild($productText);

    var $productName = document.createElement('p');
    $productName.classList.add('product__name');
    $productName.textContent = product[i].getName();
    $productText.appendChild($productName);

    var $productPrice = document.createElement('p');
    $productPrice.classList.add('product__price');
    $productPrice.textContent = '₽' + (product[i].getPrice()).toFixed(2);
    $productText.appendChild($productPrice);

    var $productAdd = document.createElement('a');
    $productAdd.classList.add('product__add');
    $productAdd.href = '#';
    $product.appendChild($productAdd);

    var $addCart = document.createElement('img');
    $addCart.classList.add('add-cart');
    $addCart.src = 'img/add-cart.svg';
    $addCart.alt = 'add-cart';
    $productAdd.appendChild($addCart);

    var $addCartText = document.createElement('span');
    $addCartText.classList.add('add-cart-text');
    $addCartText.textContent = 'Add to Cart';
    $productAdd.appendChild($addCartText);
}