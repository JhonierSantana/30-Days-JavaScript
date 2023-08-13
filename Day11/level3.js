// const countries = require('./countries_data');

// countries.forEach(({name, capital, population, languages}) => {
//     console.log("Name:" , name);
//     console.log("Capital:", capital);
//     console.log("Population:", population);
//     console.log("Languages:", languages);
//     console.log("---------------------");
// });

// const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
// const [name, skills, [, , jsScore,  reactScore]] = student

// console.log(name); 
// console.log(skills); 
// console.log(jsScore);
// console.log(reactScore); 

function convertArrayToObject(arr) {
    const result = arr.map((student) => {
        const [name, skills, scores] = student;
        return { name, skills, scores};
    })
    return result;
}
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]
  console.log(convertArrayToObject(students))