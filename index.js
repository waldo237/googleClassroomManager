// @ts-nocheck
/**
 * 1- manually make copies of 'GENETIC CLASS' as many classrooms as allowed.
 */
function s() {
  try {
    const centers = importClassBluePrint();
    const { courses } = Classroom.Courses.list();
    const theCreatorsEmail = Session.getEffectiveUser().getEmail();
    const centerNameCounter = {};

    for (center of centers) {
      let thereAreNotMoreClassroomsLeft = false;
      const numberOfClassrooms = Number.parseInt(center[3]); const centerName = center[0]; const representative = center[1];
      const email = center[2]; const supervisor = center[4]; const supervisorEmail = center[5]; const city = center[6];
      const province = center[7]; const
        region = center[8];

      const classroomsThatAreDone = [];

      if (checkIfBatchIsInitialized(centerName, representative)) addLog('This batch was already initialized but it is still in progress');

      // find the number of the row in order to update and compare the values of numberOfCenters and updated
      const recordIndex = centers.indexOf(center) + 2;

      const cellContainingUpdateNum = getBluePrintSheet().getRange(recordIndex, 10);

      let updateCurrentVal = Number.parseInt(cellContainingUpdateNum.getValue());

      // say what email created the GC associated in the bluePrint

      /**
       * if the number of classrooms is different from the classrooms updated,
       * iterate the number of classrooms required in the blueprint
       */

      for (let i = 0; i < numberOfClassrooms; i++) {
        if (numberOfClassrooms != updateCurrentVal) {
          const course = courses.pop(); // pick the next course from the list.

          if (!course) {
            addLog(`There are not more classes available in this email address. The next Classroom should be ${centerName} | classroom ${updateCurrentVal + 1} from ${representative}`);
            thereAreNotMoreClassroomsLeft = true;
            break;
          } else if (courses[courses.length - 1] && !courses[courses.length - 1].name.toLocaleLowerCase().includes('copia')) {
            console.log('continue', courses[courses.length - 1].name);
            continue;
          }
          if (course.name.toLocaleLowerCase().includes('copia')) {
            const updatedClassroom = updateClassroomMetaInfo({
              centerName, city, province, email, representative, course, updateCurrentVal, centerNameCounter,
            });
            classroomsThatAreDone.push(updatedClassroom);

            /**
             * Send out invitations to the coteachers.
             */
            sendInvitations({ email, supervisorEmail, course });

            // increment the number of classrooms updated in the blueprint sheet(column 10)
            updateCurrentVal++;
            getBluePrintSheet().getRange(recordIndex, 10).setValue(updateCurrentVal);

            getBluePrintSheet().getRange(recordIndex, 11).setValue(theCreatorsEmail);

            /**
             * Save to DB. When a classroom is already updated,
             *  its metadata is persisted to the database{spreadsheet}
             */
            const {
              id, name, enrollmentCode, room, section, updateTime, alternateLink,
            } = updatedClassroom;

            const results = {
              id,
              name,
              enrollmentCode,
              alternateLink,
              representative,
              email,
              supervisor,
              supervisorEmail,
              theCreatorsEmail,
              room,
              section,
              centerName,
              city,
              province,
              region,
              updateTime: new Date(updateTime).toLocaleString('es-do'),
            };

            writeOutputToSpreadSheet(results);
          }
        }
      }
      if (thereAreNotMoreClassroomsLeft) break;
      /**
       * Send an email with all the information of each class the representative
       * has and giving instructions on what to do next. 1→ email per Rep,  cc, supervisor and
       * param center: { emailAddresses: [ ], centerName, coordinator, classrooms:[ { section, enrollmentCode, name } ]}
       */

      if (classroomsThatAreDone.length && !checkIfBatchIsInitialized(centerName, representative)) {
        classroomsForEmails = getOutputedRecordsFromCenter(centerName, representative);

        notifyByEmail({
          emailAddresses: [email, supervisorEmail], centerName, coordinador: representative, classrooms: classroomsForEmails,
        });
      }
    }
  } catch (e) {
    addLog(`error from the console Log: ${e}`);
  }
}
