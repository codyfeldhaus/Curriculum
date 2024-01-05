# Event Planning Application

## Objective
Develop an event planning application with user authentication and event management.

## Project Setup
- Initialize the project with `create-react-app`.
- Create components: `Login`, `EventList`, `EventForm`, `ProtectedRoute`, and `App`.

## Implementation

### App Component (App.js)
```javascript
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import EventList from './EventList';
import EventForm from './EventForm';
import ProtectedRoute from './ProtectedRoute';

// Main App component with Router setup
function App() {
    // State to track user authentication status
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <Router>
            <Switch>
                {/* Route for login page */}
                <Route path="/login" component={Login} />
                {/* Protected routes for authenticated users */}
                <ProtectedRoute
                    exact
                    path="/"
                    component={EventList}
                    isAuthenticated={isAuthenticated}
                />
                <ProtectedRoute
                    path="/create-event"
                    component={EventForm}
                    isAuthenticated={isAuthenticated}
                />
            </Switch>
        </Router>
    );
}
```

### EventForm Component (EventForm.js)
```javascript
import React, { useState } from 'react';

// Form component for creating a new event
function EventForm() {
    // State to manage form data
    const [eventDetails, setEventDetails] = useState({ name: '', date: '', location: '' });

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to handle event creation (e.g., API call)
    };

    // Render the form with inputs for event details
    return (
        <form onSubmit={handleSubmit}>
            {/* Inputs for event name, date, and location */}
        </form>
    );
}
```

### ProtectedRoute Component (ProtectedRoute.js)
```javascript
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// A wrapper component for protected routes
const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            // Redirect to login if not authenticated, else render the component
            isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
        )} />
    );
};
```

### LogIn Component (Login.js)
```javascript
import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthContext'; // Assuming AuthContext is created

function Login() {
    const [username, setUsername] = useState('');
    const { setIsAuthenticated } = useContext(AuthContext);

    const handleLogin = () => {
        if (username) {
            setIsAuthenticated(true);
            // Additional logic for handling user login
        }
    };

    return (
        <div>
            <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Enter username" 
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}
export default Login;
```

### Event List Component (EventList.js)
```javascript
import React, { useState, useEffect } from 'react';

function EventList() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // Fetch events from an API or use static data
        setEvents([{ name: 'Event 1', date: '2021-01-01', location: 'Location 1' }]);
    }, []);

    return (
        <div>
            <h2>Upcoming Events</h2>
            {events.map((event, index) => (
                <div key={index}>
                    <h3>{event.name}</h3>
                    <p>Date: {event.date}</p>
                    <p>Location: {event.location}</p>
                </div>
            ))}
        </div>
    );
}

export default EventList;
```

### styles.css
```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    text-align: center;
}

input, button {
    margin: 10px;
    padding: 10px;
}

button {
    cursor: pointer;
}

h2, h3 {
    color: #333;
}

.event {
    margin: 15px;
    padding: 15px;
    border: 1px solid #ddd;
}

```

### AuthContext.js
```javascript
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

```