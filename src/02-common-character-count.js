/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const string1 = s1.split('');
  const string2 = s2.split('');
  let counter = 0;
  for (let i = 0; i < string1.length; i++) {
    for (let j = 0; j < string2.length; j++) {
      if (string1[i] === string2[j]) {
        counter++;
        string1.splice(i, 1);
        i = 0;
        string2.splice(j, 1);
        j = 0;
      }
    }
  }
  return counter;
}

module.exports = getCommonCharacterCount;
