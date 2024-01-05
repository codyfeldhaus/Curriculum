# Personal Diary App

## Objective
Build a personal diary application with authentication and protected routes.

## Setup
- Initialize a new React project.
- Install dependencies: `react-router-dom`.

## Components
- **Login**: Handles user authentication.
- **DiaryEntry**: Form for adding new diary entries.
- **DiaryList**: Displays a list of diary entries.
- **App**: Main component integrating React Router and context.

## Implementation

### App Component
```javascript
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import DiaryList from './DiaryList';
import DiaryEntry from './DiaryEntry';
import Login from './Login';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <Router>
            <div>
                <Route path="/login" render={() => (
                    isAuthenticated ? <Redirect to="/" /> : <Login onLogin={() => setIsAuthenticated(true)} />
                )} />
                <Route exact path="/" render={() => (
                    isAuthenticated ? <DiaryList /> : <Redirect to="/login" />
                )} />
                <Route path="/entry" render={() => (
                    isAuthenticated ? <DiaryEntry /> : <Redirect to="/login" />
                )} />
            </div>
        </Router>
    );
}

export default App;
```

### DiaryEntry Component
```javascript
import React, { useState } from 'react';

function DiaryEntry() {
    const [entry, setEntry] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle diary entry submission
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea value={entry} onChange={e => setEntry(e.target.value)}></textarea>
            <button type="submit">Add Entry</button>
        </form>
    );
}

export default DiaryEntry;
```

### DiaryList Component
```javascript
import React from 'react';

function DiaryList() {
    // Placeholder for diary entries
    const entries = ['Entry 1', 'Entry 2'];

    return (
        <div>
            {entries.map((entry, index) => <p key={index}>{entry}</p>)}
        </div>
    );
}

export default DiaryList;
```

### Login Component
```javascript
import React from 'react';

function Login({ onLogin }) {
    return (
        <div>
            <button onClick={onLogin}>Log in</button>
        </div>
    );
}

export default Login;
```
