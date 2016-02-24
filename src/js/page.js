import * as hp from './converter';
import {formatNumber} from './utilities'

const _vehicle    = document.querySelector('[data-js=vehicle]');
const _horsepower = document.querySelector('[data-js=horsepower]');
const _types      = document.querySelectorAll('[data-js=type]');

const _getSelectedType = (types) => {
  const selected = [].filter.call(types, type => type.checked);

  return selected[0] ? selected[0].value : '';
};

/**
 *
 * @param view
 * @private
 */
const _changeView = (view) => {
  const views = document.querySelectorAll('.view');
  const activeSelector = document.querySelector('[data-js=' + view + ']');

  for (let i = 0, length = views.length; i < length; i++) {
    if (views[i].classList.contains('active')) {
      views[i].classList.remove('active');
    }
  }

  activeSelector.classList.add('active');
};

/**
 *
 * @param vehicle
 * @param hp
 * @param conversion
 * @private
 */
const _showResults = (vehicle, hp, conversion) => {
  const results = document.querySelector('[data-js=results]');
  const template = `<a id="homeLink" data-js="home-link">Back Home</a>
                  <h2>${conversion.name} Power</h2>
                  <p>Your</p>
                  <div class="display">${vehicle}</div>
                  <p>has</p>
                  <div class="display">${formatNumber(hp)} ${conversion.name} power</div>`;

  let homeLink;

  results.innerHTML = template;
  _changeView('results');
  _buildHomeLink();
};

const _buildHomeLink = () => {
  const homeLink = document.querySelector('[data-js=home-link]');

  homeLink.addEventListener('click', () => {
    _changeView('home');
  })
};

const _validateValues = (entry) => {
  switch (entry.type) {
    case 'vehicle':
      return entry.value.length > 0;
    case 'horsepower':
      return entry.value > 0;
    case 'type':
      return entry.value.length > 0;
  }
};

const _toggleError = (type, display = 'hide') => {
  const error = document.querySelector('[data-js=error-' + type + ']');

  switch (display) {
    case 'show':
      error.classList.remove('hidden');
      break;
    case 'hide':
      error.classList.add('hidden');
      break;
  }
};

/**
 *
 */
export const actionSubmit = () => {
  const vehicle = _vehicle.value;
  const horsepower = _horsepower.value;
  const type = _getSelectedType(_types);

  let errors = false,
      convertedPower,
      conversion;

  if (_validateValues({type: 'vehicle', value: vehicle})) {
    _toggleError('vehicle', 'hide');
  } else {
    errors = true;
    _toggleError('vehicle', 'show');
  }

  if (_validateValues({type: 'horsepower', value: horsepower})) {
    _toggleError('horsepower', 'hide');
  } else {
    errors = true;
    _toggleError('horsepower', 'show');
  }

  if (_validateValues({type: 'type', value: type})) {
    _toggleError('type', 'hide');
  } else {
    errors = true;
    _toggleError('type', 'show');
  }

  if (errors) {
    return false;
  }

  convertedPower = hp.convert(horsepower, type);
  conversion = hp.getConversion(type);

  _showResults(vehicle, convertedPower, conversion);
};


