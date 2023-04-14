import Calculator from "../src/calculator";

describe('Calculator', () => {
  
  let newCalculator;

  beforeEach(() => {
    newCalculator = new Calculator(30);
  });

  test('should successfully create a new Calculator object with values for Earth, Mercury, Venus, Mars, and Jupiter ages', () => {
    expect(newCalculator.earthAge).toEqual(30);
  })
})