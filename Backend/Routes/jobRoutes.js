const express = require('express');
const { createJob, getAllJobs } = require('../Controllers/jobController');
const router = express.Router();

router.post('/createJob', createJob);
router.get('/getJobs', getAllJobs);

module.exports = router;