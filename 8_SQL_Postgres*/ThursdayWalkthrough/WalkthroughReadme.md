# Building a User Management System

## Objective
Create a simple user management system using Node.js, Express, and PostgreSQL.

## Steps

### Step 1: Database Setup
- **Objective**: Set up a PostgreSQL database with tables for users and roles.
- **Tasks**:
  1. Create a PostgreSQL database.
  2. Use the following SQL commands to create tables:
     ```sql
     CREATE TABLE users (
         id SERIAL PRIMARY KEY,
         username VARCHAR(50) UNIQUE NOT NULL,
         password VARCHAR(50) NOT NULL,
         role_id INT,
         FOREIGN KEY (role_id) REFERENCES roles(id)
     );

     CREATE TABLE roles (
         id SERIAL PRIMARY KEY,
         name VARCHAR(50) UNIQUE NOT NULL
     );
     ```

### Step 2: Backend Integration
- **Objective**: Set up Node.js and Express, and establish a connection to the PostgreSQL database.
- **Tasks**:
  1. Initialize a new Node.js project.
  2. Install necessary packages: `express`, `pg` (PostgreSQL client).
  3. Set up an Express server and connect to the database using `pg`.
     ```javascript
     const express = require('express');
     const { Pool } = require('pg');

     const pool = new Pool({
         user: 'me',
         host: 'localhost',
         database: 'mydb',
         password: 'password',
         port: 5432,
     });

     const app = express();
     app.use(express.json());

     // Additional endpoint setup goes here

     const PORT = process.env.PORT || 3000;
     app.listen(PORT, () => {
         console.log(`Server running on port ${PORT}`);
     });
     ```

### Step 3: API Endpoints
- **Objective**: Develop REST API endpoints for user operations (registration, login, update, delete).
- **Tasks**:
  1. Create endpoints for registering a new user, user login, listing users, updating user information, and deleting a user.
  2. Implement SQL queries within these endpoints to interact with the database.
     ```javascript
     // Sample endpoint for registering a new user
     app.post('/register', async (req, res) => {
         const { username, password, roleId } = req.body;
         // SQL query to insert a new user
     });

      // Endpoint for registering a new user
      app.post('/register', async (req, res) => {
        const { username, password, roleId } = req.body;
        const insertUserQuery = 'INSERT INTO users (username, password, role_id) VALUES ($1, $2, $3)';
        try {
          await pool.query(insertUserQuery, [username, password, roleId]);
          res.status(201).send('User registered successfully');
        } catch (error) {
          res.status(500).send('Error registering the user');
        }
      });

      // Endpoint for user login
      app.post('/login', async (req, res) => {
        const { username, password } = req.body;
        const findUserQuery = 'SELECT * FROM users WHERE username = $1 AND password = $2';
        try {
            const user = await pool.query(findUserQuery, [username, password]);
            if (user.rows.length > 0) {
                res.status(200).send('User logged in successfully');
            } else {
                res.status(400).send('Invalid username or password');
            }
        } catch (error) {
            res.status(500).send('Error logging in the user');
        }
      });

      // Endpoint for updating a user
      app.put('/users/:id', async (req, res) => {
        const { id } = req.params;
        const { username, password, roleId } = req.body;
        const updateUserQuery = 'UPDATE users SET username = $1, password = $2, role_id = $3 WHERE id = $4';
        try {
            await pool.query(updateUserQuery, [username, password, roleId, id]);
            res.status(200).send('User updated successfully');
        } catch (error) {
            res.status(500).send('Error updating the user');
        }
      });

      // Endpoint for deleting a user
       app.delete('/users/:id', async (req, res) => {
        const { id } = req.params;
        const deleteUserQuery = 'DELETE FROM users WHERE id = $1';
        try {
            await pool.query(deleteUserQuery, [id]);
            res.status(200).send('User deleted successfully');
        } catch (error) {
            res.status(500).send('Error deleting the user');
        }
        });
      ```

### Step 4: Authentication (Optional)
- **Objective**: Implement basic authentication for user login.
- **Tasks**:
  1. Implement a simple authentication mechanism (optional advanced feature: use JWT for token-based authentication).
  ```javascript
  const jwt = require('jsonwebtoken');

  // Endpoint for user login with JWT
  app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    // ... (user verification logic)
    if (/* user is verified */) {
        const token = jwt.sign({ userId: user.id }, 'your_secret_key');
        res.json({ token });
    }
  });

  ```
  

### Step 5: Frontend Interface (Optional)
- **Objective**: Create a simple frontend interface for user interactions.
- **Tasks**:
  1. Use any frontend technology (React, Angular, Vue, or plain HTML/CSS) to build a user interface.
  2. Connect the frontend with the backend API endpoints.

  ```javascript 
  // Simple React frontend interface for user registration
  import React, { useState } from 'react';
  import axios from 'axios';

  function RegisterUser() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // ... (additional state for form fields)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/register', { username, password /*, other fields */ });
            // Handle success
        } catch (error) {
            // Handle error
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Register</button>
        </form>
    );
  }

  export default RegisterUser;

  ```

## Additional Notes
- Focus on backend functionalities with Node.js and PostgreSQL.
- Ensure proper error handling and response formatting in the API.
- Test the endpoints with tools like Postman or integrate with a frontend for full functionality.
