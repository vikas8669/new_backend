const EligibilityCheck = require('../Models/User');

exports.submitEligibilityForm = async (req, res) => {
    
  try {
    const {
      age,
      monthlyIncome,
      employmentType,
      skippedEMI,
      unpaidLoanDues,
      settledLoanForLess,
      defaultedCreditCard,
      city,
      isResidentIndianCitizen
    } = req.body;

    if (!age || !monthlyIncome || !employmentType || !city) {
      return res.status(400).json({ message: 'All fields required' });
    }

    const newEntry = new EligibilityCheck({
      age,
      monthlyIncome,
      employmentType,
      skippedEMI,
      unpaidLoanDues,
      settledLoanForLess,
      defaultedCreditCard,
      city,
      isResidentIndianCitizen
    });

    const savedEntry = await newEntry.save();
    res.status(201).json({
      message: 'Form submitted successfully',
      data: savedEntry
    });
  } catch (error) {
    console.error('Eligibility form submission failed:', error);
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message
    });
  }
};
