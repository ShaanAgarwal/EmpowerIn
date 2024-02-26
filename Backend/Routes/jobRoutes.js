const express = require('express');
const { createJob, getAllJobs } = require('../Controllers/jobController');
const router = express.Router();

router.post('/createJob', createJob);
router.get('/getAllJobs', getAllJobs);

module.exports = router;