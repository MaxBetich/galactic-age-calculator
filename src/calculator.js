export default class Calculator {
  constructor(age) {
    this.earthAge = age;
    this.mercuryAge = 0;
    this.venusAge = 0;
    this.marsAge = 0;
    this.jupiterAge = 0;    
  }
  
  ageConverter() {
    let age = this.earthAge;
    this.mercuryAge = Math.floor(age / 0.24);
    this.venusAge = Math.floor(age / 0.62);
    this.marsAge = Math.floor(age / 1.88);
    this.jupiterAge = Math.floor(age / 11.86);
  }
}