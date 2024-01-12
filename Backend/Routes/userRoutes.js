const express = require('express');
const { testUserRegister, testUser } = require('../Controllers/userController');
const router = express.Router();

router.get("/", testUser);
router.post("/testUserRegister", testUserRegister);

module.exports = router;