import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import './change.js';
import './yup.js';
// import text from './i18next.js';



const input = document.querySelector('#url-input');
const button = document.querySelector('#button');
const out = document.querySelector('.out')

button.addEventListener('click', function (event) {
    event.preventDefault();
    if (input.value === '') {
        input.classList.add('err')
        out.innerHTML = 'ошибка ввода данных'
    }
})