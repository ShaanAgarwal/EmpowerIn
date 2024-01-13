const mongoose = require('mongoose');

const forgotPasswordSchema = new mongoose.Schema({
    email: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    otp: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

const ForgotPassword = mongoose.model('ForgotPassword', forgotPasswordSchema);
module.exports = ForgotPassword;