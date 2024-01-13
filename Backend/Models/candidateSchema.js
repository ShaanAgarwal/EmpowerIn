const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
    email: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    linkedinURL: {
        type: String,
        required: true,
    },
    aboutSection: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Candidate = mongoose.model('Candidate', candidateSchema);
module.exports = Candidate;