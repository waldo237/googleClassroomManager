/** CREATE A COURESE WORK ITEM AND ADD GRADES
 */

/** *****************************************************
 *Simultaneously create a coursework item and add grades to it.
 *
 * In this example, I have put all the global data we gained from our
 * tests in the first 3 global variables.
 *
 * You will need to update the Course infor where it says <<< UPDATE THIS
 */
function assignGradesToNewCourseWork() {
  //* ***GLOBALS*****
  // Update the relevant items hwere.
  const COURSE_ID = '83743632546';// <<< UPDATE THIS
  const TOPIC_ID = '83743632579';// <<< UPDATE THIS
  const COURSE_INFO = {
    assigneeMode: 'ALL_STUDENTS',
    associatedWithDeveloper: true,
    description: 'describe what your assignment is about here.', // <<< UPDATE THIS
    maxPoints: 40, // <<< UPDATE THIS
    state: 'PUBLISHED',
    submissionModificationMode: 'SUBMISSION_MODIFICATION_MODE_UNSPECIFIED',
    title: 'Unit 2 - External Grade import', // <<< UPDATE THIS
    workType: 'ASSIGNMENT',
    topicId: TOPIC_ID,
  };

  const COURSEWORK_ID = createCourseWork_(COURSE_ID, COURSE_INFO);

  // A 2d array of grades = [[email@email.com,20],[email1@email.com, 18],[ ...etc]];
  const GRADES = importGrades_(); // You can import from any sourse. For this, I am just importing from Google Sheets.

  GRADES.forEach((student) => setGrade_(COURSE_ID, COURSEWORK_ID, student[0], student[1]));
}

// ######################################################

/** *****************************************************
 * Create a Coursework Item
 *
 * You can only upload grades for coursework items that have been created
 * in your GAS project.
 */

// ######################################################

/** *****************************************************
 * Helper functions
 */

/** *****************************************************
 * Import Grades from a Google Sheet
 *
 * In this example, I have used a Google Sheet to import grades,
 * however, if you have access to an API from which your grades are
 * derrived, then you might like to use that instead.
 *
 * You will need to update the variables where it says <<< UPDATE THIS
 *
 * returns : a 2d array of email and grade values.
 */
function importGrades_() {
  const ss = SpreadsheetApp.openById('1Ddv_Fv_f6pwbyPxDbJnkOcF2OSfNNjgv3K259G5WV8');// <<< UPDATE THIS
  const sheet = ss.getSheetByName('Sheet1');// <<< UPDATE THIS
  const range = sheet.getRange(2, 1, sheet.getLastRow() - 1, 2); // <<< UPDATE THIS
  const values = range.getValues();
  return values;
}

/** *****************************************************
 * Adds the grade for each available student.
 *
 * param {string} : COURSE_ID - ID of course.
 * param {string} : COURSEWORK_ID - ID of coursework item.
 * param {string} : USER_ID - ID of user.
 * param {string} : GRADE - users grade.
 */
function setGrade_(COURSE_ID, COURSEWORK_ID, USER_ID, GRADE) {
  try {
    const grades = {
      assignedGrade: GRADE,
      draftGrade: GRADE,
    };

    const studentSub = Classroom.Courses.CourseWork.StudentSubmissions;

    const submissionID = studentSub.list(
      COURSE_ID,
      COURSEWORK_ID,
      { userId: USER_ID },
    ).studentSubmissions[0].id;

    studentSub.patch(
      grades,
      COURSE_ID,
      COURSEWORK_ID,
      submissionID,
      {
        updateMask: 'assignedGrade,draftGrade',
      },
    );
  } catch (e) {
    console.error(e);
    console.log(`${USER_ID} could not be found and was not uploaded.`);
  }
}

/** *****************************************************
 * Creates a coruse work item that can be used for grade uploads.
 *
 * param {string} : COURSE_ID - ID of course.
 * param {object} : COURSE_INFO - Object array of data to be entered to created the coursework.
 *
 * return : the id for the course. Can be logged or used directly.
 */
function createCourseWork_(COURSE_ID, COURSE_INFO) {
  const newCourseAssignment = Classroom.Courses.CourseWork.create(COURSE_INFO, COURSE_ID);

  const courseAssId = newCourseAssignment.id; // Store the newly created ID of the coursework item.

  console.log(courseAssId);
  return courseAssId;
}
