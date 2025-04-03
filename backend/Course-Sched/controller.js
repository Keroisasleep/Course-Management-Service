const CourseSchedule = require('./model');

exports.getCourseSchedule = async (req, res) => {
    try {
        const courseId = req.params.id;
        const schedule = await CourseSchedule.find({ course_id: courseId });

        if (!schedule.length) {
            return res.status(404).json({ message: 'No schedule found for this course' });
        }

        res.status(200).json(schedule);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
