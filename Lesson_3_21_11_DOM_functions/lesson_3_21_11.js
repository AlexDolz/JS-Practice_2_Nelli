// func1 - funkcija vissego poriadka
// func2 - callback funkcija

// const func1 = func2 => {};

// const mul2 = () => 2 * 2;
// const mul3 = () => 2 * 3;
// const mul4 = () => 2 * 4;

// const mult = num => 2 * num;
// mult(2); // 2*2
// mult(3); // 2*3
// mult(50); // 2*50

// const numbers = [1, 2, 3, 4, 5];
// const multNums = arr => {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(arr[i] * 2);
//   }

//   return result;
// };
// const divideNums = arr => {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(arr[i] / 2);
//   }

//   return result;
// };
// console.log(multNums(numbers));
// console.log(divideNums(numbers));

// const changeNums = (arr, callback) => {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(callback(arr[i]));
//   }

//   return result;
// };
// // callback funkcija eto funkcija peredannja aargumentom v druguju funkciju

// const multOn2 = num => num * 2;
// const divideOn2 = num => num / 2;

// console.log(changeNums(numbers, multOn2));
// console.log(changeNums(numbers, divideOn2));

// let numbers2 = [10, 20, 25, 56];

// console.log(changeNums(numbers2, divideOn2));
// console.log(changeNums(numbers2, multOn2));

const container = document.querySelector('.text_container');
const addTextBtn = document.querySelector('.add_text_btn');

addTextBtn.addEventListener('click', () => {
  const p = document.createElement('p');
  p.innerText = 'Hello';
  container.append(p);
});

// В index.hmtl есть кнопка "изменить цвет" и параграф 'hello!'. При клике на кнопку цвет текста меняется на красный.

const changeColor = document.querySelector('.change_color');
const helloText = document.querySelector('.hello_text');

changeColor.addEventListener('click', () => {
  helloText.style.color = 'red';
  console.log('Hello');
  let backColor = helloText.style.backgroundColor;
  if (backColor !== 'black') {
    helloText.classList.toggle('hello_text-black');
  }
});

// const a = 12;
// if (a >= 10) {
//   console.log('a bigger then 10');
// } else {
//   console.log('a smaller then 10');
// }

// a >= 10 ? console.log('a bigger then 10') : console.log('a smaller then 10');

// ДЗ:
// 1. При клике на кнопку выводится сообщение 'hello' в консоль
// 2. При клике на кнопку меняется цвет заднего фона у параграфа
// 3. При клике на кнопку цвет фона меняется на черный, а при следующем клике меняется на белый
