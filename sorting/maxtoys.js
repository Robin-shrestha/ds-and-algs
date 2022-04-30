let { x } = require("./maxtoysTestcase1");
const performance = require("perf_hooks").performance;

function maximumToys(prices, k) {
  // Write your code here

  if (!Array.isArray(prices)) return 0;
  const n = prices.length;
  const freq = {};

  const t1 = performance.now();
  prices.forEach((item) => {
    if (freq[item] === undefined) freq[item] = 1;
    else {
      freq[item] += 1;
    }
  });
  const t2 = performance.now();
  console.log("freq mapping", t2 - t1);
  const t3 = performance.now();
  const keySort = [...Object.keys(freq)].sort((a, b) => a - b);
  const t4 = performance.now();
  console.log("sort", t4 - t3);

  const t5 = performance.now();
  let toyCount = 0;
  keySort.every((item) => {
    if (k <= 0) return false;
    if (k >= parseInt(item) * freq[item]) {
      toyCount += freq[item];
      const temp = parseInt(item) * freq[item];
      k -= temp;
      return true;
    }
    if (k > 0) {
      const temp = parseInt(k / item);

      toyCount += temp;
      return false;
    }
  });
  const t6 = performance.now();
  console.log("count", t6 - t5);

  return toyCount;
}

// console.log("toyCount", maximumToys([4, 2, 1, 3, 2, 1, 2, 1, 3, 1, 2, 1], 7));
// console.log(maximumToys([3, 7, 2, 9, 4], 15));
// console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50));
console.log(maximumToys(x, 806930886));
