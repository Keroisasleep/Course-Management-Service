const schedules = [
    { course_id: 1, day: "Monday", time: "10:00 AM - 12:00 PM", room: "101A" },
    { course_id: 2, day: "Tuesday", time: "2:00 PM - 4:00 PM", room: "202B" },
    { course_id: 1, day: "Wednesday", time: "1:00 PM - 3:00 PM", room: "101A" },
];

exports.getCourseSchedule = (req, res) => {
    const courseId = parseInt(req.params.id);
    const courseSchedule = schedules.filter(schedule => schedule.course_id === courseId);

    if (courseSchedule.length > 0) {
        res.json({ success: true, data: courseSchedule });
    } else {
        res.status(404).json({ success: false, message: "Course schedule not found" });
    }
};

