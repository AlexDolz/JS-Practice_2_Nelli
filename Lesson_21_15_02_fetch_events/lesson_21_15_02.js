// ************************ Task 1 ***********************************

// 1. Написать функцию, которая принимает айди в качества аргумента и при вызове которой отправляется fetch-запрос по ссылке https://dummyjson.com/users/id
// 2. Выести ответ по запросу в консоль

// function getUser(id) {
//   fetch(`https://dummyjson.com/users/${id}`)
//     .then(res => res.json())
//     .then(json => userRender(json));
// }

// getUser(1);

// *************************** Task 2 ********************************
// 3. Из полученных данных сформировать карточку юзера: фото, имя, фамилия, возраст, почта
// 4. Стилизовать карточку. Если возраст человека >= 30, то цвет карточки сделать светло-зеленым, если меньше - светло-серым

// const userContainer = document.querySelector('.user_container');

// const userRender = ({ firstName, lastName, age, image, email }) => {
//   userContainer.innerHTML = '';
//   const userCard = document.createElement('div');
//   const userAvatar = document.createElement('img');
//   const userName = document.createElement('p');
//   const userAge = document.createElement('p');
//   const userEmail = document.createElement('a');

//   userName.innerText = `User: ${firstName} ${lastName}`;
//   userAge.innerText = `Age: ${age}`;
//   userEmail.innerText = email;

//   userCard.classList.add('user_card');
//   userCard.style.backgroundColor = age >= 30 ? 'lightgreen' : 'lightgray';

//   userEmail.setAttribute('href', `mailto:${email}`);
//   userAvatar.setAttribute('src', image);
//   userAvatar.setAttribute('alt', `${firstName} ${lastName}`);

//   userCard.append(userAvatar, userName, userAge, userEmail);
//   userContainer.append(userCard);
// };

// *************************** Task 3 *********************************

// 5. Добавить две кнопки < > в html-документ
// 6. При перезагрузке странице прогружается первый юзер
// 7. При клике на правую кнопку айдишник увеличивается на 1 и отправлется новый запрос с измененным значением айди. При клике на левую - уменьшается на 1 и отправляется новый запрос

// const [leftBtn, rightBtn] = document.querySelectorAll('.triggers button');
// let amount = 1;

// leftBtn.addEventListener('click', () => {
//   if (amount === 1) {
//     amount = 31;
//   }
//   getUser(--amount);
// });

// rightBtn.addEventListener('click', () => {
//   if (amount === 30) {
//     amount = 0;
//   }
//   getUser(++amount);
// });

// ****************************** Task 4 *******************************

// 5. В html-документ добавить форму с 1 числовым инпутом и кнопкой
// 6. При отправке формы выводить в консоль введенное в инпут значение

const userContainer = document.querySelector('.user_container');

const userForm = document.querySelector('.user_form');

userForm.addEventListener('submit', event => {
  event.preventDefault();
  getUser(event.target.id.value);
  event.target.id.value = '';
});

const userRender = ({ firstName, lastName, age, image, email }) => {
  userContainer.innerHTML = '';
  const userCard = document.createElement('div');
  const userAvatar = document.createElement('img');
  const userName = document.createElement('p');
  const userAge = document.createElement('p');
  const userEmail = document.createElement('a');

  userName.innerText = `User: ${firstName} ${lastName}`;
  userAge.innerText = `Age: ${age}`;
  userEmail.innerText = email;

  userCard.classList.add('user_card');
  userCard.style.backgroundColor = age >= 30 ? 'lightgreen' : 'lightgray';

  userEmail.setAttribute('href', `mailto:${email}`);
  userAvatar.setAttribute('src', image);
  userAvatar.setAttribute('alt', `${firstName} ${lastName}`);

  userCard.append(userAvatar, userName, userAge, userEmail);
  userContainer.append(userCard);
};

function getUser(id) {
  fetch(`https://dummyjson.com/users/${id}`)
    .then(res => res.json())
    .then(json => userRender(json));
}

getUser(1);
