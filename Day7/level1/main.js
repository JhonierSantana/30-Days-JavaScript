// Declare a function fullName and print out your full name.
function fullName() {
    console.log('Tu Nombre Completo');
  }
  
  // Declare a function fullName with parameters and return the full name.
  function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }
  
  // Declare a function addNumbers and return the sum of two numbers.
  function addNumbers(a, b) {
    return a + b;
  }
  
  // Calculate area of a rectangle.
  function areaOfRectangle(length, width) {
    return length * width;
  }
  
  // Calculate perimeter of a rectangle.
  function perimeterOfRectangle(length, width) {
    return 2 * (length + width);
  }
  
  // Calculate volume of a rectangular prism.
  function volumeOfRectPrism(length, width, height) {
    return length * width * height;
  }
  
  // Calculate area of a circle.
  function areaOfCircle(radius) {
    return Math.PI * radius * radius;
  }
  
  // Calculate circumference of a circle.
  function circumOfCircle(radius) {
    return 2 * Math.PI * radius;
  }
  
  // Calculate density of a substance.
  function density(mass, volume) {
    return mass / volume;
  }
  
  // Calculate speed of a moving object.
  function speed(distance, time) {
    return distance / time;
  }
  
  // Calculate weight of a substance.
  function weight(mass, gravity) {
    return mass * gravity;
  }
  
  // Convert Celsius to Fahrenheit.
  function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  // Calculate BMI and classify weight group.
  function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return 'Normal weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  }
  
  // Check season based on month.
  function checkSeason(month) {
    if (month === 'December' || month === 'January' || month === 'February') {
      return 'Winter';
    } else if (month === 'March' || month === 'April' || month === 'May') {
      return 'Spring';
    } else if (month === 'June' || month === 'July' || month === 'August') {
      return 'Summer';
    } else {
      return 'Autumn';
    }
  }
  
  // Find maximum of three numbers without using Math.max method.
  function findMax(a, b, c) {
    return Math.max(a, Math.max(b, c));
  }
  
  console.log(findMax(0, 10, 5));  // Output: 10
  console.log(findMax(0, -10, -2));  // Output: 0
  