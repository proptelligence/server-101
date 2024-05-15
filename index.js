// Importing required modules
const express = require('express');

// Creating an Express application
const app = express();
const port = 3000; // Port number

// Sample route for testing
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Starting the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
