# Event Registration Website Lab Assignment

## Project Objective
Build a simple event registration website using Node.js, Express, and React. This project consists of a backend server to handle event data and a React front-end for users to interact with.

## Project Structure
- **Backend Folder**: `event-backend`
  - **Main File**: `server.js`
  - **Data Store**: In-memory array for event and registration data.
- **Frontend Folder**: `event-frontend`
  - **React App**: Created with `create-react-app`.

## Instructions

### Backend Setup
1. **Initialize the Backend Project**:
   - Create a folder named `event-backend`.
   - Inside this folder, run:
     ```
     npm init -y
     npm install express
     ```

2. **Create `server.js`**:
   - Set up an Express server in this file.
   - Initialize arrays to store event data and registrations.

3. **Implement Basic Event Handling**:
   - Write routes to add an event (`POST`) and get all events (`GET`).

4. **Registration Route**:
   - Implement a `POST` route to handle event registrations.

### Frontend Setup
5. **Initialize the Frontend Project**:
   - Create a new React app outside the `event-backend` folder:
     ```
     npx create-react-app event-frontend
     ```

6. **Develop Event Display Component**:
   - Inside your React app, create a component to display events.

7. **Add Event Registration Form**:
   - Implement a form in the front-end to register for an event.

8. **Connect Frontend to Backend**:
   - Use `fetch` API in the React app to interact with the backend.

### Testing and Debugging
9. **Run and Test the Application**:
   - Start both the backend and frontend servers.
   - Test the complete functionality: viewing and registering for events.

### Optional Challenges
10. **Enhance the Frontend**:
    - Add styling to make the UI more appealing.
    - Implement front-end form validation.

11. **Error Handling**:
    - Add basic error handling on both backend and frontend for a robust application.

## Getting Started
Use the provided boilerplate code as a starting point. The backend code goes into the `event-backend/server.js`, and the frontend logic in `event-frontend/src/App.js`.
