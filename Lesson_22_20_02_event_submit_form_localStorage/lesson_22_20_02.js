// ************************* Task 1 *************************************
// 1. Дан массив. Сформировать новый массив, в который попадут только имена, длина которых равна 4 символам. Записать этот массив в локал сторадж.

// const firstnames = ['Anton', 'Irina', 'Olga', 'Ivan', 'Antonina'];

// localStorage.setItem(
//   'users',
//   JSON.stringify(firstnames.filter(elem => elem.length == 4))
// );

// ************************** Task 2 *************************************
// 2. Дан массив с товарами. Сформировать карточки товаров и отобразить их в браузере

// ************************** Task 3 ************************************
// 3. Добавить форму с двумя инпутами для сбора данных о названии продукта и его цене. По умолчанию все добавляемые продукты долдны иметь свойство in_stock со значением true
// При отправке формы выводить собранные данные из формы в консоль в виде объекта

// ************************** Task 4 *************************************

// При отправке формы отрисовывать карточку из собранных данных

// ************************** Task 5 *************************************
// При обновлении страницы добавленные карточки не пропадают

const goods = [
  {
    id: 1,
    product: 'iPhone 14',
    price: 1500,
    inStock: true,
  },
  {
    id: 2,
    product: 'Samsung a53',
    price: 1000,
    inStock: true,
  },
  {
    id: 3,
    product: 'Huawei 11',
    price: 900,
    inStock: true,
  },
  {
    id: 4,
    product: 'Nokia n4',
    price: 500,
    inStock: false,
  },
  {
    id: 5,
    product: 'iPhone 12',
    price: 1100,
    inStock: false,
  },
];

const goodsContainer = document.querySelector('.goods_container');
const addProductForm = document.querySelector('.add_product_form');

const storedGoods = JSON.parse(localStorage.getItem('goods')) ?? goods;

addProductForm.addEventListener('submit', event => {
  event.preventDefault();
  const { product, price } = event.target;

  storedGoods.push({
    id: Date.now(),
    product: product.value,
    price: price.value,
    inStock: true,
  });
  localStorage.setItem('goods', JSON.stringify(storedGoods));
  render(storedGoods);
  product.value = '';
  price.value = '';
});

function render(products) {
  goodsContainer.innerHTML = '';
  const goodsCard = products.map(elem => {
    const card = document.createElement('div');
    card.className = 'card';
    const idElem = document.createElement('p');
    const titleElem = document.createElement('p');
    const priceELem = document.createElement('p');
    const inStockElem = document.createElement('p');

    idElem.innerText = `ID: ${elem.id}`;
    titleElem.innerText = `Title: ${elem.product}`;
    priceELem.innerText = `Price: ${elem.price}$`;
    inStockElem.innerText = `${elem.inStock ? 'Available' : 'Not available'}`;

    card.style.backgroundColor = elem.inStock ? 'lightgreen' : 'lightgray';

    card.append(idElem, titleElem, priceELem, inStockElem);
    return card;
  });
  goodsContainer.append(...goodsCard);
}

render(storedGoods);
