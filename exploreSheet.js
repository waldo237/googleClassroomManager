function importClassBluePrint() {
  const ss = SpreadsheetApp.openById('1gN7MJwN6EU-qnK5AiWXyjKATUMTOvpoMs-PDlm9gvuU');// <<< UPDATE THIS
  const sheet = ss.getSheetByName('Sheet1');// <<< UPDATE THIS
  const range = sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn()); // <<< UPDATE THIS
  const values = range.getValues();

  return values.map((center) => {
    return {
      center: center[0],
      representative: center[1],
      email: center[2],
      numberOfClassrooms: center[3],
      supervisor: center[4],
      supervisorEmail: center[5],
      city: center[6],
      province: center[7],
      region: center[8],
    }
  })

}

