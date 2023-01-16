// ************************** Task 1 ********************************
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
    first_name: 'irina',
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

// 1. Сформировать массив из объектов, в которых имя начинается на букву I. Регистр может быть любой.

// 1 solution
// const newArray = users.filter(
//   elem => elem.first_name.startsWith('i') || elem.first_name.startsWith('I')
// );
// console.log(newArray);

// 2 solution
// const newArray2 = users.filter(elem => elem.first_name[0].toLowerCase() == 'i');
// console.log(newArray2);

// ************************ Task 2 ***********************************

// 5. Найти в массиве элемент/объект с именем Olga и записать его в отдельную переменную.

// const userFind = users.find(elem => elem.first_name === 'Olga');
// console.log(userFind); // vozvratit objekt, tak kak iznacalno on objekt, i vozvrasiajet tolko pervij element

// const userFindFilter = users.filter(elem => elem.first_name === 'Olga');
// console.log(userFindFilter); // vozvratit massiv s objektom

// ************************ Task 3 ***********************************
// 6. Поменяйте местами первый и последний элементы массива

// 1 solution
// const element1 = users.shift(); // virezali konec
// const element2 = users.pop(); // virezali nacalo
// users.push(element1); // dobavili v konec
// users.unshift(element2); // dobavili v nacalo
// console.log(users);

// 2 solution
// let firstElement = users[0];
// users[0] = users[users.length - 1];
// console.log(users[0], firstElement); // "Anton", "Ivan"
// users[users.length - 1] = firstElement;
// console.log(users);

// ************************* Task 4 **********************************

//7. Сформировать массив из имен пользователей. Все имена в массиве должны быть с заглавной буквы. => ['Anton', 'Olga', 'Irina', 'Denis', 'Ivan']

// const newArray = users.map(elem =>
//   elem.first_name.replace(elem.first_name[0], elem.first_name[0].toUpperCase())
// );
// console.log(newArray);

// const newU = users.map(
//   elem => elem.first_name.slice(0, 1).toUpperCase() + elem.first_name.slice(1)
// );
// console.log(newU);

// ************************ join() *********************************

// join() - vozvrasiajet stroku, sostojasiaju iz elementov massiva

const strings = ['Anton', 'Irina', 'Olga', 'Ivan'];

console.log(strings.join()); // poluciajem stroki s zapiatimi
console.log(strings.join('')); // poluciajem stroki skleinije bez zapiatih
console.log(strings.join(' ')); // poluciajem stroki s prabelami
console.log(strings.join(' + ')); // poluciajem stroki s pliusami

// ************************ split() ********************************

const name1 = 'Alex';
console.log(name1.split()); // ['Alex']
console.log(name1.split('')); // ['A', 'l', 'e', 'x']
