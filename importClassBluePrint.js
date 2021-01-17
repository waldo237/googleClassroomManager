function importClassBluePrint() {
  const sheet = getBluePrintSheet();
  const range = sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn()); // <<< UPDATE THIS
  const values = range.getValues();
return values;
}

function getBluePrintSheet(){
  const ss = SpreadsheetApp.openById('1PYjJRORL4wkVMKDzFS36s-8v6k2KgwohQ38FB-Yps44');// <<< UPDATE THIS
  const sheet = ss.getSheetByName('Sheet1');// <<< UPDATE THIS
  return sheet;
}

