const mergeSort = (arr) => {
  if (!Array.isArray(arr)) return null;
  let inversions = 0;
  let n = arr.length;
  if (n === 1) return arr;

  let arrA = arr.slice(0, Math.ceil(n / 2));
  let arrB = arr.slice(Math.ceil(n / 2), n);

  arrA = mergeSort(arrA);
  arrB = mergeSort(arrB);

  return merge(arrA, arrB);
};

const merge = (arrA, arrB) => {
  let c = [];
  while (arrA.length > 0 && arrB.length > 0) {
    if (arrA[0] > arrB[0]) {
      c.push(arrB[0]);
      arrB.shift();
    } else {
      c.push(arrA[0]);
      arrA.shift();
    }
  }
  //  arrA or arrB is empty
  while (arrA.length > 0) {
    c.push(arrA[0]);
    arrA.shift();
  }

  while (arrB.length > 0) {
    c.push(arrB[0]);
    arrB.shift();
  }
  return c;
};

console.log(mergeSort([2, 1, 3, 1, 2]));
console.log(mergeSort([1, 1, 1, 2, 2, 3]));
