const isPrime = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }
    return true;
  };
  const container = document.getElementById("numberContainer");

  for (let i = 0; i <= 101; i++) {
    const numberElement = document.createElement("div");
    numberElement.classList.add("number");
    numberElement.textContent = i;

    if (i % 2 === 0) {
      numberElement.classList.add("even");
    } else {
      numberElement.classList.add("odd");
    }

    if (isPrime(i)) {
      numberElement.classList.add("prime");
    }

    container.appendChild(numberElement);
  }