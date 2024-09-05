const express = require('express');
const router = express.Router();
const historyController = require('../controllers/index');

router.post('/actions', historyController.createHistory);

module.exports = router;