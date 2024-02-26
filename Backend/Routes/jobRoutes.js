const express = require('express');
const { createJob } = require('../Controllers/jobController');
const router = express.Router();

router.post('/createJob', createJob);

module.exports = router;