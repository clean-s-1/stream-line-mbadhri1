// const capcon = require('capture-console');
const fs = require('fs');

const chargeValue = fileRead('chargeSensor.txt').toString().split(' ');
const tempValue = fileRead('tempSensor.txt').toString().split(' ');

function fileRead(fileName) {
  return fs.readFileSync(process.cwd() + '/' + fileName);
}

function getMinValue(stream) {
  return Math.min( ...stream );
}

function getMaxValue(stream) {
  return Math.max( ...stream );
}

function getSimpleMovingAverage(stream) {
  const smaValues = stream.slice(-5);
  // eslint-disable-next-line max-len
  const average = (smaValues) => smaValues.reduce( ( p, c ) => Number(p) + Number(c), 0 ) / smaValues.length;
  return average(smaValues);
}

console.log(getMinValue(chargeValue));
console.log(getMaxValue(chargeValue));
console.log(getSimpleMovingAverage(chargeValue));
console.log(getMinValue(tempValue));
console.log(getMaxValue(tempValue));
console.log(getSimpleMovingAverage(tempValue));
module.exports = {
  getMinValue,
  getMaxValue,
  getSimpleMovingAverage,
};
