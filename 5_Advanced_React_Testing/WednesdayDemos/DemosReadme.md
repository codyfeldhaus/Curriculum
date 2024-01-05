# Week 5: Advanced React and Jest Testing

## Wednesday - Additional Demos and Project Walkthroughs

### Demo: Advanced use of useContext and useReducer Together
- **Objective**: Combine useContext and useReducer for global state management.
- **Code Snippet with Comments**:
  ```javascript
  import React, { useReducer, useContext, createContext } from 'react';

  // Define the initial state and reducer function
  const initialState = { count: 0 };
  const reducer = (state, action) => {
      switch (action.type) {
          case 'increment':
              return { count: state.count + 1 };
          case 'decrement':
              return { count: state.count - 1 };
          default:
              return state;
      }
  };

  // Create a context for the global state
  const CountContext = createContext();

  // Component providing the global state
  const CountProvider = ({ children }) => {
      const [state, dispatch] = useReducer(reducer, initialState);

      // The value passed to the Provider should contain the state and dispatch function
      return (
          <CountContext.Provider value={{ state, dispatch }}>
              {children}
          </CountContext.Provider>
      );
  };

  // Consumer component that uses the useContext hook to access the global state
  const Counter = () => {
      const { state, dispatch } = useContext(CountContext);
      return (
          <div>
              Count: {state.count}
              <button onClick={() => dispatch({ type: 'increment' })}>+</button>
              <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
          </div>
      );
  };

  function App() {
      return (
          <CountProvider>
              <Counter />
          </CountProvider>
      );
  }
  ```

### Demo: Testing Components with Async Calls using Jest
- **Objective**: Write Jest tests for components that make asynchronous API calls.
- **Code Snippet with Comments**:
  ```javascript
  import React from 'react';
  import { render, screen, waitFor } from '@testing-library/react';
  import userEvent from '@testing-library/user-event';
  import AsyncComponent from './AsyncComponent';

  // Mocking an async function used by the component
  jest.mock('./api');

  test('loads items eventually', async () => {
      render(<AsyncComponent />);

      // Simulate user events or interactions if needed
      userEvent.click(screen.getByText('Load Data'));

      // Use waitFor to handle asynchronous updates
      await waitFor(() => {
          expect(screen.getByRole('list')).toBeInTheDocument();
          expect(screen.getByText('Item 1')).toBeInTheDocument(); // Example item
      });
  });
  ```
