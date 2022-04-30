let { x } = require("./tripletsTest3");
let { stringToArrayConverter } = require("../utills");
// Couple of hints:

// Can be done in O(n) -> single pass through data
// No division necessary and single multiplications by R are all that's needed
// Using map(C++) or dict(Java, Python) is a must -> can be unordered map (saves O(logN))
// Try to think forward when reading a value -> will this value form part of a triplet later?
// No need to consider (R == 1) as a corner case

function countTriplets(arr, r) {
  let gsTripletCount = 0;
  //   arr.sort((a,b) => a-b);

  const countMap = {};
  const tripletMap = {};

  arr.forEach((element) => {
    countMap[element] = countMap[element] + 1 || 1;
    tripletMap[element] = [element, element * r, element * r * r];
  });

  Object.entries(tripletMap).forEach(([key, value]) => {
    const count0 = countMap[value[0]];
    const count1 = countMap[value[1]];
    const count2 = countMap[value[2]];
    if (r === 1) {
      const n = Math.max(count0, count1, count2) || 0;
      gsTripletCount += (n * (n - 1) * (n - 2)) / 6;
    } else {
      if (countMap[value[0]] && countMap[value[1]] && countMap[value[2]]) {
        if (count0 === count1) {
          gsTripletCount += Math.max(count0 * 2, count2);
        } else if (count0 === count2) {
          gsTripletCount += Math.max(count0 * 2, count1);
        } else if (count1 === count2) {
          gsTripletCount += Math.max(count1 * 2, count2);
        } else if (count1 === count2 && count2 === count0) {
          gsTripletCount += count0 * 3;
        } else {
          gsTripletCount += Math.max(count0, count1, count2);
        }
      }
    }
  });
  console.log(countMap);
  console.log(tripletMap);
  return gsTripletCount;
}

// def countTriplets(arr, r):
//         count = 0
//         dict = {}
//         dictPairs = {}

//         for i in reversed(arr):
//                 if i*r in dictPairs:
//                         count += dictPairs[i*r]
//                 if i*r in dict:
//                         dictPairs[i] = dictPairs.get(i, 0) + dict[i*r]

//                 dict[i] = dict.get(i, 0) + 1

//         return count

function countTripletsV2(arr, r) {
  if (!Array.isArray(arr)) return 0;
  let count = 0;

  const map = {};
  const mapPairs = {};

  arr.reverse().forEach((item) => {
    if (item * r in mapPairs) {
      count += mapPairs[item * r];
    }
    if (item * r in map) {
      mapPairs[item] = map[item * r] + (mapPairs[item] || 0);
    }
    map[item] = map[item] + 1 || 1;
  });

  return count;
}
// console.log(countTripletsV2([1, 2, 2, 4], 2));
console.log(countTripletsV2([1, 2, 1, 2, 4], 2));
// console.log(countTriplets([1, 3, 9, 9, 27, 81], 3));
// 1339347780085
// console.log(countTripletsV2(stringToArrayConverter(x), 10));
