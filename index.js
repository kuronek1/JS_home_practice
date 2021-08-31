/* Task-variable */

/* Задание 1
объявите переменные со значениями “hello js”, 100, 5.5, true
Выведите все значения в консоль */

const str = 'hello js';
const num1 = 100;
const num2 = 5.5;
const bool = true;

const array1 =[];
array1.push(str, num1, num2, bool)
console.log(array1);

/* Задание 2
Объявите переменную число 5
Выведите в консоль 'На Олимпийском флаге ' + n + ' колец' */

const rings = 5;

console.log('На Олимпийском флаге ' + rings + ' колец');

/* Задание 3
Объявите три переменные х1, х2, х3. запишите в них числа.
Выведите результат формулы x1 + x2 * x3 */

const x1 = Math.round(Math.random()*5);
const x2 = Math.round(Math.random()*5);
const x3 = Math.round(Math.random()*5);

const result = x1 + x2 * x3;
console.log(x1 + ' + '+ x2 + ' * ' + x3 + ' = ' + result);

/* Задание 4*
объявите необходимые переменные для вычисления площади треугольника по
формуле s = 1⁄2 * a * h. выполните вычисления */

function sTriangle() {
    let a = 10;
    let h = 5;
    const S = 1/2 * a *h;
    return ('S' + ' = ' + S);
}

/* Task-function */

/* Задание 1
спросить у пользователя его возраст (prompt).
написать функцию isAdult которая вернёт true если возраст пользователя >= 18.
Записать ответ функции в переменную.
Выведите alert ('Совершеннолетний') если ответ функции true. */

function isAdult() {

    function checkAge() {
    
        let age = prompt("Enter your age: ")
        let result = null;
        
        if(age >= 18) {
            return result = true;
            
        }
        return result = false;
    }

    if(checkAge() === true){
        return alert('Совершеннолетний');
    }
    else {
        return alert('Несовершеннолетний');
    }
}

/* Задание 2
напишите две функции перевода метров в сантиметры, и метров в дюймы (1 метр =
39.37 дюймов) */


function MeterToCM(prop) {
    if(prop == undefined) {
        prop = 1;
    }
    const cm = prop * 100;
    return (prop + ' M ' + ' = ' +  cm + ' cm');
};
function MeterToInch(prop) {
    if(prop == undefined) {
        prop = 1;
    }
    const inch = prop * 39.37;
    return (prop + ' M ' + ' = ' +  inch + ' inch');
};

/* Задание 3
функция которая принимает число и вернёт его кубическую степень */

function pow3(value) {
    return Math.pow(value, 3);
}

/* Задание 4*
напишите программу “угадай число от 0 до 10”.
для случайного числа используйте Math.random() и округление Math.round()
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random */

function FuckPrompt1() {
    let number1 = prompt('Угадай число от 0 до 10');
    let number2 = Math.round(Math.random()*10);

    if(number1 == number2){
        alert('Поздравляем вы угадали число!');
    }
    else{
        alert ('В следующий раз повезет');
    }
    return console.log(number2);
}

/* Task-cycle */

/* Задание 1
вывести числа от 0 до 9
вывести числа от 1 до 10 */

const array1C = [];

for (let i = 0; i < 10; i++) {
    array1C.push(i);
}

array1C.push(' | ')

for (let i = 1; i < 11; i++) {
    array1C.push(i);
}
console.log(array1C);

/*Задание 2
вывести 10 чисел в степени 2*/

const array2C = [];
for (let i = 0; i < 10; i++) {
    array2C.push(i*i)
}
console.log(array2C);

/* Задание 3
вывести таблицу умножения на 9 */

const array3C = [];
for (let i = 1; i <= 10; i++) {
    array3C.push(9 * i)
}
console.log(array3C);

/* Задание 3*
с помощью двух циклов вывести полную таблицу умножения для всех чисел от 1 до 9*/

let table = '';
let tableNumber = 10;

for (let i = 1; i <= tableNumber; i++) {
    for (let j = 1; j <= tableNumber; j++) {
        table += (' \t' + i * j)
    }
    table += ('\n')
}

console.log(table);

