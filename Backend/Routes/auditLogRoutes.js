const express = require('express');
const { getRegisterCandidateAPIAuditLogs, verifyOTPRegistrationAPI, contactUsEmailAPI, registerEmailForgotPasswordAPI, verifyOTPForgotPasswordAPI, passwordResetForgotPasswordAPI } = require('../Controllers/auditLogController');
const router = express.Router();

router.get("/registerCandidateAPI", getRegisterCandidateAPIAuditLogs);
router.get('/verifyOTPRegistrationAPI', verifyOTPRegistrationAPI);

router.get('/contactUsEmailAPI', contactUsEmailAPI);

router.get("/registerEmailForgotPasswordAPI", registerEmailForgotPasswordAPI);
router.get("/verifyOTPForgotPasswordAPI", verifyOTPForgotPasswordAPI);
router.get('/passwordResetForgotPasswordAPI', passwordResetForgotPasswordAPI)

module.exports = router;