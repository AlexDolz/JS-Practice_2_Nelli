// let a = 44;

// let myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve((a = 33));
//   }, 2000);
// });

// myPromise.then(() => console.log(a));

// ************************** Task 1 ********************************
// 1. Используя Math.random(), выводить в консоль "все хорошо", если Math.random() сгененрирует число больше или равно 0.5, или выводить "все плохо" - если сгенерирует число меньше 0.5

// const randomPromise = new Promise((resolve, reject) => {
//   const randomNum = Math.random();
//   if (randomNum >= 0.5) {
//     resolve(randomNum);
//   } else {
//     reject(randomNum);
//   }
// });

// randomPromise.then(
//   value => console.log(value + ' все хорошо'),
//   value => console.log('все плохо ' + value)
// );

// ---------Otpravka fetch zaprosa na server

// fetch('https://jsonplaceholder.typicode.com/users') // otravliaju zapros na server
//   .then(resp => resp.json()) // poluciaju otvet, preobrazovivaju v json
//   .then(json => console.log(json)); // poluciajem massiv s objektami s kotorim budem rabotat

// ************************** Task 2 *******************************
// 1. Отправить запрос по ссылке https://jsonplaceholder.typicode.com/users
// 2. Из полученного массива для каждого юзера сформировать карточку с именем, фамилией и юзернэймом

fetch('https://jsonplaceholder.typicode.com/users')
  .then(resp => resp.json())
  .then(json => renderUsers(json));

const rootElem = document.querySelector('.root');

const renderUsers = json => {
  json
    .sort((a, b) => a.username.localeCompare(b.username)) // otsortirovali username v alfavitnom poriadke, localeCompare ctob sravnivat stroki
    .forEach(({ name, username }) => {
      const cardElem = document.createElement('div');
      const nameElem = document.createElement('p');
      const usernameElem = document.createElement('p');

      nameElem.innerText = `Name: ${name}`;
      usernameElem.innerText = `Username: ${username}`;

      cardElem.classList.add('card');

      cardElem.append(nameElem, usernameElem);
      rootElem.append(cardElem);
    });
};
