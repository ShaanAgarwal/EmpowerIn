const express = require('express');
const { registerCandidate, verifyOtpRegistration } = require('../Controllers/candidateController');
const router = express.Router();

router.post('/registerCandidate', registerCandidate);
router.post('/verifyOtpRegistration', verifyOtpRegistration);

module.exports = router;