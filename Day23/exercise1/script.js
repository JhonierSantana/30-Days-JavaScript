const numbersContainer = document.getElementById("numbersContainer");
const numberRangeInput = document.getElementById("numberRange");
let numbers = [];

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function generateNumbers() {
    const numberRange = parseInt(numberRangeInput.value);
    if (!isNaN(numberRange) && numberRange >= 0) {
        numbersContainer.innerHTML = "";
        numbers = Array.from({ length: numberRange }, (_, i) => i); 
        displayNumbers(numbers);
    } else {
        alert("Please enter a valid non-negative number.");
    }
}

// Function to display numbers
function displayNumbers(numbersToDisplay) {
    for (let i = 0; i < numbersToDisplay.length; i++) {
        const number = numbersToDisplay[i];
        const numberElement = document.createElement("div");
        numberElement.classList.add("number");

        if (number % 2 === 0) {
            numberElement.classList.add("even");
        } else {
            numberElement.classList.add("odd");
        }

        if (isPrime(number)) {
            numberElement.classList.add("prime");
        }

        numberElement.textContent = number;
        numbersContainer.appendChild(numberElement);

        // Add click event listener to each number element
        numberElement.addEventListener("click", () => {
            console.log("Clicked on", number);
        });
    }
}