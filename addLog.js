function addLog(message) {
  const theCreatorsEmail = Session.getEffectiveUser().getEmail();
  const results = {
    message, theCreatorsEmail,
    date: new Date()
  }
  console.log(results)
  const headers = Object.keys(results);
  const records = Object.values(results);
  const logSheet = getLogSheet();
  const headings = logSheet.getRange(1, 1, 1, headers.length)
  const getLastRow = logSheet.getRange(logSheet.getLastRow() + 1, 1, 1, headers.length);
  headings.setValues([headers])
  getLastRow.setValues([records])
}
function getLogSheet() {
  const ss = SpreadsheetApp.openById('1ta1Z-6quolBlFNij3VOjdoI13DvzDn-pIKsXXYQhkY4');// <<< where the output will be written
  return ss.getSheetByName('Sheet1');// <<< UPDATE THIS
}
