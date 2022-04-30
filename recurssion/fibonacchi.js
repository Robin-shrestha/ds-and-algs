// 0,1,1,2,3,5,8,13,21

const fibonacci = (n) => {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(2));
