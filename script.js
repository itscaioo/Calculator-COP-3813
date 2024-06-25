let currentInput = '';
let currentOperation = null;
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function setOperation(operation) {
    if (currentInput === '') return;
    if (currentOperation !== null) calculateResult();
    previousInput = currentInput;
    currentOperation = operation;
    currentInput = '';
}

function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;
    switch (currentOperation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        case '^':
            result = Math.pow(prev, current);
            break;
        default:
            return;
    }
    currentInput = result;
    currentOperation = null;
    previousInput = '';
    updateDisplay();
}

function clearResult() {
    currentInput = '';
    currentOperation = null;
    previousInput = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('result').value = currentInput;
}

function calculateSquareRoot() {
    if (currentInput === '') return;
    currentInput = Math.sqrt(parseFloat(currentInput));
    updateDisplay();
}

function calculateSine() {
    if (currentInput === '') return;
    currentInput = Math.sin(parseFloat(currentInput));
    updateDisplay();
}

function calculateCosine() {
    if (currentInput === '') return;
    currentInput = Math.cos(parseFloat(currentInput));
    updateDisplay();
}
