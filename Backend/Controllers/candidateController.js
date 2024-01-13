const bcrypt = require('bcrypt');
const User = require('../Models/userSchema');
const Candidate = require('../Models/candidateSchema');
const OtpRegistration = require('../Models/otpRegistrationSchema');

const registerCandidate = async (req, res) => {
    try {
        const { firstName, lastName, email, password, confirmPassword, phoneNumber, linkedinURL, aboutSection } = req.body;
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match", success: false });
        };
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(409).json({ message: "Email is already registered", success: false });
        };
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            userType: 'Candidate',
        });
        await newUser.save();
        const newCandidate = new Candidate({
            email: newUser._id,
            phoneNumber,
            linkedinURL,
            aboutSection,
        });
        await newCandidate.save();
        const otp = new OtpRegistration({
            email: newUser._id,
            otp: 1234,
        });
        await otp.save();
        return res.status(200).json({ message: "Candidate Registered Successfully", success: true, newUser, newCandidate, otp });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error", success: false });
    };
};

module.exports = { registerCandidate };