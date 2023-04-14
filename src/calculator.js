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
    const returnArray = ["Earth age = " + this.earthAge, "Mercury age = " + this.mercuryAge, "Venus age = " + this.venusAge, "Mars age = " + this.marsAge, "Jupiter age = " + this.jupiterAge];
    return returnArray;
  }

  pastBirthday(birthday) {
    const age = this.earthAge;
    const pastAge = birthday;
    this.passedEarthYears = parseFloat((age - pastAge).toFixed(2));
    this.passedMercuryYears = parseFloat(((age - pastAge) / 0.24).toFixed(2));
    this.passedVenusYears = parseFloat(((age - pastAge) / 0.62).toFixed(2));
    this.passedMarsYears = parseFloat(((age - pastAge) / 1.88).toFixed(2));
    this.passedJupiterYears = parseFloat(((age - pastAge) / 11.86).toFixed(2));
    const returnArray = [this.passedEarthYears + " Earth years have passed", this.passedMercuryYears + " Mercury years have passed", this.passedVenusYears + " Venus years have passed", this.passedMarsYears + " Mars years have passed", this.passedJupiterYears + " Jupiter years have passed"];
    return returnArray;
  }

  futureBirthday(birthday) {
    const age = this.earthAge;
    const futureAge = birthday;
    this.futureEarthYears = parseFloat((futureAge - age).toFixed(2));
    this.futureMercuryYears = parseFloat(((futureAge - age) / 0.24).toFixed(2));
    this.futureVenusYears = parseFloat(((futureAge - age) / 0.62).toFixed(2));
    this.futureMarsYears = parseFloat(((futureAge - age) / 1.88).toFixed(2));
    this.futureJupiterYears = parseFloat(((futureAge - age) / 11.86).toFixed(2));
    const returnArray = [this.futureEarthYears + " Earth years have yet to pass", this.futureMercuryYears + " Mercury years have yet to pass", this.futureVenusYears + " Venus years have yet to pass", this.futureMarsYears + " Mars years have yet to pass", this.futureJupiterYears + " Jupiter years have yet to pass"];
    return returnArray;
  }
}