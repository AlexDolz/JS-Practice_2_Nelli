// 1. В div с классом container добавить 2 параграфа с произвольным текстом (через DOM)

// const container = document.querySelector('.container');

// const par1 = document.createElement('p');
// const par2 = document.createElement('p');

// par1.textContent = 'Hello!';
// par2.innerText = 'Good morning!';

// container.append(par1, par2); // vazen poriadok

// ****************************************************************

// 2. В div с классом container добавить карточку (div). Внутрь карточки добавить 2 парагафа с произвольным текстом.
{
  /* <div class='container'>
  <div>
    <p>Hello</p>
    <p>Good morning</p>
  </div>
</div> */
}

const container = document.querySelector('.container');
const greeting = document.querySelector('.greeting');

const card = document.createElement('div');
const par1 = document.createElement('p');
const par2 = document.createElement('p');

par1.innerText = 'Hello';
par2.innerText = 'Good evening';

card.classList.add('card');
greeting.classList.remove('greeting2');

card.append(par1, par2);
container.append(card);

// 3. Элементу с классом card добавить следующие стили: border, width, border-radius, background-color, padding, margin

par1.style.color = 'red';
par1.style.fontSize = '25px';
