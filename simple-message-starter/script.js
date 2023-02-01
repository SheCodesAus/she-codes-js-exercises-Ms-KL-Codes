// GOAL: have a user enter a message, and then display it on the screen back to them.

// Step 2: get the message when button in html is clicked
function showMessage() {
    // console.log("I am the show message function");
    // step 5: get the message from the textbox that user inputs
    let message = document.getElementById("message-text").value;
    // console.log(message);
    // Challenge 2:  Alter the output to also show the user’s name
    let name = document.getElementById("name-text").value;
    message = message + " - " + name;
        // looks at name entered
        // adds values together and changes message variable for correct output
    // Step 10: display the message within the speech bubble and box created by window.onload
    let messageBox = document.getElementById("message-box");
        // looks at the window.onload and refers to the message-box p tags initalised within it. windows.onload created this element after html loaded, making it available to this function
    messageBox.innerText = message;
        // looks at the innertext between the p elements and replaces it with the message input by user (initialised above)
}

// step 6: create a new element to display outputted message. First, create a function to run when page has loaded

window.onload = function() {
    // console.log("this page has loaded");
    // step 7: create a new elm to display the outputted message
    let speechBubbleElement = document.createElement("div");
        // creates a div as the container for Bubble Element called speech
    speechBubbleElement.classList.add("speech-bubble");
        // step 9: styling the new elements (above). 
        // ?? adds the bubble styled in css to the page
    let messageBox = document.createElement("p");
        // create a p within the Box called message
    messageBox.innerText = "...";
        // inside the p element, which is a box called message, write this text between the p tags
    messageBox.id = "message-box";
        // step 9: styling the new elements (above). 
        // assigns the id of message-box to the new box on the page, so can be styled
    speechBubbleElement.appendChild(messageBox);
        // make the Bubble element called speech, which is a div tag, the parent of the box called message, which are p tags
        // this will make it look like <div><p>...</p></div>
        // So far nothing displays on the html page. This is because we are not outputting the elements
    // step 8: add the new element to the html page
    let outputElement = document.getElementById("output");
        // this points to id=output in html
    outputElement.appendChild(speechBubbleElement);
        // this makes outputElement the parent of speechBubbleElement. This will populate within the output div in html and therefor show on the html page
}