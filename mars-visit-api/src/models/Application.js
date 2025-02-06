const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  // Personal Information
  fullName: { type: String, required: true },
  dob: { type: Date, required: true },
  nationality: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },

  // Travel Preferences
  departureDate: { type: Date, required: true },
  returnDate: { type: Date, required: true },
  accommodation: { type: String, required: true },
  specialRequests: String,

  // Health & Safety
  healthDeclaration: { type: String, required: true },
  emergencyName: { type: String, required: true },
  emergencyPhone: { type: String, required: true },
  relationship: { type: String, required: true },
  medicalConditions: String,

  submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Application', applicationSchema);