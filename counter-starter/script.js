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

function add(step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) + step;
    numberElement.innerText = number;
    }
