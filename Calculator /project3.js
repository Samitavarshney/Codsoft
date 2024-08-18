document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    const clearButton = document.getElementById('clear');
    const equalsButton = document.getElementById('equals');

    let currentInput = '';
    let operator = '';
    let firstOperand = '';
    let secondOperand = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (value === '+' || value === '-' || value === '*' || value === '/') {
                operator = value;
                firstOperand = currentInput;
                currentInput = '';
            } else {
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });

    equalsButton.addEventListener('click', () => {
        secondOperand = currentInput;

        if (operator && firstOperand !== '' && secondOperand !== '') {
            const result = calculate(parseFloat(firstOperand), parseFloat(secondOperand), operator);
            display.textContent = result;
            currentInput = result;
            operator = '';
            firstOperand = '';
            secondOperand = '';
        }
    });

    clearButton.addEventListener('click', () => {
        currentInput = '';
        operator = '';
        firstOperand = '';
        secondOperand = '';
        display.textContent = '0';
    });

    function calculate(a, b, operator) {
        switch (operator) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b;
            default:
                return 0;
        }
    }
});
