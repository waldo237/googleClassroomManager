
/* 
1- manually make copies of 'GENETIC CLASS' as many classrooms as allowed.
 */
function s() {
  // iterate to construct the metaData of the classroom
  const centers = importClassBluePrint();
  const courses = Classroom.Courses.list();

  centers.map((center) => {
    const numberOfClassrooms = center[3], centerName = center[0],
      representative = center[1],
      email = center[2],
      supervisor = center[4],
      supervisorEmail = center[5],
      city = center[6],
      province = center[7],
      region = center[8];
    updated = center[9];

    // find the number of the row in order to update and compare the values of numberOfCenters and updated
    const recordIndex = centers.indexOf(center) + 1;
    const sheet = getSheet().getRange(recordIndex, 10);
    let updateCurrentVal = sheet.getValue();


    // iterate the number of classrooms
    if (Number.isInteger(numberOfClassrooms) && numberOfClassrooms !== updated) {
      for (let i = 0; i < numberOfClassrooms; i++) {

        const course = courses.courses.pop();
        if ((numberOfClassrooms !== updateCurrentVal) && course.name.includes('GENETIC')) {

          course.name = `${centerName.toString().toUpperCase()} | BASIC 1 | CLASSROOM ${i} | ${city}, ${province}`
          course.section = `English Immersion Program | ${city}`
          course.room = `${i}`

          const teacherInvitation = Classroom.newInvitation();
          teacherInvitation.courseId = course.id;
          teacherInvitation.role = "TEACHER";
          teacherInvitation.userId = email.toString();

          const superInvitation = Classroom.newInvitation();
          superInvitation.courseId = course.id;
          superInvitation.role = "OWNER";
          superInvitation.userId = supervisorEmail.toString();

          const { create, list } = Classroom.Invitations;

          const existingInvites = list({ courseId: course.id }).invitations;

          if (existingInvites && !existingInvites.includes(teacherInvitation)) create(teacherInvitation)
          // create(superInvitation);
          Classroom.Courses.update(course, course.id);
          updateCurrentVal = updateCurrentVal + 1;
          sheet.setValue(updateCurrentVal);
        }
      }

    }
  })

}


function courseUpdate(courseId, replacement) {

  var course = Classroom.Courses.get(replacement);
  course.section = 'Period 3';
  course.room = '302';
  var updatedCourse = Classroom.Courses.update(course, courseId);
  Logger.log('Course "%s" updated.', updatedCourse.name);
}
// Send an invitation to  REP
// wait for all the classrooms per REP

// Send an email with all the information of each class the representative has and giving instructions on what to do next. 1→ email per Rep,  cc, supervisor and

// Persist the classroom data to a spreadsheet.
