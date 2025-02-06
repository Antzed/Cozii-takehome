const express = require('express');
const { body, validationResult } = require('express-validator');
const Application = require('../models/Application');
const router = express.Router();

// Validation middleware
const validateApplication = [
  // Personal Info Validation
  body('fullName').notEmpty().withMessage('Full name is required'),
  body('dob').isDate().withMessage('Invalid date format'),
  body('nationality').notEmpty().withMessage('Nationality is required'),
  body('email').isEmail().withMessage('Invalid email address'),
  body('phone').isMobilePhone().withMessage('Invalid phone number'),

  // Travel Preferences Validation
  body('departureDate').isDate().withMessage('Invalid departure date'),
  body('returnDate').isDate().withMessage('Invalid return date'),
  body('accommodation').isIn(['Space Hotel', 'Martian Base']).withMessage('Invalid accommodation selection'),

  // Health & Safety Validation
  body('healthDeclaration').isIn(['yes', 'no']).withMessage('Health declaration required'),
  body('emergencyName').notEmpty().withMessage('Emergency contact name required'),
  body('emergencyPhone').isMobilePhone().withMessage('Invalid emergency phone number'),
  body('relationship').notEmpty().withMessage('Relationship is required')
];

// POST application endpoint
router.post('/applications', validateApplication, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const application = new Application(req.body);
    await application.save();
    res.status(201).json({ message: 'Application submitted successfully!', application });
  } catch (error) {
    console.error('Application error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;