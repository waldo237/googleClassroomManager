/**
 * select range from bluePrintsheet, column: updated-last row that is not empty
 * pick the last value from that array without iterating
 * get the index. if the the number of classes is different from updated but is more than 0, write a message to the console with the name of the center
 */
function checkIfBatchIsInitialized() {
  const results = getLastRecordUpdated();
  return results[9] > 0 && results[3] !== results[9];
}

function getLastRecordUpdated() {
  const sheet = getBluePrintSheet();
  const array = sheet.getRange(1, 10, sheet.getLastRow()).getValues();

  let index = array.length - 1;
  while (index) {
    if (array[index][0] != 0) {
      index;
      break;
    }
    index--;
  }
  return sheet.getRange(index + 1, 1, 1, sheet.getLastColumn()).getValues()[0];
}

