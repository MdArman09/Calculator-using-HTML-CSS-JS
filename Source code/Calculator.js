document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('.display');

    function updateDisplay(value) {
        display.textContent = value;
    }

    function calculate() {
        try {
            updateDisplay(eval(display.textContent));
        } catch (error) {
            updateDisplay('Error');
        }
    }

    function clearDisplay() {
        updateDisplay('0');
    }

    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', () => {
            const buttonValue = button.value;

            if (button.classList.contains('clear')) {
                clearDisplay();
            } else if (button.classList.contains('equal')) {
                calculate();
            } else {
                display.textContent = display.textContent === '0' ? buttonValue : display.textContent + buttonValue;
            }
        });
    });
});
