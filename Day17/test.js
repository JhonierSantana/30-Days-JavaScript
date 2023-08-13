const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');

// const store = {
//   name: 'Jhonier',
//   lastname: 'Santana',
//   age: 19,
//   country: 'Colombia',
//   city: 'Santander'
// };

// const storeString = JSON.stringify(store);
// localStorage.setItem('userStore', storeString);

// console.log(localStorage.getItem('userStore'));
const student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    skills: ['JavaScript', 'HTML', 'CSS'],
    country: 'United States',
    enrolled: true
  };

  const studentString = JSON.stringify(student);
  localStorage.setItem('studentData', studentString);

const retrievedStudentString = localStorage.getItem('studentData');
const retrievedStudent = JSON.parse(retrievedStudentString);

console.log(retrievedStudent);