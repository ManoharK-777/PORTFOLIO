const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';

// MongoDB Connection
mongoose.connect(MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Message Schema & Model
const messageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve Static Files from the dist directory (for production)
app.use(express.static(path.join(__dirname, '../dist')));

// API Routes
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        const newMessage = new Message({ name, email, subject, message });
        await newMessage.save();

        res.status(200).json({
            success: true,
            message: 'Message saved to database successfully!'
        });
    } catch (error) {
        console.error('Error saving message:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to save message. Please try again later.'
        });
    }
});

// Fallback to index.html for any unknown routes (SPA support)
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
