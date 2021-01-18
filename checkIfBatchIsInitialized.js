/**
 * select range from bluePrintsheet, column: updated-last row that is not empty
 * pick the last value from that array without iterating
 * get the index. if the the number of classes is different from updated but is more than 0, write a message to the console with the name of the center
 */
function checkIfBatchIsInitialized(centerName, representative) {
  const array = importClassBluePrint();
  const results = array.filter(center=> center[0]== centerName && center[1]==representative)[0];
  const condition =results? results[9] > 0 && results[3] > results[9]: false;
  if(condition) addLog(`this is the information of the center that is halfway through: ${results}`)
 return condition;
}
