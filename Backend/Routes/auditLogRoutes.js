const express = require('express');
const { getRegisterCandidateAPIAuditLogs, verifyOTPRegistrationAPI } = require('../Controllers/auditLogController');
const router = express.Router();

router.get("/registerCandidateAPI", getRegisterCandidateAPIAuditLogs);
router.get('/verifyOTPRegistrationAPI', verifyOTPRegistrationAPI);

module.exports = router;