document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    let currentInput = '';
    let fullExpression = '';

    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.innerText;

            if (value === 'AC') {
                currentInput = '';
                fullExpression = '';
                display.innerText = '0';
            } else if (value === '=') {
                try {
                    // Evaluate the expression, including handling square operation
                    fullExpression = fullExpression.replace(/x²/g, '**2');
                    currentInput = eval(fullExpression).toString();
                    display.innerText = currentInput;
                    fullExpression = currentInput;
                } catch (e) {
                    display.innerText = 'Error';
                    currentInput = '';
                    fullExpression = '';
                }
            } else if (value === 'x²') {
                // Handle square operation
                if (currentInput) {
                    fullExpression += '**2';
                    display.innerText = fullExpression;
                    currentInput = ''; // Clear current input after adding square operation
                }
            } else if (['+', '-', '*', '/', '%'].includes(value)) {
                if (currentInput || fullExpression) {
                    fullExpression += value;
                    display.innerText = fullExpression;
                    currentInput = ''; // Clear current input after adding an operator
                }
            } else {
                currentInput += value;
                fullExpression += value;
                display.innerText = fullExpression;
            }
        });
    });
});
