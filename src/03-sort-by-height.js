/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let sortedArray = arr;
  const indexArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      indexArray.push(i);
    }
  }
  sortedArray = sortedArray.sort((a, b) => a - b);
  sortedArray.splice(0, indexArray.length);
  for (let i = 0; i < indexArray.length; i++) {
    sortedArray.splice(indexArray[i], 0, -1);
  }
  return sortedArray;
}

module.exports = sortByHeight;
