const express = require('express');
const cors = require('cors'); // To handle cross-origin requests
const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

let events = []; // Store events
let registrations = []; // Store registrations

// Add an event
app.post('/add-event', (req, res) => {
    const event = { ...req.body, id: Date.now() };
    events.push(event);
    res.status(201).send(event);
});

// Get all events
app.get('/events', (req, res) => {
    res.status(200).send(events);
});

// Register for an event
app.post('/register', (req, res) => {
    const registration = { ...req.body, id: Date.now() };
    registrations.push(registration);
    res.status(201).send(registration);
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
