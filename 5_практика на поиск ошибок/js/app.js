'use strict'

/* Поиск ошибок в коде со стандартными методами JavaScript */
/* Задача 1⋕js.Pm.SM.Mst.1
Код должен найти сумму цифр числа:
let num = 12345;
let arr = num.split('');
let sum = 0;
for (let digit of arr) {
	sum += digit;
}
console.log(sum); */
//Решение
/* let num = 12345;
let arr = String(num).split('');
let sum = 0;
for (let digit of arr) {
	sum += +digit;
}
console.log(sum); */ //15

/* Задача 2⋕js.Pm.SM.Mst.2
Код должен найти сумму цифр числа:
let num = 12345;
let arr = String(num).split('');
let sum = 0;
for (let digit of arr) {
	sum += digit;
}
console.log(sum); */
//Решение
/* let num = 12345;
let arr = String(num).split('');
let sum = 0;
for (let digit of arr) {
	sum += Number(digit);
}
console.log(sum); */ //15

/* Задача 3⋕js.Pm.SM.Mst.3
Код должен найти сумму цифр числа:
let num = 12345;
let arr = String(num).split('');
let sum = 0;
for (let digit of arr) {
	sum = Number(digit);
}
console.log(sum);  */// почему-то выводит 5, а не 15
//Решение
/* let num = 12345;
let arr = String(num).split('');
let sum = 0;
for (let digit of arr) {
	sum += Number(digit);
}
console.log(sum); */ //15

/* Задача 4⋕js.Pm.SM.Mst.4
Код должен найти сумму цифр числа:
let num = 12345;
let arr = String(num).split('');
let sum = '';
for (let digit of arr) {
	sum += Number(digit);
}
console.log(sum); */
//решение
/* let num = 12345;
let arr = String(num).split('');
let sum = +'';
for (let digit of arr) {
	sum += Number(digit);
}
console.log(sum); */ //15

/* Задача 5⋕js.Pm.SM.Mst.5
Код должен найти произведение цифр числа:
let num = 12345;
let arr = String(num).split('');
let prod = 0;
for (let digit of arr) {
	prod *= digit;
}
console.log(prod); */
//Решение
/* let num = 12345;
let arr = String(num).split('');
let prod = 1;
for (let digit of arr) {
	prod *= digit;
}
console.log(prod); */ // 120