// The goal is to load an image as a meme template and place text over it.

// Step 2: create a new element to display the outputted message
function getImage() {
    // talking to the getImage onclick in HTML
    let imageURL = document.getElementById("image-url").value;
        // find the id called image-url, retrieve the value entered with the input. store this value against variable imageURL
    /* 
    Challenge: Create the image element. It should go in the div with id: meme-image-wrapper. The image should have id: meme-image. 
    Step 1 solution to challenge: use the imageURL input by user and display image in our new element 
    */
    let imageBox = document.createElement('img');
        //create an element using the image tag and name it imageBox
    imageBox.id = 'meme-image';
        // assign the ID name meme-image to the imageBox element we created
    imageBox.src = imageURL;
        // add attribute src using the imageURL element
    let wrapper = document.getElementById('meme-image-wrapper');
        // find the id meme-image-wrapper in html and name it wrapper
    wrapper.appendChild(imageBox);
        // make wrapper the parent and place the imageBox inside it
    // Step 4 after challenge: add element for the new text
        // adding this way as the h2 element needs to be added after the image. If added to HTML the h2 gets placed before the image
    let toptextheaderElement = document.createElement('h2');
        // create h2 element 
    toptextheaderElement.id = 'top-text';
        // assign the id to this element
    wrapper.appendChild(toptextheaderElement)
        // add the toptext element into wrapper
    // step 2 solution to challenge: modify the styles to show the meme builder:
    document.getElementById("meme-builder").style.display = "block";
        // using the id meme-builder, lookup in css sheet and reset display to none as per css. then override the style to display as block
}

// step 5 after challenge: write a function to put the text over the image template

function addTopText() {
    let topText = document.getElementById("top-text-input").value;
        // get the user input from top-text-input id in HTML and assign it to topText
    document.getElementById("top-text").innerText = topText;
        // get the top-text id in HTML, look between the tags. The text between will be set as topText. This is the user url input from above.
}

/* 
Challenge: Create the image element. It should go in the div with id: meme-image-wrapper. The image should have id: meme-image. 

Note: I used the windows.onload function based on simple-message-starter code. Needed to incorporate into getImage function instead.

window.onload = function () {
    let imageElement = document.createElement("img");
    imageElement.id = "meme-image";
    imageElement.src = " ";
        // added attribute to image
        // https://softauthor.com/javascript-working-with-images/#:~:text=Create%20Image%20Element%20in%20JavaScript,URL%20to%20its%20src%20attribute.&text=Finally%2C%20add%20the%20image%20element,it%20to%20the%20body%20element.
    let imagewrapperElement = document.getElementById("meme-image-wrapper");
    imagewrapperElement.appendChild(imageElement);
}
*/
