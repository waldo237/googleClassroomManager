function deleteAllCourses() {
  var courses = [];
  const pageToken = null;
  const optionalArgs = {
    pageToken,
    pageSize: 100,
  };

  while (true) {
    const response = Classroom.Courses.list(optionalArgs);
    var { courses } = response;
    if (!pageToken) {
      break;
    }
  }
  if (courses.length === 0) {
    Logger.log('No courses found.');
  } else {
    Logger.log('Courses:');
    for (course in courses) {
            courses[course].courseState = 'ARCHIVED';
      Classroom.Courses.update(courses[course], courses[course].id);
    }
  }
}
