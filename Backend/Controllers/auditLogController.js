const RegisterCandidateAPI = require("../Models/Audit Logs/Candidate Controller/registerCandidateAPI");
const VerifyOTPRegistrationAPI = require("../Models/Audit Logs/Candidate Controller/verifyOTPRegistrationAPI");
const ContactUsEmailAPI = require("../Models/Audit Logs/Contact Us Controller/contactUsEmailAPI");
const RegisterEmailForgotPasswordAPI = require("../Models/Audit Logs/Forgot Password Controller/registerEmailForgotPasswordAPI");
const VerifyOTPForgotPasswordAPI = require("../Models/Audit Logs/Forgot Password Controller/verifyOTPForgotPasswordAPI");
const PasswordResetForgotPasswordAPI = require("../Models/Audit Logs/Forgot Password Controller/passwordResetForgotPasswordAPI");
const UserRegisterAPI = require('../Models/Audit Logs/User Controller/userRegisterAPI');
const UserLoginAPI = require('../Models/Audit Logs/User Controller/userLoginAPI');

const getRegisterCandidateAPIAuditLogs = async (req, res) => {
    try {
        const registerCandidateAPI = await RegisterCandidateAPI.find();
        return res.status(200).json({ message: registerCandidateAPI, success: true });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error", success: false });
    };
};

const verifyOTPRegistrationAPI = async (req, res) => {
    try {
        const verifyOTPRegistrationAPI = await VerifyOTPRegistrationAPI.find();
        return res.status(200).json({ message: verifyOTPRegistrationAPI, success: true });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error", success: false });
    };
};

const contactUsEmailAPI = async (req, res) => {
    try {
        const contactUsEmailAPI = await ContactUsEmailAPI.find();
        return res.status(200).json({ message: contactUsEmailAPI, success: true });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error", success: false });
    };
};

const registerEmailForgotPasswordAPI = async (req, res) => {
    try {
        const registerEmailForgotPasswordAPI = await RegisterEmailForgotPasswordAPI.find();
        return res.status(200).json({ message: registerEmailForgotPasswordAPI, success: true });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error", success: false });
    };
};

const verifyOTPForgotPasswordAPI = async (req, res) => {
    try {
        const verifyOTPForgotPasswordAPI = await VerifyOTPForgotPasswordAPI.find();
        return res.status(200).json({ message: verifyOTPForgotPasswordAPI, success: true });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error", success: false });
    };
};

const passwordResetForgotPasswordAPI = async (req, res) => {
    try {
        const passwordResetForgotPasswordAPI = await PasswordResetForgotPasswordAPI.find();
        return res.status(200).json({ message: passwordResetForgotPasswordAPI, success: true });
    } catch (error) {
        console.log(error);
        return res.status(200).json({ message: "Internal Server Error", success: false });
    };
};

const userRegisterAPI = async (req, res) => {
    try {
        const userRegisterAPI = await UserRegisterAPI.find();
        return res.status(200).json({ message: userRegisterAPI, success: true });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error", success: false });
    };
};

const userLoginAPI = async (req, res) => {
    try {
        const userLoginAPI = await UserLoginAPI.find();
        return res.status(200).json({ message: userLoginAPI, success: true });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error", success: false });
    };
};

module.exports = {
    getRegisterCandidateAPIAuditLogs, verifyOTPRegistrationAPI, contactUsEmailAPI,
    registerEmailForgotPasswordAPI, verifyOTPForgotPasswordAPI, passwordResetForgotPasswordAPI,
    userRegisterAPI, userLoginAPI
};