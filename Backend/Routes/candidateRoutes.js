const express = require('express');
const { registerCandidate } = require('../Controllers/candidateController');
const router = express.Router();

router.post('/registerCandidate', registerCandidate);

module.exports = router;