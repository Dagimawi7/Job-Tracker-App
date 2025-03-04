const express = require('express');  // Imports the Express library to build the web server
const cors = require('cors');  // Import CORS to allow requests from different sources (like the frontend)
require('dotenv').config();  // Load environment variables from a .env file (e.g., for sensitive data like API keys)

const app = express();  // Create an instance of the Express server
app.use(cors());  // Use CORS to allow cross-origin requests (from frontend to backend)
app.use(express.json());  // Use middleware to handle JSON data in requests

// Define a route for the home page ('/') - when someone visits this URL, send a message back
app.get('/', (req, res) => {
    res.send('Job Tracker API is running...');  // Respond with a message saying the API is running
});

const PORT = process.env.PORT || 5000;  // Set the port for the server (use value from .env or default to 5000)
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));  // Start the server and log a message when it's running
