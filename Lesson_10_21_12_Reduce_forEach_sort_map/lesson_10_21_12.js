// const numbers = [3, 12, 87, 4, 556, -9, -50];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// numbers.forEach(elem => console.log(elem));

// let positiveNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 0) {
//     positiveNumbers.push(numbers[i]);
//   }
// }

// numbers.forEach(elem => {
//   if (elem > 0) {
//     positiveNumbers.push(elem);
//   }
// });

// const positiveNumbers2 = numbers.filter(el => el > 0);
// console.log(positiveNumbers);
// console.log(positiveNumbers2);

// ********************************MAP*****************************

// const numbers = [3, 12, 87, 4, 556, -9, -50];

// let numbersMult = [];
// numbers.forEach(elem => numbersMult.push(elem * 2));
// console.log(numbersMult);

// let result = numbers.map(elem => elem * 2);
// console.log(result);

// const greetings = ['hello', 'hi'];

// let result = greetings.map(elem => elem.toUpperCase());
// console.log(result);

// ************************************************************
// 5. Сформировать новый массив. Если число положительное, умножить его на два. А если отрицательное, то оставить как есть.

// const numbers = [3, 12, 87, 4, 556, -9, -50];

// let result = numbers.map(elem => {
//   if (elem > 0) {
//     return elem * 2;
//   } else {
//     return elem;
//   }
// });
// console.log(result);

// let result = numbers.map(elem => (elem > 0 ? elem * 2 : elem));
// console.log(result);

// **************************************************************
// 6. Сформировать новый массив с теми же строками, но если строка длиннее 3 символов, то вернуть ее в верхнем регистре

// const greetings = ['hello', 'hi'];

// let result = greetings.map(elem =>
//   elem.length >= 3 ? elem.toUpperCase() : elem
// );
// console.log(result);

// ***************************************************************
// 7. Дан массив random с разными типами данных. Сформировать новый массив, в который попадут только числовые значения из массива random

// const random = [5, 'hello', 77, true, 12, false];

// let result = random.filter(elem => typeof elem == 'number');
// console.log(result);

// ***************************************************************

// const random = [5, 'hello', 77, true, 12, false];

// let result = random.map(elem => (typeof elem === 'number' ? elem : -1));

// console.log(result);
