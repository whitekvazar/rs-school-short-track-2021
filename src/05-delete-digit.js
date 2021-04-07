/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const splitedNumber = n.toString().split('');
  const resultNumbersArray = [];
  for (let i = 0; i < splitedNumber.length; i++) {
    const tempArray = [...splitedNumber];
    tempArray.splice(i, 1);
    resultNumbersArray.push(Number(tempArray.join('')));
  }
  resultNumbersArray.sort((a, b) => b - a);
  return resultNumbersArray[0];
}

module.exports = deleteDigit;
