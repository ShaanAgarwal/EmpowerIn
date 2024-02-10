const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
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
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        required: true,
        enum: ['Admin', 'HeadHR', 'HR', 'Candidate']
    },
    isBlocked: {
        type: Boolean,
        required: true,
        default: false
    },
    loginAttempts: {
        type: Number,
        required: true,
        default: 0
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;