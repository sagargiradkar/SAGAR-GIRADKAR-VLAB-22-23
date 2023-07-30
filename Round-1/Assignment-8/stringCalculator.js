function stringCalculator() {
    var inputString1 = document.getElementById("inputString1").value;
    var inputString2 = document.getElementById("inputString2").value;
    // Perform operations on the first string
    var slicedStr = inputString1.slice(2, 5); // Slicing characters from index 2 to 4 (exclusive)
    var lowerCaseStr = inputString1.toLowerCase(); // Convert to lowercase
    var upperCaseStr = inputString1.toUpperCase(); // Convert to uppercase
    var charAtIndex = inputString1.charAt(0); // Get the character at index 0
    // Concatenate the processed first string with the second string
    var result = slicedStr + lowerCaseStr + upperCaseStr + charAtIndex + inputString2;
    document.getElementById("result").textContent = "Result: " + result;
}
