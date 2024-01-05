# Week 1: Review of HTML, CSS, JavaScript Fundamentals Prework

## Wednesday - Demos and Project Walkthroughs (4 Hours)

### Instructor Guide for Week 1 Demos - HTML, CSS, JavaScript with Programming Fundamentals

#### Demo 1: Creating a Basic HTML Page
- **Objective**: To demonstrate the creation of a simple HTML page, covering basic elements and structure.

#### Demo 2: Styling with CSS
- **Objective**: To show how to add style to the HTML page using CSS.
- **Step-by-Step Instructions**:
  1. **Create a CSS File**:
     - Create a new file named `styles.css`.
     - Add basic styling rules:
       ```css
       body {
           font-family: Arial, sans-serif;
           line-height: 1.6;
           margin: 0;
           padding: 0;
           background-color: #f4f4f4;
       }
       h1 {
           color: navy;
       }
       ```
  2. **Link CSS to HTML**:
     - In `index.html`, link the CSS file within the `<head>` section:
       ```html
       <link rel="stylesheet" href="styles.css">
       ```
  3. **Discuss**:
     - Explain CSS selectors, properties, and values.
     - Discuss the importance of linking the CSS file to the HTML document.

#### Demo 3: Adding Basic JavaScript
- **Objective**: To introduce JavaScript and show how it can be used to add interactivity to the web page.
- **Step-by-Step Instructions**:
  1. **Create a JavaScript File**:
     - Create a new file named `script.js`.
     - Add a simple script to change the text of the `<h1>` tag when clicked:
       ```javascript
       document.addEventListener('DOMContentLoaded', () => {
           const heading = document.querySelector('h1');
           heading.addEventListener('click', () => {
               heading.textContent = 'Clicked!';
           });
       });
       ```
  2. **Link JavaScript to HTML**:
     - In `index.html`, link the JavaScript file right before the closing `</body>` tag:
       ```html
       <script src="script.js"></script>
       ```
  3. **Discuss**:
     - Explain the purpose of the `DOMContentLoaded` event.
     - Discuss how JavaScript can manipulate the DOM and respond to user events.

#### Demo 4: JavaScript Functions and Event Handling
- **Objective**: To demonstrate the use of JavaScript functions and event handling.
- **Step-by-Step Instructions**:
  1. **Expand `script.js`**:
     - Add a function to dynamically update content:
       ```javascript
       function updateContent() {
           const content = document.querySelector('#content');
           content.textContent = 'Content updated!';
       }
       ```
  2. **Add Button in HTML**:
     - In `index.html`, add a button for triggering the function:
       ```html
       <button id="updateButton">Update Content</button>
       ```
  3. **Add Event Listener**:
     - In `script.js`, add an event listener to the button:
       ```javascript
       document.querySelector('#updateButton').addEventListener('click', updateContent);
       ```
  4. **Discuss**:
     - Explain the concept of functions in JavaScript.
     - Discuss how event listeners are used to handle user interactions.

#### Demo 5: Exploring Conditional Statements in JavaScript
- **Objective**: To teach basic conditional logic in JavaScript.
- **Step-by-Step Instructions**:
  1. **Implement a Conditional Statement**:
     - Modify `script.js` to include a conditional statement inside a function:
       ```javascript
       function checkDayTime() {
           const hour = new Date().getHours();
           let greeting;
           if (hour < 12) {
               greeting = 'Good Morning!';
           } else if (hour < 18) {
               greeting = 'Good Afternoon!';
           } else {
               greeting = 'Good Evening!';
           }
           document.querySelector('#greeting').textContent = greeting;
       }
       ```
  2. **Add Display Element in HTML**:
     - Add an element to display the greeting message:
       ```html
       <p id="greeting"></p>
       ```
  3. **Invoke Function on Page Load**:
     - Call `checkDayTime()` when the page loads:
       ```javascript
       document.addEventListener('DOMContentLoaded', checkDayTime);
       ```
  4. **Discuss**:
     - Explain how conditional statements (if-else) are used to make decisions in JavaScript.

#### Demo 6: Introduction to Arrays and Loops
- **Objective**: To introduce arrays and loop structures in JavaScript.
- **Step-by-Step Instructions**:
   1. **Create and Manipulate an Array**:
      - In `script.js`, create an array and loop through it:
        ```javascript
        const colors = ['Red', 'Green', 'Blue'];
        colors.forEach(color => {
            console.log(color);
        });
        ```
   2. **Display Array Elements on Page**:
      - Modify the forEach loop to display each color on the page:
        ```javascript
        const colorsList = document.querySelector('#colorsList');
        colors.forEach(color => {
            const listItem = document.createElement('li');
            listItem.textContent = color;
            colorsList.appendChild(listItem);
        });
        ```
   3. **Add List Element in HTML**:
      - Add an unordered list to display the colors:
        ```html
        <ul id="colorsList"></ul>
        ```
   4. **Discuss**:
      - Explain arrays and their use in storing lists of data.
      - Discuss how forEach loops are used to iterate over array elements.

### For Students: Base/Boilerplate Files
- Demo 1 (Basic HTML Page): `index.html` with basic HTML5 structure.
- Demo 2 (Styling with CSS): `styles.css` with initial styling rules.
- Demo 3 (Adding Basic JavaScript): `script.js` with a simple DOM manipulation example.

