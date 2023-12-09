import React, { useState, useEffect } from 'react';

function App() {
  const [events, setEvents] = useState([]);
  const [registration, setRegistration] = useState({ name: '', eventId: '' });

  useEffect(() => {
    fetch('http://localhost:3030/events')
      .then(response => response.json())
      .then(data => setEvents(data));
  }, []);

  const handleRegister = (event) => {
    event.preventDefault();
    fetch('http://localhost:3030/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(registration)
    })
    .then(response => response.json())
    .then(data => alert(`Registered for event: ${data.eventId}`));
  };

  return (
    <div className="App">
      <h1>Event Registration</h1>
      <div>
        {events.map(event => (
          <div key={event.id}>{event.name}</div>
        ))}
      </div>
      <form onSubmit={handleRegister}>
        <input 
          type="text" 
          placeholder="Your Name" 
          value={registration.name}
          onChange={e => setRegistration({ ...registration, name: e.target.value })}
        />
        <select 
          value={registration.eventId} 
          onChange={e => setRegistration({ ...registration, eventId: e.target.value })}
        >
          <option value="">Select an Event</option>
          {events.map(event => (
            <option key={event.id} value={event.id}>{event.name}</option>
          ))}
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
