const bcrypt = require('bcrypt');
const ForgotPassword = require('../Models/forgotPasswordSchema');
const User = require('../Models/userSchema');
const { sendEmailSingle } = require('../Utils/EmailSendingViaNodemailer/sendEmailSingle');

const registerEmailForgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ message: "All fields are required", success: false });
        };
        const userExist = await User.findOne({ email: email });
        if (!userExist) {
            return res.status(400).json({ message: "User with the given password does not exist.", success: false });
        };
        if (userExist.isBlocked == true) {
            return res.status(400).json({ message: "Account is blocked", success: false });
        };
        if (userExist.forgotPassword == true) {
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
            return res.status(400).json({ message: "User does not exist", success: false });
        };
        if (userExist.isBlocked == true) {
            return res.status(400).json({ message: "Account is blocked", success: false });
        };
        const userForgotPassword = await ForgotPassword.findOne({ email: userExist._id });
        if (!userForgotPassword) {
            return res.status(400).json({ message: "This user is not registered for Forgot Password", success: false });
        };
        if (otp != userForgotPassword.otp) {
            return res.status(400).json({ message: "Invalid OTP", success: false });
        };
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
            return res.status(400).json({ message: "Both passwords are different", success: false });
        };
        const existUser = await User.findOne({ email: email });
        if (!existUser) {
            return res.status(400).json({ message: "User with the given email does not exist.", success: false });
        };
        if (existUser.isBlocked == true) {
            return res.status(400).json({ message: "Account is Blocked", success: false });
        };
        const hashedPassword = await bcrypt.hash(password, 10);
        existUser.password = hashedPassword;
        existUser.forgotPassword = false;
        await existUser.save();
        const forgotPassword = await ForgotPassword.findOne({email: existUser._id});
        await forgotPassword.deleteOne();
        return res.status(200).json({ message: "Password Reset Successful", success: true, existUser });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error", success: false });
    };
};

module.exports = { registerEmailForgotPassword, verifyOtpForgotPassword, passwordResetForgotPassword };