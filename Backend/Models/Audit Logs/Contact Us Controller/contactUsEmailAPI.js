const mongoose = require('mongoose');

const contactUsEmailAPISchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    query: {
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
    },
}, {timestamps: true});

const contactUsEmailAPI = mongoose.model('ContactUsEmailAPI', contactUsEmailAPISchema);
module.exports = contactUsEmailAPI;