function updateClassroomMetaInfo(params) {
  // update the target classroom and once done save it in an array.
  const { centerName, city, province, email, representative, course, updateCurrentVal, centerNameCounter } = params
  
  if(!centerNameCounter[centerName]){
     centerNameCounter[centerName]= 1;
  }else{
    centerNameCounter[centerName]++;
  }
  const classroomNumber = (centerNameCounter[centerName] >= 1) ? centerNameCounter[centerName] : updateCurrentVal + 1;

  course.name = `${shortenStr(centerName, 25)} | classroom ${classroomNumber} | basic 1 | ${shortenStr(city, 15)}, ${shortenStr(province, 15)}`;

  course.section = `TEACHER'S NAME | ${city}`
  course.room = `${getInitials(centerName)} - ${shortenStr(city, 8)} - ${classroomNumber}`
  course.descriptionHeading = "Welcome to the English Immersion Program"
  course.description = `Esta es una aula virtual para impartir las clases sincrónicas y asíncronas del nivel Básico 1 del Programa de Ingles de Inmersión para la           Competitividad en ${centerName}, de ${province}. Si necesita asistencia, el encargado del centro es ${representative}. Usted puede contactarlo via su correo electrónico: ${email}.
  
La Dirección de Lenguas Extranjeras, Ministerio de Educación Superior, Ciencia y Tecnología.`


  return Classroom.Courses.update(course, course.id);
}
