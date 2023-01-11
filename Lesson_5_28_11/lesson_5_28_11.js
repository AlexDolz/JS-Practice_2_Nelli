const userForm = document.querySelector('.user_form');
const clickBtn = document.querySelector('.click_btn');
const usersContainer = document.querySelector('.users_container');

userForm.addEventListener('submit', event => {
  event.preventDefault(); // zapret forme obnovliat stranicu posle otpravki

  // event.target - ssilka na element, s kotorim proishodit sobitije

  const { firstName, lastName } = event.target;

  console.log(firstName);
  console.log(lastName);

  const userCard = document.createElement('div');
  const firstnameElem = document.createElement('p');
  const lastnameElem = document.createElement('p');

  firstnameElem.innerText = `First name: ${firstName.value}`;
  lastnameElem.innerText = `Last name: ${lastName.value}`;

  userCard.append(firstnameElem, lastnameElem);
  usersContainer.append(userCard);

  firstName.value = '';
  lastName.value = '';
});

clickBtn.addEventListener('click', event => {
  console.log(event.target);
});

// const user = {
//   firstName: 'Aleksej',
//   lastName: 'Dolznikov',
//   age: 34,
// };

// const { firstName, lastName, age } = user;

// console.log(firstName);
// console.log(lastName);
// console.log(age);

// 1. Создать кнопку с размерами 30х30 пикс, при каждом нажатии на кнопку увеличивать высоту и ширину на 10 пикс

// let scaleBtn = document.querySelector('.scale_div');
// let btnSize = 30;
// console.log(btnSize);
// function makeScale() {
//   scaleDiv.style.height = +scaleDiv.style.height.replace('px', '') + 30 + 'px';
//   scaleDiv.style.width = +scaleDiv.style.width.replace('px', '') + 30 + 'px';
// }

// scaleDiv.addEventListener('click', () => {
//   makeScale();
// });

// let scaleBtnRender = size => {
//   scaleBtn.style.height = size + 'px';
//   scaleBtn.style.width = size + 'px';
// };

// scaleBtnRender(btnSize);

// scaleBtn.addEventListener('click', () => {
//   btnSize += 10;
//   scaleBtnRender(btnSize);
// });

// const incr_btn = document.querySelector('.incr_btn');
// let size = 30;
// incr_btn.style.cssText = `width: ${size}px; height: ${size}px`;

// incr_btn.addEventListener('click', () => {
//     size += 10
//     incr_btn.style.cssText = `width: ${size}px; height: ${size}px`;
// });

// const incr_btn = document.querySelector('.incr_btn');
// let btn_size = 30;

// const incr_btn_render = (size) => {
//   incr_btn.style.height = size + 'px';
//   incr_btn.style.width = size + 'px';
// }

// incr_btn_render(btn_size);

// incr_btn.addEventListener('click', () => {
//   btn_size += 10;
//   incr_btn_render(btn_size);
// })

// ****************************************************************
