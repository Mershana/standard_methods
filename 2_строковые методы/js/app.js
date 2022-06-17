'use strict'

/* Строковые методы JavaScript
Работа с регистром символов */

/* Задача 1⋕js.Pm.SM.St.1
Дана строка 'js'. Сделайте из нее строку 'JS'. */
/* let str = 'js'
console.log(str.toUpperCase());  *///  JS

/* Задача 2⋕js.Pm.SM.St.2
Дана строка 'JS'. Сделайте из нее строку 'js'. */
/* let str = 'JS';
console.log(str.toLowerCase());  */ //js

/* Работа с substr, substring, slice */
/* Задача 3⋕js.Pm.SM.St.3
Дана строка 'я учу javascript!'. Вырежьте из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice). */
/* let str = 'я учу javasript!';
console.log(str.substr(0, 2)); */ //я
/* let str = 'я учу javasript!';
console.log(str.substring(0, 2)); */
/* let str = 'я учу javasript!';
console.log(str.slice(0, 2)); */

// Работа с indexOf
/* Задача 4⋕js.Pm.SM.St.4
Дана строка 'abcde'. Определите позицию буквы 'c' в этой строке. */
/* let str = 'abcde';
console.log(str.indexOf('c')); */ //2

/* Задача 5⋕js.Pm.SM.St.5
Дана строка. Проверьте, есть ли в этой строке символ 'a'. */
/* let str = 'abcde';
let str_number = 'a';
if (str.indexOf(str_number) >= 0){
	console.log('true');
} else {
	console.log('false')
} */

/* Задача 6⋕js.Pm.SM.St.6
Дана строка. Проверьте, начинается ли эта строка с символа 'a'.
 */
/* let str = 'hello world javascript';
console.log(str.indexOf('a')); */
//ВАРИАНТ 2
/* let str = 'abcde';
let number_str = 'a';
let flag = false;
if(str.indexOf(number_str) == 0){
	flag = true;
}
console.log(flag); */

/* Задача 7⋕js.Pm.SM.St.7
Дана строка. Проверьте, заканчивается ли эта строка на символ 'a'. */
/* let str = 'abcda';
let lastA = 'a';
let flag = false;
if(str.lastIndexOf(lastA) == str.length-1){
	 flag = true;
}
console.log(flag); */

/* Задача 8⋕js.Pm.SM.St.8
Дана строка. Проверьте, начинается ли эта строка на 'http://'. */
/* let str = 'http://google.com';
let result = 'http://';
let flag = false;
if(str.indexOf(result) == 0){
	flag = true;
}
console.log(flag); */

/* Задача 9⋕js.Pm.SM.St.9
Дана строка. Проверьте, заканчивается ли эта строка на '.html' */
/* let str = 'kek.html';
let number_str = '.html';
let flag = false;
if(str.lastIndexOf(number_str) == str.length-number_str.length){
	flag = true;
}
console.log(flag); // true */

/* Работа с startsWith, endsWith */
/* Задача 10⋕js.Pm.SM.St.10
Дана строка. Проверьте, начинается ли эта строка на 'http://'. */
/* let str = 'http://google.com';
let result = 'http://';
console.log(str.startsWith(result)); */

/* Задача 11⋕js.Pm.SM.St.11
Дана строка. Проверьте, заканчивается ли эта строка на '.html'. */
/* let str = 'index.html';
let result = '.html';
console.log(str.endsWith(result)); */

/* Работа с split */
/* Задача 12⋕js.Pm.SM.St.12
Дана строка '1-23-4-5'. С помощью метода split запишите каждое число этой строки в отдельный элемент массива. */
/* let str = '1-2-3-4-5';
let arr = str.split('-');
console.log(arr); //['1', '2', '3', '4', '5'] */

/* Задача 13⋕js.Pm.SM.St.13
Дана строка '12345'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива. */
/* let str = '12345';
let arr = str.split('');
console.log(arr); */ // ['1', '2', '3', '4', '5']

/* Работа с join */
/* Задача 14⋕js.Pm.SM.St.14
Дан следующий массив:
let arr = [1, 2, 3, 4, 5];
С помощью метода join слейте его в строку '1-2-3-4-5'. */
/* let arr = [1, 2, 3, 4, 5];
let str = arr.join('-');
console.log(str); */ // 1-2-3-4-5;