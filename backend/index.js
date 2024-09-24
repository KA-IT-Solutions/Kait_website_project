// index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
require('dotenv').config();

const formRoutes = require('./routes/form');
const contactRoutes = require('./routes/contact'); // Import contact routes

const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Change this to your frontend's origin
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ensure uploads directory exists
const fs = require('fs');
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// File upload setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/form', upload.single('resume'), formRoutes);
app.use('/api/contact', contactRoutes); // Use the contact routes

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
