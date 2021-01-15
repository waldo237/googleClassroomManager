function importClassBluePrint() {
  const sheet = getSheet();
  const range = sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn()); // <<< UPDATE THIS
  const values = range.getValues();
return values;
}

function getSheet(){
  const ss = SpreadsheetApp.openById('1gN7MJwN6EU-qnK5AiWXyjKATUMTOvpoMs-PDlm9gvuU');// <<< UPDATE THIS
  const sheet = ss.getSheetByName('Sheet1');// <<< UPDATE THIS
  return sheet;
}

