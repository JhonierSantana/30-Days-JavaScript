// Iterate 0 to 10 using for loop
console.log('Iterate 0 to 10 using for loop:');
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// Iterate 0 to 10 using while loop
console.log('Iterate 0 to 10 using while loop:');
let j = 0;
while (j <= 10) {
  console.log(j);
  j++;
}

// Iterate 0 to 10 using do-while loop
console.log('Iterate 0 to 10 using do-while loop:');
let k = 0;
do {
  console.log(k);
  k++;
} while (k <= 10);

// Iterate 10 to 0 using for loop
console.log('Iterate 10 to 0 using for loop:');
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

// Iterate 10 to 0 using while loop
console.log('Iterate 10 to 0 using while loop:');
let l = 10;
while (l >= 0) {
  console.log(l);
  l--;
}

// Iterate 10 to 0 using do-while loop
console.log('Iterate 10 to 0 using do-while loop:');
let m = 10;
do {
  console.log(m);
  m--;
} while (m >= 0);

// Iterate 0 to n using for loop
console.log('Iterate 0 to n using for loop:');
const n = 5;
for (let i = 0; i <= n; i++) {
  console.log(i);
}

// Write a loop to print a pattern
console.log('Pattern using loop:');
for (let i = 1; i <= 7; i++) {
  let pattern = '';
  for (let j = 1; j <= i; j++) {
    pattern += '#';
  }
  console.log(pattern);
}

// Print multiplication table
console.log('Multiplication table:');
for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}

// Print a table of values
console.log('Table of values:');
console.log(' i    i^2   i^3');
for (let i = 0; i <= 10; i++) {
  console.log(`${i}    ${i ** 2}     ${i ** 3}`);
}

// Print even numbers
console.log('Even numbers:');
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Print odd numbers
console.log('Odd numbers:');
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Print prime numbers
console.log('Prime numbers:');
for (let i = 2; i <= 100; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i);
  }
}

// Print the sum of all numbers
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}.`);

// Print the sum of all evens and odds
let sumEvens = 0;
let sumOdds = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sumEvens += i;
  } else {
    sumOdds += i;
  }
}
console.log(`The sum of all evens from 0 to 100 is ${sumEvens}. And the sum of all odds from 0 to 100 is ${sumOdds}.`);
console.log(`Sum of evens and sum of odds as array: [${sumEvens}, ${sumOdds}]`);

// Generate an array of 5 random numbers
const randomNumbers = [];
for (let i = 0; i < 5; i++) {
  randomNumbers.push(Math.random());
}
console.log('Array of 5 random numbers:', randomNumbers);

// Generate an array of 5 unique random numbers
const uniqueRandomNumbers = [];
while (uniqueRandomNumbers.length < 5) {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  if (!uniqueRandomNumbers.includes(randomNumber)) {
    uniqueRandomNumbers.push(randomNumber);
  }
}
console.log('Array of 5 unique random numbers:', uniqueRandomNumbers);

// Generate a six characters random id
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
let randomId = '';
for (let i = 0; i < 6; i++) {
  const randomIndex = Math.floor(Math.random() * characters.length);
  randomId += characters[randomIndex];
}
console.log('Random ID:', randomId);
