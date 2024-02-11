const mongoose = require('mongoose');

const registerCandidateAPISchema = new mongoose.Schema({
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
    phoneNumber: {
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
    }
}, {timestamps: true});

const registerCandidateAPI = mongoose.model('RegisterCandidateAPI', registerCandidateAPISchema);
module.exports = registerCandidateAPI;