/*  Задание 4
вычислить сумму нечетных чисел от 1 до 20. Пример, buffer += index*/

let sum4C = 0;

for (let i = 1; i < 20; i+=2) {

    sum4C += i;
    
}
console.log(sum4C);

/*  Задание 5
Вывод чисел от 25 до 0 (порядок уменьшения)*/

const array5C = [];

for (let i = 25; i >= 0; i--) {
    array5C.push(i)
}

console.log(array5C);

/*  Задание 6
Вывести числа от 0 до 20 с шагом 5*/

const array6C = [];

for (let i = 0; i <= 20; i+=5) {
    array6C.push(i)
    
}

console.log(array6C);

/*  Задание 6*
Вывести числа от 1 до 20 кратные 5 без остатка*/
let array66C = [];

for (let i = 1; i < 20; i++) {
    if(i % 5 === 0) {
        array66C.push(i);
    }
    continue
}
console.log(array66C);

/*  Задание 7*
вывести таблицу значений для функции y = -3x2 + 5x - 2 для значения х от -2 до 2
(включительно) с шагом 0.5*/

const array7C = [];

for (let i = -2; i < 2; i+=0.5) {
    array7C.push('y = ' + ( 3*Math.pow(i,2)+(5*i)-7 ));
}

console.log(array7C);

/*  Задание 8*
попросить пользователя (prompt) решить пример “2 + 2 * 2 =” (или любой другой
пример на ваш вкус).
Используя цикл while высвечивать (повторять) пример до тех пор пока пользователь не
решит его*/

function FuckPrompt2() {
    while(true) {
        let x7 = prompt('Решите пример: 2+2*2');
        if(x7 == 6) {return 'congratulations'}
    }
} 


/* Task-if?- */

/* Задание 1
спросить у пользователя (prompt) число и ответить (alert) 'Верно' если число равно 10. */


const x1if = 10; /* prompt('Назовите целое число в диапазоне от 9.1 до 10.9: '); */

function FuckPrompt3(value) {
    let x2if = 10;
    if(x1if == x2if) {
        alert('Верно')
    } 
    return
}

/* Задание 2
Если число из предыдущего задания больше 5 И меньше 15 то вывести 'привет' */

if(x1if > 5 && x1if < 15) {
    console.log('Привет');
}

/* Задание 2*
Если число из предыдущего задания больше 5 ИЛИ меньше 10 то вывести 'Всегда true' */

if(x1if > 5 || x1if < 10){ /* null меньше 10 странно??? */
    console.log('Всегда ' + true);
}

/* Задание 3
спросить у пользователя (функция prompt) ответ на один общеизвестный факт на ваш
вкус.
например, “как называется наша планета?”, "какого цвета трава?"
и высветить ему сообщение правильно он ответил или нет. */

/* Коммит потому что гребаные промты и алерты */
const x3if = 0/* prompt('Какого цвета будет красный кирпич брошеный в Чёрное море?') */

if(x3if == 'Красный' || x3if == 'Red' || x3if == 'красный' || x3if == 'red'){
    console.log('Совершенно верно!');
}
else{
    console.log('Увы но нет) Красный всегда останется красным');
}

/* Задание 4*
вычислить стоимость заказа пиццы. известно что данный вид пиццы за 100 грамм
стоит 30 грн.
скидка 3% предоставляется если вес заказ больше 1 кг
вывести сколько стоит со скидкой эта пицца если вес 1.2 кг */

const x4if = prompt('Сколько грамм пиццы вы хотите заказать?')

function pizzaPrice() {
    const x44if = 0.3;
    if(x4if >= 1000) {
        sum4if = (x4if * x44if)-((x4if * x44if)*0.03)
    }
    else {
        sum4if = x4if *x44if
    }
    return ('Стоимость вашей пиццы при весе ' + x4if + ' гр.' + ' составляет: ' + sum4if + ' ГРН')
}

/* Задание 5 *
проверить является ли введенное пользователем число простым (делиться только на
себя и на единицу) */

for (let i = 2; i < x4if; i++) {
    if(x4if % i !== 0) {
        console.log('Простое число');
        break
    }
    else{
        console.log('Не простое');
        break
    }
}