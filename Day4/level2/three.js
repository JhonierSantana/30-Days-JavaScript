// Check if a day is weekend day or a working day. Your script will take day as an input.
const day = prompt("What is the day today?").toLowerCase();

if (day === "saturday" || day === "sunday") {
    console.log(`${day} is a weekend.`);
} else if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday") {
    console.log(`${day} is a working day.`);
} else {
    console.log("Invalid day.");
}
