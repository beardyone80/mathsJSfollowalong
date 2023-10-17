

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
    // handle the button clicks
});