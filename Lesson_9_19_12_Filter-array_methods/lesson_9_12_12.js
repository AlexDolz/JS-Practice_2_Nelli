// 1. Дан массив numbers. Создать новый массив и поместить в него все отрицательные числа из массива numbers

// let numbers = [3, 54, -1, 78, -13, -155];

// let result = numbers.filter(value => value < 0);
// console.log(result);

// ***************************************************************

// 2. Сформировать новый массив из чисел, кончающихся на 3

// let numbers = [3, 54, -1, 78, -13, -155];

// let result = numbers.filter(value => value % 10 === 3 || value % 10 === -3);
// 2 solution
// let result = numbers.filter(value => Math.abs(value) % 10 === 3);
// console.log(result);

// ***************************************************************

// 3. Узнать количество положительных чисел в массиве

// let numbers = [3, 54, -1, 78, -13, -155];

// let result = numbers.filter(value => value > 0).length;
// console.log(result);

// ***************************************************************

//4. сформировать новый массив с числами, которые делятся на 5 без остатка

// let numbers = [12, 36, 15, 68, 45, 5, 60];

// let result = numbers.filter(value => value % 5 === 0);
// console.log(result);

// ****************************************************************

// 5. сформировать новый массив с числами, которые делятся на 3 и на 5 без остатка

// [15, 45, 60]

// let numbers = [12, 36, 15, 68, 45, 5, 60];

// let result = numbers.filter(value => value % 3 === 0 && value % 5 === 0);
// console.log(result);

// ****************************************************************

//6. Сформировать новый массив, в который попадут только строки длиннее 10 символов

// let greetings = ['hello', 'hi', 'good morning', 'good night', 'good afternoon'];

// let result = greetings.filter(value => value.length > 10);

// console.log(result);

// ****************************************************************

// let users = [
//   ['Ivan', 'Ivanov', 34],
//   ['Irina', 'Petrova', 13],
//   ['Olga', 'Sidorova', 23],
//   ['Anton', 'Orlov', 17],
// ];

// let result = users.filter(value => value[2] >= 18);
// console.log(result);

// ****************************************************************

// 8. Сформировать массив, в который попадут только числовые значения из массива array

// let array = ['hello', 15, true, 'hi', 177, 3];

// let result = array.filter(value => typeof value == 'number');
// console.log(result);

// ****************************************************************

// 9. Сформировать новый массив с совершеннолетними юзерами (>=18)

// let users = [
//   {
//     id: 1,
//     name: 'Anton',
//     age: 18,
//   },
//   {
//     id: 2,
//     name: 'Irina',
//     age: 50,
//   },
//   {
//     id: 3,
//     name: 'Olga',
//     age: 8,
//   },
//   {
//     id: 4,
//     name: 'Oleg',
//     age: 90,
//   },
// ];

// let result = users.filter(value => value.age >= 18);
// console.log(result);
