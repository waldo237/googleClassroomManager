/** *****************************************************
 *Returns a list of Topics by name and id
 *
 * param {string} : course ID taken from findCourseAndOwner()
 *
 * returns : an array of students full name, id and email address.
 */
function getTopics(COURSE_ID) {
  const topics = Classroom.Courses.Topics.list(COURSE_ID).topic;
  const topicItems = topics.map((item) => `${item.name} : ${item.topicId}`);

  return topicItems;
}
