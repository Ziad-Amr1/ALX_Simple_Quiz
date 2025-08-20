function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return b === 0 ? Infinity : a / b; } // بسيط حسب المطلوب

function getInputs() {
  const n1 = parseFloat(document.getElementById('number1').value) || 0;
  const n2 = parseFloat(document.getElementById('number2').value) || 0;
  return { n1, n2 };
}
function showResult(value) {
  document.getElementById('calculation-result').textContent = value;
}

document.getElementById('add').addEventListener('click', function () {
  const { n1, n2 } = getInputs();
  showResult(add(n1, n2));
});
document.getElementById('subtract').addEventListener('click', function () {
  const { n1, n2 } = getInputs();
  showResult(subtract(n1, n2));
});
document.getElementById('multiply').addEventListener('click', function () {
  const { n1, n2 } = getInputs();
  showResult(multiply(n1, n2));
});
document.getElementById('divide').addEventListener('click', function () {
  const { n1, n2 } = getInputs();
  showResult(divide(n1, n2));
});