/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  let inputList = l;
  const numberToDelete = k;
  const inputArray = [];
  while (inputList) {
    inputArray.push(inputList.value);
    inputList = inputList.next;
  }
  const resultArray = [...inputArray];
  for (let i = 0; i < resultArray.length; i++) {
    if (resultArray[i] === numberToDelete) {
      resultArray.splice(i, 1);
    }
  }
  resultArray.reverse();
  let resultList = { next: null };
  for (let i = 0; i < resultArray.length; i++) {
    resultList.value = resultArray[i];
    resultList = { next: resultList };
  }
  resultList = resultList.next;
  return resultList;
}

module.exports = removeKFromList;
