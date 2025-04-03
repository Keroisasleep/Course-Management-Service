const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/courses/:id/schedule', controller.getCourseSchedule);

module.exports = router;
