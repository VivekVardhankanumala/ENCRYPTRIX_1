let result = document.getElementById('result');
let currentNumber = '';
let operator = '';
let resultDisplayed = false;

function appendToDisplay(value) {
  if (resultDisplayed) {
    result.value = '';
    resultDisplayed = false;
  }
  currentNumber += value;
  result.value += value;
}

function clearDisplay() {
  result.value = '';
  currentNumber = '';
}

function calculate() {
  result.value = eval(currentNumber);
  resultDisplayed = true;
}