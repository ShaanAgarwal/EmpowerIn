const express = require('express');
const { userRegister, testUser, userLogin } = require('../Controllers/userController');
const router = express.Router();

router.get("/", testUser);
router.post("/userRegister", userRegister);
router.post("/userLogin", userLogin);

module.exports = router;