/**
 * Creates 10th Grade Biology Course from clasp.
 */
const id = '1THxJi3VCNzQ8L6e-tMkVwolwoRXt0nPpTTgtkFXpeTc';
const ss = SpreadsheetApp.openById(id).getActiveSheet();
const heading = ss.getDataRange().offset(0, 0).getValues();

function createCourse(data) {
  const course = Classroom.Courses.create(data);
  const teacher = Classroom.newTeacher();
  teacher.userId = 'waldo23793@gmail.com';
  Classroom.Courses.Teachers.create({ teacher, courseId: course.id });
  Logger.log('Course created: %s (%s)', course.name, course.id);
}

function createManyCourses() {
  heading.forEach((classDetails, i) => {
    if (i > 0) {
      const [name, section, descriptionHeading, description, room, ownerId] = classDetails;
      createCourse({
        name, section, descriptionHeading, description, room, ownerId: 'me', courseState: 'PROVISIONED',
      });
    }
  });
}
