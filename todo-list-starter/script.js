// TO DO LIST
// Step 1: create to do list
let todoTasksText = [
    "Eat bananas",
    "Do stuff",
    "Hoard coffee"
];

// Step 3: we’ll add a new list to keep track of the status of our tasks. We’re using boolean values here, where false means the task is not complete and true means the task is complete
let todoTasksStatus = [false, true, false];

// Step 2:
let todoList = document.getElementById("todo-list");

// Step 8: The status is being updated in the list, but we aren’t actually seeing on the page.Let’s fix that. First we’ll move everything in our forEach to its own function:
function createNewTodoTaskElement(task, index) {
    // create a new p element and se tthe text of the new p element
    let newTodoTaskTextElement = document.createElement("p");
    newTodoTaskTextElement.innerText = task;

    // Step 4: how can we tell when it’s complete? Let’s add a class to the tasks that are done
    if (todoTasksStatus[index] == true) {
        newTodoTaskTextElement.classList.add("complete");
    }


    // create a new li element and append the p element to
    let newTodoTaskElement = document.createElement("li");
    newTodoTaskElement.appendChild(newTodoTaskTextElement);

    // Step 5:we’ll add a button that we will use to mark tasks as complete:
    let completeButtonElement = document.createElement("input");
    completeButtonElement.type = "button";
    completeButtonElement.value = "Completed";
        // input = value
        // text element = innerText
    // Step 6: make button functional
    completeButtonElement.onclick = function () {
        toggleComplete(index);
    };
    newTodoTaskElement.appendChild(completeButtonElement);

    // Step 8: 
    return newTodoTaskElement;
}

// Step 11: Finally, let’s add the functionality to add new tasks. Create a new function called addTask:
function addTask() {
    let newTask = document.getElementById("new-task-text");
    if (newTask.value) {
        todoTasksText.push(newTask.value);
        todoTasksStatus.push(false);
        newTask.value = "";
        updateTodoList();
    }
}

function updateTodoList() {
    // Step 9:
    let todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";
    // Step 4: how can we tell when it’s complete? Let’s add a class to the tasks that are done (add index to for each)
    // loop through the todoTasksText array
    todoTasksText.forEach((task, index) => {
        // Step 9:
        let newTodoTaskElement = createNewTodoTaskElement(task, index);
        // append the li element to the ul element
        todoList.appendChild(newTodoTaskElement);
    });
}

function createNewTodoItemElement(todoItem, index) {}

// Step 7: write the new function
// if true, make complete status false and vice versa
function toggleComplete(index) {
    if (todoTasksStatus[index] == false) {
        todoTasksStatus[index] = true;
    } else {
        todoTasksStatus[index] = false;
    }
    updateTodoList();
}
// Step 10:s
updateTodoList();
