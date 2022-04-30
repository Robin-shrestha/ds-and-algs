let { x } = require("./fradulentTestCase1");
const performance = require("perf_hooks").performance;

const median = (arr) => {
  if (!Array.isArray(arr)) throw new Error("must be array");

  let temp = {};

  arr.forEach((item) => {
    if (temp[item] === undefined) {
      temp[item] = 1;
    } else {
      temp[item] += 1;
    }
  });

  let sorted = [];
  Object.keys(temp)
    .sort((a, b) => a - b)
    .forEach((item) => {});

  if (arr.length / 2 === 0) {
    return (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
  } else {
    return arr[parseInt(arr.length / 2)];
  }
};
function activityNotifications(expenditure, d) {
  if (!Array.isArray(expenditure))
    throw new Error(" expenditure must be array");

  let totalNotifications = 0;
  let perfSum = 0;
  let perfSum1 = 0;
  for (let i = d; i < expenditure.length; i++) {
    const t11 = performance.now();

    const lastDExpense = expenditure.slice(i - d, i);
    const t12 = performance.now();
    perfSum1 += t12 - t11;

    const t1 = performance.now();
    const medianValueOfLastDExpense = median(lastDExpense);
    const t2 = performance.now();
    perfSum += t2 - t1;
    if (expenditure[i] >= 2 * medianValueOfLastDExpense) {
      totalNotifications += 1;
    }
  }
  console.log({ perfSum, perfSum1 });

  return totalNotifications;
}
// 2
// console.log(activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5));

// 633
console.log(activityNotifications(x.slice(0, 30000), 1000));
