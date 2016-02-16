import hp from './converter';
import util from './utilities'

export default (() => {
  const _getValues = () => {
    let vehicle = document.querySelector('[data-js=vehicle]');
    let horsepower = document.querySelector('[data-js=horsepower]');
    let type = document.querySelector('[data-js=type]:checked');

    return {
      vehicle: vehicle.value,
      horsepower: horsepower.value,
      type: type.value
    }
  };

  const _changeView = (view) => {
    let views = document.querySelectorAll('.view'),
        activeSelector = document.querySelector('[data-js=' + view + ']');

    for (let i = 0, length = views.length; i < length; i++) {
      if (views[i].classList.contains('active')) {
        views[i].classList.remove('active');
      }
    }

    activeSelector.classList.add('active');
  };

  const _showResults = (vehicle, hp, conversion) => {
    let results = document.querySelector('[data-js=results]'),
        template = `<p>Your</p>
                    <div class="display">${vehicle}</div>
                    <p>has</p>
                    <div class="display">${util.formatNumber(hp)} ${conversion.name} power</div>`;

    results.innerHTML = template;
    _changeView('results');
  };

  const actionSubmit = () => {
    let userInput = _getValues(),
        convertedPower = hp.convert(userInput.horsepower, userInput.type),
        conversion = hp.getConversion(userInput.type);

    _showResults(userInput.vehicle, convertedPower, conversion);
  };

  return {
    actionSubmit: actionSubmit
  }
})();
