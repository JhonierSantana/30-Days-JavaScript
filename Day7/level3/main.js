// Modify userIdGenerator function to generate user IDs based on user input.
function userIdGeneratedByUser() {
    const numberOfCharacters = parseInt(prompt('Enter number of characters:'));
    const numberOfIds = parseInt(prompt('Enter number of IDs to generate:'));
    const ids = [];
  
    for (let i = 0; i < numberOfIds; i++) {
      let id = '';
      for (let j = 0; j < numberOfCharacters; j++) {
        id += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
      }
      ids.push(id);
    }
  
    return ids.join('\n');
  }
  
  // Generate a random RGB color.
  function rgbColorGenerator() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  }
  
  // Generate an array of hexadecimal colors.
  function arrayOfHexaColors(num) {
    const colors = [];
    for (let i = 0; i < num; i++) {
      const hexColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      colors.push(hexColor);
    }
    return colors;
  }
  
  // Generate an array of RGB colors.
  function arrayOfRgbColors(num) {
    const colors = [];
    for (let i = 0; i < num; i++) {
      colors.push(rgbColorGenerator());
    }
    return colors;
  }
  
  // Convert hexa color to rgb.
  function convertHexaToRgb(hexColor) {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    return `rgb(${r},${g},${b})`;
  }
  
  // Convert rgb color to hexa.
  function convertRgbToHexa(rgbColor) {
    const match = rgbColor.match(/\d+/g);
    if (!match) return '';
  
    const hexColor = match.map((val) => parseInt(val).toString(16).padStart(2, '0'));
    return `#${hexColor.join('')}`;
  }
  
  // Generate hexa or rgb colors.
  function generateColors(type, num) {
    if (type === 'hexa') {
      return arrayOfHexaColors(num);
    } else if (type === 'rgb') {
      return arrayOfRgbColors(num);
    }
  }
  
  // Shuffle an array.
  function shuffleArray(arr) {
    const shuffledArr = [...arr];
    for (let i = shuffledArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
    }
    return shuffledArr;
  }
  
  // Calculate factorial of a number.
  function factorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    }
    return num * factorial(num - 1);
  }
  
  // Check if a value is empty.
  function isEmpty(value) {
    if (typeof value === 'undefined' || value === null || value === '') {
      return true;
    }
    return false;
  }
  
  // Sum of an array.
  function sum(...args) {
    return args.reduce((total, num) => total + num, 0);
  }
  
  // Sum of array items.
  function sumOfArrayItems(arr) {
    if (!arr.every((item) => typeof item === 'number')) {
      return 'Array contains non-number items.';
    }
    return arr.reduce((total, num) => total + num, 0);
  }
  
  // Average of array items.
  function average(arr) {
    if (!arr.every((item) => typeof item === 'number')) {
      return 'Array contains non-number items.';
    }
    return sumOfArrayItems(arr) / arr.length;
  }
  
  // Modify the fifth item of an array.
  function modifyArray(arr, newItem) {
    if (arr.length < 5) {
      return 'Item not found';
    }
    arr[4] = newItem;
    return arr;
  }
  
  // Check if a number is prime.
  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // Check if all items in an array are unique.
  function areAllItemsUnique(arr) {
    const uniqueItems = new Set(arr);
    return uniqueItems.size === arr.length;
  }
  
  // Check if all items in an array have the same data type.
  function areAllItemsSameType(arr) {
    const dataType = typeof arr[0];
    return arr.every((item) => typeof item === dataType);
  }
  
  // Check if a variable name is valid.
  function isValidVariable(variableName) {
    const validRegex = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
    return validRegex.test(variableName);
  }
  
  // Generate an array of seven unique random numbers.
  function sevenRandomNumbers() {
    const numbers = new Set();
    while (numbers.size < 7) {
      numbers.add(Math.floor(Math.random() * 10));
    }
    return [...numbers];
  }
  
  // Reverse the countries array and return a copy.
  function reverseCountries(countries) {
    return countries.slice().reverse();
  }
  