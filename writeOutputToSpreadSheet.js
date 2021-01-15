function writeOutputToSpreadSheet(results) {
  const ss = SpreadsheetApp.openById('1SIQrzIyeZ_zyULsDLc2jjvAx-2LBkzY_ZjXuOgeZ9Gw');// <<< where the output will be written
  const sheet = ss.getSheetByName('Sheet1');// <<< UPDATE THIS

const headers = Object.keys(results);
 const records = Object.values(results);
  const headings = sheet.getRange(1, 1, 1, headers.length)
  
  const getLastRow = sheet.getRange( sheet.getLastRow()+1,1,1,headers.length);
   headings.setValues([headers])
  getLastRow.setValues([records])
}
