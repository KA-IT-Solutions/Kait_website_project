const express = require('express');
const FormData = require('../models/FormData');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, contact, email, dob, education, address, permanentAddress } = req.body;
    // const resume = req.file ? req.file.path : '';
    const resumeUrl = req.file ? `/uploads/${req.file.filename}` : '';


    const newFormData = new FormData({
      name,
      contact,
      email,
      dob,
      education,
      address,
      permanentAddress,
      resume: resumeUrl,
    });

    await newFormData.save();
    res.status(201).send('Form data saved successfully');
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).send('Server error');
  }
});

module.exports = router;
