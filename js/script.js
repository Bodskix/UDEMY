// "use strict"; строгий режим ( не работает с не обьявленными переменными)

//  a = 15; ошибка

// let number = 4.6;//number

// console.log(4/0);
// console.log('string' * 9);

// const persone = `5`;//string

// const bool = false;//boolean


// console.log(something); //null

// let und;
// console.log(und);


// ---------------------------------------------------
//                                           //OBJECTS



// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };

// console.log(obj.name);


// let arr = ['plum.png.', 'plum.png.', 6, 'plum.png.', {}, []];
// console.log(arr[2]);

// ---------------------------------------------------
// alert('Hello');

// const result = confirm("Are u here?")
// console.log(result);

// ---------------------------------------------------

// (вся информация которая приходит от пользователя , всегда будет строкой(string))

//к промпт можно добавить +prompt и преобразовать answer в number
// const answer = prompt("Are u 18 years old?","18");
// console.log(answer+5);


// ---------------------------------------------------

// const answers = [];

// // answers[0] = prompt ('What is your name?', '');
// // answers[1] = prompt ('What is your family?', '');
// // answers[2] = prompt ('How old are u?', '');

// console.log(typeof(answers));

// --------------------------------------------------- INTERPOLYATION

// const category = "toys";
// console.log('https://someurl.com/'+ category);


// //console.log(`https://someurl.com/${category}/5/4/2222`); ----- интерполяция (добавляем все что угодно с помощью косых кавычек)

// const user = "Ivan";

// alert(`Hello, ${user}`)



// -----------------------------------Операторы------------------------------

console.log('arr' + " - object");
console.log(4 + +"5");

let incr = 10 ,
    decr = 10 ;

// ++incr; результат 11
// --decr; результат 9 , потомучто переменные сразу меняються 

// console.log(++incr); результат 11 , потому что сначала увеличиваеться потом выводитьься
// console.log(decr--); результат 10 , сначала выводим , потом уменьшаем

// console.log(5%2); - остаток от деления


// console.log(2 * 4 == '8'); - true
// console.log(2 * 4 == 8); - true
// console.log(2 * 4 === '8'); - false
// console.log(2 * 4 === 8); - true 

const isCheked = true,
      isClose = false;

console.log(isCheked || isClose); 







