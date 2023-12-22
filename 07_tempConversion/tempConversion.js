const convertToCelsius = function(ftemp) {
  return((Math.round(((ftemp - 32) * 5/9) * 10) / 10));
};

const convertToFahrenheit = function(ctemp) {
  return((Math.round(((9/5 * ctemp) + 32) * 10) / 10));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
