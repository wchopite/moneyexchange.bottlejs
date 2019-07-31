const conversor = {};

conversor.convert = (value, factor) => {
  let newValue = 0;
  return function round(operator, roundTo) {
    // eslint-disable-next-line no-eval
    newValue = eval(`${value} ${operator} ${factor}`).toFixed(roundTo);
    return Number(newValue);
  };
};

module.exports = conversor;
