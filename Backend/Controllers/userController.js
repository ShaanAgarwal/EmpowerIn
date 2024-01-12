const bcrypt = require('bcrypt');
const User = require("../Models/userSchema");

const testUser = async (req, res) => {
    try {
        return res.status(200).json({ message: "API is working properly.", success: true });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", success: false });
    };
};

const testUserRegister = async (req, res) => {
    try {
        const { firstName, lastName, email, userType, password } = req.body;
        if (!firstName) {
            return res.status(400).json({ message: "First Name is required", success: false });
        };
        if (!lastName) {
            return res.status(400).json({ message: "Last Name is required", success: false });
        };
        if (!email) {
            return res.status(400).json({ message: "Email is required", success: false });
        };
        if (!password) {
            return res.status(400).json({ message: "Password is required", success: false });
        };
        if (!userType) {
            return res.status(400).json({ message: "User Type is required.", success: false });
        };
        if (userType != ('Admin' || 'HeadHR' || 'HR' || 'Candidate')) {
            return res.status(400).json({ message: "Invalid value for User Types", success: false });
        };
        const existingUserEmail = await User.findOne({ email: email });
        if (existingUserEmail) {
            return res.status(409).json({ message: "Email already exists.", success: false });
        };
        const hashedPassword = await bcrypt.hash(password, 10);
        const newTestUser = new User({ firstName: firstName, lastName: lastName, email: email, userType: userType, password: hashedPassword });
        await newTestUser.save();
        return res.status(200).json({ message: "Successful in creating a new Test User", success: true, newTestUser });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error", success: false });
    };
};

module.exports = { testUser, testUserRegister };