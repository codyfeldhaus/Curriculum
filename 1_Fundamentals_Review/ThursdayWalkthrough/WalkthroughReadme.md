# Week 1: Review of HTML, CSS, JavaScript Fundamentals Prework

## Thursday - Project Walkthrough (4 Hours)

## Instructor Guide 
---

### Project Objective
Build a simple To-Do List application using HTML, CSS, and JavaScript. This project will reinforce the understanding of basic web development and JavaScript programming fundamentals.

---

### Step 1: Initialize the Project
**Duration**: 15 minutes

**Tasks**:
1. Create a new folder named `todo-app`.
2. Create three files: `index.html`, `styles.css`, and `script.js`.

**Key Concepts to Discuss**:
- Basic file structure for a web application.
- Importance of organizing code into separate files for HTML, CSS, and JavaScript.

---

### Step 2: Building the HTML Structure
**Duration**: 30 minutes

**Tasks**:
1. Write basic HTML structure in `index.html`.
2. Include a header, input field for new tasks, and an unordered list for displaying tasks.

**Code Snippet**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>To-Do List</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>My To-Do List</h1>
        <input type="text" id="newTask" placeholder="Add a new task...">
        <button id="addTaskButton">Add Task</button>
        <ul id="tasksList"></ul>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

**Key Concepts to Discuss**:
- Using semantic HTML.
- The importance of `doctype` and language attribute.

---

### Step 3: Styling with CSS
**Duration**: 45 minutes

**Tasks**:
1. Open `styles.css`.
2. Add styles for the container, header, input, button, and list items.

**Code Snippet**:
```css
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}
.container {
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
h1 {
    color: navy;
}
#newTask {
    padding: 10px;
    width: 70%;
    margin-right: 10px;
}
#addTaskButton {
    padding: 10px;
}
ul {
    list-style: none;
    padding: 0;
}
li {
    padding: 10px;
    border-bottom: 1px solid #ddd;
}
li.completed {
    text-decoration: line-through;
    color: grey;
}
```

**Key Concepts to Discuss**:
- CSS Box Model.
- Styling HTML elements using CSS.

---

### Step 4: Adding JavaScript Functionality
**Duration**: 1 hour

**Tasks**:
1. Open `script.js`.
2. Write JavaScript to handle adding tasks, marking tasks as completed, and deleting tasks.

**Code Snippet**:
```javascript
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('addTaskButton');
    const tasksList = document.getElementById('tasksList');
    const newTaskInput = document.getElementById('newTask');

    addButton.addEventListener('click', () => {
        const taskText = newTaskInput.value.trim();
        if (taskText) {
            const listItem = document.createElement('li');
            listItem.textContent = taskText;
            listItem.addEventListener('click', () => listItem.classList.toggle('completed'));
            tasksList.appendChild(listItem);
            newTaskInput.value = '';
        }
    });
});
```

**Key Concepts to Discuss**:
- DOM manipulation: Creating and appending elements.
- Event handling in JavaScript.
- The importance of checking for empty input.

---

### Step 5: Testing and Debugging
**Duration**: 45 minutes

**Tasks**:
1. Run and test the application in a browser.
2. Debug any issues and make sure all functionalities (add, complete, delete tasks) are working.

**Key Concepts to Discuss**:
- Basic debugging techniques in JavaScript and browser developer tools.
- Common pitfalls in JavaScript programming and how to resolve them.

---

### Step 6: Q&A, Recap, and Best Practices
**Duration**: 30 minutes

**Tasks**:
1. Address any questions from the students.
2. Recap the session and reiterate best practices in web development.

**Key Concepts to Discuss**:
- Recap of JavaScript functions, event handling, and DOM manipulation.

# **_To Do!_**
- Incorporate discussion of HTML forms