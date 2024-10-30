 console.log("Hello World");
 console.log("Welcome to OneCodeCamp!");

//  This is a single line comment
/* 
    This is a multiple
    line
    comment
*/

// Variable - container

/*
 camelCase
 kebab-case
*/
// let - mutable (changeable) block-scope
let firstName = "John";
console.log("First name:",firstName);
firstName = "Shane";
console.log("First Name:",firstName);

// var - mutable(changeable) global-scope
var lastName =  "Abando";
console.log("Last name:", lastName);
lastName = "Catipay";
console.log("Last name:", lastName);

// const -immutable(cannot be changed)
const birthday = "01-25-2003";
console.log("Birthday", birthday);
// birthday ="01-25-2004"; This will not work

// local-scope vs global scope
if (true) {
    let color = "red";
    var fruit = "apple";
    console.log(color);
}
console.log(fruit);

