'use strict'

/* Математические методы в JavaScript
Работа со степенью и корнем */

// Задача 1⋕js.Pm.SM.Prm.1
// Преобразуйте последнюю букву строки в верхний регистр.
/* let str = 'fortnite';
let result = str.slice(0, str.length - 1) + str[str.length - 1].toUpperCase();
console.log(result); */

/* Математические методы в JavaScript
Работа со степенью и корнем */
/* Задача 1⋕js.Pm.SM.Mth.1
Возведите 2 в 10 степень. */
/* console.log(Math.pow(2,10)); */ //1024

/* Задача 2⋕js.Pm.SM.Mth.2
Найдите квадратный корень из 245. */
/* console.log(Math.sqrt(245)); */ //15.652475842498529

/* Задача 3⋕js.Pm.SM.Mth.3
Дан следующий массив:
[4, 2, 5, 19, 13, 0, 10]
Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for. */
/* let arr = [4, 2, 5, 19, 13, 0, 10];
let result = 0;
for (let elem in arr) {
result += Math.pow(arr[elem], 3);
}
console.log(Math.sqrt(result)); */ //101.25709851659784

/* Работа с функциями округления */
/* Задача 4⋕
Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых. */
/* console.log(Math.sqrt(379)); */ //19.467922333931785
//до целых 
/* console.log(Math.round(19.467922333931785)); */ //19
//до десятых 
/* let num = Number(19.467922333931785)
console.log(num.toPrecision(3)); // 19.5 */
// до сотых 
/* let num = 19.467922333931785
console.log(+num.toPrecision(4)); // 19.47 */
//ВАРИАНТ 2
/* let number = Math.sqrt(379).toFixed(0);
console.log(+number); // 19
let number1 = Math.sqrt(379).toFixed(1);
console.log(+number1); // 19.5
let number2 = Math.sqrt(379).toFixed(2)
console.log(+number2); // 19.47 */

/* Задача 5⋕js.Pm.SM.Mth.5
Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'. */
/* let obj = {
	floot: Math.floor(Math.sqrt(587)),
	ceil: Math.ceil(Math.sqrt(587))
}
console.log(obj); // 24 , 25 */

/* Нахождение максимального и минимального числа */
/* Задача 6⋕js.Pm.SM.Mth.6
Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число. */
/* let arr_max = [4, -2, 5, 19, -130, 0, 10];
let max = Math.max.apply(null, arr_max);
console.log(max); //19 */
/* let arr_min = [4, -2, 5, 19, -130, 0, 10];
let min = Math.min.apply(null, arr_min);
console.log(min); // -130 */
//ВАРИАНТ 2 
/* let arr_max = console.log(Math.max(4, -2, 5, 19, -130, 0, 10)); //19
let arr_min = console.log(Math.min(4, -2, 5, 19, -130, 0, 10)); */ // -130

/* Работа с рандомом */
/* Задача 7⋕js.Pm.SM.Mth.7
Выведите на экран случайное целое число от 1 до 100. */
/* let randoms = console.log((Math.random() * 100).toFixed(0)); */

/* Задача 8⋕js.Pm.SM.Mth.8
С помощью цикла заполните массив 10-ю случайными целыми числами. */
/* let arr = []
for (let i = 0; i <= 10; i++ ){
arr.push(Math.floor(Math.random() * 100))
}
console.log(arr);  */

/* Работа с модулем */
/* Задача 9⋕js.Pm.SM.Mth.9
Даны переменные a и b. Найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b. */
/* let a = 16;
let b = 53;
let result = Math.abs(a - b);
console.log(result); */ //37