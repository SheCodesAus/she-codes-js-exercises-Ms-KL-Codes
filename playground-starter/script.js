// this is a comment on one line

/* 
this is a multiline comment
second line
*/


// CONSOLE

    console.log("Hello, world!");
    // PY: print("Hello, world!")
    // returns in browser console versus:

    alert("Hello, world!");
    // pops up in browser

    let username = "Hayley";
    console.log("Hi, " + username);
    // creating a variable to return into the console in response to the above

// VARIABLES
    let num1 = 3;
    let num2 = 4;
    let total = num1 + num2;
    console.log(total);

    /* 
    PY:
    num1, num2, = 3,4
    total = num1 + num2
    print(total)
    */

// FUNCTIONS
    // function addition() {
    //     let x = 2;
    //     let y = 6;
    //     result = x + y;
    //     console.log(result);
    //     }

    // /* 
    // PY:
    // def addition ():
    //     x, y, = 2,6
    //     result = x + y
    //     return result
    // */ 

    // // NOTE: need to call function for it to return result

    // addition();
    // // PY: addition()

// GENERALIZABLE FUNCTION
    function addition(x,y) {
        result = x + y;
        console.log(result);
    }

    addition(1, 9);

    /*
    PY:
    def addition (x,y):
        result = x + y
        return result

    addition(1,9)
    */

// USER INPUT

    // function showName() {
    //     console.log("Cool name!");
    // }
    // // when entering a name and submit button is hit on index, it returns "Cool Name" in the console

    function showName() {
        console.log("Cool name!");
        let username = document.getElementById("name-text").value;
        console.log("Hi, " + username)
    }
    // sets the variable username (by finding the input ID listed in index "name-text") and sets username the value as the entered username. Then when the console.log is called it fills the username with the value set by the input.