function arrayManipulation(n, queries) {
  // Write your code here
  let maxValue;

  const noOfOps = queries.length;
  const nArray = Array(n).fill(0);

  for (let i = 0; i < noOfOps; i++) {
    for (let j = queries[i][0] - 1; j < queries[i][1]; j++) {
      nArray[j] += queries[i][2];
    }
    console.log(nArray);
  }

  maxValue = Math.max(...nArray);
  return maxValue;
}

const arrayManipulationV2 = (n, queries) => {
  let maxValue = 0;
  const noOfOps = queries.length;
  const nArray = Array(n + 1).fill(0);

  for (let i = 0; i < noOfOps; i++) {
    const a = queries[i][0] - 1;
    const b = queries[i][1];
    const k = queries[i][2];

    nArray[a] += k;
    nArray[b] -= k;
  }

  for (let i = 1; i < nArray.length; i++) {
    nArray[i] += nArray[i - 1];
    if (nArray[i] > maxValue) {
      maxValue = nArray[i];
    }
  }
  return maxValue;
};
console.log(
  arrayManipulationV2(10, [
    [2, 6, 8],
    [3, 5, 7],
    [1, 8, 1],
    [5, 10, 15],
  ])
);

function getRandomInt(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const generate = (m, n) => {
  const data = Array(m)
    .fill()
    .map((_, i) => {
      let a = getRandomInt(1, n);
      let b = getRandomInt(a, n);
      let k = getRandomInt(1, 100000);
      return [a, b, k];
    });
  return data;
};
// console.log(generate(10, 25));

console.log(arrayManipulationV2(10000000, generate(100000, 10000000)));
