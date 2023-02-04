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

// LOOPS
    for (let count = 0; count < 10; count++) {
        console.log(count);
    }
    // Loops are useful when we want to do something numerous times.

// ARRAYS
    // An array is a list of related items or information.
    let pets = ["Chilli", "Rex", "Roary", "Fleur"];
    console.log(pets);
    // prints all pets
    pets.push("Ivy");
    // adds a pet at the end of the array
    console.log(pets);
    console.log(pets[0]);
    // prints pet @ 0 = Chilli
    console.log(pets[3]);
    // prints pet @ 3 = Fleur

// ARRAY and LOOP
    //We can loop over items in an array using a standard for loop:

    // for (let index = 0; index < pets.length; index++) {
    //     console.log(pets[index]);
    // }

    // We can also loop over items in an array using forEach:

    pets.forEach((pet) => {
        console.log(pet);
    });

// CONDITIONALS
    // We can use if statements to do something based on whether or not some condition was met.
    // Step 1 - 3:
    let pet = "Ivy";
    if (pet === "Chilli") {
        // add another = (ontop of the == in docs)
        // === strictly exactly the same
        // == not exactly the same
        console.log("Chilli OMG you are the cutest!");
    } else if (pet == "Ivy") {
        console.log("Ivy! Naaaaw cute bow.");
        } else {
        console.log("The dog is not Chilli or Ivy! OMG so cute.");
        }





