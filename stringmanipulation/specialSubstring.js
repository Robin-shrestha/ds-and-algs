const { x } = require("./specialStringTestCase1");
const performance = require("perf_hooks").performance;

function kSum(k) {
  return (k * (k + 1)) / 2;
}

function specialSubstring(s) {
  if (typeof s !== "string") return 0;

  let caseA = 0;
  let caseB = 0;

  let strArr = s.split("");
  let strGroup = [];

  let tempKey = strArr[0];
  let tempVal = 1;
  let t0 = performance.now();
  for (let i = 1; i <= s.length; i++) {
    if (strArr[i] === tempKey) {
      tempVal += 1;
    } else {
      strGroup.push([tempKey, tempVal]);
      tempKey = strArr[i];
      tempVal = 1;
    }
  }
  let t1 = performance.now();

  console.log("1", t1 - t0);

  let t2 = performance.now();
  //   counting the individual and the same letters substrings eg, a ,aa, bb, bbb
  strGroup.forEach(([x, y]) => {
    caseA += kSum(y);
  });
  let t3 = performance.now();
  console.log("2", t3 - t2);
  //   counting the cases where there string has a unique letter in middle with same letters before and after it
  //   eg, aba, aabaa
  let t4 = performance.now();
  for (let i = 1; i < s.length - 1; i++) {
    let skip = 1;

    if (s[i - skip] === s[i] || s[i + skip] === s[i]) {
      continue;
    }
    let match = s[i - skip];
    while (
      i - skip > -1 &&
      i + skip < s.length &&
      s[i - skip] === match &&
      s[i + skip] === match
    ) {
      caseB += 1;
      skip += 1;
    }
  }
  let t5 = performance.now();
  console.log("3", t5 - t4);

  return caseA + caseB;
}

// console.log(specialSubstring("mnonopoo"));
// console.log(specialSubstring("abaabaa"));
console.log(specialSubstring(x));
