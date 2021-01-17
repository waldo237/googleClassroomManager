function writeOutputToSpreadSheet(results) {

  const headers = Object.keys(results);
  const records = Object.values(results);
  const outputSheet = getOutSheet();
  const headings = outputSheet.getRange(1, 1, 1, headers.length)
  const getLastRow = outputSheet.getRange(outputSheet.getLastRow() + 1, 1, 1, headers.length);
  headings.setValues([headers])
  getLastRow.setValues([records])
}
function getOutSheet() {
  const ss = SpreadsheetApp.openById('1XRTP2j_7sX4j7BIjgFkA7Prr6AQOg_4lPnmxJmTJr3s');// <<< where the output will be written
  return ss.getSheetByName('Sheet1');// <<< UPDATE THIS
}


// find the number of classroom in the output for that center and coordinator and compare with the number of classrooms required
// substitute classrooms that are done with this data instead.
function getOutputedRecordsFromCenter(centerName, representative) {
  const range = getOutSheet().getRange(1, 1, getOutSheet().getLastRow(), getOutSheet().getLastColumn()).getValues();


let index = range.length - 1;
// classrooms that belong to this center and rep
const belongingGC = [];
  while (index) {
    let center = range[index];
    if (center[4]== representative &&  center[11]==centerName) {
      let results = {};

      results[range[0][0]] = center[0];
      results[range[0][1]] = center[1];
      results[range[0][2]] = center[2];
      results[range[0][3]] = center[3];
      results[range[0][4]] = center[4];
      results[range[0][5]] = center[5];
      results[range[0][6]] = center[6];
      results[range[0][7]] = center[7];
      results[range[0][8]] = center[8];
      results[range[0][9]] = center[9];
      results[range[0][10]] = center[10];
      results[range[0][11]] = center[11];
      results[range[0][12]] = center[12];
      results[range[0][13]] = center[13];
      results[range[0][14]] = center[14];
      results[range[0][15]] = center[15];
     
     belongingGC.push(results)
    }
    index--;
  }
  return belongingGC;
}