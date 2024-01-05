# Week 3: Introduction to React

## Wednesday - Demos and Project Walkthroughs

### Setting Up a React Environment
- **Objective**: Get started with a basic React setup.
- **Step-by-Step Instructions**:
  1. **Create React App**:
     - Use `create-react-app` to set up a new React project.
     - **Code Snippet**:
       ```bash
       npx create-react-app my-react-app
       cd my-react-app
       npm start
       ```
  2. **Project Structure Overview**:
     - Walk through the generated project structure.
- **Discussion Points**:
  - Explain the role of each file and folder in the `create-react-app` setup.

### Building Your First React Component
- **Objective**: Create and render a basic React component.
- **Step-by-Step Instructions**:
  1. **Create a Simple Component**:
     - Write a functional component in `App.js`.
     - **Code Snippet**:
       ```javascript
       import React from 'react';

       function App() {
           return <h1>Hello, React!</h1>;
       }

       export default App;
       ```
- **Discussion Points**:
  - Discuss the syntax and structure of a functional component.

### Understanding and Using JSX
- **Objective**: Dive deeper into JSX and its capabilities.
- **Step-by-Step Instructions**:
  1. **Embedding Expressions in JSX**:
     - Show how to embed JavaScript expressions in JSX.
     - **Code Snippet**:
       ```javascript
       function App() {
           const greeting = 'Welcome to React';
           return <h1>{greeting}</h1>;
       }
       ```
- **Discussion Points**:
  - Explain how JSX is transpiled into regular JavaScript.

### Working with Props
- **Objective**: Learn to pass and access props in components.
- **Step-by-Step Instructions**:
  1. **Passing and Accessing Props**:
     - Create a component that accepts props and renders them.
     - **Code Snippet**:
       ```javascript
       function WelcomeMessage({ message }) {
           return <h1>{message}</h1>;
       }

       function App() {
           return <WelcomeMessage message="Hello from App" />;
       }
       ```
- **Discussion Points**:
  - Explain the concept of "props" as a way to pass data to components.

### Introduction to State with useState
- **Objective**: Understand state management in functional components.
- **Step-by-Step Instructions**:
  1. **Using useState Hook**:
     - Implement state in a component with `useState`.
     - **Code Snippet**:
       ```javascript
       import React, { useState } from 'react';

       function Counter() {
           const [count, setCount] = useState(0);

           return (
               <div>
                   <p>You clicked {count} times</p>
                   <button onClick={() => setCount(count + 1)}>
                       Click me
                   </button>
               </div>
           );
       }
       ```
- **Discussion Points**:
  - Discuss how `useState` allows for state management in functional components.

---

These walkthroughs and demos are designed to solidify the foundational concepts of React, ensuring students understand the core principles of component-based architecture, JSX, props, and state.
