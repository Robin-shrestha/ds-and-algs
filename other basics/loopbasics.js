// forloop

let x = [1, 2, 3, 4, 5, 6];
// forward loop

const forwardLoop = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log("i=", i, "currvalue=", x[i]);
  }
};

const backwardLoop = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log("i=", i, "currvalue=", x[i]);
  }
};

const reverse = (arr) => {
  let result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
};

console.log(reverse(x));
