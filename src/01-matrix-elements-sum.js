/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;

  function deleteElements(originalMatrix, matrixIndex, arrayIndex) {
    const resultMatrix = originalMatrix;
    for (let i = matrixIndex + 1; i < resultMatrix.length; i++) {
      for (let j = 0; j < resultMatrix[i].length; j++) {
        delete resultMatrix[i][arrayIndex];
      }
    }
    return resultMatrix;
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        deleteElements(matrix, i, j);
      }
    }
  }
  matrix.flat().forEach((element) => { sum += element; });

  return sum;
}

module.exports = getMatrixElementsSum;
