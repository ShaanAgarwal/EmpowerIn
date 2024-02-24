const RegisterCandidateAPI = require("../Models/Audit Logs/Candidate Controller/registerCandidateAPI");
const VerifyOTPRegistrationAPI = require("../Models/Audit Logs/Candidate Controller/verifyOTPRegistrationAPI");

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
        return res.status(200).json({ message: verifyOTPRegistrationAPI, success: false });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error", success: false });
    };
};

module.exports = {getRegisterCandidateAPIAuditLogs, verifyOTPRegistrationAPI};