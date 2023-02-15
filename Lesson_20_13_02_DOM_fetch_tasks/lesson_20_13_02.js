// *********************** Task 1 ************************************
// 1. Написать функцию, которая принимает id и при вызове которой отправляется fetch-запрос по адресу https://jsonplaceholder.typicode.com/users/id

// 2. Вывести в консоль то, что придет по запросу

// function getUsers(id) {
//   fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//     .then(res => res.json())
//     .then(json => render(json)); // returns Object {}
// }

// getUsers(1);

// ************************ Task 2 ***********************************
// 3. Через дом наполнить users_container данными, полученными из ответа на запрос - отобразить в браузере имя и телефон пользователя

// let usersContainer = document.querySelector('.users_container');
// function render({ name, phone }) {
//   usersContainer.innerHTML = '';
//   const userData = document.createElement('p');
//   userData.innerText = `${name} ${phone}`;

//   usersContainer.append(userData);
// }

// *************************** Task 3 *********************************

// 4. На кпоки повесить слушатели событий. при клике на левую мы отправляем запрос на id текущего юзера - 1, при клике на праву - на id текущего юзера + 1
// let amount = 1;

// const [buttonLeft, buttonRight] = document.querySelectorAll('button');

// buttonLeft.addEventListener('click', () => {
//   if (amount === 1) {
//     amount = 10;
//   }
//   getUsers(--amount);
// });
// buttonRight.addEventListener('click', () => {
//   if (amount === 10) {
//     amount = 1;
//   }
//   getUsers(++amount);
// });

// **************************** Task 4 ********************************
// 1. Написать функцию, при вызове которой отправляется fetch-запрос по адресу https://jsonplaceholder.typicode.com/todos
// 2. Вывести в консоль то, что придет по запросу

function toDo() {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(json => taskRender(json)); // returns array []
}

toDo();

// 3. Наполнить контейнер карточками с двумя параграфами (task и status). В status выводить текст 'done', если задача выполнена, и 'not done' - если не выполнена

const todosContainer = document.querySelector('.todos_container');

function taskRender(tasks) {
  const taskCards = tasks.map(({ title, completed }) => {
    const card = document.createElement('div');
    const taskElem = document.createElement('p');
    const statusELem = document.createElement('p');

    card.classList.add('card');

    taskElem.innerText = `Task: ${title}`;

    if (!completed) {
      statusELem.innerText = `Status: ${'not done'}`;
      card.style.backgroundColor = 'azure';
    } else if (completed) {
      statusELem.innerText = 'done';
      card.style.backgroundColor = 'lightgreen';
    }

    card.append(taskElem, statusELem);
    return card;
  });
  todosContainer.append(...taskCards);
}
