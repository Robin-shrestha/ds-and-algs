const birthdayCandles = (arr) => {
  const dict = {};
  let largestNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
    if (dict[arr[i]]) {
      dict[arr[i]] += 1;
    } else {
      dict[arr[i]] = 1;
    }
  }

  return { largestNum, count: dict[largestNum] };
};
console.log(birthdayCandles([1, 2, 3, 3, 5, 1, 2, 3, 5, 5, 2, 6, 7, 6, 7, 7]));
