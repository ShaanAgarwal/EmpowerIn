const mongoose = require('mongoose');

const otpRegistrationSchema = new mongoose.Schema({
    email: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    otp: {
        type: Number,
        required: true,
    },
}, {timestamps: true});

const OtpRegistration = mongoose.model('OtpRegistration', otpRegistrationSchema);
module.exports = OtpRegistration;