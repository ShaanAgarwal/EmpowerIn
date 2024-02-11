const mongoose = require('mongoose');

const verifyOtpRegistrationAPISchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    action: {
        type: String,
        required: true,
    },
    success: {
        type: Boolean,
        required: true,
        default: false,
    },
}, {timestamps: true});

const verifyOtpRegistrationAPI = mongoose.model('VerifyOTPRegistrationAPI', verifyOtpRegistrationAPISchema);
module.exports = verifyOtpRegistrationAPI;