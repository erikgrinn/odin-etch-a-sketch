# odin-etch-a-sketch

This project is an implementation of an Etch-a-Sketch using HTML, CSS, and JavaScript. Below are the key coding concepts used in this project:

## Key Coding Concepts

### HTML
- **Document Structure**: The `index.html` file sets up the basic structure of the webpage, including the button and the grid container.
- **External Resources**: Links to external CSS and JavaScript files are included using `<link>` and `<script>` tags.

### CSS
- **Flexbox**: Used to center the content on the page and to layout the grid items.
- **Styling**: Custom styles are applied to the button, grid container, and grid items to enhance the appearance.
- **Hover Effects**: The button changes color when hovered over, using the `:hover` pseudo-class.

### JavaScript
- **DOM Manipulation**: JavaScript is used to dynamically create and manipulate the grid structure.
  - `document.querySelector` and `document.createElement` are used to select elements and create new ones.
  - Event listeners are added to handle user interactions.
- **Event Handling**: 
  - `click` event on the resize button to prompt the user for a new grid size.
  - `mouseover` event on grid items to change their color and opacity.
- **Random Number Generation**: The `randomBetween` function generates random RGB values for the grid item colors.
- **Cloning Nodes**: `cloneNode` is used to create copies of the grid row and grid item templates.
- **Prompt and Alert**: Used to interact with the user for resizing the grid.

### Project Structure
- **index.html**: The main HTML file that sets up the structure of the webpage.
- **main.css**: The CSS file that contains styles for the webpage.
- **main.js**: The JavaScript file that contains the logic for creating and interacting with the grid.
- **images/**: Directory containing image assets used in the project.

## How to Use
1. Open `index.html` in a web browser.
2. Click the "RESIZE" button to set the grid size.
3. Move the mouse over the grid items to change their color and opacity.
