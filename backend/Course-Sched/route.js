const express = require('express');
const router = express.Router();
const { getCourseSchedule } = require('./controller');

router.get('/courses/:id/schedule', getCourseSchedule);

module.exports = router;

