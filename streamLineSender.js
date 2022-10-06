const fs = require('fs');

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


saveValueInConsole(generateChargeSensorValue().join(' ').trim(), './chargeSensor.txt');
saveValueInConsole(generateTemperatureSensorValue().join(' ').trim(), './tempSensor.txt');

function saveValueInConsole(value, fileName) {
  fs.writeFileSync(fileName, value);
}
module.exports = {
  generateTemperatureSensorValue,
  randomNumberGenerator,
  generateChargeSensorValue,
};


