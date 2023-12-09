const express = require('express');
const app = express();
app.use(express.json()); // For parsing application/json

// Array to store events
const events = [
  {
    id: 1,
    name: "Tech Conference 2023",
    description: "An annual conference for tech enthusiasts, featuring talks from industry leaders, workshops, and networking opportunities.",
    date: "2023-07-15",
    location: "Convention Center, Silicon Valley"
  },
  {
    id: 2,
    name: "Local Art Fair",
    description: "A gathering of local artists showcasing their work, including paintings, sculptures, and live performances.",
    date: "2023-08-05",
    location: "Downtown Arts District"
  },
  {
    id: 3,
    name: "Charity 5K Run",
    description: "A community 5K run to raise funds for local charities. Participants can run, walk, or jog.",
    date: "2023-09-10",
    location: "City Park"
  }
];


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
