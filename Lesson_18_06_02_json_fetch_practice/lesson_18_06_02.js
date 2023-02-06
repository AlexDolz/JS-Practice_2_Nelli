// ************************ Task 1 **********************************

// 1. Отправить запрос по ссылке https://dummyjson.com/products и вывести полученные данные в консоль

fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(json => renderCards(json.products));

// ************************** Task 2 *******************************

// 2. Для каждого элемента массива создать карточку с тремя параграфами: title, description и price. Вывести карточки на экран

// ************************** Task 3,4 *****************************
// 3. Стилизовать все карточки. Использовать стили: width, border, border-radius, padding
// 4. Сделать из карточек grid - расположить карточки в 4 колонки

// ************************** Task 5 *******************************
// 5. Если цена товара >= 500, то изменить цвет бордера на красный. А если < 500 - изменить на зеленый

// ************************** Task 6 *******************************
// 6. Добавить в карточку товара картинку - первая картинка из массива images. Стилизовать картинку - задать размеры 150х150 px, изобрадение не должно транформироваться

const rootElem = document.querySelector('.root');

const renderCards = json => {
  json.forEach(({ title, description, price, images }) => {
    const card = document.createElement('div');
    const titleElem = document.createElement('p');
    const descriptionElem = document.createElement('p');
    const priceELem = document.createElement('p');
    const imgElem = document.createElement('img');

    titleElem.innerText = `Title: ${title}`;
    descriptionElem.innerText = `Description: ${description}`;
    priceELem.innerText = `Price: ${price}$`;

    imgElem.src = images[0];
    imgElem.alt = 'img of product';
    imgElem.classList.add('img');

    card.classList.add('card');

    price >= 500
      ? (card.style.borderColor = 'red')
      : (card.style.borderColor = 'green');

    card.append(imgElem, titleElem, descriptionElem, priceELem);
    rootElem.append(card);
  });
};
