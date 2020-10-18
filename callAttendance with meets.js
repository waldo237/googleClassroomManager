function assignTeacher(){
  const courseId = "10th Grade Biology";
  const teacherEmail = "waldo23792@gmail.com";
  const teacher = new Classroom.newTeacher().setUserId(teacherEmail);
  try {
    teacher = service.courses().teachers().create(courseId, teacher).execute();
    Logger.log("User '%s' was added as a teacher to the course with ID '%s'.\n", teacher.getProfile().getName().getFullName(), courseId);
  } catch (e) {
      Logger.log("User '%s' is already a member of this course.\n", teacherEmail);
    
  }
  
}