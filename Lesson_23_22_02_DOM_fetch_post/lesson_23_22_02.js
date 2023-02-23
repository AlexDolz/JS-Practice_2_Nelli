//  *************************** Task 1 *********************************

// 1. Отправить get-запрос на https://fakestoreapi.com/products и вывести в консоль полученный ответ (в формате JSON)

fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(data => cardsRender(data.products));

// **************************** Task 2 *******************************
// 2. В html-документе создать контейнер для карточек товаров
// 3. В js-файле для каждого товара отрисовать карточку (image, title, price), добавить все карточки в контейнер
// 4. Стилизовать карточки

// **************************** Task 3 *******************************

// 5. Создать форму, которая собирает данные о товаре (title, price, image). При отправке формы выводить в консоль собранные данные в формате объекта
// 6. Стилизовать форму

const cardsContainer = document.querySelector('.cards_container');

const addProductForm = document.querySelector('.add_product_form');

addProductForm.addEventListener('submit', event => {
  event.preventDefault();

  const { title, price, image } = event.target;
  const productItem = {
    title: title.value,
    price: +price.value,
    image: image.value,
    category: 'test',
    description: 'Lorem ipsum',
  };
  addProduct(productItem);
  addProductForm.reset();
});

function cardsRender(data) {
  const productsCard = data.map(({ images, title, price }) => {
    const card = document.createElement('div');
    card.className = 'card';

    const imgElem = document.createElement('img');
    imgElem.className = 'img';
    imgElem.src = images[0];
    imgElem.alt = 'img';

    const titleElem = document.createElement('p');
    titleElem.innerText = `Title: ${title}`;

    const priceELem = document.createElement('p');
    priceELem.innerText = `Price: ${price}`;

    card.append(imgElem, titleElem, priceELem);
    return card;
  });
  cardsContainer.append(...productsCard);
}

function addProduct(obj_from_form) {
  fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    body: JSON.stringify(obj_from_form),
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  })
    .then(res => res.json())
    .then(json => console.log(json));
}
