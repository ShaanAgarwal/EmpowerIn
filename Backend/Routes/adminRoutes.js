const express = require('express');
const { getActiveUsers, getBlockedUsers } = require('../Controllers/adminController');
const router = express.Router();

router.get('/getActiveUsers', getActiveUsers);
router.get("/getBlockedUsers", getBlockedUsers);

module.exports = router;