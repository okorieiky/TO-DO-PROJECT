//calling the variables(class name) on the html 

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//adding event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);
//adding of function
function addTodo(event) {
    //prevent the form (input-type) from submitting
    event.preventDefault();
   
    //creating a todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    
    //create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //check mark button
    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class = "fas fa-check"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);

    
    //check trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Append to the list
    todoList.appendChild(todoDiv);

    //clear the todo input value
    todoInput.value = "";

}

function deleteCheck(e) {

    const item = e.target;

 // To delete todo button by clicking the trash btn

    if(item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        //Animations
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function(){
        todo.remove();
        });
    
    }

    // CHECKMARK AREA
    if(item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
    
}

function filterTodo(e) {
    //convert the HTML collections to array.
    const todos = Array.from(todoList.children);
    todos.forEach(function(todo){
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")){
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