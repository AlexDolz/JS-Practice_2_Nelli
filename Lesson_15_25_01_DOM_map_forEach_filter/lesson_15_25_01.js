const products = [
  {
    id: 1,
    title: 'Apple',
    price: 500,
    discount: 0.15,
  },
  {
    id: 2,
    title: 'Orange',
    price: 400,
    discount: 0.5,
  },
  {
    id: 3,
    title: 'Pineapple',
    price: 560,
    discount: 0.25,
  },
  {
    id: 4,
    title: 'Kiwi',
    price: 50,
    discount: 0.1,
  },
  {
    id: 5,
    title: 'Lime',
    price: 120,
    discount: 0.07,
  },
];

const product = {
  id: 1,
  title: 'Apple',
  price: 500,
  discount: 0.15,
};

// ************************* Task 1 ******************************

// 1. Используя объект product, для товара создать карточку (title, price)

const root = document.querySelector('.root');

// const card = document.createElement('div');
// const titleElem = document.createElement('p');
// const priceElem = document.createElement('p');

// const { title, price } = product;

// titleElem.innerText = `Title: ${title}`;
// priceElem.innerText = `Price: ${price}$`;

// card.append(titleElem, priceElem);
// root.append(card);

// ************************** Task 2 ******************************

// 2. Используя массив products, для каждого товара создать карточку (title, price) forEach()

// products.forEach(({ title, price }) => {
//   const card = document.createElement('div');
//   const titleElem = document.createElement('p');
//   const priceElem = document.createElement('p');

//   titleElem.innerText = `Title: ${title}`;
//   priceElem.innerText = `Price: ${price}$`;

//   card.append(titleElem, priceElem);
//   root.append(card);
// });

// ************************** Task 3 *******************************

// 3. Используя массив products, для каждого товара создать карточку (title, price) map()

// const cards = products.map(({ price, title }) => {
//   const card = document.createElement('div');
//   const titleElem = document.createElement('p');
//   const priceElem = document.createElement('p');

//   titleElem.innerText = `Title: ${title}`;
//   priceElem.innerText = `Price: ${price}$`;

//   card.append(titleElem, priceElem);

//   return card;
// });

// root.append(...cards);

// console.log(...cards);

// *************************** Task 4 *******************************

// 4. Используя массив products, для каждого товара, цена которого больше или равно 500, создайте карточку товара со следующей информацией - Наименование, старая цена, цена со скидкой. Стилизовать старую цену - сделать ее серого цвета. А новую цену - красного цвета и крупнее шрифт

// products.forEach(({ title, price, discount }) => {
//   if (price >= 500) {
//     const card = document.createElement('div');
//     const titleElem = document.createElement('p');
//     const oldPriceElem = document.createElement('p');
//     const newPriceElem = document.createElement('p');

//     titleElem.innerText = `Title: ${title}`;
//     oldPriceElem.innerText = `Old price: ${price}$`;
//     newPriceElem.innerText = `New price: ${price * discount}$`;

//     oldPriceElem.classList.add('old_price');
//     newPriceElem.classList.add('new_price');

//     card.append(titleElem, oldPriceElem, newPriceElem);
//     root.append(card);
//   }
// });

// 2 Solution

const cards = products.filter(elem => elem.price >= 500);
cards.forEach(({ title, price, discount }) => {
  const card = document.createElement('div');
  const titleElem = document.createElement('p');
  const oldPriceElem = document.createElement('p');
  const newPriceElem = document.createElement('p');

  const discountPrice = price - price * discount;

  titleElem.innerText = `Title: ${title}`;
  oldPriceElem.innerText = `Old price: ${price}$`;
  newPriceElem.innerText = `New price: ${discountPrice}$`;

  oldPriceElem.classList.add('old_price');
  // newPriceElem.classList.add('new_price');

  newPriceElem.style.color = discountPrice > 423 ? 'red' : 'green';
  card.append(titleElem, oldPriceElem, newPriceElem);
  root.append(card);
});
