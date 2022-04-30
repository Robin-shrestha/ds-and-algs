function isValid(s) {
  // Write your code here
  let res = { yes: "YES", no: "NO" };
  if (typeof s != "string") return res.no;
  if (!s.length) return res.no;

  const strMap = {};
  s.split("").forEach((element) => {
    if (strMap[element] === undefined) {
      strMap[element] = 1;
    } else {
      strMap[element] += 1;
    }
  });

  const keyArr = Object.keys(strMap);

  const freqMap = {};
  keyArr.forEach((element) => {
    if (freqMap[strMap[element]] === undefined) {
      freqMap[strMap[element]] = 1;
    } else {
      freqMap[strMap[element]] += 1;
    }
  });

  if (Object.keys(freqMap).length > 2) return res.no;
  if (Object.keys(freqMap).length === 1) return res.yes;

  // if length ===2
  let freqKeyArr = Object.keys(freqMap);
  let mostCommonFreq = parseInt(
    freqMap[freqKeyArr[0]] > freqMap[freqKeyArr[1]]
      ? freqKeyArr[0]
      : freqKeyArr[1]
  );

  let flag = true;

  for (let i = 0; i < keyArr.length; i++) {
    if (mostCommonFreq === strMap[keyArr[i]]) continue;
    else {
      // non matching letter frequency
      if (!flag) {
        //  case when there ae two letters with nonmatching frequency
        return res.no;
      }
      flag = false;
      if (strMap[keyArr[i]] > mostCommonFreq) {
        // case abcdde
        const diffBetweenFreq = Math.abs(mostCommonFreq - strMap[keyArr[i]]);
        if (diffBetweenFreq > 1) {
          return res.no;
        } else {
          continue;
        }
      } else {
        // case abbccdd
        if (strMap[keyArr[i]] === 1) {
          continue;
        } else {
          return res.no;
        }
      }
    }
  }

  return res.yes;
}

// console.log(isValid("abcdefghhgfedecba"));
console.log(isValid("abbbbccccdddd"));
// console.log(isValid("abcdede"));
// console.log(isValid("bbbbccccddddav"));
