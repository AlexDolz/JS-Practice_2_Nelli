const a = Math.max(3, 155, 43, 2); // 155
const b = Math.min(3, 155, 43, 2); // 2
console.log(a, b);

const c = Math.ceil(4.28); // 5
const d = Math.floor(4.28); // 4
const e = Math.round(4.28); // 4

const f = Math.random();
console.log(f);

console.log(c);
console.log(d);
console.log(e);
// ***************************************************************

// 3. Вывести в консоль случайное целое число от 0 до 10

console.log(Math.round(Math.random() * 10));

// ****************************************************************

// 2. Создать кнопку, при клике на которую цвет кнопки меняется на случайный (Math.random())

const colorChanger = document.querySelector('#color_changer');

const randomColor = () => {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};

colorChanger.addEventListener('click', event => {
  event.target.style.backgroundColor = randomColor();
  event.target.style.color = randomColor();
});

// ***************************************************************
// 4. Вывести в консоль случайное целое число от 10 до 25
console.log(Math.round(Math.random() * 15 + 10));

const randomBtn = document.querySelector('#random');
const randomP = document.querySelector('#random_p');

const randomNum = () => {
  const firstRandom = Math.floor(Math.random() * 6 + 1);
  const secondRandom = Math.floor(Math.random() * 6 + 1);
  return `${firstRandom} X ${secondRandom}`;
};

randomBtn.addEventListener('click', () => {
  randomP.innerText = randomNum();
});

// 1. Создать кнопку с размерами 30х30 пикс, при каждом нажатии на кнопку увеличивать высоту и ширину на 10 пикс

let scaleBtn = document.querySelector('#scale');

let size = 60;
scaleBtn.style.cssText = `width: ${size}px; height: ${size}px`;

scaleBtn.addEventListener('click', event => {
  size += 10;
  scaleBtn.style.cssText = `width: ${size}px; height: ${size}px`;
  event.target.style.backgroundColor = randomColor();
  event.target.style.color = randomColor();
});
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
