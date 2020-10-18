/**
 * Lists all course names and ids. 
 */
function listCourses() {
  var courses = [];
  var pageToken = null;
  var optionalArgs = {
    pageToken: pageToken,
    pageSize: 100
  };
  while (true) {
    var response = Classroom.Courses.list(optionalArgs);
    var courses = response.courses;
    if (!pageToken) {
       break;
    }
  }
  if (courses.length === 0) {
    Logger.log("No courses found.");
  } else {
    Logger.log("Courses:");
    for (course in courses) {
      Logger.log('%s (%s)', courses[course].name, courses[course].id);
    }
  }
}

