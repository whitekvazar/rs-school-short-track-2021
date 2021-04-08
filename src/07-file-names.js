/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const inputArray = [...names];
  const resultArray = [];
  let flag = false;
  let counter = 0;
  for (let i = 0; i < inputArray.length; i++) {
    for (let j = 0; j < resultArray.length; j++) {
      if (inputArray[i] === resultArray[j]) {
        flag = true;
        counter++;
      }
      for (let k = 0; k < resultArray.length; k++) {
        if (`${inputArray[i]}(${k})` === resultArray[j]) {
          counter++;
        }
      }
    }
    const outputWord = flag ? `${inputArray[i]}(${counter})` : inputArray[i];
    resultArray.push(outputWord);
    counter = 0;
    flag = false;
  }
  /* console.log(resultArray); */
  return resultArray;
}

module.exports = renameFiles;
