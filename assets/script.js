

document.addEventListener("DOMContentLoaded", function () {

    const display = document.getElementById("display");
    const buttons = ["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "C", "0", "=", "/",];
    const calculatorButtons = document.getElementById("calculator-buttons");

    // create calculator buttons
    buttons.forEach(button => {
        const btnElement = document.createElement("button");
        btnElement.textContent = button;
        btnElement.classList.add("btn", button === "=" || button === "C" ? "btn-danger" : "btn-primary") //change colors of = and C

        //   this is equiv to above to change colors of certain button  btnElement.classList.add("btn");
        //     if (button === "=" || button = "C") {
        //     btnElement.classList.add("btn-danger");
        // } else {
        //     btnElement.classList.add("btn-primary");
        // }

        btnElement.addEventListener("click", function () {
            handleButtonClick(button);
        });
        calculatorButtons.appendChild(btnElement);
    });

    // init the calculation variables
    let operand1 = "";
    let operand2 = "";
    let operator = "";

    // handle the button clicks
    function handleButtonClick(button) {
        // code for handling button clicks
        if (button >= "0" && button <= "9") {
            operand2 += button;
            display.value = operand2;
        } else if (["+","-","*","/"].includes(button)) {
            operator = button;
            operand1 = operand2;
            operand2 = "";
        } else if (button === "C") {
            operand1 = operand2 = operator = "";
            display.value = "";
        } else if (button === "=") {
            let result = 0;
            operand1 = parseFloat(operand1);
            operand2 = parseFloat(operand2);
            switch (operator) {
                case "+":
                    result = operand1 + operand2;
                    break;
                case "-":
                    result = operand1 - operand2;
                    break;
                case "*":
                    result = operand1 * operand2;
                    break;
                case "/":
                    result = operand1 / operand2;
                    break;                    
            };
            display.value = result;
            operand1 = result;
            operand2 = "";
        }
    }
});