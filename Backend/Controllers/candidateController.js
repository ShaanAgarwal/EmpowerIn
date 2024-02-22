const bcrypt = require('bcrypt');
const User = require('../Models/userSchema');
const Candidate = require('../Models/candidateSchema');
const OtpRegistration = require('../Models/otpRegistrationSchema');
const { sendEmailSingle } = require('../Utils/EmailSendingViaNodemailer/sendEmailSingle');
const RegisterCandidateAPI = require('../Models/Audit Logs/Candidate Controller/registerCandidateAPI');
const VerifyOTPRegistrationAPI = require("../Models/Audit Logs/Candidate Controller/verifyOTPRegistrationAPI");
const PDFParser = require('pdf-parse');
const axios = require('axios');

const registerCandidate = async (req, res) => {
    try {
        const { firstName, lastName, email, password, confirmPassword, phoneNumber } = req.body;
        if (!firstName || !lastName || !email || !password || !confirmPassword || !phoneNumber) {
            return res.status(400).json({ message: "All fields are required", success: false });
        };
        if (password !== confirmPassword) {
            await RegisterCandidateAPI.create({ firstName: firstName, lastName: lastName, email: email, phoneNumber: phoneNumber, action: "Passwords do not match", success: false });
            return res.status(400).json({ message: "Passwords do not match", success: false });
        };
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            await RegisterCandidateAPI.create({ firstName: firstName, lastName: lastName, email: email, phoneNumber: phoneNumber, action: "Email is already registered", success: false });
            return res.status(409).json({ message: "Email is already registered", success: false });
        };
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ firstName, lastName, email, password: hashedPassword, userType: 'Candidate' });
        await newUser.save();
        const newCandidate = new Candidate({ email: newUser._id, phoneNumber });
        await newCandidate.save();
        const otp = new OtpRegistration({ email: newUser._id, otp: 1234 });
        await otp.save();
        await sendEmailSingle(email, 'Registration OTP', '1234');
        await RegisterCandidateAPI.create({ firstName: firstName, lastName: lastName, email: email, phoneNumber: phoneNumber, action: "Candidate Registered Successfully", success: false });
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
            await VerifyOTPRegistrationAPI.create({ email: email, action: "User with the given email does not exist", success: false });
            return res.status(400).json({ message: "User with the given email does not exist.", success: false });
        };
        const existOtp = await OtpRegistration.findOne({ email: userExist._id });
        if (existOtp.otp != otp) {
            await VerifyOTPRegistrationAPI.create({ email: email, action: "Invalid OTP", success: false });
            return res.status(400).json({ message: "Invalid OTP", success: false });
        };
        await VerifyOTPRegistrationAPI.create({ email: email, action: "OTP is verified.", success: true });
        return res.status(200).json({ message: "OTP is verified.", success: true, userExist, existOtp });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", success: false });
    };
};

const uploadResumeProfile = async (req, res) => {
    try {
        const email = req.body.email;
        const resume = req.file;
        const dataBuffer = resume.buffer;
        const data = await PDFParser(dataBuffer);
        const djangoApiUrl = 'http://127.0.0.1:8000/api/resumeUpload/';
        const djangoApiResponse = await axios.post(djangoApiUrl, {
            parsedContent: data.text,
        });
        const resultArray = JSON.parse(djangoApiResponse.data.result);
        const categories = resultArray.map(item => item.Category);
        const userExist = await User.findOne({ email: email });
        if (!userExist) {
            return res.status(400).json({ message: "User with the given email does not exist.", success: false });
        };
        const candidateExist = await Candidate.findOne({ email: userExist._id });
        if (!candidateExist) {
            return res.status(400).json({ message: "Candidate with given email does not exist", success: false });
        };
        await Candidate.updateOne(
            { email: userExist._id },
            { $set: { categories: categories } }
        );
        return res.status(200).json({ message: "API executed successfully", success: true });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error", success: false });
    };
};

module.exports = { registerCandidate, verifyOtpRegistration, uploadResumeProfile };