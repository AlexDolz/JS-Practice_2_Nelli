// 1. В div с классом cards_container создать карточку с тремя параграфами - First name: Alex, Last name: Ivanov, Age: 47

const cardsContainer = document.querySelector('.cards_container');

const card = document.createElement('div');
const firstNameElem = document.createElement('p');
const lastNameElem = document.createElement('p');
const ageElem = document.createElement('p');

firstNameElem.innerText = 'First name: Alex';
lastNameElem.innerText = 'Last name: Ivanov';
ageElem.innerText = 'Age: 47';

card.append(firstNameElem, lastNameElem, ageElem);
cardsContainer.append(card);

// *********************************************************

// 2. Добавить элементу card класс card. По этому классу в стилях добавить свойства: width, border, border-radius, padding, margin, background-color
card.classList.add('card');

// 3. Параграфу ageElem задать размер шрифта 24px (сделать это через JS)

ageElem.style.fontSize = '24px';

// ********************************************************

// let name = 'Olga';
// for (let i = 1; i <= 3; i++) {
//   console.log(name);
// }

// ********************************************************
// Вывести в консоль числа от 25 до 39, используя цикл for

// for (let i = 25; i <= 39; i++) {
//   console.log(i);
// }

// *********************************************************

for (let i = 60; i >= 45; i--) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
