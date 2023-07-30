function stringCalculator() {
    const inputString1 = document.getElementById("inputString1").value;
    const inputString2 = document.getElementById("inputString2").value;
  
    // Perform operations on the first string
    const slicedStr = inputString1.slice(2, 5); // Slicing characters from index 2 to 4 (exclusive)
    const lowerCaseStr = inputString1.toLowerCase(); // Convert to lowercase
    const upperCaseStr = inputString1.toUpperCase(); // Convert to uppercase
    const charAtIndex = inputString1.charAt(0); // Get the character at index 0
  
    // Concatenate the processed first string with the second string
    const result = slicedStr + lowerCaseStr + upperCaseStr + charAtIndex + inputString2;
    document.getElementById("result").textContent = "Result: " + result;
  }
  