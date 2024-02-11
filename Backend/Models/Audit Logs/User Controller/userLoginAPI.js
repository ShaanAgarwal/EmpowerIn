const mongoose = require('mongoose');

const userLoginAPISchema = new mongoose.Schema({
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
        default: false
    }
}, { timestamps: true });

const userLoginAPI = mongoose.model('UserLoginAPI', userLoginAPISchema);
module.exports = userLoginAPI;