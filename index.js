// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  const randomColor =
    '#' + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  document.body.style.backgroundColor = '';
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  const keyPressDisplay = document.getElementById('keyPressDisplay');
  keyPressDisplay.textContent = 'Key pressed: ' + event.key;
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  const textInput = document.getElementById('textInput').value;
  const textInputDisplay = document.getElementById('textInputDisplay');
  textInputDisplay.textContent = 'You typed: ' + textInput;
}

// Attach Event Listeners
function setupEventListeners() {
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor);

  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor);

  document.addEventListener('keydown', displayKeyPress);

  document
    .getElementById('textInput')
    .addEventListener('input', displayUserInput);
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners);
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}