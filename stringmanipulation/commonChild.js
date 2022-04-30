function groupBy(s) {
  let strGroup = [];

  let tempKey = s[0];
  let tempVal = 1;
  for (let i = 1; i <= s.length; i++) {
    if (s[i] === tempKey) {
      tempVal += 1;
    } else {
      strGroup.push([tempKey, tempVal]);
      tempKey = s[i];
      tempVal = 1;
    }
  }
  return strGroup;
}

function strMap(s) {
  const mapData = {};
  s.split("").forEach((element) => {
    if (mapData[element] === undefined) {
      mapData[element] = 1;
    } else mapData[element] += 1;
  });
  return mapData;
}

const createMxNArray = (m, n) => {
  let c = new Array(m + 1);
  for (let i = 0; i < m + 1; i++) {
    c[i] = new Array(n + 1).fill(0);
  }
  return c;
};
function commonChild(s1, s2) {
  if (typeof s1 !== "string" && typeof s2 !== "string") return 0;

  let m = s1.length;
  let n = s2.length;

  let c = createMxNArray(m, n);

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        c[i][j] = c[i - 1][j - 1] + 1;
      } else {
        c[i][j] = Math.max(c[i][j - 1], c[i - 1][j]);
      }
    }
  }

  return c[m][n];
}

console.log(commonChild("ABCD", "ABDC"));
// console.log(commonChild("SHINCHAN", "NOHARAAA"));
