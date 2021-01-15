function sendInvitations(resources) {
        const {email,supervisorEmail, course } = resources;
  if (validateEmailAddress([email, supervisorEmail])) {
    const { create, list, remove, get } = Classroom.Invitations;
    const teacherInvitation = Classroom.newInvitation();
    teacherInvitation.courseId = course.id;
    teacherInvitation.role = "TEACHER";
    teacherInvitation.userId = email.toString();

    const superInvitation = Classroom.newInvitation();
    superInvitation.courseId = course.id;
    superInvitation.role = "TEACHER";
    superInvitation.userId = supervisorEmail.toString();

    // remove invitations if exist
    const existingInvites = list({ courseId: course.id }).invitations;
    if (existingInvites) {
      existingInvites.forEach(inv => remove(inv.id))
    }
    // send invitations
    create(teacherInvitation);
    create(superInvitation);

  }
}
