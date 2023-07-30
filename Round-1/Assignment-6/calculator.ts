// calculator.ts

// Function to perform addition
function add(a: number, b: number): number {
    return a + b;
  }
  
  // Function to perform subtraction
  function subtract(a: number, b: number): number {
    return a - b;
  }
  
  // Function to perform multiplication
  function multiply(a: number, b: number): number {
    return a * b;
  }
  
  // Function to perform division
  function divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Cannot divide by zero.");
    }
    return a / b;
  }
  
  // Function to calculate the square of a number
  function square(a: number): number {
    return a * a;
  }
  
  // Function to update the results on the HTML page
  function updateResults(addRes: number, subRes: number, mulRes: number, divRes: number, squareRes: number): void {
    document.getElementById("addResult").textContent = `Addition: ${addRes}`;
    document.getElementById("subResult").textContent = `Subtraction: ${subRes}`;
    document.getElementById("mulResult").textContent = `Multiplication: ${mulRes}`;
    document.getElementById("divResult").textContent = `Division: ${divRes}`;
    document.getElementById("squareResult").textContent = `Square of Number: ${squareRes}`;
  }
  
  // Function to handle the button click event
  function calculate(): void {
    const num1 = parseFloat((document.getElementById("num1") as HTMLInputElement).value);
    const num2 = parseFloat((document.getElementById("num2") as HTMLInputElement).value);
  
    const addResult = add(num1, num2);
    const subResult = subtract(num1, num2);
    const mulResult = multiply(num1, num2);
  
    try {
      const divResult = divide(num1, num2);
      updateResults(addResult, subResult, mulResult, divResult, square(num1));
    } catch (error) {
      // If an error occurs during division (e.g., division by zero)
      updateResults(addResult, subResult, mulResult, error.message, square(num1));
    }
  }
  