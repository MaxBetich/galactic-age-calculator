import Calculator from "../src/calculator";

describe('Calculator', () => {
  
  let newCalculator;

  beforeEach(() => {
    newCalculator = new Calculator(30);
    newCalculator.ageConverter();
    newCalculator.pastBirthday(20);
  });

  test('should successfully create a new Calculator object with values for Earth, Mercury, Venus, Mars, and Jupiter ages', () => {
    expect(newCalculator.earthAge).toEqual(30);
  });

  test('should successfully convert earthAge to mercuryAge', () => {
    expect(newCalculator.mercuryAge).toEqual(125);
  });

  test('should successfully convert earthAge to venusAge', () => {
    expect(newCalculator.venusAge).toEqual(48);
  });

  test('should successfully convert earthAge to marsAge', () => {
    expect(newCalculator.marsAge).toEqual(15);
  });

  test('should successfully convert earthAge to jupiterAge', () => {
    expect(newCalculator.jupiterAge).toEqual(2);
  });

  test('should determine how many Earth years have passed since a prior birthday', () => {
    expect(newCalculator.passedEarthYears).toEqual(10);
  });

  test('should determine how many Mercury years have passed since a prior birthday', () => {
    expect(newCalculator.passedMercuryYears).toEqual(41.67);
  })
})