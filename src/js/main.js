import '../style/main.scss';
import './vendor/fitText';
import {actionSubmit} from './page';

let submit = document.querySelector('[data-js=submit');

submit.addEventListener('click', (event) => {
  event.preventDefault();
  actionSubmit();
});

window.fitText(document.querySelector('h1'), 1.4, { minFontSize: '40px', maxFontSize: '80px' });