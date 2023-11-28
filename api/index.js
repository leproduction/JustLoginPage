require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON in the request body
app.use(express.json());

// Enable CORS for all routes
app.use(cors({
  origin: ["https://emailpromotionnow.vercel.app"],
  methods: ["POST"],
  credentials: true
}));

// Connect to MongoDB
async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
}

connectToDatabase();

// Define a schema for the emails
const emailSchema = new mongoose.Schema({
  email: String,
});

const Email = mongoose.model('Email', emailSchema);

// Define a route for handling email submission
app.post('/submitEmail', async (req, res) => {
  try {
    const newEmail = new Email({ email: req.body.email });
    await newEmail.save();

    // For demonstration purposes, log the email data
    console.log('Received email:', req.body.email);

    // Respond with a success message
    res.status(200).json({ message: 'Email submitted successfully' });
  } catch (error) {
    console.error('Error submitting email:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Event listeners for MongoDB connection
mongoose.connection.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

// Close MongoDB connection when the Node.js process is terminated
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('MongoDB connection closed');
  process.exit(0);
});
