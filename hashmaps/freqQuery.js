const { test, result } = require("./freqQueryTest1");
const { arraysEqual } = require("../utills");

function freqQuery(queries) {
  let n = queries.length;
  const freqMap = {};
  const freqInverseMap = {};
  const arr = [];
  const res = [];

  queries.forEach(([q, v], index) => {
    if (q === 1) {
      //   insert into array
      arr.push(v); // O(0)
      if (freqMap[v]) {
        freqInverseMap[freqMap[v]] -= 1;
        freqMap[v] += 1;
        freqInverseMap[freqMap[v]] = freqInverseMap[freqMap[v]] + 1 || 1;
      } else {
        freqMap[v] = 1;
        freqInverseMap[1] = freqInverseMap[1] + 1 || 1;
      }
    }
    if (q === 2) {
      //   delete an occurance of v from array

      const occIndex = arr.findIndex((element) => element === v); //O(n)
      if (occIndex >= 0) {
        arr.splice(occIndex, 1); //O(n)
        freqInverseMap[freqMap[v]] = freqInverseMap[freqMap[v]] - 1 || 0;

        freqMap[v] = freqMap[v] - 1; //O(1)
        freqInverseMap[freqMap[v]] = freqInverseMap[freqMap[v]] + 1 || 1;
      } else {
        freqMap[v] = 0;
      }
    }
    if (q === 3) {
      //   push 0 or 1 to res depending upon if there is
      // an frequ occurance of v of any data in he array

      //   if (Object.values(freqMap).includes(v)) {
      if (freqInverseMap[v] > 0) {
        console.log(freqInverseMap[v], v);
        res.push(1);
      } else {
        res.push(0);
      }
    }
  });

  return res;
}

const mappers = (arr) => {
  let x = {};
  arr.forEach((i) => {
    x[i] = x[i] + 1 || 0;
  });
  return x;
};

let result1 = freqQuery(test);
console.log({
  correct: mappers(result),
  actual: mappers(result1),
});

console.log(
  "🚀 ~ file: freqQuery.js ~ line 37 ~ result1",
  arraysEqual(result1, result)
);

let test2 = [
  [1, 5],
  [1, 6],
  [2, 6],
  [2, 6],
  [3, 2],
  [1, 10],
  [1, 10],
  [1, 6],
  [2, 5],
  [3, 2],
  [1, 10],
  [1, 10],
  [3, 3],
  [2, 10],
  [2, 10],
  [1, 10],
  [3, 3],
];
console.log(freqQuery(test2));
