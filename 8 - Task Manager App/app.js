// DOM Manipulation
// 1. Access/Target the element

// todo-input
// todo-button
// filter-todo
// todo-list

// Step 1: Select DOM Element
// Accept: #id, .class-name, tag
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const filterTodo = document.querySelector(".filter-todo");
const todoList = document.querySelector(".todo-list");

// Step 2: Add event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteOrCompleteTodo);
filterTodo.addEventListener("change", filterTodos);

function addTodo(e) {
  //   Prevent form submission
  e.preventDefault();

  //   Create a div container
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //   Create the new todo
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  newTodo.innerText = todoInput.value;
  todoDiv.appendChild(newTodo);

  //   Create the complete button
  const completeButton = document.createElement("button");
  completeButton.classList.add("complete-btn");
  completeButton.innerHTML = `<i class="fas fa-check"></i>`;
  todoDiv.appendChild(completeButton);

  //   Create the delete button
  const trashButton = document.createElement("button");
  trashButton.classList.add("trash-btn");
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
  todoDiv.appendChild(trashButton);

  //   Append the todoDiv to the todoList
  todoList.appendChild(todoDiv);
  todoInput.value = "";
}

function deleteOrCompleteTodo(e) {
  const target = e.target;

  if (target.classList.contains("trash-btn")) {
    const todoDiv = target.parentElement;
    todoDiv.classList.add("fall");

    todoDiv.addEventListener("transitionend", function () {
      todoDiv.remove();
    });
  }

  if (target.classList.contains("complete-btn")) {
    const todoDiv = target.parentElement;
    todoDiv.classList.toggle("completed");
  }
}

function filterTodos(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    const targetValue = e.target.value;
    switch (targetValue) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}