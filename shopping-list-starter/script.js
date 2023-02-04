// The goal is to be able to add individual items to the shopping list.

// Step 1: First we’ll define an array for the items on our shopping list
let shoppingListItems = ["milk", "eggs", "bread"]

// Step 5: Let’s create another function for updating what is displayed on the page. We’ll use some code we wrote earlier to do this:
// makes code DRY to reuse
function updateItems() {
    // Step 2: Now let’s display each of the items on the page:
    let listElement = document.getElementById("shopping-list-items");
    listElement.innerHTML =  "";
        // this clears the html in the element to remove what the result was in the last loop so item don't repeat before loop restarts

    // Step 1: First we’ll define an array for the items on our shopping list
    shoppingListItems.forEach((item) => {
        // console.log(item)
        // Step 2: Now let’s display each of the items on the page:
        let itemElement = document.createElement("li");
            // create li item for each iteration of the loop
        itemElement.innerText = item;
            // within the li tag, place the iterated item within it (shopping list item)
        listElement.appendChild(itemElement);
            // the list is the parent of each list item
            // this enables screen display
    });
}

updateItems();

// Step 4: But what if we wanted to add to the list? Let’s use the input and submit button to get new items from the user:
function addItem() {
    let item = document.getElementById("new-item-text").value;
    shoppingListItems.push(item);
    console.log(shoppingListItems);
    updateItems()
}

// Challenge: Clear items in the list
function clearShoppingList() {
    let listElement = document.getElementById("shopping-list-items");
    listElement.innerHTML =  "";
}


