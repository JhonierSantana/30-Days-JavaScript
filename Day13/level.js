const countries = require('./countries_data');

// Nivel 2 - Ejercicio 1
console.table(countries);

// Nivel 2 - Ejercicio 2
const countriesObject = {
  Finland: 'Helsinki',
  Sweden: 'Stockholm',
  Norway: 'Oslo'
};

console.table(countriesObject);

// Nivel 2 - Ejercicio 3
console.group('Logs Group');
console.log('This is a log inside the group');
console.warn('This is a warning inside the group');
console.error('This is an error inside the group');
console.groupEnd();

// Nivel 2 - Ejercicio 4
console.assert(10 > 2 * 10, 'Assertion failed: 10 is not greater than 2 * 10');

// Nivel 2 - Ejercicio 5
console.warn('This is a warning message.');

// Nivel 2 - Ejercicio 6
console.error('This is an error message.');

// Nivel 3 - Ejercicio 1
const arr = [1, 2, 3, 4, 5];
let i = 0;

console.time('While loop');
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}
console.timeEnd('While loop');

console.time('For loop');
for (let j = 0; j < arr.length; j++) {
  console.log(arr[j]);
}
console.timeEnd('For loop');

console.time('For...of loop');
for (const item of arr) {
  console.log(item);
}
console.timeEnd('For...of loop');

console.time('forEach loop');
arr.forEach((item) => {
  console.log(item);
});
console.timeEnd('forEach loop');
