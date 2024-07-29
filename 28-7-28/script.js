// JS

var formEl = document.querySelector(".form");
var inputEl = document.querySelector(".input");
var listEl = document.querySelector(".list");

formEl.addEventListener("submit", function(e) {
  e.preventDefault();
  if (inputEl.value) {
    var todoItem = document.createElement("div");
    todoItem.className = "todo-item";

    var todoText = document.createElement("p");
    todoText.innerHTML = inputEl.value;

    var buttonContainer = document.createElement("div");

    var editBtn = document.createElement("i");
    editBtn.className = "fa-solid fa-pen-to-square edit-btn";

    var deleteBtn = document.createElement("i");
    deleteBtn.className = "fa-solid fa-trash del-btn";

    buttonContainer.appendChild(editBtn);
    buttonContainer.appendChild(deleteBtn);

    todoItem.appendChild(todoText);
    todoItem.appendChild(buttonContainer);

    listEl.appendChild(todoItem);

    inputEl.value = "";
    inputEl.focus();
  }
});

listEl.addEventListener("click", function(e) {
  if (e.target.className.indexOf("edit-btn") !== -1) {
    console.log("Edit button clicked!");
  }

  if (e.target.className.indexOf("del-btn") !== -1) {
    const todoItem = e.target.parentNode.parentNode;
    if (todoItem) {
      listEl.removeChild(todoItem);
    }
  }
});
