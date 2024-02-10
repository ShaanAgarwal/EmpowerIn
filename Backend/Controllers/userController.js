const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require("../Models/userSchema");

const testUser = async (req, res) => {
    try {
        return res.status(200).json({ message: "API is working properly.", success: true });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", success: false });
    };
};

const userRegister = async (req, res) => {
    try {
        const { firstName, lastName, email, userType, password } = req.body;
        if (!firstName || !lastName || !email || !userType || !password) {
            return res.status(400).json({ message: "All fields are required", success: false });
        };
        const allowedUserTypes = ["Admin", "HeadHR", "HR", "Candidate"];
        if (!allowedUserTypes.includes(userType)) {
            return res.status(400).json({ message: "Invalid value for User Type", success: false });
        };
        const existingUserEmail = await User.findOne({ email: email });
        if (existingUserEmail) {
            return res.status(409).json({ message: "Email already exists.", success: false });
        };
        const hashedPassword = await bcrypt.hash(password, 10);
        const newTestUser = new User({ firstName: firstName, lastName: lastName, email: email, userType: userType, password: hashedPassword });
        await newTestUser.save();
        return res.status(201).json({ message: "Successful in creating a new User", success: true, newTestUser });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error", success: false });
    };
};

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required", success: false });
        };
        let userExist = await User.findOne({ email: email });
        if (!userExist) {
            return res.status(400).json({ message: "User with given email does not exist.", success: false });
        };
        if (userExist.isBlocked) {
            return res.status(400).json({ message: "Account is Blocked", success: false });
        };
        if (userExist.loginAttempts >= 6) {
            await User.findByIdAndUpdate(userExist._id, { isBlocked: true });
            return res.status(400).json({ message: "Account is Blocked", success: false });
        };
        const passwordMatch = await bcrypt.compare(password, userExist.password);
        if (!passwordMatch) {
            await User.findByIdAndUpdate(userExist._id, { $inc: { loginAttempts: 1 } });
            return res.status(401).json({ message: "Incorrect password", success: false });
        };
        await User.findByIdAndUpdate(userExist._id, { loginAttempts: 0 });
        const token = jwt.sign({ userId: userExist._id, email: userExist.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.status(200).json({ message: "The user has Logged in successfully", success: true, userExist, token });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error", success: false });
    };
};

module.exports = { testUser, userRegister, userLogin };