# Week 2: Intermediate/Advanced JavaScript Techniques

## Wednesday - Demos and Project Walkthroughs

---

### ES6 Syntax and Features
- **Objective**: Explore ES6 syntax and its key features.
- **Step-by-Step Instructions**:
  1. **Arrow Functions**:
     - Demonstrate an arrow function and compare with a traditional function.
     - **Code Snippet**:
       ```javascript
       // Traditional Function
       function add(a, b) {
           return a + b;
       }
       // Arrow Function
       const add = (a, b) => a + b;
       ```
  2. **Template Literals**:
     - Create multi-line strings and embedded expressions.
     - **Code Snippet**:
       ```javascript
       const name = 'World';
       console.log(`Hello, ${name}!`);
       ```
  3. **Destructuring Assignment**:
     - Destructure objects and arrays.
     - **Code Snippet**:
       ```javascript
       const person = { name: 'Alice', age: 25 };
       const { name, age } = person;
       ```
  4. **Spread Operator**:
     - Use spread operator with arrays and objects.
     - **Code Snippet**:
       ```javascript
       const arr1 = [1, 2];
       const arr2 = [...arr1, 3, 4];
       ```
- **Discussion Points**:
  - Advantages of ES6 features in simplifying code.

---

### Implementing Callback Functions
- **Objective**: Understand and implement callback functions.
- **Step-by-Step Instructions**:
  1. **Creating a Callback Function**:
     - Write a callback function example.
     - **Code Snippet**:
       ```javascript
       function greeting(name) {
           alert('Hello ' + name);
       }
       function processUserInput(callback) {
           var name = prompt('Please enter your name.');
           callback(name);
       }
       processUserInput(greeting);
       ```
  2. **Using Callbacks for Asynchronous Tasks**:
     - Example using `setTimeout` with callbacks.
     - **Code Snippet**:
       ```javascript
       setTimeout(() => {
           console.log('This message is shown after 3 seconds');
       }, 3000);
       ```
- **Discussion Points**:
  - Role of callbacks in asynchronous operations.

---

### Making API Calls using Fetch
- **Objective**: Learn to make network requests using the Fetch API.
- **Step-by-Step Instructions**:
  1. **Basic Fetch Request**:
     - Make a fetch request to a public API.
     - **Code Snippet**:
       ```javascript
       fetch('https://api.example.com/data')
         .then(response => response.json())
         .then(data => console.log(data));
       ```
  2. **Handling JSON Responses**:
     - Parsing JSON and updating the DOM.
     - **Code Snippet**:
       ```javascript
       fetch('https://api.example.com/data')
         .then(response => response.json())
         .then(data => {
             document.getElementById('output').textContent = JSON.stringify(data);
         });
       ```
- **Discussion Points**:
  - Handling network errors and promises in Fetch.

---

### Error Handling in Asynchronous JavaScript
- **Objective**: Practice error handling in asynchronous JavaScript.
- **Step-by-Step Instructions**:
  1. **Try-Catch with Async/Await**:
     - Using `try-catch` in an async function.
     - **Code Snippet**:
       ```javascript
       async function fetchData() {
           try {
               const response = await fetch('https://api.example.com/data');
               const data = await response.json();
               console.log(data);
           } catch (error) {
               console.error('Fetching data failed', error);
           }
       }
       fetchData();
       ```
  2. **Error Handling in Fetch**:
     - Catching and handling errors in a fetch request.
     - **Code Snippet**:
       ```javascript
       fetch('https://api.example.com/data')
         .then(response => {
             if (!response.ok) {
                 throw new Error('Network response was not ok');
             }
             return response.json();
         })
         .catch(error => console.error('Fetch error:', error));
       ```
- **Discussion Points**:
  - Best practices for robust error handling in asynchronous code.

---

