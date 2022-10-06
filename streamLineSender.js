function generateTemperatureSensorValue() {
  return randomNumberGenerator(1, 120, 50);
}

function randomNumberGenerator(minValue, maxValue, numberOfItems) {
  return [...Array(numberOfItems).keys()].map(() => {
    return (Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);
  });
}

function generateChargeSensorValue() {
  return randomNumberGenerator(1, 40, 50);
}

module.exports = {
  generateTemperatureSensorValue,
  randomNumberGenerator,
  generateChargeSensorValue,
};
// console.log(randomNumberGenerator(1, 200, 6));
