import Calculator from "../src/calculator";

describe('Calculator', () => {
  
  let newCalculator;

  beforeEach(() => {
    newCalculator = new Calculator(30);
    newCalculator.ageConverter();
    newCalculator.pastBirthday(20);
    newCalculator.futureBirthday(40);
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
  });

  test('should determine how many Venus years have passed since a prior birthday', () => {
    expect(newCalculator.passedVenusYears).toEqual(16.13);
  });

  test('should determine how many Mars years have passed since a prior birthday', () => {
    expect(newCalculator.passedMarsYears).toEqual(5.32);
  });

  test('should determine how many Jupiter years have passed since a prior birthday', () => {
    expect(newCalculator.passedJupiterYears).toEqual(0.84);
  });

  test('should determine how many Earth years have yet to pass until a future birthday', () => {
    expect(newCalculator.futureEarthYears).toEqual(10);
  });

  test('should determine how many Mercury years have yet to pass until a future birthday', () => {
    expect(newCalculator.futureMercuryYears).toEqual(41.67);
  });

  test('should determine how many Venus years have yet to pass until a future birthday', () => {
    expect(newCalculator.futureVenusYears).toEqual(16.13);
  });

  test('should determine how many Mars years have passed since a prior birthday', () => {
    expect(newCalculator.futureMarsYears).toEqual(5.32);
  });

  test('should determine how many Jupiter years have passed since a prior birthday', () => {
    expect(newCalculator.futureJupiterYears).toEqual(0.84);
  });

  test('should return an array with the results of the users age on other planets', () => {
    const ageResults = newCalculator.ageConverter();
    expect(ageResults).toEqual(["Earth age = 30", "Mercury age = 125", "Venus age = 48", "Mars age = 15", "Jupiter age = 2"]);
  });

  test('should return an array with the results of the pastBirthday method', () => {
    const pastResults = newCalculator.pastBirthday(20);
    expect(pastResults).toEqual(["10 Earth years have passed", "41.67 Mercury years have passed", "16.13 Venus years have passed", "5.32 Mars years have passed", "0.84 Jupiter years have passed"]);
  });

  test('should return an array with the results of the futureBirthday method', () => {
    const futureResults = newCalculator.futureBirthday(40);
    expect(futureResults).toEqual(["10 Earth years have yet to pass", "41.67 Mercury years have yet to pass", "16.13 Venus years have yet to pass", "5.32 Mars years have yet to pass", "0.84 Jupiter years have yet to pass"]);
  });
})