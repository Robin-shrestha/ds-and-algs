function alternatingCharacters(s) {
  if (typeof s != "string") return null;
  const arr = s.split("");
  let n = arr.length;

  const newArr = [];
  for (let i = 0; i < n; i++) {
    if (arr[i] === arr[i + 1]) {
      newArr.push(arr[i]);
    }
  }
  return newArr.length;
}

console.log(alternatingCharacters("ABAA"));
