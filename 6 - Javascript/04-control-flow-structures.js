// Control Flow Structures

// 1. Conditional Statements
// if, else if, else
let temperature = 35;

// Conditional Block ()
// Code Block {}
if (temperature < 0) {
  console.log("It's freezing");
  console.log("Get a jacket.");
} else if (temperature >= 0 && temperature < 20) {
  // Range: 0 - 19
  console.log("It's cool outside.");
  console.log("Let's go to the park.");
} else if (temperature >= 20 && temperature < 30) {
  // Range 20 - 29
  console.log("It's warm outside.");
  console.log("Drink a lot of water.");
} else {
  console.log("It's hot outside.");
}

// Conditional: switch-casae statement
let day = "Wednesday";
switch (day) {
  case "Monday":
    console.log("It's the start of the week.");
    break;
  case "Friday":
    console.log("It's the end of the week days.");
    break;
  default:
    console.log("It's a regular day.");
}

// 2. Looping Statements
// Repeatedly execute a block of code until a condition is met.

// For Loop
/*
    1st: Variable Initialization
    2nd: Condition Expression
    3rd: Increment/Decrement
*/
for (let i = 1; i <= 3; i++) {
  console.log("For Loop Count:", i);
}

// While Loop
let count = 1;
while (count <= 3) {
  console.log("While Loop Count:", count);
  count++;
}

// Do-while Loop
let counter = 4;
do {
  console.log("Do While Loop Count:", counter);
  counter++;
} while (counter <= 3);
