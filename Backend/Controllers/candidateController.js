const bcrypt = require('bcrypt');
const User = require('../Models/userSchema');
const Candidate = require('../Models/candidateSchema');
const OtpRegistration = require('../Models/otpRegistrationSchema');
const { sendEmailSingle } = require('../Utils/EmailSendingViaNodemailer/sendEmailSingle');

const registerCandidate = async (req, res) => {
    try {
        const { firstName, lastName, email, password, confirmPassword, phoneNumber, linkedinURL, aboutSection } = req.body;
        if (!firstName || !lastName || !email || !password || !confirmPassword || !phoneNumber || !linkedinURL || aboutSection) {
            return res.status(400).json({ message: "All fields are required", success: false });
        };
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
        await sendEmailSingle(email, 'Registration OTP', '1234');
        return res.status(200).json({ message: "Candidate Registered Successfully", success: true, newUser, newCandidate, otp });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error", success: false });
    };
};

const verifyOtpRegistration = async (req, res) => {
    try {
        const { email, otp } = req.body;
        if (!email || !otp) {
            return res.status(400).json({ message: "All fields are required", success: false });
        };
        const userExist = await User.findOne({ email: email });
        if (!userExist) {
            return res.status(400).json({ message: "User with the given email does not exist.", success: false });
        };
        const existOtp = await OtpRegistration.findOne({ email: userExist._id });
        if (existOtp.otp != otp) {
            return res.status(400).json({ message: "Invalid OTP", success: false });
        };
        return res.status(200).json({ message: "OTP is verified.", success: true, userExist, existOtp });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", success: false });
    };
};

module.exports = { registerCandidate, verifyOtpRegistration };