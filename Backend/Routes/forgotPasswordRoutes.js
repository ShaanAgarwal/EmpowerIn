const express = require('express');
const { registerEmailForgotPassword, verifyOtpForgotPassword } = require('../Controllers/forgotPasswordController');
const router = express.Router();

router.post('/registerEmailForgotPassword', registerEmailForgotPassword);
router.post('/verifyOtpForgotPassword', verifyOtpForgotPassword);

module.exports = router;