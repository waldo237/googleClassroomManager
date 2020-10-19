/** *****************************************************
 * Gets a list of alls students in a course.
 *
 * param {string} : course ID taken from findCourseAndOwner()
 *
 * returns : an array of students full name, id and email address.
 */
function getStudentDetails(COURSE_ID) {
  const { students } = Classroom.Courses.Students.list(COURSE_ID);

  return students.map((student) => `${student.profile.name.fullName}`
                      + `: ${student.profile.id} `
                      + `: ${student.profile.emailAddress}`);
}
