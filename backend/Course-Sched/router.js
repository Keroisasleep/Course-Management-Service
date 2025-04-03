const express = require('express');
const router = express.Router();
const controller = require('./controller');

// Define the GET route
router.get('/courses/:id/schedule', controller.getCourseSchedule);

module.exports = router;
