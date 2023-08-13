// const numbers = [1, 2, 3, 4];

// numbers.forEach((num) => {
//   console.log(num);
// });


function printArrayElements(array) {
    array.forEach((element) => {
      console.log(element);
    });
  }

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'Russia']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
// Use forEach to console.log each country in the countries array.
// Use forEach to console.log each name in the names array.
// Use forEach to console.log each number in the numbers array.
printArrayElements(countries);
printArrayElements(names);
printArrayElements(numbers);

// Use map to create a new array by changing each country to uppercase in the countries array.
const countryUper = countries.map((country) => {
    return country.toUpperCase();
});
console.log(countryUper);


// Use map to create an array of countries length from countries array.
const countryLengths = countries.map((country) => {
    return country.length;
});
console.log(countryLengths);


// Use map to create a new array by changing each number to square in the numbers array
const squaredNumbers = numbers.map((number) => {
    return number ** 2;
});
console.log(squaredNumbers);


// Use map to change to each name to uppercase in the names array
const namesUper = names.map((name) => {
    return name.toUpperCase();
});
console.log(namesUper);


// Use map to map the products array to its corresponding prices.
const productPrices = products.map((product) => {
    return product.price;
});
console.log(productPrices);


// Use filter to filter out countries containing land.
const countriesLand = countries.filter((country => {
    return country.toLowerCase().includes('land');
}))
console.log(countriesLand);


// Use filter to filter out countries having six character.
const filteredCountries = countries.filter((country) => {
    return country.length === 6;
});
console.log(filteredCountries);


// Use filter to filter out countries containing six letters and more in the country array.
const countrisLen = countries.filter((country) => {
return country.length >= 6;
});
console.log(countrisLen);


// Use filter to filter out country start with 'E';
const countriesStars = countries.filter((country) => {
return country.startsWith('E');
});
console.log(countriesStars);


// Use filter to filter out only prices with values.
const filteredPrices = products.filter((product) => {
    return typeof product.price === 'number' && product.price !== '';
});
console.log(filteredPrices);


// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
function getStringLists(array) {
    return array.filter((item) => {
        return typeof item === 'string';
    });
}


// Use reduce to sum all the numbers in the numbers array.
const reduceNum =  numbers.reduce((a, b) => {
    return a + b;
}, 0);
console.log(reduceNum);


// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const countries2 = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];

const concatenatedSentence = countries2.reduce((a, b, index) => {
  if (index === countries2.length - 1) {
    return a + 'and ' + b + ' are north European countries';
  } else {
    return a + b + ', ';
  }
}, '');
console.log(concatenatedSentence);


// Use some to check if some names' length greater than seven in names array
const someName = names.some((someN) => {
    return someN.length > 7;
});
console.log(someName);


// Use every to check if all the countries contain the word land
const everyContries = countries.every((everyC) => {
    return everyC.toLowerCase().includes("land");
});
console.log(everyContries);


// Use find to find the first country containing only six letters in the countries array
const countryWithSixLetters = countries.find((country) => {
  return country.length === 6;
});
console.log(countryWithSixLetters);


// Use findIndex to find the position of the first country containing only six letters in the countries array
const findIndexCountry = countries.findIndex((country) => {
    return country.length === 6;
});  
console.log(findIndexCountry);


// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const findNorway = countries.findIndex((country) => {
    return country.includes("Norwar");
})
console.log(findNorway);

// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const findNorway2 = countries.findIndex((country) => {
    return country.includes("Russia");
})
console.log(findNorway2);


// Exercises: Level 2
// Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const totalPrice = products
  .filter((product) => typeof product.price === 'number' && product.price !== 0) 
  .map((product) => product.price)
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0); 
console.log(totalPrice);


// Find the sum of price of products using only reduce reduce(callback))
const totalPrice2 = products.reduce((accumulator, currentValue) => {
    const price = Number(currentValue.price);
    if (!isNaN(price)) {
      return accumulator + price;
    }
    return accumulator;
  }, 0);
  
  console.log(totalPrice2);


// Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
function categorizeCountries(pattern) {
  const filCountries = countries.filter((country) => {
    return country.toLowerCase().includes(pattern.toLowerCase())
  });
  return filCountries;
}

const countriesWithLand = categorizeCountries('land');
console.log(countriesWithLand);

const countriesWithIA = categorizeCountries('ia');
console.log(countriesWithIA);

const countriesWithIsland = categorizeCountries('island');
console.log(countriesWithIsland);

const countriesWithStan = categorizeCountries('stan');
console.log(countriesWithStan);


// Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.

function countStartingLetters(countries) {
  const startingLetters = {};
  
  countries.forEach((country) => {
    const firstLetter = country.charAt(0).toUpperCase();
    
    if (startingLetters[firstLetter]) {
      startingLetters[firstLetter]++;
    } else {
      startingLetters[firstLetter] = 1;
    }
  });
  
  const result = Object.entries(startingLetters).map(([letter, count]) => ({
    letter,
    count,
  }));
  
  return result;
}

const startingLettersCount = countStartingLetters(countries);
console.log(startingLettersCount);


// Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
// const countries3 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland', 'Netherlands', 'Germany', 'France', 'Spain', 'Italy', 'Portugal', 'Greece', 'Belgium', 'Switzerland', 'Austria'];

// function getFirstTenCountries() {
//   const firstTenCountries = countries3.slice(0, 10); 
//   return firstTenCountries;
// }


// const result = getFirstTenCountries();
// console.log(result);


// function findMostFrequentInitialLetter() {
//   const letterCounts = {};

//   countries3.forEach((country) => {
//     const initialLetter = country.charAt(0).toUpperCase();

//     if (letterCounts[initialLetter]) {
//       letterCounts[initialLetter]++;
//     } else {
//       letterCounts[initialLetter] = 1;
//     }
//   });

//   const mostFrequentLetter = Object.keys(letterCounts).reduce((a, b) =>
//     letterCounts[a] > letterCounts[b] ? a : b
//   );

//   return mostFrequentLetter;
// }


// const mostFrequentInitialLetter = findMostFrequentInitialLetter();
// console.log(mostFrequentInitialLetter);
