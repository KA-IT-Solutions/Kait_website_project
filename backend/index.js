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

// function sendMail(name, email, phone, message) {
//     const transporter = nodemailer.createTransport({
//         service: 'Gmail',
//         auth: {
//             user: process.env.EMAIL,
//             pass: process.env.PASSWORD
//         }
//     });

//     const subject = 'Mail Regarding Feedback';
//     const to = process.env.EMAIL;  // Send the email to the admin
//     const from = email;  // Set the sender as the user's email
//     const template = handlebars.compile(fs.readFileSync(path.join(__dirname, 'templates', 'feedback.hbs'), 'utf8'));
//     const html = template({ Name: name, Phone: phone, Message: message });

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
//     const { name, email,  phone, message} = req.body;
//     sendMail(name, email, phone, message);
//     res.json('Mail sent');
// });

// const PORT = process.env.PORT || 8001;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


const express = require('express');
require('dotenv').config();
const handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

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
    const template = handlebars.compile(fs.readFileSync(path.join(__dirname, 'templates', 'feedback.hbs'), 'utf8'));
    const html = template({ name, email, message, phone });

    const mailOptions = {
        from,
        to,
        subject,
        html
    };

    transporter.sendMail(mailOptions, (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Mail sent');
        }
    });
}

app.post('/send', (req, res) => {
    const { name, email, message, phone } = req.body;
    console.log('Received data:', req.body); // Log the received data
    sendMail(name, email, message, phone);
    res.json('Mail sent');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
