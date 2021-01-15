// @ts-nocheck

/**
 * 1- manually make copies of 'GENETIC CLASS' as many classrooms as allowed.
 */
function s() {
  try {

    const centers = importClassBluePrint();
    const courses = Classroom.Courses.list().courses;
    const theCreatorsEmail = Session.getEffectiveUser().getEmail();
    
    centers.map((center) => {
 
      const numberOfClassrooms = center[3], centerName = center[0], representative = center[1],
        email = center[2], supervisor = center[4], supervisorEmail = center[5], city = center[6],
        province = center[7], region = center[8];

      let updated = center[9], classroomsThatAreDone = [];


      // find the number of the row in order to update and compare the values of numberOfCenters and updated
      const recordIndex = centers.indexOf(center) + 2;
      const sheet = getSheet().getRange(recordIndex, 10);
      getSheet().getRange(recordIndex, 11).setValue(theCreatorsEmail);
      let updateCurrentVal = sheet.getValue();


      /**
       * if the number of classrooms is different from the classrooms updated,
       * iterate the number of classrooms required in the blueprint
       */
      if (Number.isInteger(numberOfClassrooms) && numberOfClassrooms !== updated) {
        for (let i = 0; i < numberOfClassrooms; i++) {

          const course = courses.pop(); //pick the next course from the list.

          if ((numberOfClassrooms !== updateCurrentVal) && course.name.includes('GENETIC')) {

            // update the target classroom and once done save it in an array.
            course.name = `${centerName.toString().toUpperCase().substr(0, 25)} | CLASSROOM ${i + 1} | BASIC 1 | ${city.toString().toUpperCase()}, ${province.toString().toUpperCase()}`
            course.section = `TEACHER'S NAME | English Immersion Program | ${city}`
            course.room = `${updateCurrentVal + 1}`
            const updatedClassroom = Classroom.Courses.update(course, course.id);
            classroomsThatAreDone.push(updatedClassroom);

            /**
             * Send out invitations to the coteachers.
             */
            sendInvitations({ email, supervisorEmail, course });

            // increment the number of classrooms updated in the blueprint sheet(column 10)
            updateCurrentVal++;
            sheet.setValue(updateCurrentVal);

            /**
             * Save to DB. When a classroom is already updated,
             *  its metadata is persisted to the database{spreadsheet}
             */
            // destructure the data needed from the classroom schema.
            const { id, name, enrollmentCode, room, section, updateTime, alternateLink } = updatedClassroom;
            // construct a new object with the metadata to save in SpreadSheet.
            const results = {
              id, name, enrollmentCode, alternateLink, representative, email, supervisor,
              supervisorEmail, theCreatorsEmail, room, section,
              centerName, city, province, region, updateTime: new Date(updateTime).toLocaleString('es-do')
            }
            writeOutputToSpreadSheet(results);
          }
        }
      }

      /**
       * Send an email with all the information of each class the representative
       * has and giving instructions on what to do next. 1→ email per Rep,  cc, supervisor and
       * param center: { emailAddresses: [ ], centerName, coordinator, classrooms:[ { section, enrollmentCode, name } ]} 
       */
      if (classroomsThatAreDone.length) {
        notifyByEmail({ emailAddresses: [email, supervisorEmail], centerName, coordinador: representative, classrooms: classroomsThatAreDone });
      }
    })
  } catch (e) {
    console.log(e);
  }
}
