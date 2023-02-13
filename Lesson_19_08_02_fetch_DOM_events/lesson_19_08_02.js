// ***************************** Task 1 ****************************

// 1. Написать fetch-запрос по ссылке https://reqres.in/api/users?page=1 и выводить на страницу карточку с пользователем (картинка + имя)

const users_container = document.querySelector('.users_container');

const render = users => {
  const users_cards = users.map(({ first_name, avatar }) => {
    const card = document.createElement('div');
    const avatarElem = document.createElement('img');
    const nameElem = document.createElement('p');

    avatarElem.setAttribute('src', avatar);
    avatarElem.setAttribute('alt', first_name);

    nameElem.innerText = first_name;

    card.append(avatarElem, nameElem);
    return card;
  });
  users_container.append(...users_cards);
};

const getUsers = num => {
  fetch(`https://reqres.in/api/users?page=${num}`)
    .then(res => res.json())
    .then(json => render(json.data));
};

getUsers(2);

// 2. При клике на кнопку 1 грузится страница 1 json, при клике на кнопку 2 грузится страница 2 json

const [button1, button2] = document.querySelectorAll('button');

button1.addEventListener('click', () => {
  getUsers(1);
});
button2.addEventListener('click', () => {
  getUsers(2);
});
