# Event Registration Website Lab Assignment

## Project Objective
Build a simple event registration website using Node.js, Express, and React. This project consists of a backend server to handle event data and a React front-end for users to interact with.

## Project Structure
- **Backend Folder**: `event-server`
  - **Main File**: `index.js`
  - **Data Store**: In-memory array for event and registration data.
- **Frontend Folder**: `event-client`
  - **React App**: Created with `create-react-app`.

## Instructions

### Backend Setup
1. **Initialize the Backend Project**:
   - Create a folder named `event-server`.
   - Inside this folder, run:
     ```
     npm init -y
     npm install express
     ```

2. **Create `index.js`**:
   - Set up an Express server in this file.
   - Initialize arrays to store event data and registrations.

3. **Implement Basic Event Handling**:
   - Write routes to add an event (`POST`) and get all events (`GET`).

4. **Registration Route**:
   - Implement a `POST` route to handle event registrations.

### Frontend Setup
5. **Initialize the Frontend Project**:
   - Navigate to the `event-client` folder and initialize a new React application:
     ```
     npx create-react-app ./
     ```

6. **Develop Event Display Component**:
   - Inside your React app, create a component to display events.

7. **Add Event Registration Form**:
   - Implement a form in the front-end to register for an event.

8. **Connect Frontend to Backend**:
   - Use `Axios` API in the React app to interact with the backend.

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
Use the provided boilerplate code as a starting point. The backend code goes into the `event-server/index.js`, and the frontend logic in `event-client/src/App.js`.
