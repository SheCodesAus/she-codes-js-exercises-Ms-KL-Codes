// GOAL: create a button that when clicked, will add 1 to the number displayed on screen

// Step 2: create function to handle the button click:

// function add() {
//     console.log("add function");
// }
// when + is clicked in index the above output displays in console

// Step 4: add the current number to the console return.
// This looks at the ID in index called "number", which is the number set in the index as 0

// function add() {
//     let numberElement = document.getElementById("number");
//     let number = numberElement.innerText;
//     console.log(number);
//     }

// Step 5: add 1 to the innerText number and update the console display

// function add() {
//     let numberElement = document.getElementById("number");
//     let number = numberElement.innerText;
//     number = number + 1;
//     numberElement.innerText = number;
//     }

// console.log was removed so the index page innerText updates instead. Due to it being text, the 1 is added to the zero rather than a calculation, resulting in 01 0111 etc

// Step 6: tell code that number = an integer instead of string so a calculation happens rather than concatenating string Elements

// function add() {
//     let numberElement = document.getElementById("number");
//     let number = numberElement.innerText;
//     number = parseInt(number) + 1;
//     numberElement.innerText = number;
//     }

// Added parseInt like you would int in python. Now the 0 is a number and integers are being added to it

// Step 7: Increment the add value by different amounts by editing the html value within the input button and adding a step reference to talk to this increment. We replace the +1 in the function code to step. Note: change the value in HTML to increase the step (up)

// function add(step) {
//     let numberElement = document.getElementById("number");
//     let number = numberElement.innerText;
//     number = parseInt(number) + step;
//     numberElement.innerText = number;
//     }

// CHALLENGE:
// 1 - use new function to add 2 new buttons for subtracting by 1 and 10 respectively

// function add_or_subtract(step) {
//     let numberElement = document.getElementById("number");
//     let number = numberElement.innerText;
//     number = parseInt(number) + step;
//     numberElement.innerText = number;
//     }
    
// name changed to add_or_subtract to reflect accurate functionality

// CHALLENGE:
// 2 - Add new functions for multiplication and division.

function multiplication(step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) * step;
    numberElement.innerText = number;
    }

function division(step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) / step;
    numberElement.innerText = number;
    }

// Challenge 3 - Try adding an input field, so instead of using your buttons, the user types in what number they want to add/subtract.

function add_or_subtract() {
    // INPUT NUMBER
    let input_number= document.getElementById("input_number").value;
    // above based on the showName function in playground

    input_number = parseInt(input_number);
    // input_number = parseInt(input_number).innerText;
    // don't need inner_text as the value is not within HTML tags 
        // eg:             <p id="number">0</p> --> 0 = inner_text
    
    // Change the value of the original number (eg 0)
    // This will change based on input number above
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) + input_number;
    numberElement.innerText = number;
    }
