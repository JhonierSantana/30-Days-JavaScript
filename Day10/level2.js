// let a = [1, 2, 3 , 4]
// let b = [3, 4, 5, 6]
// let c = [...a, ...b]

// let A = new Set(a);
// let B = new Set(b);
// let C = new Set(c);

// console.log(C)

let a = [1, 2, 3 , 4]
let b = [3, 4, 5, 6]

let A = new Set(a);
let B = new Set(b);

let c = a.filter((num) => B.has(num))
let C = new Set(c)

console.log(C)