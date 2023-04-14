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
    this.mercuryAge = age / 0.24;
  };
}