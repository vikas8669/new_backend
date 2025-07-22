// models/EligibilityCheck.js
const mongoose = require('mongoose');

const eligibilityCheckSchema = new mongoose.Schema({
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 60
  },
  monthlyIncome: {
    type: Number,
    required: true,
    min: 1000
  },
  employmentType: {
    type: String,
    required: true,
    enum: ['Salaried', 'Self-employed']
  },
  skippedEMI: {
    type: Boolean,
    required: true
  },
  unpaidLoanDues: {
    type: Boolean,
    required: true
  },
  settledLoanForLess: {
    type: Boolean,
    required: true
  },
  defaultedCreditCard: {
    type: Boolean,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  isResidentIndianCitizen: {
    type: Boolean,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('EligibilityCheck', eligibilityCheckSchema);
