// DOM - Document Object Model

// object - have methods and properties

// Access Element using .getElementById()
let elementWithID = document.getElementById("first-div");
console.log("Element accessed using ID:", elementWithID)

elementWithID.textContent = 'Div 1';

// Access Elements using .getElementsByClassName()
let elementsWithClass = document.getElementsByClassName("sample-div");
console.log("Elements with Class:", elementsWithClass);

// Modify element using index
elementsWithClass[1].textContent = 'Div 2'

// Access Elements using .getElementsByTagName()
let listItems = document.getElementsByTagName("li");
console.log("List Items:", listItems);

listItems[0].style.color = "blue";

// .querySelector()
let orderedListItem = document.querySelector(".ordered-list")
console.log("Ordered List Items:", orderedListItem);

orderedListItem.style.backgroundColor = "lightgreen";

// .querySelectorAll()
// Return a Nodelist
let headings = document.querySelectorAll("h3");
console.log("Heading Tags:", headings);

headings[0].style.backgroundColor = "aqua";

for (let i = 0; i < headings.length; i++) {
    let heading = headings[i];
    heading.style.backgroundColor = "aqua";
}

// Updating an element attribute
let dayNightIcon = document.querySelector("#day-night-icon");
dayNightIcon.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/3688/3688129.png");

// Append New Elements
let parentElement = document.getElementById('parent-element');
let createdElement = document.createElement('div');
createdElement.textContent = 'Child Element';
parentElement.appendChild(createdElement);


// Remove element
let elementToBeRemoved = document.querySelector("#element-to-be-removed");
elementToBeRemoved.remove();

// Adding Event Listeners and Manipulating Element Styles
let darkModeBtn = document.querySelector('#dark-mode-btn');
darkModeBtn.addEventListener('click', function () {
    let pageContainer = document.querySelector('#page-container');
    pageContainer.style.backgroundColor = 'black';
    pageContainer.style.color = 'white';
    let pageModeText = document.querySelector('#page-mode-text');
    pageModeText.textContent = 'Dark Mode';
});