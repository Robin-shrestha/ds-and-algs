const makingAnagrams = (a, b) => {
  const mapA = {};
  const mapB = {};

  let count = 0;
  a.split("").forEach((element) => {
    if (mapA[element] === undefined) {
      mapA[element] = 1;
    } else {
      mapA[element] += 1;
    }
  });
  b.split("").forEach((element) => {
    if (mapB[element] === undefined) {
      mapB[element] = 1;
    } else {
      mapB[element] += 1;
    }
  });

  Object.keys(mapA).forEach((item) => {
    count += Math.abs(mapA[item] - (mapB[item] || 0));
    delete mapB[item];
  });
  Object.keys(mapB).forEach((item) => {
    count += mapB[item];
  });
  return count;
};

console.log(makingAnagrams("abcdb", "dabde"));
