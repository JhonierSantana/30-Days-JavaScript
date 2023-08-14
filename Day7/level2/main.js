// Calculate the value of a linear equation ax + by + c = 0.
function solveLinEquation(a, b, c) {
    if (a === 0) {
      if (b === 0) {
        return c === 0 ? 'Infinite solutions' : 'No solution';
      }
      return `x = ${-c / b}`;
    }
    return `y = ${(-a * 1.0 / b)}x + ${(-c * 1.0 / b)}`;
  }
  
  // Calculate the values of a quadratic equation ax^2 + bx + c = 0.
  function solveQuadEquation(a, b, c) {
    if (a === 0) {
      if (b === 0) {
        return c === 0 ? 'Infinite solutions' : 'No solution';
      }
      return `x = ${-c / b}`;
    }
    
    const discriminant = b * b - 4 * a * c;
    
    if (discriminant > 0) {
      const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      return [root1, root2];
    } else if (discriminant === 0) {
      const root = -b / (2 * a);
      return [root];
    } else {
      return 'No real roots';
    }
  }
  
  // Declare a function to print each value of an array.
  function printArray(arr) {
    arr.forEach((value) => console.log(value));
  }
  
  // Show the current date and time in the specified format.
  function showDateTime() {
    const now = new Date();
    const formattedDate = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`;
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${formattedDate} ${hours}:${minutes}`;
  }
  
  // Swap the values of x and y.
  function swapValues(x, y) {
    [x, y] = [y, x];
    return { x, y };
  }
  
  // Reverse an array without using the reverse method.
  function reverseArray(arr) {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversed.push(arr[i]);
    }
    return reversed;
  }
  
  // Capitalize each value of an array.
  function capitalizeArray(arr) {
    return arr.map((value) => value.toUpperCase());
  }
  
  // Add an item to an array.
  function addItem(arr, item) {
    arr.push(item);
    return arr;
  }
  
  // Remove an item from an array by index.
  function removeItem(arr, index) {
    if (index >= 0 && index < arr.length) {
      arr.splice(index, 1);
    }
    return arr;
  }
  
  // Calculate the sum of numbers in a range.
  function sumOfNumbers(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;
  }
  
  // Calculate the sum of odd numbers in a range.
  function sumOfOdds(num) {
    let sum = 0;
    for (let i = 1; i <= num; i += 2) {
      sum += i;
    }
    return sum;
  }
  
  // Calculate the sum of even numbers in a range.
  function sumOfEven(num) {
    let sum = 0;
    for (let i = 2; i <= num; i += 2) {
      sum += i;
    }
    return sum;
  }
  
  // Count the number of evens and odds in a positive integer.
  function evensAndOdds(num) {
    let evenCount = 0;
    let oddCount = 0;
    while (num > 0) {
      if (num % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
      num = Math.floor(num / 10);
    }
    return `The number of odds are ${oddCount}.\nThe number of evens are ${evenCount}.`;
  }
  
  // Calculate the sum of any number of arguments.
  function sum(...args) {
    return args.reduce((total, num) => total + num, 0);
  }
  
  // Generate a random user IP address.
  function randomUserIp() {
    const parts = [];
    for (let i = 0; i < 4; i++) {
      parts.push(Math.floor(Math.random() * 256));
    }
    return parts.join('.');
  }
  
  // Generate a random MAC address.
  function randomMacAddress() {
    const macDigits = [];
    for (let i = 0; i < 6; i++) {
      macDigits.push(Math.floor(Math.random() * 256).toString(16).padStart(2, '0'));
    }
    return macDigits.join(':').toUpperCase();
  }
  
  // Generate a random hexadecimal number.
  function randomHexaNumberGenerator() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).toUpperCase()}`;
  }
  
  // Generate a seven-character random ID.
  function userIdGenerator() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < 7; i++) {
      id += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return id;
  }
  
  // Solve linear equation: 2x - 3y + 5 = 0
  console.log(solveLinEquation(2, -3, 5)); // Output: y = (2/3)x - (5/3)
  
  // Solve quadratic equation: x^2 - 4x + 4 = 0
  console.log(solveQuadEquation(1, -4, 4)); // Output: [2]
  
  // Print each value of an array
  printArray([1, 2, 3, 4, 5]);
  
  // Show current date and time
  console.log(showDateTime());
  
  // Swap values
  console.log(swapValues(3, 4)); // Output: { x: 4, y: 3 }
  
  // Reverse an array
  console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
  
  // Capitalize array values
  console.log(capitalizeArray(['apple', 'banana', 'cherry'])); // Output: ['APPLE', 'BANANA', 'CHERRY']
  
  // Add item to array
  console.log(addItem([1, 2, 3], 4)); // Output: [1, 2, 3, 4]
  
  // Remove item from array
  console.log(removeItem([1, 2, 3, 4], 2)); // Output: [1, 2, 4]
  
  // Calculate sum of numbers in a range
  console.log(sumOfNumbers(5)); // Output: 15
  
  // Calculate sum of odd numbers in a range
  console.log(sumOfOdds(5)); // Output: 9
  
  // Calculate sum of even numbers in a range
  console.log(sumOfEven(5)); // Output: 6
  
  // Count evens and odds
  console.log(evensAndOdds(12345)); // Output: The number of odds are 3. The number of evens are 2.
  
  // Calculate sum of arguments
  console.log(sum(1, 2, 3)); // Output: 6
  
  // Generate random user IP address
  console.log(randomUserIp()); // Output: '192.168.0.1'
  
  // Generate random MAC address
  console.log(randomMacAddress()); // Output: '8C:3A:E3:45:7F:9D'
  
  // Generate random hexadecimal number
  console.log(randomHexaNumberGenerator()); // Output: '#A1B2C3'
  
  // Generate random user ID
  console.log(userIdGenerator()); // Output: 'Ab1Cd2E'
  