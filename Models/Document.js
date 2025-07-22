const mongoose = require('mongoose');

const DocumentSchema = new mongoose.Schema({
    identityProof: {
        type: String,
        enum: ['Aadhaar', 'PAN', 'Passport', 'Voter ID', 'Driving License'],
        required: true,
    },
    addressProof: {
        type: String,
        enum: ['Aadhaar', 'Utility Bill', 'Rent Agreement', 'Passport'],
        required: true,
    },
    incomeProofType: {
        type: String,
        enum: ['Salary Slips', 'Bank Statements'],
        required: true,
    },
    employmentProof: {
        type: String,
        enum: ['Employee ID', 'Offer Letter', 'Business Registration'],
        required: true,
    },
    photograph: {
        type: String,
        required: true,
    },
    bankDetails: {
        accountNumber: {
            type: String,
            required: true,
        },
        ifscCode: {
            type: String,
            required: true,
        }
    },
    panCard: {
        type: String, 
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('Documents', DocumentSchema);
