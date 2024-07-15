// script.js
document.addEventListener('DOMContentLoaded', () => {
    const expressionElement = document.getElementById('expression');
    const resultElement = document.getElementById('result');
    const buttons = document.querySelectorAll('.btn');

    let expression = '';
    let result = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (value === 'clear') {
                expression = '';
                result = '';
            } else if (value === 'del') {
                expression = expression.slice(0, -1);
            } else if (value === 'enter') {
                try {
                    result = eval(expression.replace('√', 'Math.sqrt').replace('sin', 'Math.sin').replace('cos', 'Math.cos').replace('tan', 'Math.tan').replace('log', 'Math.log'));
                } catch {
                    result = 'Error';
                }
            } else if (value === 'ans') {
                expression += result;
            } else if (value === '+/-') {
                expression = expression ? String(-parseFloat(expression)) : '-';
            } else {
                expression += value;
            }

            expressionElement.textContent = expression;
            resultElement.textContent = result || '0';
        });
    });
});
