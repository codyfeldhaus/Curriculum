# Week 4: Intermediate React

## Wednesday - Demos and Project Walkthroughs

### Demo: Using useState Hook
- **Objective**: Implement a counter using `useState`.
- **Code Snippet**:
  ```javascript
  import React, { useState } from 'react';

  function Counter() {
      const [count, setCount] = useState(0);

      return (
          <div>
              <p>Count: {count}</p>
              <button onClick={() => setCount(count + 1)}>Increment</button>
          </div>
      );
  }
  ```

### Demo: Managing Side Effects with useEffect
- **Objective**: Show how to use `useEffect` to update document title.
- **Code Snippet**:
  ```javascript
  import React, { useState, useEffect } from 'react';

  function TitleChanger() {
      const [title, setTitle] = useState('Default Title');

      useEffect(() => {
          document.title = title;
      }, [title]);

      return (
          <div>
              <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
          </div>
      );
  }
  ```

### Demo: useContext for Global State Management
- **Objective**: Demonstrate the use of `useContext` for sharing state across components.
- **Code Snippet**:
  ```javascript
  import React, { useState, useContext, createContext } from 'react';

  const ThemeContext = createContext();

  function ThemeProvider({ children }) {
      const [theme, setTheme] = useState('light');

      return (
          <ThemeContext.Provider value={{ theme, setTheme }}>
              {children}
          </ThemeContext.Provider>
      );
  }

  function ThemedComponent() {
      const { theme, setTheme } = useContext(ThemeContext);
      return (
          <div>
              <p>Current theme: {theme}</p>
              <button onClick={() => setTheme('dark')}>Switch to Dark</button>
          </div>
      );
  }
  ```

### Demo: useReducer for Complex State Logic
- **Objective**: Use `useReducer` for state management in a to-do list.
- **Code Snippet**:
  ```javascript
  import React, { useReducer } from 'react';

  function reducer(state, action) {
      switch (action.type) {
          case 'add':
              return [...state, action.payload];
          default:
              return state;
      }
  }

  function TodoApp() {
      const [todos, dispatch] = useReducer(reducer, []);

      const addTodo = text => {
          dispatch({ type: 'add', payload: text });
      };

      return (
          <div>
              <input type="text" onKeyDown={e => e.key === 'Enter' && addTodo(e.target.value)} />
              <ul>
                  {todos.map((todo, index) => <li key={index}>{todo}</li>)}
              </ul>
          </div>
      );
  }
  ```

### Demo: Building and Validating Forms
- **Objective**: Create a contact form with validation.
- **Code Snippet**:
  ```javascript
  import React, { useState } from 'react';

  function ContactForm() {
      const [email, setEmail] = useState('');
      const [message, setMessage] = useState('');
      const [error, setError] = useState('');

      const handleSubmit = e => {
          e.preventDefault();
          if (!email || !message) {
              setError('All fields are required');
              return;
          }
          setError('');
          // Form submission logic
      };

      return (
          <form onSubmit={handleSubmit}>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
              <textarea value={message} onChange={e => setMessage(e.target.value)}></textarea>
              <button type="submit">Submit</button>
              {error && <p>{error}</p>}
          </form>
      );
  }
  ```

### Demo: Basic Routing with React Router
- **Objective**: Introduce basic navigation between pages using React Router.
- **Code Snippet**:
  ```javascript
  import React from 'react';
  import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

  function Home() {
      return <h2>Home Page</h2>;
  }

  function About() {
      return <h2>About Page</h2>;
  }

  function AppRouter() {
      return (
          <Router>
              <div>
                  <nav>
                      <Link to="/">Home</Link> | <Link to="/about">About</Link>
                  </nav>
                  <Route path="/" exact component={Home} />
                  <Route path="/about" component={About} />
              </div>
          </Router>
      );
  }

  export default AppRouter;
  ```
- **Discussion Points**:
  - Explain the concept of client-side routing.
  - Discuss the `Router`, `Route`, and `Link` components from React Router.

### Demo: Complex State Logic with useReducer and useContext
- **Objective**: Showcase a more complex state management scenario using `useReducer` in combination with `useContext`.
- **Code Snippet**:
  ```javascript
  import React, { useReducer, useContext, createContext } from 'react';

  const initialState = { count: 0 };
  
  function reducer(state, action) {
      switch (action.type) {
          case 'increment':
              return { count: state.count + 1 };
          case 'decrement':
              return { count: state.count - 1 };
          default:
              throw new Error();
      }
  }

  const CountContext = createContext();

  function CountProvider({ children }) {
      const [state, dispatch] = useReducer(reducer, initialState);
      return (
          <CountContext.Provider value={{ state, dispatch }}>
              {children}
          </CountContext.Provider>
      );
  }

  function Counter() {
      const { state, dispatch } = useContext(CountContext);
      return (
          <div>
              Count: {state.count}
              <button onClick={() => dispatch({ type: 'increment' })}>+</button>
              <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
          </div>
      );
  }

  function App() {
      return (
          <CountProvider>
              <Counter />
          </CountProvider>
      );
  }
  ```
  
- **Discussion Points**:
  - Discuss the benefits of combining `useReducer` with `useContext` for global state management.
  - Explain the pattern of "Reducer + Context" as an alternative to external state management libraries.
