// Write a program which tells the number of days in a month, now consider leap year.
const month = prompt("Enter a month:").toLowerCase();
const year = parseInt(prompt("Enter a year:"));

let daysInFebruary = 28;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    daysInFebruary = 29;
}

if (month === "january" || month === "march" || month === "may" || month === "july" ||
    month === "august" || month === "october" || month === "december") {
    console.log(`${month} has 31 days.`);
} else if (month === "april" || month === "june" || month === "september" || month === "november") {
    console.log(`${month} has 30 days.`);
} else if (month === "february") {
    console.log(`${month} has ${daysInFebruary} days.`);
} else {
    console.log("Invalid month.");
}
