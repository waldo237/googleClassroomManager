// give the name "GENETIC CLASS" to all the classrooms in the list
function generify() {
  const courses = Classroom.Courses.list();

  courses.courses.forEach((course) => {
    if (!course.name.includes("BASIC 1 2021")) {
      course.name = "Copy of Class"
      course.section = '';
      course.room = '';

      Classroom.Courses.update(course, course.id);

    }
  })
}
