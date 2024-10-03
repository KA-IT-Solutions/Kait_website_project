const express = require('express');
const mysql = require('mysql');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 8000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'public')));

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'Kait',
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

// File upload setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/'); // Upload to public folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to filename
  },
});

const upload = multer({ storage: storage });

// API endpoint
app.post('/api/form', upload.single('resume'), (req, res) => {
  const { name, contact, dob, education, address, permanentAddress } = req.body;
  const resumePath = `/public/${req.file.filename}`; // Path to the resume

  const query = 'INSERT INTO applications (name, contact, dob, education, address, permanentAddress, resume) VALUES (?, ?, ?, ?, ?, ?, ?)';
  const values = [name, contact, dob, education, address, permanentAddress, resumePath];

  db.query(query, values, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error inserting data', error: err });
    }
    res.status(201).json({ message: 'Form submitted successfully!', id: result.insertId });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
