// Copy countries array without mutation
const copiedCountries = [...countries];

// Sort the copied array and store in sortedCountries
const sortedCountries = copiedCountries.slice().sort();

// Sort the webTechs and mernStack arrays
const sortedWebTechs = webTechs.slice().sort();
const sortedMernStack = mernStack.slice().sort();

// Extract countries containing 'land'
const countriesWithLand = countries.filter(country => country.toLowerCase().includes('land'));
console.log('Countries containing "land":', countriesWithLand);

// Find the country with the highest number of characters
const longestCountryLength = Math.max(...countries.map(country => country.length));
const countryWithLongestName = countries.find(country => country.length === longestCountryLength);
console.log('Country with the highest number of characters:', countryWithLongestName);

// Extract countries containing only four characters
const countriesWithFourCharacters = countries.filter(country => country.length === 4);
console.log('Countries containing only four characters:', countriesWithFourCharacters);

// Extract countries containing two or more words
const countriesWithMultipleWords = countries.filter(country => country.includes(' '));
console.log('Countries containing two or more words:', countriesWithMultipleWords);

// Reverse the countries array and capitalize each country
const reversedAndCapitalizedCountries = countries.slice().reverse().map(country => country.toUpperCase());
console.log('Reversed and capitalized countries:', reversedAndCapitalizedCountries);
