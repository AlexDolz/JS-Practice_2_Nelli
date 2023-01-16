// 1. Сформировать массив, в который попадут все положительные числа, заканчивающиеся на 7

// cosnt numbers = [3, -10, 7, 0, -50, 67, -47, 4, 564];

// const result = numbers.filter(elem => elem > 0 && elem % 10 == 7);

// console.log(result);

// **************************************************************

// 2. Написать программу, высчитывающую количество положительных чисел в массиве => 5

// const numbers = [3, -10, 7, 0, -50, 67, -47, 4, 564];

// const result = numbers.filter(elem => elem > 0);
// console.log(result.length);

// ***************************************************************

// 3. Сформируйте массив из положительных чисел. Извлеките из каждого значения квадратный корень. Отсортируйте полученные числа в массиве в порядке возрастания.
// => [2, 3, 4, 10]

// const numbers = [4, 16, -5, 9, -81, 100, -49];

// let result = numbers
//   .filter(elem => elem > 0)
//   .map(elem => Math.sqrt(elem))
//   .sort((a, b) => a - b);
// console.log(result);

// ***************************************************************

// 4. Сформировать массив из строк. Если елемент не строка, подставить вместо него строку 'not a string'

// const elements = [true, 'hello', 'apple', 4, undefined, 'banana', -7];

// const result = elements.map(elem => {
//   if (typeof elem != 'string') {
//     return (elem = 'not a string');
//   } else {
//     return elem;
//   }
// });
// console.log(result);

// 2 solution ternar operator

// const result = elements.map(elem =>
//   typeof elem != 'string' ? (elem = 'not a string') : elem
// );
// console.log(result);

// ************************************************************

// const nums = [1, 2, 3, 4];

// let avgNum = nums.reduce((total, el) => total + el) / nums.length;
// console.log(avgNum);

// *************************************************************

// 6. Пройтись по массиву методом forEach() и вывести каждый элемент массива в консоль

// const users = [
//   {
//     first_name: 'Ivan',
//     last_name: 'Ivanov',
//     age: 20,
//     salary: 500,
//   },

//   {
//     first_name: 'Olga',
//     last_name: 'Petrova',
//     age: 12,
//     salary: 250,
//   },

//   {
//     first_name: 'Irina',
//     last_name: 'Alexandrova',
//     age: 46,
//     salary: 1500,
//   },

//   {
//     first_name: 'Denis',
//     last_name: 'Sokolov',
//     age: 30,
//     salary: 760,
//   },
// ];

// users.forEach(element => console.log(element));

// ************************************************************

// 7. Получить из всех объектов значения age и сформировать из них массив чисел users_age => [20, 12, 46, 30]

// const users = [
//   {
//     first_name: 'Ivan',
//     last_name: 'Ivanov',
//     age: 20,
//     salary: 500,
//   },

//   {
//     first_name: 'Olga',
//     last_name: 'Petrova',
//     age: 12,
//     salary: 250,
//   },

//   {
//     first_name: 'Irina',
//     last_name: 'Alexandrova',
//     age: 46,
//     salary: 1500,
//   },

//   {
//     first_name: 'Denis',
//     last_name: 'Sokolov',
//     age: 30,
//     salary: 760,
//   },
// ];

// const result = users.map(elem => elem.age);
// console.log(result);

// ************************************************************

// 8. Сформировать массив из users, который зарабатывают больше 700

// const users = [
//   {
//     first_name: 'Ivan',
//     last_name: 'Ivanov',
//     age: 20,
//     salary: 500,
//   },

//   {
//     first_name: 'Olga',
//     last_name: 'Petrova',
//     age: 12,
//     salary: 250,
//   },

//   {
//     first_name: 'Irina',
//     last_name: 'Alexandrova',
//     age: 46,
//     salary: 1500,
//   },

//   {
//     first_name: 'Denis',
//     last_name: 'Sokolov',
//     age: 30,
//     salary: 760,
//   },
// ];

// const result = users.filter(elem => elem.salary > 700);
// console.log(result);

// **************************************************************

// 9. Добавьте в конец массива users объект со следующей информацией:
// {
//   first_name: 'Anton',
//   last_name: 'Bogomolov',
//   age: 19,
//   salary: 300
// }

// const users = [
//   {
//     first_name: 'Ivan',
//     last_name: 'Ivanov',
//     age: 20,
//     salary: 500,
//   },

//   {
//     first_name: 'Olga',
//     last_name: 'Petrova',
//     age: 12,
//     salary: 250,
//   },

//   {
//     first_name: 'Irina',
//     last_name: 'Alexandrova',
//     age: 46,
//     salary: 1500,
//   },

//   {
//     first_name: 'Denis',
//     last_name: 'Sokolov',
//     age: 30,
//     salary: 760,
//   },
// ];

// users.push({
//   first_name: 'Anton',
//   last_name: 'Bogomolov',
//   age: 19,
//   salary: 300,
// });

// console.log(users);

// ***********************Homework*******************************

// *********************************** Task 1 ***********************************************
// 1. Сформируйте массив из строк, состоящих только из имен и фамилий пользователей. Выведите результат в консоль.
const users = [
  {
    first_name: 'Ivan',
    last_name: 'Ivanov',
    age: 20,
    salary: 500,
  },

  {
    first_name: 'Olga',
    last_name: 'Petrova',
    age: 12,
    salary: 250,
  },

  {
    first_name: 'Irina',
    last_name: 'Alexandrova',
    age: 46,
    salary: 1500,
  },

  {
    first_name: 'Denis',
    last_name: 'Sokolov',
    age: 30,
    salary: 760,
  },
  {
    first_name: 'Anton',
    last_name: 'Bogomolov',
    age: 19,
    salary: 300,
  },
];

const namesAndSurnames = users.map(
  elem => `${elem.first_name} ${elem.last_name}`
);
console.log(namesAndSurnames);

// ********************************************* Task 2 *********************************

// 2. Сформируйте массив из совершеннолетних пользователей. И выведите в консоль результат в формате: <Имя> <Фамилия> (<возраст>): <зарплата>.
// ['Ivan Ivanov (20): 500', 'Irina Alexandrova (46): 1500', 'Denis Sokolov (30): 760']

const adultUsers = users
  .filter(elem => elem.age >= 18)
  .map(
    elem => `${elem.first_name} ${elem.last_name} (${elem.age}): ${elem.salary}`
  );

console.log(adultUsers);

// ****************************************** Task 3 **********************************

// 3. Сформируйте новый массив без объекта, где first_name == "Irina"

const newArray = users.filter(elem => elem.first_name !== 'Irina');
console.log(newArray);
