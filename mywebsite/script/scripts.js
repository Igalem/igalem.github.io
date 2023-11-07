const textElement = document.querySelector('.typewriter');
const textArray = ['A passionate Data Engineer', 'Senior BI Developer'];
let arrayIndex = 0; // Added to keep track of which string to print from the array
let letterIndex = 0;
let isAdding = true;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function typewriter() {
  while (true) { // Loop forever
    // Current text is based on the string from the textArray
    const currentText = textArray[arrayIndex];
    
    // Set the text of the textElement to the substring of currentText
    textElement.textContent = currentText.slice(0, letterIndex);
    
    // If we're adding text and we've reached the full text, switch to removing
    if (isAdding && letterIndex === currentText.length) {
      await sleep(2000); // Wait a bit when the full text is displayed
      isAdding = false;
    }

    // If we're removing text and we've removed all of it, switch to adding and go to the next string
    if (!isAdding && letterIndex === 0) {
      isAdding = true;
      arrayIndex = (arrayIndex + 1) % textArray.length; // Move to the next string in the array
    }
    
    // Add or remove a character
    letterIndex += isAdding ? 1 : -1;

    // Wait before updating the text
    await sleep(60); // The speed of typing
  }
}

// Start the typewriter effect
typewriter();




function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  

