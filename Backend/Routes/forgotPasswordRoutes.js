const express = require('express');
const { registerEmailForgotPassword, verifyOtpForgotPassword, passwordResetForgotPassword } = require('../Controllers/forgotPasswordController');
const router = express.Router();

router.post('/registerEmailForgotPassword', registerEmailForgotPassword);
router.post('/verifyOtpForgotPassword', verifyOtpForgotPassword);
router.patch('/passwordResetForgotPassword', passwordResetForgotPassword);

module.exports = router;