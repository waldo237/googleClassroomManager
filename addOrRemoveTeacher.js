function assignTeacher(){
  const courseId = "188574062334";

  const teacher = new Classroom.newTeacher().userId("waldo23792@gmail.com").courseId("188574062334");
  console.log(teacher)
  
    const resultteacher = Classroom.Courses.Teachers.create(teacher, courseId);
    console.log(resultteacher)
}