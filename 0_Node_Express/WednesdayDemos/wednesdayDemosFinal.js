//Create new node project and index.js file from scratch
//use this code as reference

//Demo 1 - Basic Node.js Server
// import { createServer } from 'http';

// const server = createServer((req, res) => {
//  res.writeHead(200, {'Content-Type': 'text/plain'});
//  res.end('Hello World\n');
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//  console.log(`Server running at http://localhost:${PORT}/`);
// });

//Demo 2 - Basic Express App
import express from 'express';
const app = express();

app.get('/', (req, res) => {
 res.send('Welcome to the Home Page!');
});

app.get('/about', (req, res) => {
 res.send('About Us');
});

const PORT = 3000;
app.listen(PORT, () => {
 console.log(`Express server running at http://localhost:${PORT}/`);
});
