/**
* Creates 10th Grade Biology Course.
*/
function createCourse(data) {
  var course = Classroom.Courses.create(data);
  Logger.log('Course created: %s (%s)', course.name, course.id)
}

function createManyCourses(){
  const id = '1THxJi3VCNzQ8L6e-tMkVwolwoRXt0nPpTTgtkFXpeTc'
  const ss = SpreadsheetApp.openById(id).getActiveSheet();
  const heading = ss.getDataRange().offset(0,0).getValues();
  
  heading.forEach((classDetails, i)=>{ 
  if(i>0){
    const [name, section,descriptionHeading, description, room,ownerId]= classDetails;
    createCourse({name, section,descriptionHeading, description, room,ownerId:'me', courseState:"PROVISIONED"});
  }
})
}
