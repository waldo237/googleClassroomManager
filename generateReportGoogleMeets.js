const emailAddress = 'waldo23792@gmail.com';
const optionalArgs = {
  event_name: 'call_ended',
  filters: `identifier==${emailAddress},meeting_code==ssy-dsov-uzu`,
};
try {
  const response = AdminReports.Activities.list(userKey, applicationName, optionalArgs);
  const activities = response.items;
  console.log(activities);
} catch (err) {
  console.log(err);
}
