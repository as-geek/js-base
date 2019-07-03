//a
// if (!('a' in window)) {
//     var a = 1;
// }
//
// alert(a);

//Выведет undefined, так как переменная a находится в объекте window,
//и значит условие if не выполнится

// //b
// var b = function a(x) {
//     x && a (--x);
// };
// alert(a);

//Выведет undefined, потому что function expression можно пользоваться только после её создания

//c
// function a(x) {
//     return x * 2;
// }
// var a;
// alert(a);

//Выведет x * 2, потому что function declaration начинает работать сразу

//d
// function b(x, y, a) {
//     arguments[2] = 10;
//     alert(a);
// }
// b(1, 2, 3);

//Выведет 10

//e
// function a() {
//     alert(this);
// }
// a.call(null);

//Выведет window, так как call устанавливает значение null для this, а значит this - это window
