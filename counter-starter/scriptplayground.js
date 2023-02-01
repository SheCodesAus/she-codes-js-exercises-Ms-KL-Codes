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
