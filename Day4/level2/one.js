/* Write a code which can give grades to students according to theirs scores
 80-100, A
 70-89, B
 60-69, C
 50-59, D
 0-49, F
*/
const score = parseInt(prompt("Enter your score:"));

if (score >= 80 && score <= 100) {
    console.log("Grade: A");
} else if (score >= 70 && score < 80) {
    console.log("Grade: B");
} else if (score >= 60 && score < 70) {
    console.log("Grade: C");
} else if (score >= 50 && score < 60) {
    console.log("Grade: D");
} else if (score >= 0 && score < 50) {
    console.log("Grade: F");
} else {
    console.log("Invalid score.");
}
