// Generate a random ID with any number of characters
function generateRandomId(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters[randomIndex];
    }
    return randomId;
  }
  
  console.log('Random ID:', generateRandomId(13));
  console.log('Random ID:', generateRandomId(25));
  
  // Generate a random hexadecimal number
  function generateRandomHexNumber() {
    const hexDigits = '0123456789ABCDEF';
    let hexNumber = '#';
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * hexDigits.length);
      hexNumber += hexDigits[randomIndex];
    }
    return hexNumber;
  }
  
  console.log('Random Hexadecimal Number:', generateRandomHexNumber());
  
  // Generate a random RGB color number
  function generateRandomRgbColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
  }
  
  console.log('Random RGB Color:', generateRandomRgbColor());
  
  // Create an array of countries in uppercase
  const uppercaseCountries = countries.map(country => country.toUpperCase());
  console.log('Uppercase Countries:', uppercaseCountries);
  
  // Create an array of countries' lengths
  const countriesLengths = countries.map(country => country.length);
  console.log('Countries Lengths:', countriesLengths);
  
  // Create an array of arrays with country name, acronym, and length
  const countriesInfo = countries.map(country => [country, country.slice(0, 3).toUpperCase(), country.length]);
  console.log('Countries Info:', countriesInfo);
  
  // Find countries containing 'land'
  const countriesWithLand = countries.filter(country => country.toLowerCase().includes('land'));
  if (countriesWithLand.length > 0) {
    console.log('Countries containing "land":', countriesWithLand);
  } else {
    console.log('All these countries are without land');
  }
  
  // Find countries ending with 'ia'
  const countriesEndsWithIa = countries.filter(country => country.toLowerCase().endsWith('ia'));
  if (countriesEndsWithIa.length > 0) {
    console.log('Countries ending with "ia":', countriesEndsWithIa);
  } else {
    console.log('These are countries ends without "ia"');
  }
  
  // Find the country containing the biggest number of characters
  const longestCountry = countries.reduce((longest, country) => (country.length > longest.length ? country : longest), '');
  console.log('Country with the biggest number of characters:', longestCountry);
  
  // Find countries containing only 5 characters
  const countriesWith5Characters = countries.filter(country => country.length === 5);
  console.log('Countries containing only 5 characters:', countriesWith5Characters);
  
  // Find the longest word in the webTechs array
  const longestWebTech = webTechs.reduce((longest, tech) => (tech.length > longest.length ? tech : longest), '');
  console.log('Longest word in webTechs array:', longestWebTech);
  
  // Create an acronym from the mernStack array
  const mernAcronym = mernStack.join('');
  console.log('MERN Acronym:', mernAcronym);
  
  // Iterate through the webTechs array using a for loop
  for (let tech of webTechs) {
    console.log(tech);
  }
  
  // Reverse the fruit array without using reverse method
  const fruits = ['banana', 'orange', 'mango', 'lemon'];
  const reversedFruits = [];
  for (let i = fruits.length - 1; i >= 0; i--) {
    reversedFruits.push(fruits[i]);
  }
  console.log('Reversed Fruits:', reversedFruits);
  
  // Print all elements of the fullStack array
  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ];
  
  for (let stack of fullStack) {
    for (let item of stack) {
      console.log(item);
    }
  }
  