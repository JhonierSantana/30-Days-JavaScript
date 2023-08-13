const letterElement = document.getElementById("letter");
const numberElement = document.getElementById("number");

// Function to display the letter and corresponding number when a key is pressed
function displayLetterAndNumber(event) {
    const key = event.key;
    letterElement.textContent = `Press: ${key}`;
    numberElement.textContent = `Number: ${event.keyCode}`;
}

// Add event listener to the document to capture key presses
document.addEventListener("keydown", displayLetterAndNumber);