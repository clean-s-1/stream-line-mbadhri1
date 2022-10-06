const {expect} = require('chai');
const {getMinValue, getMaxValue, getSimpleMovingAverage} = require('../streamLineReceiver');
describe('should test stream line sender readings ', () => {
  const stream = [
    13, 111, 12, 58, 115, 85, 16, 27, 8, 97, 2,
    14, 95, 114, 24, 76, 110, 84, 102, 79, 53, 86,
    107, 55, 36, 42, 111, 50, 106, 88, 39, 70, 47,
    93, 56, 60, 109, 197, 62, 28, 46, 35, 34, 9,
    52, 11, 15, 12, 95, 28,
  ];
  const min = getMinValue(stream);
  const max = getMaxValue(stream);
  const average = getSimpleMovingAverage(stream);
  it('should return min value correctly', () => {
    expect(min).to.equal(2);
  });
  it('should return max value correctly', () => {
    expect(max).to.equal(197);
  });
  it('should generate average readings correctly', () => {
    expect(average).to.equal(32.2);
  });
});
