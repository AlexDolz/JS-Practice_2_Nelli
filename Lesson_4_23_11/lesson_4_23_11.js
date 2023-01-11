const btn = document.querySelector('.show_text_btn');
const input = document.querySelector('.show_text');

btn.addEventListener('click', () => {
  let a;
  a = input.value;
  console.log(a);
});

//5. При клике на кнопку поменять содержимое инпута с ??? на !!!

btn.addEventListener('click', () => {
  input.setAttribute('placeholder', '!!!');
});

// Pri klike meniat vidimost parolia

const visibilityBtn = document.querySelector('.visibility_btn');
const visibilityInput = document.querySelector('.visibility_input');

visibilityBtn.addEventListener('click', () => {
  visibilityInput.type =
    visibilityInput.type === 'password' ? 'text' : 'password';
});
