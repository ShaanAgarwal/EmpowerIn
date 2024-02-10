const mongoose = require('mongoose');

const userRegisterAPISchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    userType: {
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
    },
}, {timestamps: true});

const userRegisterAPI = mongoose.model('UserRegisterAPI', userRegisterAPISchema);
module.exports = userRegisterAPI;