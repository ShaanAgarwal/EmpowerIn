const mongoose = require('mongoose');

const passwordResetForgotPasswordAPISchema = new mongoose.Schema({
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

const passwordResetForgotPasswordAPI = mongoose.model('PasswordResetForgotPasswordAPI', passwordResetForgotPasswordAPISchema);
module.exports = passwordResetForgotPasswordAPI;