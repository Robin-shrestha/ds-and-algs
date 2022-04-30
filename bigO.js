// O(n)
const character = ["nemo", "jacck", "asd"];
const findNemo = (arr) => {
  arr.forEach((element) => {
    if (element === "nemo") console.log("foundsssss");
  });
};

// O(1)
const getCharacter = (arr) => {
  console.log(arr[0]);
};

// O(n^2)
const logPairs = (arr) => {
  arr.forEach((element) => {
    arr.forEach((item) => {
      console.log([element, item]);
    });
  });
};

// O(n!) oh no

const nFacRuntimeFunc = (n) => {
  for (let i = 0; i < n; i++) {
    console.log(i);
    nFacRuntimeFunc(n - 1);
  }
};

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
  // Write your code here
  const mappedObject = {};
  ar.forEach((item) => {
    if (mappedObject.hasOwnProperty(item)) {
      mappedObject[item] = mappedObject[item] + 1;
    } else {
      mappedObject[item] = 1;
    }
  });
  console.log(
    "🚀 ~ file: bigO.js ~ line 49 ~ sockMerchant ~ mappedObject",
    mappedObject
  );

  let pairs = 0;
  Object.values(mappedObject).forEach((item) => {
    pairs = pairs + Math.floor(item / 2);
  });
  console.log("🚀 ~ file: bigO.js ~ line 58 ~ sockMerchant ~ pairs", pairs);
  return pairs;
}

function repeatedString(s, n) {
  // Write your code here
  let noOfas = 0;
  const minimumRepsRequired = Math.ceil(n / s.length);
  console.log(
    "🚀 ~ file: bigO.js ~ line 72 ~ repeatedString ~ minimumRepsRequired",
    minimumRepsRequired
  );
  const chainedStringArray = s
    .repeat(minimumRepsRequired)
    .split("")
    .slice(0, n);
  console.log(
    "🚀 ~ file: bigO.js ~ line 77 ~ repeatedString ~ chainedStringArray",
    chainedStringArray
  );
  chainedStringArray.forEach((item) => {
    if (item === "a") noOfas++;
  });
  console.log("🚀 ~ file: bigO.js ~ line 82 ~ repeatedString ~ noOfas", noOfas);
  return noOfas;
}
