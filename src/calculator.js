export default class Calculator {
  constructor(age) {
    this.earthAge = age;
    this.mercuryAge = 0;
    this.venusAge = 0;
    this.marsAge = 0;
    this.jupiterAge = 0;
    this.passedEarthYears = 0;
    this.passedMercuryYears = 0;
    this.passedVenusYears = 0;
    this.passedMarsYears = 0;
    this.passedJupiterYears = 0;
    this.futureEarthYears = 0;
    this.futureMercuryYears = 0;
    this.futureVenusYears = 0;
    this.futureMarsYears = 0;
    this.futureJupiterYears = 0;
  }
  
  ageConverter() {
    const age = this.earthAge;
    this.mercuryAge = Math.floor(age / 0.24);
    this.venusAge = Math.floor(age / 0.62);
    this.marsAge = Math.floor(age / 1.88);
    this.jupiterAge = Math.floor(age / 11.86);
  }

  pastBirthday(birthday) {
    const age = this.earthAge;
    const pastAge = birthday;
    this.passedEarthYears = parseFloat((age - pastAge).toFixed(2));
    this.passedMercuryYears = parseFloat(((age - pastAge) / 0.24).toFixed(2));
    this.passedVenusYears = parseFloat(((age - pastAge) / 0.62).toFixed(2));
    this.passedMarsYears = parseFloat(((age - pastAge) / 1.88).toFixed(2));
    this.passedJupiterYears = parseFloat(((age - pastAge) / 11.86).toFixed(2));
  }

  futureBirthday(birthday) {
    const age = this.earthAge;
    const futureAge = birthday;
    this.futureEarthYears = parseFloat((futureAge - age).toFixed(2));
    this.futureMercuryYears = parseFloat(((futureAge - age) / 0.24).toFixed(2));
    this.futureVenusYears = parseFloat(((futureAge - age) / 0.62).toFixed(2));
    this.futureMarsYears = parseFloat(((futureAge - age) / 1.88).toFixed(2));
    this.futureJupiterYears = parseFloat(((futureAge - age) / 11.86).toFixed(2));
  }
}