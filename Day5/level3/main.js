/*The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
Sort the array and find the min and max age
Find the median age(one middle item or two middle items divided by two)
Find the average age(all items divided by number of items)
Find the range of the ages(max minus min)
Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
*/
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
ages.sort((a, b) => a - b);
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

// Find the median age
const middleIndex = Math.floor(ages.length / 2);
const medianAge = ages.length % 2 === 0 ? (ages[middleIndex - 1] + ages[middleIndex]) / 2 : ages[middleIndex];

// Find the average age
const sumOfAges = ages.reduce((total, age) => total + age, 0);
const averageAge = sumOfAges / ages.length;

// Find the range of the ages
const ageRange = maxAge - minAge;

// Compare (min - average) and (max - average)
const diffMinAverage = Math.abs(minAge - averageAge);
const diffMaxAverage = Math.abs(maxAge - averageAge);

console.log('Min Age:', minAge);
console.log('Max Age:', maxAge);
console.log('Median Age:', medianAge);
console.log('Average Age:', averageAge);
console.log('Age Range:', ageRange);
console.log('Difference (min - average):', diffMinAverage);
console.log('Difference (max - average):', diffMaxAverage);

// Slice the first ten countries from the countries array
const firstTenCountries = countries.slice(0, 10);
console.log('First Ten Countries:', firstTenCountries);

// Find the middle country(ies) in the countries array
const middleCountries = countries[Math.floor(countries.length / 2)];
console.log('Middle Country(ies):', middleCountries);