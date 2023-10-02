// Sample array of numbers
const numbers = [1, 2, 3, 4, 5];

// Display the original array
const originalArrayElement = document.getElementById("original-array");
originalArrayElement.innerHTML = numbers
  .map((number) => `<li>${number}</li>`)
  .join("");

// Function to square a number
function squareNumber(number) {
  return number * number;
}

// Use the map() method to square each number and display the squared values
const squaredValuesElement = document.getElementById("squared-values");
const squaredNumbers = numbers.map(squareNumber);
squaredValuesElement.innerHTML = squaredNumbers
  .map((number) => `<li>${number}</li>`)
  .join("");

function doubledNumber(number) {
  return number + number;
}

const doubledValuesElement = document.getElementById("doubled-values");
const doubledNumbers = numbers.map(doubledNumber);
doubledValuesElement.innerHTML = doubledNumbers
  .map((number) => `<li>${number}</li>`)
  .join("");
