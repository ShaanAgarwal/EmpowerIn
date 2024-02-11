const mongoose = require('mongoose');

const verifyOTPForgotPasswordAPISchema = new mongoose.Schema({
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
}, { timestamps: true });

const verifyOTPForgotPasswordAPI = mongoose.model('VerifyOTPForgotPasswordAPI', verifyOTPForgotPasswordAPISchema);
module.exports = verifyOTPForgotPasswordAPI;