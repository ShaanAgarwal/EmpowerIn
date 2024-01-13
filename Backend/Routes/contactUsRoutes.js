const express = require('express');
const { contactUsEmail } = require('../Controllers/contactUsController');
const router = express.Router();

router.post('/sendEmailContactUs', contactUsEmail);

module.exports = router;