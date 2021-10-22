const submitButton = document.getElementById('submitBtn');
const resultNumber = document.getElementById('result');

/**
 * Calc sum of number 1 and 2
 * @returns number
 */
const calcAdd = () => {
  const number1 = document.getElementById('number1').value;
  const number2 = document.getElementById('number2').value;
  return number1 * 1 - number2 * 1; // Have to *1 to convert string to number
};

const showResult = () => {
  const resultEle = document.getElementById('result');
  resultEle.innerHTML = `${calcAdd()}`;
};

submitButton.addEventListener('click', () => {
  showResult();
});
