const express = require('express');
const { registerCandidate, verifyOtpRegistration, uploadResumeProfile } = require('../Controllers/candidateController');
const router = express.Router();
const multer = require('multer');
const upload = multer();

router.post('/registerCandidate', registerCandidate);
router.post('/verifyOtpRegistration', verifyOtpRegistration);
router.post('/uploadResumeProfile', upload.single('resume'), uploadResumeProfile);

module.exports = router;