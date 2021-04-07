/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const tempMatrix = matrix.map((item) => [...item]);
  const resultMatrix = matrix.map((item) => [...item]);
  for (let i = 0; i < tempMatrix.length; i++) {
    for (let j = 0; j < tempMatrix[i].length; j++) {
      resultMatrix[i][j] = 0;
    }
  }
  for (let i = 0; i < tempMatrix.length; i++) {
    for (let j = 0; j < tempMatrix[i].length; j++) {
      if (tempMatrix[i][j] === true) {
        // top line (3 elements above a minesweeper)
        if (i > 0 && j > 0) {
          resultMatrix[i - 1][j - 1] = resultMatrix[i - 1][j - 1] + 1;
        }
        if (i > 0) {
          resultMatrix[i - 1][j] = resultMatrix[i - 1][j] + 1;
          if (j + 1 < tempMatrix[i].length) {
            resultMatrix[i - 1][j + 1] = resultMatrix[i - 1][j + 1] + 1;
          }
        }
        // middle line (2 elements on the right and left of a minesweeper)
        if (j > 0) {
          resultMatrix[i][j - 1] = resultMatrix[i][j - 1] + 1;
        }
        if (j + 1 < tempMatrix[i].length) {
          resultMatrix[i][j + 1] = resultMatrix[i][j + 1] + 1;
        }
        // bottom line (3 elements below a minesweeper)
        if (i + 1 < tempMatrix.length) {
          if (j > 0) {
            resultMatrix[i + 1][j - 1] = resultMatrix[i + 1][j - 1] + 1;
          }
          resultMatrix[i + 1][j] = resultMatrix[i + 1][j] + 1;
          if (j + 1 < tempMatrix[i].length) {
            resultMatrix[i + 1][j + 1] = resultMatrix[i + 1][j + 1] + 1;
          }
        }
      }
    }
  }
  for (let i = 0; i < tempMatrix.length; i++) {
    for (let j = 0; j < tempMatrix[i].length; j++) {
      if (tempMatrix[i][j] === true) {
        resultMatrix[i][j] = 1;
      }
    }
  }
  return resultMatrix;
}

module.exports = minesweeper;
