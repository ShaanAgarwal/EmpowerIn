const mongoose = require('mongoose');

const registerEmailForgotPasswordAPISchema = new mongoose.Schema({
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

const registerEmailForgotPasswordAPI = mongoose.model('RegisterEmailForgotPasswordAPI', registerEmailForgotPasswordAPISchema);
module.exports = registerEmailForgotPasswordAPI;