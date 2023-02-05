
// Step 1: create to do list
let todoTasksText = [
    // "Eat bananas",
    // "Do stuff",
    // "Hoard coffee"
];

// Step 3: we’ll add a new list to keep track of the status of our tasks. 
    // We’re using boolean values here, where false means the task is not complete and true means the task is complete
let todoTasksStatus = [
    //false, true, false
];

// Step 2:
let todoList = document.getElementById("todo-list");

// Step 8: The status is being updated in the list, but we aren’t actually seeing on the page.Let’s fix that. 
// First we’ll move everything in our forEach to its own function:
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
    completeButtonElement.value = "✓";
        // input = value
        // text element = innerText
    // Step 6: make button functional
    completeButtonElement.onclick = function () {
        toggleComplete(index);
    };
    newTodoTaskElement.appendChild(completeButtonElement);

// ------ CHALLENGE: DELETE ELEMENT - complete
// https://www.javascripttutorial.net/javascript-array-splice/
    let deleteButtonElement = document.createElement("input");
    deleteButtonElement.type = "button";
    deleteButtonElement.value = "␡";
    deleteButtonElement.onclick = function () {
        deleteComplete(index);
    };
    newTodoTaskElement.appendChild(deleteButtonElement);

// ------ CHALLENGE: MOVE UP ELEMENT
// https://www.javascripttutorial.net/javascript-array-splice/
let moveUpButtonElement = document.createElement("input");
moveUpButtonElement.type = "button";
moveUpButtonElement.value = "↑";
moveUpButtonElement.onclick = function () {
    moveUp(index);
};
newTodoTaskElement.appendChild(moveUpButtonElement);

// ------ CHALLENGE: MOVE DOWN ELEMENT
// https://www.javascripttutorial.net/javascript-array-splice/
let moveDownButtonElement = document.createElement("input");
moveDownButtonElement.type = "button";
moveDownButtonElement.value = "↓";
moveDownButtonElement.onclick = function () {
    moveDown(index);
};
newTodoTaskElement.appendChild(moveDownButtonElement);

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

// ------ CHALLENGE: DELETE ELEMENT - complete
// https://www.javascripttutorial.net/javascript-array-splice/
function deleteComplete(index) {
    console.log("tasks before delete", todoTasksText);
    console.log("status before delete", todoTasksStatus);
    let deletedTodoTasksText = todoTasksText.splice(index, 1);
    let deletedTodoTasksStatus = todoTasksStatus.splice(index, 1);
    console.log("tasks after delete", todoTasksText);
    console.log("status after delete", todoTasksStatus);
    console.log("deleted task", deletedTodoTasksText);
    console.log("deleted status", deletedTodoTasksStatus);
    updateTodoList();
}
// ------ CHALLENGE: MOVE UP ELEMENT
function moveUp(index) {
    if (index > 0) {       
        // https://stackoverflow.com/a/872317
        [todoTasksText[index], todoTasksText[index-1]] = [
            todoTasksText[index-1], todoTasksText[index]];
        updateTodoList();
    }
}

// ------ CHALLENGE: MOVE DOWN ELEMENT
function moveDown(index) {
    // https://www.w3schools.com/jsref/jsref_length_array.asp
    // if the index is less than the length of the list then:
    if (index < todoTasksText.length -1) {       
        // https://stackoverflow.com/a/872317
        [todoTasksText[index], todoTasksText[index+1]] = [
            todoTasksText[index+1], todoTasksText[index]];
        updateTodoList();
    }
}

// Step 10:s
updateTodoList();