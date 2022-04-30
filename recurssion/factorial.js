const factorial = (n) => {
  if (n === 2) {
    return 2;
  }
  console.log(n);
  return n * factorial(n - 1);
};

console.log(factorial(5));
