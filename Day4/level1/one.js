// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

const userAge = parseInt(prompt("Enter your age:"));

if (userAge >= 18) {
    console.log("You are old enough to drive.");
} else {
    const yearsLeft = 18 - userAge;
    console.log(`You are left with ${yearsLeft} years to drive.`);
}
