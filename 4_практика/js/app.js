'use strict'

/* Практика на использования изученных методов
Регистр символов */

/* Задача 1⋕js.Pm.SM.Prm.1
Преобразуйте последнюю букву строки в верхний регистр. */
/* let str = 'london';
let result = str.slice(0, str.length-1) + str.slice(str.length - 1).toUpperCase();
console.log(result); */ //londoN

/* Задача 2⋕js.Pm.SM.Prm.2
Преобразуйте первые 2 буквы строки в верхний регистр. */
/* let str = 'london';
let result = str.slice(0,2).toUpperCase() + str.slice(2);
console.log(result); */ //LOndon

/* Задача 3⋕js.Pm.SM.Prm.3
Пусть дана строка, у которой первая буква в верхнем регистре, например вот такая:
let str = 'London';
Преобразуйте первую букву строки в нижний регистр. */
/* let str = 'London';
let result = str.slice(0, 1).toLowerCase() + str.slice(1);
console.log(result); */ // london

/* 
Задача 4 */
/* let str = 'word1 word2 word3';
// Разобьем строку в массив слов:
let words = str.split(' ');
for (let i = 0; i < words.length; i++) {
	// Увеличим регистр каждого слова:
	words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
}
// Сольем массив обратно в строку:
let result = words.join(' ');
console.log(result); // выведет 'Word1 Word2 Word3'
 */

/* Задача 5⋕js.Pm.SM.Prm.5
Преобразуйте строку 'var_test_text' в 'VarTestText'.
Написанный код должен работать для любых строк такого типа (то есть для строк, в которых слова разделены символов подчеркивания). */
/* let str = 'var_test_text';
let arr = str.split('_');
let result = '';
for (let i = 0; i < arr.length; i++){
	arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
	result += arr[i];
}
console.log(result); */ //VarTestText

/* Задача 6⋕js.Pm.SM.Prm.6
Модифицируйте предыдущую задачу так, чтобы первая буква новой строки была в нижнем регистре. */
/* let str = 'VarTestText';
let words = str.split('');
for (let i = 0; i < words.length; i++) {
	words[i] = words[i].slice(0, 1).toLowerCase() + words[i].slice(1);
}
let result = words.join('');
console.log(result);  */  // vartesttext

/* Переворот строки */
/* Пусть у нас есть некоторая переменная со строкой:
let str = '12345';
Давайте перевернем символы этой строки в обратном порядке:
let str = '12345';
let result = str.split('').reverse().join('');
console.log(result); // выведет '54321'
 */

/* Задача 7⋕js.Pm.SM.Prm.7
Дана строка со словами. Напишите скрипт, который переставит слова в строке в обратном порядке. */
/* let str = 'love javascript';
let result = str.split('').reverse().join('');
console.log(result); */  //tpircsavaj evol