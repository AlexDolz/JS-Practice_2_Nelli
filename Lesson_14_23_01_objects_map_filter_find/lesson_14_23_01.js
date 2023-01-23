// ************************* Task 1 ********************************

// 1. Создать функцию, которая принимает в качестве аргументов объект и ключ объекта и возвращает значение по этому ключу

// const user = {
//   firstname: 'Oleg',
//   age: 30,
// };

// const product = {
//   title: 'Apple',
//   price: 500,
//   country: 'Germany',
// };

// function getObjValue(obj, key) {
//   return obj[key];
// }

// console.log(getObjValue(user, 'firstname')); // 'Oleg'
// console.log(getObjValue(user, 'age')); // 30

// console.log(getObjValue(product, 'price')); // 500
// console.log(getObjValue(product, 'country')); // 'Germany'

// *************************** Task 2 *******************************

// 2. У объекта product зменить значение price на 700;

// const product = {
//   title: 'Apple',
//   price: 500,
//   country: 'Germany',
// };

// product.price = 700;
// console.log(product);

// **************************** Task 3 ******************************

// 3. У объекта product увеличить значение price на 700;

// const product = {
//   title: 'Apple',
//   price: 500,
//   country: 'Germany',
// };

// product.price += 700;
// console.log(product);

// *************************** Task 4 *******************************

// 4. У объекта product увеличить значение price на 1;

// const product = {
//   title: 'Apple',
//   price: 500,
//   country: 'Germany',
// };

// product.price++;
// console.log(product);

// *************************** Task 5 *******************************

// 5. Дан массив. Проверьте, что массив не пустой - в нем есть хотя бы один объект со свойством salary

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

// let result = users[0].salary;
// console.log(result); // 500

// 2 Solution
// console.log(users[0].hasOwnProperty('salary')); // true
// console.log(users[0].hasOwnProperty('country')); // false

// ************************** Task 6  ******************************
// 6. Сформировать новый массив. Если у элемента есть свойство salary, подставить в массив '+', а если нет - '-'

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

// const salaries = users.map(elem => (elem.salary ? '+' : '-'));

// console.log(salaries);

// ************************* Task 7 *********************************

// 8. Узнать количество совершеннолетних пользователей. Вывести число в консоль

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

// const adult = users.filter(elem => elem.age >= 18);
// console.log(adult.length);

// **************************** Task 9 ******************************

// 9. Напишите функцию, которая находит в массиве users объект с age 30 и возвращает этот объект, но со значением age 85. Результат вызова функции вывести в консоль
// {
//   first_name: 'Denis',
//   last_name: 'Sokolov',
//   age: 85,
//   salary: 760
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

// function changeAge(obj) {
//   let targetObj = obj.find(elem => elem.age === 30);
//   targetObj.age = 85;
//   return targetObj;
// }

// console.log(changeAge(users));

// **************************** Task 10 ****************************

// 10. Сформировать массив из людей, чье имя начинается на I. В новом массиве увеличить всем возраст на 1. Вывести массив в консоль

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

// const changeUsers = () => {
//   const iPeople = users.filter(elem => elem.first_name.startsWith('I'));
//   for (let elem of iPeople) {
//     elem.age++;
//   }
//   return iPeople;
// };

// console.log(changeUsers());
