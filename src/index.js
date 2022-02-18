import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
// import './change.js';
// import './yup.js';
// import text from './i18next.js';
import text from '../locales/ind.js'

const input = document.querySelector('#url-input');
const button = document.querySelector('#button');
const out = document.querySelector('.out');
const select = document.querySelector('#select')

select.addEventListener('click', (e) => {
  console.log()
})

button.addEventListener('click', (event) => {
  event.preventDefault();
  input.value = (window.location.href = '')
  //   if (input.value === ' ') {
  //     input.classList.add('err');
  //     out.innerHTML = 'ошибка ввода данных';
  //   }
});
