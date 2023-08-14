// Declare an empty array
const emptyArray = [];

// Declare an array with more than 5 elements
const arrayWithElements = [1, 2, 3, 4, 5, 6, 7];

// Find the length of your array
console.log(`Length of emptyArray: ${emptyArray.length}`);
console.log(`Length of arrayWithElements: ${arrayWithElements.length}`);

// Get the first item, the middle item and the last item of the array
console.log(`First item of arrayWithElements: ${arrayWithElements[0]}`);
console.log(`Middle item of arrayWithElements: ${arrayWithElements[Math.floor(arrayWithElements.length / 2)]}`);
console.log(`Last item of arrayWithElements: ${arrayWithElements[arrayWithElements.length - 1]}`);

// Declare an array with mixed data types
const mixedDataTypes = ['Hello', 42, true, null, undefined, { name: 'John' }];

// Find the length of the mixedDataTypes array
console.log(`Length of mixedDataTypes: ${mixedDataTypes.length}`);

// Declare an array of IT companies
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// Print the array using console.log()
console.log(itCompanies);

// Print the number of companies in the array
console.log(`Number of companies: ${itCompanies.length}`);

// Print the first company, middle and last company
console.log(`First company: ${itCompanies[0]}`);
console.log(`Middle company: ${itCompanies[Math.floor(itCompanies.length / 2)]}`);
console.log(`Last company: ${itCompanies[itCompanies.length - 1]}`);

// Change each company name to uppercase one by one and print them out
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase());
  }
  
  // Print the array as a sentence
  const sentence = itCompanies.join(', ') + ' are big IT companies.';
  console.log(sentence);
  
  // Check if a certain company exists in the itCompanies array
  const companyName = 'Microsoft';
  if (itCompanies.includes(companyName)) {
    console.log(`${companyName} exists in the array.`);
  } else {
    console.log(`${companyName} is not found in the array.`);
  }
  
  // Filter out companies with more than one 'o' without filter method
  const companiesWithoutDoubleO = [];
  for (let company of itCompanies) {
    if (!company.includes('oo')) {
      companiesWithoutDoubleO.push(company);
    }
  }
  console.log(companiesWithoutDoubleO);
  
  // Sort the array using sort() method
  const sortedCompanies = itCompanies.slice().sort();
  console.log(sortedCompanies);
  
  // Reverse the array using reverse() method
  const reversedCompanies = itCompanies.slice().reverse();
  console.log(reversedCompanies);
  
  // Slice out the first 3 companies from the array
  const firstThreeCompanies = itCompanies.slice(0, 3);
  console.log(firstThreeCompanies);
  
  // Slice out the last 3 companies from the array
  const lastThreeCompanies = itCompanies.slice(-3);
  console.log(lastThreeCompanies);
  
  // Slice out the middle IT company or companies from the array
  const middleIndex = Math.floor(itCompanies.length / 2);
  const middleCompanies = itCompanies.length % 2 === 0
    ? [itCompanies[middleIndex - 1], itCompanies[middleIndex]]
    : [itCompanies[middleIndex]];
  console.log(middleCompanies);
  
  // Remove the first IT company from the array
  itCompanies.shift();
  console.log(itCompanies);
  
  // Remove the middle IT company or companies from the array
  const middleIndexToRemove = Math.floor(itCompanies.length / 2);
  if (itCompanies.length % 2 === 0) {
    itCompanies.splice(middleIndexToRemove - 1, 2);
  } else {
    itCompanies.splice(middleIndexToRemove, 1);
  }
  console.log(itCompanies);
  
  // Remove the last IT company from the array
  itCompanies.pop();
  console.log(itCompanies);
  