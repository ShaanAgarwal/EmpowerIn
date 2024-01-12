const express = require('express');
const { testUserRegister, testUser, testuserLogin } = require('../Controllers/userController');
const router = express.Router();

router.get("/", testUser);
router.post("/testUserRegister", testUserRegister);
router.post("/userLogin", testuserLogin);

module.exports = router;