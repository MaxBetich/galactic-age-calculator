import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calculator from './calculator';

function calculatorCreator(age) {
  const newCalculator = new Calculator(age);
  return newCalculator;
}

function ulGenerator(element) {
  let ulTag = document.createElement("ul");
  element.forEach(element => {
    let liTag = document.createElement("li");
    liTag.append(element);
    ulTag.append(liTag);
  });
  document.getElementById("output").append(ulTag);
}

function displayAgeConverter() {
  const userAge = document.getElementById("earth-age").value;
  const newCalculator = calculatorCreator(userAge);
  const ageArray = newCalculator.ageConverter();
  ulGenerator(ageArray);
}

function displayPastBirthday() {
  const userAge = document.getElementById("earth-age").value;
  const pastAge = document.getElementById("past-age").value;
  const newCalculator = calculatorCreator(userAge);
  const ageArray = newCalculator.pastBirthday(pastAge);
  ulGenerator(ageArray);
}

function displayFutureBirthday() {
  const userAge = document.getElementById("earth-age").value;
  const futureAge = document.getElementById("future-age").value;
  const newCalculator = calculatorCreator(userAge);
  const ageArray = newCalculator.futureBirthday(futureAge);
  ulGenerator(ageArray);
}

function handleFormSubmission(event) {
  event.preventDefault();
  document.getElementById("output").innerText = null;
  const input1 = document.getElementById("earth-age").value;
  const input2 = document.getElementById("past-age").value;
  const input3 = document.getElementById("future-age").value;
  if (input1 != undefined) {
    displayAgeConverter();
  }
  if (input2 != undefined) {
    displayPastBirthday();
  }
  if (input3 != undefined) {
    displayFutureBirthday();
  }
}

document.querySelector("form").addEventListener("submit", handleFormSubmission);