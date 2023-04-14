import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calculator from './calculator';

function calculatorCreator(age) {
  const newCalculator = new Calculator(age);
  return newCalculator;
}

function displayAgeConverter() {
  const userAge = document.getElementById("earth-age").value;
  const newCalculator = calculatorCreator(userAge);
  const ageArray = newCalculator.ageConverter();
  let ulTag = document.createElement("ul");
  ageArray.forEach(element => {
    let liTag = document.createElement("li");
    liTag.append(element);
    ulTag.append(liTag);
  })
  document.getElementById("output").append(ulTag);
}

