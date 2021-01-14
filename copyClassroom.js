

function copyClassroom(data) {
  const course = Classroom.Courses.create(data);
  Logger.log('Course created: %s (%s)', course.name, course.id);
}

