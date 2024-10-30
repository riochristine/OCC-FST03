// Arrays

let fruits = ["Banana", "Apple", "Orange", "Melon", "Mango"]

console.log("Fruits:", fruits);

// Array.length

console.log("Fruits length:", fruits.length);

// Updating our elements
fruits[0] = "Grapes";
console.log("Updated Fruit", fruits[0]);

//.push() method - add elements to the array
fruits.push("Berry");
console.log("Added a fruit:", fruits);
console.log("Added a fruit:", fruits.length);

// .pop() method - remove elements to the array
fruits.pop("Berry");
console.log("Removes a fruit:", fruits);
console.log("Removes a fruit:", fruits.length);

// .splice() method
fruits.splice(1,2,"Strawberry");
console.log("Uses splice method", fruits);
console.log("Uses splice method", fruits.length);

// .include() method: true / false

console.log("Is Grapes available?", fruits.includes("Grapes"));
console.log("Is Apple available?", fruits.includes("Apple"));

// .forEach() 
fruits.forEach(function(fruits){
    console.log("Fruits:", fruits);
});
