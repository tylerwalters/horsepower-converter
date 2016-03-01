// Trap Speed Formula: horsepower = weight * (velocity/234)^3 (http://www.ajdesigner.com/phphorsepower/horsepower_equation_trap_speed_method_horsepower.php)

// Space Shuttle Main Engines: 37,000,000 horsepower (http://www.nasa.gov/returntoflight/system/system_SSME.html)
// Tyrannosaurus Rex: weight - 17990lbs, top speed - 18mph, horsepower (trap speed formula): 8.1884387801548 (http://www.livescience.com/23868-tyrannosaurus-rex-facts.html)
// Tortoise: weight - 661.4lb, top speed - 0.2mph, horsepower (trap speed formula): 4.1295868602465E-7 (http://www.speedofanimals.com/animals/galapagos_tortoise)

const conversions = {
  trex: {
    name: 'Tyrannosaurus Rex',
    horsepower: 8.1884387801548,
    source: 'http://www.livescience.com/23868-tyrannosaurus-rex-facts.html'
  },
  tortoise: {
    name: 'Tortoise',
    horsepower: 4.1295868602465E-7,
    source: 'http://www.speedofanimals.com/animals/galapagos_tortoise'
  },
  spaceShuttle: {
    name: 'Space Shuttle',
    horsepower: 37000000,
    source: 'http://www.nasa.gov/returntoflight/system/system_SSME.html'
  }
};

/**
 *
 * @param type
 * @returns {*}
 */
export const getConversion = type => conversions[type];

/**
 *
 * @param weight
 * @param velocity
 */
export const trapSpeed = (weight, velocity) => weight * (velocity/234)^3;

/**
 *
 * @param hp
 * @param type
 * @returns {number}
 */
export const convert = (hp, type) => parseInt(hp) / conversions[type].horsepower;