function importGrades_() {
  const ss = SpreadsheetApp.openById('1Ddv_Fvw_f6pwbyPxDbJnkOcF2OSfNNjgv3K259G5WV8');// <<< UPDATE THIS
  const sheet = ss.getSheetByName('Sheet1');// <<< UPDATE THIS
  const range = sheet.getRange(2, 1, sheet.getLastRow() - 1, 2); // <<< UPDATE THIS
  const values = range.getValues();
  return values;
}
