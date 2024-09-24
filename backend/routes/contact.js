// routes/contact.js
const express = require('express');
const nodemailer = require('nodemailer');
const handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const router = express.Router();

function sendMail(name, email, message, phone) {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    const subject = 'Mail Regarding Feedback';
    const to = process.env.EMAIL;
    const from = email;

    // Ensure the template exists
    const templatePath = path.join(__dirname, '..', 'templates', 'feedback.hbs');
    if (!fs.existsSync(templatePath)) {
        console.error(`Template not found at ${templatePath}`);
        return;
    }

    const template = handlebars.compile(fs.readFileSync(templatePath, 'utf8'));
    const html = template({ name, email, message, phone });

    const mailOptions = {
        from,
        to,
        subject,
        html
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending mail:', error);
        } else {
            console.log('Mail sent:', info.response);
        }
    });
}

router.post('/send', (req, res) => {
    const { name, email, message, phone } = req.body;
    console.log('Received data:', req.body); // Log the received data
    if (!name || !email || !message || !phone) {
        return res.status(400).json({ error: 'All fields are required.' });
    }
    sendMail(name, email, message, phone);
    res.json({ message: 'Mail sent' });
});

module.exports = router;
