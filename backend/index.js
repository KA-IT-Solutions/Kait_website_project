const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const formRoutes = require('./routes/form');
const multer = require('multer');
const path = require('path');
require('dotenv').config();

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

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


// const express = require('express');
// require('dotenv').config();
// const handlebars = require('handlebars');
// const fs = require('fs');
// const path = require('path');
// const cors = require('cors');
// const nodemailer = require('nodemailer');


// const app = express();
// app.use(cors());
// app.use(express.json());

// function sendMail(name, email, message, phone) {
//     const transporter = nodemailer.createTransport({
//         service: 'Gmail',
//         auth: {
//             user: process.env.EMAIL,
//             pass: process.env.PASSWORD
//         }
//     });

//     const subject = 'Mail Regarding Feedback';
//     const to = process.env.EMAIL;
//     const from = email;
//     const template = handlebars.compile(fs.readFileSync(path.join(__dirname, 'templates', 'feedback.hbs'), 'utf8'));
//     const html = template({ name, email, message, phone });

//     const mailOptions = {
//         from,
//         to,
//         subject,
//         html
//     };

//     transporter.sendMail(mailOptions, (error) => {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log('Mail sent');
//         }
//     });
// }

// app.post('/send', (req, res) => {
//     const { name, email, message, phone } = req.body;
//     console.log('Received data:', req.body); // Log the received data
//     sendMail(name, email, message, phone);
//     res.json('Mail sent');
// });

// const PORT = process.env.PORT || 8000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
