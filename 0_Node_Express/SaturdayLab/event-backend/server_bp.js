const express = require('express');
const app = express();
app.use(express.json()); // For parsing application/json

let events = []; // Array to store events

app.post('/add-event', (req, res) => {
    // Logic to add an event
});

app.get('/events', (req, res) => {
    // Return list of events
});

app.post('/register', (req, res) => {
    // Handle event registration
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
