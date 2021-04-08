/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const arrayOfGroups = n.split('-');
  if (arrayOfGroups.length !== 6) {
    return false;
  }
  for (let i = 0; i < arrayOfGroups.length; i++) {
    const group = arrayOfGroups[i];
    if (group.split('').length !== 2) {
      return false;
    }
    if (!(parseInt(group, 16) >= 0)) {
      return false;
    }
  }
  return true;
}

module.exports = isMAC48Address;
