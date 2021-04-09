/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const inputArray = str.split('');
  let counter = 0;
  const resultArray = [];
  let resultString = '';
  for (let i = 0; i < inputArray.length; i++) {
    for (let j = 0; j < inputArray.length; j++) {
      if (inputArray[i] === inputArray[j]) {
        counter++;
      } else if (counter > 0 && inputArray[i] !== inputArray[j]) {
        break;
      }
    }
    if (resultArray.indexOf(`${counter}${inputArray[i]}`) === -1) {
      if (counter > 1) {
        resultArray.push(`${counter}${inputArray[i]}`);
      } else {
        resultArray.push(inputArray[i]);
      }
    }
    counter = 0;
  }
  resultString = resultArray.join('');
  return resultString;
}

module.exports = encodeLine;
