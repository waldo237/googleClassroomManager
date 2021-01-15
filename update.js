/**
 * Lists all course and pass ids to update courses.
 */
function updateAllCourses() {
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
      coursePatch(courses[course].id);
    }
  }
}

function coursePatch(course_id) {
  heading.forEach((classDetails, i) => {
    if (i > 0) {
      const [ownerId] = classDetails;

 
      let course = {
        ownerId,
      };
      const mask = {
        updateMask: 'ownerId',
      };
      course = Classroom.Courses.patch(course, course_id, mask);
      Logger.log('Course "%s" updated.', course.name);
    }
  });
}
