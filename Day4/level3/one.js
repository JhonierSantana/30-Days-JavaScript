// Write a program which tells the number of days in a month.

const month = prompt("Enter a month:").toLowerCase();

if (month === "january" || month === "march" || month === "may" || month === "july" ||
    month === "august" || month === "october" || month === "december") {
    console.log(`${month} has 31 days.`);
} else if (month === "april" || month === "june" || month === "september" || month === "november") {
    console.log(`${month} has 30 days.`);
} else if (month === "february") {
    console.log(`${month} has 28 days.`);
} else {
    console.log("Invalid month.");
}
