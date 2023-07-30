// calculator.ts
// Function to perform addition
function add(a, b) {
    return a + b;
}
// Function to perform subtraction
function subtract(a, b) {
    return a - b;
}
// Function to perform multiplication
function multiply(a, b) {
    return a * b;
}
// Function to perform division
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero.");
    }
    return a / b;
}
// Function to calculate the square of a number
function square(a) {
    return a * a;
}
// Function to update the results on the HTML page
function updateResults(addRes, subRes, mulRes, divRes, squareRes) {
    document.getElementById("addResult").textContent = "Addition: ".concat(addRes);
    document.getElementById("subResult").textContent = "Subtraction: ".concat(subRes);
    document.getElementById("mulResult").textContent = "Multiplication: ".concat(mulRes);
    document.getElementById("divResult").textContent = "Division: ".concat(divRes);
    document.getElementById("squareResult").textContent = "Square of Number: ".concat(squareRes);
}
// Function to handle the button click event
function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var addResult = add(num1, num2);
    var subResult = subtract(num1, num2);
    var mulResult = multiply(num1, num2);
    try {
        var divResult = divide(num1, num2);
        updateResults(addResult, subResult, mulResult, divResult, square(num1));
    }
    catch (error) {
        // If an error occurs during division (e.g., division by zero)
        updateResults(addResult, subResult, mulResult, error.message, square(num1));
    }
}
