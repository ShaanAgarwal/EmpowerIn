const express = require('express');
const { registerCandidate, verifyOtpRegistration, uploadResumeProfile, getCategories } = require('../Controllers/candidateController');
const router = express.Router();
const multer = require('multer');
const upload = multer();

router.post('/registerCandidate', registerCandidate);
router.post('/verifyOtpRegistration', verifyOtpRegistration);
router.post('/uploadResumeProfile', upload.single('resume'), uploadResumeProfile);
router.get('/getCategories', getCategories);

module.exports = router;