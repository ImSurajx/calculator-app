// select all buttons
let buttons = document.querySelectorAll(".btn");
let inputField = document.querySelector("#input-field");
let operators = ["+", "-", "/", "*", "%"];

// expression
let expression = "";
let value = null;
let justEval = false;
// click event on each button
buttons.forEach(function (btn) {
    btn.addEventListener("click", (el) => {

        if (btn.dataset.action === "delete") {
            expression = expression.slice(0, -1);
            console.log(expression);
            inputField.value = expression;
        }
        else if (btn.dataset.action === "clear") {
            expression = "";
            console.log(expression);
            inputField.value = expression;

        } else if (btn.dataset.action === "equal") {
            let lastchar = expression.slice(-1);
            if (operators.includes(lastchar)) {
                expression = expression.slice(0, -1);
            }
            if (expression === "") {
                inputField.value = "";
            } else {
                value = eval(expression);
                inputField.value = value;
                justEval = true;
                expression = "";
            }
        } else {
            let currval = btn.dataset.value;
            if (justEval) {
                if (operators.includes(currval)) {
                    expression = value.toString();
                    inputField.value = expression;
                    justEval = false;
                } else {
                    expression = "";
                    justEval = false;
                }
            }
            let lastchar = expression.slice(-1);
            if (operators.includes(currval)) {
                // if expression is empty, allowed = '-'
                if (expression === "") {
                    if (currval === "-") {
                        expression += currval;
                    }
                }
                // checking if last value of expression is a char
                else if (operators.includes(lastchar)) {
                    expression = expression.slice(0, -1) + currval;
                }
                else {
                    expression += currval;
                }
                inputField.value = expression;
            } else {
                expression += currval;
                inputField.value = expression;
            }
        }
    });
});