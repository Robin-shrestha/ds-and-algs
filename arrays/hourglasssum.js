const hourglassSum = (flattened3x3) => {
  const mapper = [1, 1, 1, 0, 1, 0, 1, 1, 1];
  return mapper
    .map((item, index) => item * flattened3x3[index])
    .reduce((prev, curr) => prev + curr, 0);
};

function hrglass(arr) {
  // Write your code here
  /**
   *  [ij, ij1,ij2]
   *  [i1j, i1j1, i1j2]
   * `[i2j, i2j1, i2j2]
   */
  let arrayPairs = [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 0],
    [1, 1],
    [1, 2],
    [2, 0],
    [2, 1],
    [2, 2],
  ];
  const sumArray = [];
  for (let i = 0; i < 6 - 2; i++) {
    for (let j = 0; j < 6 - 2; j++) {
      let threeXThreeArr = arrayPairs.map(([x, y], index) => {
        return arr[i + x][j + y];
      });

      const sum = hourglassSum(threeXThreeArr);
      sumArray.push(sum);
    }
  }
  return sumArray.reduce((prev, curr) => {
    if (curr > prev) return curr;
    return prev;
  });
}

console.log(
  hrglass([
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ])
);

const version2 = (arr) => {
  let max;
  for (let i = 1; i < 6 - 1; i++) {
    for (let j = 1; j < 6 - 1; j++) {
      const sum =
        arr[i - 1][j - 1] +
        arr[i - 1][j] +
        arr[i - 1][j + 1] +
        arr[i][j] +
        arr[i + 1][j - 1] +
        arr[i + 1][j] +
        arr[i + 1][j + 1];
      if (!max) max = sum;
      if (sum > max) {
        max = sum;
      }
    }
  }
  return max;
};
console.log(
  version2([
    [-9, -9, -9, 1, 1, 1],
    [0, -9, 0, 4, 3, 2],
    [-9, -9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, 1, 2, 4, 0],
  ])
);
