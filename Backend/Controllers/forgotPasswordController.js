const bcrypt = require('bcrypt');
const ForgotPassword = require('../Models/forgotPasswordSchema');
const User = require('../Models/userSchema');
const { sendEmailSingle } = require('../Utils/EmailSendingViaNodemailer/sendEmailSingle');
const RegisterEmailForgotPasswordAPI = require("../Models/Audit Logs/Forgot Password Controller/registerEmailForgotPasswordAPI");
const VerifyOTPForgotPasswordAPI = require("../Models/Audit Logs/Forgot Password Controller/verifyOTPForgotPasswordAPI");
const PasswordResetForgotPasswordAPI = require('../Models/Audit Logs/Forgot Password Controller/passwordResetForgotPasswordAPI');

const registerEmailForgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ message: "All fields are required", success: false });
        };
        const userExist = await User.findOne({ email: email });
        if (!userExist) {
            await RegisterEmailForgotPasswordAPI.create({ email: email, action: "Email with given password does not exist", success: false });
            return res.status(400).json({ message: "User with the given password does not exist.", success: false });
        };
        if (userExist.isBlocked == true) {
            await RegisterEmailForgotPasswordAPI.create({ email: email, action: "Account is Blocked", success: false });
            return res.status(400).json({ message: "Account is blocked", success: false });
        };
        if (userExist.forgotPassword == true) {
            await RegisterEmailForgotPasswordAPI.create({ email: email, action: "OTP has already been sent to email", success: false });
            return res.status(201).json({ message: "OTP had already been sent to your email", success: false });
        };
        const newForgotPasswordRegistration = new ForgotPassword({
            email: userExist._id,
            otp: 1234,
        });
        await newForgotPasswordRegistration.save();
        userExist.forgotPassword = true;
        await userExist.save();
        await sendEmailSingle(email, 'Forgot Password OTP', '1234')
        await RegisterEmailForgotPasswordAPI.create({ email: email, action: "Email successfully registered for generating password", success: true });
        return res.status(200).json({ message: "Email successfully registered for generating password", success: true });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", success: false });
    };
};

const verifyOtpForgotPassword = async (req, res) => {
    try {
        const { email, otp } = req.body;
        if (!email || !otp) {
            return res.status(400).json({ message: "All fields are required", success: false });
        };
        const userExist = await User.findOne({ email: email });
        if (!userExist) {
            await VerifyOTPForgotPasswordAPI.create({ email: email, action: "User does not exist", success: false });
            return res.status(400).json({ message: "User does not exist", success: false });
        };
        if (userExist.isBlocked == true) {
            await VerifyOTPForgotPasswordAPI.create({ email: email, action: "Account is blocked", success: false });
            return res.status(400).json({ message: "Account is blocked", success: false });
        };
        const userForgotPassword = await ForgotPassword.findOne({ email: userExist._id });
        if (!userForgotPassword) {
            await VerifyOTPForgotPasswordAPI.create({ email: email, action: "This user is not registered for Forgot Password", succees: false });
            return res.status(400).json({ message: "This user is not registered for Forgot Password", success: false });
        };
        if (otp != userForgotPassword.otp) {
            await VerifyOTPForgotPasswordAPI.create({ email: email, action: "Invalid OTP", success: false });
            return res.status(400).json({ message: "Invalid OTP", success: false });
        };
        await VerifyOTPForgotPasswordAPI.create({ email: email, action: "OTP has been verified successfully", success: true });
        return res.status(200).json({ message: "Otp has been verified successfully", success: true });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", success: false });
    };
};

const passwordResetForgotPassword = async (req, res) => {
    try {
        const { email, password, confirmPassword } = req.body;
        if (!email || !password || !confirmPassword) {
            return res.status(400).json({ message: "All fields are required.", success: false });
        };
        if (password != confirmPassword) {
            await PasswordResetForgotPasswordAPI.create({ email: email, action: "Both passwords are different", success: false });
            return res.status(400).json({ message: "Both passwords are different", success: false });
        };
        const existUser = await User.findOne({ email: email });
        if (!existUser) {
            await PasswordResetForgotPasswordAPI.create({ email: email, action: "User with the given email does not exist.", success: false });
            return res.status(400).json({ message: "User with the given email does not exist.", success: false });
        };
        if (existUser.isBlocked == true) {
            await PasswordResetForgotPasswordAPI.create({ email: email, action: "User with the given email does not exist", success: false });
            return res.status(400).json({ message: "Account is Blocked", success: false });
        };
        const hashedPassword = await bcrypt.hash(password, 10);
        existUser.password = hashedPassword;
        existUser.forgotPassword = false;
        await existUser.save();
        const forgotPassword = await ForgotPassword.findOne({ email: existUser._id });
        await forgotPassword.deleteOne();
        await PasswordResetForgotPasswordAPI.create({ email: email, action: "Password Reset Successful", success: true });
        return res.status(200).json({ message: "Password Reset Successful", success: true, existUser });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error", success: false });
    };
};

module.exports = { registerEmailForgotPassword, verifyOtpForgotPassword, passwordResetForgotPassword };