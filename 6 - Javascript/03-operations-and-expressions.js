// Operators

// 1. Arithmetic Operatos
let num1 = 10;
let num2 = 5;

console.log("Addition (+):", num1 + num2);
console.log("Subtraction (-):", num1 - num2);
console.log("Multiplication (*):", num1 * num2);
console.log("Division (/):", num1 / num2);
console.log("Exponent (**):", num1 ** num2);
console.log("Modulo (%):", num1 % num2);


// Order of Operation
// PEMDAS - Parenthesis, Exponents, Multiplication, Division, Addition, and Subtraction.

let answer = 3 + 4 * (5 - 2) ** 2 / 2;
console.log("Answer:", answer);

// 2. String Operations - concatenation (+)
let greeting = "Hello, ";
let myName = "Love, ";
let goodbye = "Goodbye"
console.log(greeting + myName + goodbye);

// 3. Comparison Operators
//  Equal to '==' : Checks if the two values are equal
console.log("Equal to (==):", 5 == 5);
console.log("Equal to (==) with type coercion:", 5 == '5');
//  Equal to '===' : Stricly checks if two values are equal
console.log("Equal to (===):", 5 === 5);
console.log("Equal to (===) with type coercion:", 5 === '5');
// Not equal to '!=' : Checks if the two values are not equal
console.log("Not equal to (!=):", 5 != 5);
// Strict Not Eqaul to '!==': Strictly checks if the two values are not equal
console.log("Strict Not equal to (!==):", 5 !== 5);

// Greater Than, Less Than, Less Than or equal, Greater Than equal
console.log("Greater Than (>):", 5 > 3);
console.log("Less Than (<):", 3 < 5);
console.log("Less Than or Equal to (<=):", 3 <= 5);
console.log("Greater Than or Equal to (>=):", 5 >= 3);

// 4. Logical Operator
// && - AND
// || - OR
// ! - NOT

let sunny = "true";
let warm = "false";

// AND: True if all conditions are met
console.log("Is it sunny AND warm?", sunny && warm);

// OR: True if at least one of the conditions is true
console.log("Is it sunny OR warm?", sunny || warm);

// NOT: Inverts the boolean value
console.log("NOT sunny?", !sunny);

// 5. Assignment Expression
// Assigning a value to a variable
let num3 = 10;
let num4 = 5;

// Addition Assignment (+=)
num3 += num4
// num3 = num3 + num4
console.log("The new value is:",num3);

// Subtraction Assignment (-=)
num3 -= num4
console.log("The new value is:", num3);

// Multiplication Assignment (*=)
num3 *= num4
console.log("The new value is:", num3);

// Division Assignment (/=)
num3 /= num4
console.log("The new value is:", num3);

// Exponent Assignment (**=)
num3 **= num4
console.log("The new value is:", num3);

// Modulo Assignment (%=)
num3 %= num4
console.log("The new value is:", num3);
