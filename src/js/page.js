import * as hp from './converter';
import {formatNumber} from './utilities'

const _vehicle    = document.querySelector('[data-js=vehicle]');
const _horsepower = document.querySelector('[data-js=horsepower]');
const _types      = document.querySelectorAll('[data-js=type]');

/**
 *
 * @param types
 * @returns {string}
 */
function getSelectedType(types) {
  const selected = [].filter.call(types, type => type.checked);

  return selected[0] ? selected[0].value : '';
}

/**
 *
 * @param view
 */
function changeView(view) {
  const views = document.querySelectorAll('.view');
  const activeSelector = document.querySelector('[data-js=' + view + ']');

  for (let i = 0, length = views.length; i < length; i++) {
    if (views[i].classList.contains('active')) {
      views[i].classList.remove('active');
    }
  }

  activeSelector.classList.add('active');
}

/**
 *
 * @param vehicle
 * @param hp
 * @param conversion
 */
function showResults(vehicle, hp, conversion) {
  const results = document.querySelector('[data-js=results]');

  results.innerHTML = `<a id="homeLink" data-js="home-link">Back Home</a>
                       <h2>${conversion.name} Power</h2>
                       <p>Your</p>
                       <div class="display">${vehicle}</div>
                       <p>has</p>
                       <div class="display">${formatNumber(hp)} ${conversion.name} power</div>`;
  changeView('results');
  buildHomeLink();
}

/**
 *
 */
function buildHomeLink() {
  const homeLink = document.querySelector('[data-js=home-link]');

  homeLink.addEventListener('click', () => {
    changeView('home');
  })
}

/**
 *
 * @param entry
 * @returns {boolean}
 */
function validateValue(entry) {
  switch (entry.type) {
    case 'vehicle':
      return entry.value.length > 0;
    case 'horsepower':
      return entry.value > 0;
    case 'type':
      return entry.value.length > 0;
  }
}

/**
 *
 * @param type
 * @param display
 */
function toggleError(type, display = 'hide') {
  const error = document.querySelector('[data-js=error-' + type + ']');

  switch (display) {
    case 'show':
      error.classList.remove('hidden');
      break;
    case 'hide':
      error.classList.add('hidden');
      break;
  }
}

/**
 *
 * @returns {boolean}
 */
export function actionSubmit() {
  const vehicle = _vehicle.value;
  const horsepower = _horsepower.value;
  const type = getSelectedType(_types);

  let errors = false,
      convertedPower,
      conversion;

  if (validateValue({type: 'vehicle', value: vehicle})) {
    toggleError('vehicle', 'hide');
  } else {
    errors = true;
    toggleError('vehicle', 'show');
  }

  if (validateValue({type: 'horsepower', value: horsepower})) {
    toggleError('horsepower', 'hide');
  } else {
    errors = true;
    toggleError('horsepower', 'show');
  }

  if (validateValue({type: 'type', value: type})) {
    toggleError('type', 'hide');
  } else {
    errors = true;
    toggleError('type', 'show');
  }

  if (errors) {
    return false;
  }

  ga('send', 'event', 'Conversion', type, `{$vehicle} | {$horsepower}`);

  convertedPower = hp.convert(horsepower, type);
  conversion = hp.getConversion(type);

  showResults(vehicle, convertedPower, conversion);
}


