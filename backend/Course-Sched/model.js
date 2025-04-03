const mongoose = require('mongoose');

const CourseScheduleSchema = new mongoose.Schema({
    course_id: { type: String, required: true },
    day: { type: String, required: true },
    time: { type: String, required: true },
    room: { type: String, required: true }
});

module.exports = mongoose.model('CourseSchedule', CourseScheduleSchema);
