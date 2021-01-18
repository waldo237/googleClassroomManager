// @ts-nocheck
/**
 * 1- manually make copies of 'GENETIC CLASS' as many classrooms as allowed.
 */
function forceEmail() {
  try {

    const dataInOutPut = getArrObOutputData();
    const courses = Classroom.Courses.list().courses;
    console.log(courses.length)
    const theCreatorsEmail = Session.getEffectiveUser().getEmail();
    const dataToSendRep = new Set();
    for (center of courses) {
      dataInOutPut.forEach((record) => {
        const { centerName, city, representative } = record;
        if (center.room.includes(`${getInitials(centerName)} - ${getInitials(city)}${getInitials(representative)}  -`)) {
          dataToSendRep.add(record);
        }

      })
    }
    const reps = {}
    for (let data of dataToSendRep) {
      if (!reps[data.representative]) {
        reps[data.representative] = []
      } else {
        const {email, supervisorEmail, centerName, representative, room }= data;
        
        reps[data.representative].push({email, supervisorEmail, centerName, representative, room });
      }
    }
   arrOfReps = Object.values(reps);
    arrOfReps.forEach(repre=>{
      if(repre[0]){
        //  const {email, supervisorEmail, centerName, representative, room } = repre[0];
          classroomsForEmails = getOutputedRecordsFromCenter(centerName, representative)
          // notifyByEmail({ emailAddresses: [email, supervisorEmail], centerName, coordinador: representative, classrooms: classroomsForEmails });

      }
        // notifyByEmail(repre);
    })

  } catch (e) {
    addLog(`error from the console Log: ${e}`);
  }
}



function getArrObOutputData() {
  const range = getOutSheet().getRange(1, 1, getOutSheet().getLastRow(), getOutSheet().getLastColumn()).getValues();


  let index = range.length - 1;
  // classrooms that belong to this center and rep
  const belongingGC = [];
  while (index) {
    let center = range[index];
    let results = {};

    results[range[0][0]] = center[0];
    results[range[0][1]] = center[1];
    results[range[0][2]] = center[2];
    results[range[0][3]] = center[3];
    results[range[0][4]] = center[4];
    results[range[0][5]] = center[5];
    results[range[0][6]] = center[6];
    results[range[0][7]] = center[7];
    results[range[0][8]] = center[8];
    results[range[0][9]] = center[9];
    results[range[0][10]] = center[10];
    results[range[0][11]] = center[11];
    results[range[0][12]] = center[12];
    results[range[0][13]] = center[13];
    results[range[0][14]] = center[14];
    results[range[0][15]] = center[15];
    belongingGC.push(results)
    index--;
  }
  return belongingGC;
}