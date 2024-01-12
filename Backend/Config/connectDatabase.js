const mongoose = require('mongoose');

const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to MONGODB Database");
    } catch (error) {
        console.log("Error Connecting To The Database");
    };
};

module.exports = { connectDatabase };