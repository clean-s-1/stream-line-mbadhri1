const {expect} = require('chai');
const {generateChargeSensorValue,
  randomNumberGenerator,
  generateTemperatureSensorValue} = require('../streamLineSender');
describe('should test stream line sender readings ', () => {
  const tempValue = generateChargeSensorValue();
  const chargeValue = generateTemperatureSensorValue();
  const randomValues = randomNumberGenerator(1, 100, 100);

  it('should generate 50 tempearture readings', () => {
    expect(tempValue.length).to.equal(50);
  });
  it('should generate tempearture values between 1 and 40 ', () => {
    const valueInRange = tempValue.every((value) => value>=1 && value <= 40);
    expect(valueInRange).to.equal(true);
  });
  it('should generate 50 charge readings', () => {
    expect(chargeValue.length).to.equal(50);
  });
  it('should generate charge values between 1 and 120 ', () => {
    const valueInRange = chargeValue.every((value) => value>=1 && value <= 120);
    expect(valueInRange).to.equal(true);
  });
  it('should generate random values between 1 and 100 and 100 items ', () => {
    const valueInRange = randomValues.every((value) => value>=1 && value <= 100);
    expect(valueInRange).to.equal(true);
    expect(randomValues.length).to.equal(100);
  });
});
