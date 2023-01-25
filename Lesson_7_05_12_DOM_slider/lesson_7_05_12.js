const addForm = document.querySelector('.add_form');
const addFormResult = document.querySelector('.add_form_result');

addForm.addEventListener('submit', event => {
  event.preventDefault();
  const { type, content, color } = event.target;

  const elem = document.createElement(type.value);
  elem.innerText = content.value;
  elem.style.color = color.value;

  addFormResult.append(elem);

  type.value = '';
  content.value = '';
  color.value = '';
});

// ****************************************************************

const images = [
  'https://cdnn21.img.ria.ru/images/155666/00/1556660022_36:0:2767:2048_1920x0_80_0_0_0f95880a02fc9e226884ce632677e009.jpg',
  'https://n1s1.hsmedia.ru/bc/a3/fe/bca3fe6f32ac44ec9af8520490d26be2/1920x1152_0xac120003_15211652711625304484.jpg',
  'https://bigenc.ru/media/2016/10/27/1235177203/11340.jpg',
  'https://vot-enot.com/wp-content/uploads/2021/11/94895c23dcc1cf7.jpg',
];

const imgSlider = document.querySelector('.img_slider');

let imgIndex = 0;
imgSlider.addEventListener('click', event => {
  // event.preventDefault();
  event.target.src = images[imgIndex++ % images.length];
  // imgIndex++ % images.length
  // 0 % 4 = 0
  // 1 % 4 = 1
  // 2 % 4 = 2
  // 3 % 4 = 3
  // 4 % 4 = 0
  // 5 % 4 = 1
  // 6 % 4 = 2
  // 7 % 4 = 3
  // 8 % 4 = 0
});

// ****************************************************************
const rigthBtn = document.querySelector('.right_btn');
const leftBtn = document.querySelector('.left_btn');
let imgSlider2 = document.querySelector('.img_slider_2');

let imgIndex2 = 0;
rigthBtn.addEventListener('click', () => {
  imgSlider2.src = images[++imgIndex2 % images.length];
});

//  i++ - vozvrasiajem, potom uvelicivajem
//  ++i - uvelicivajem, potom vozvrasiajem

// Sdelat levuju knopku
leftBtn.addEventListener('click', () => {
  if (imgIndex2 === 0) {
    imgIndex2 = images.length;
  }
  imgSlider2.src = images[--imgIndex2 % images.length];
  console.log(imgIndex2);
});
