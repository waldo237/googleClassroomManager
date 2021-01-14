// give the name "GENETIC CLASS" to all the classrooms in the list
function generify() {
 const courses =  Classroom.Courses.list();

  courses.courses.forEach((course)=>{
    course.name = "GENETIC CLASS" 
          course.section = '';
          course.room = '';

    Classroom.Courses.update(course, course.id);
  })
}
