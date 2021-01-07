export const isPrime = function isPrime(num) {
  if (num <= 1) return true;

  for (let i = 2; i < num; i += 1) {
    if (num % i == 0) return false;
  }

  return true;
};

export const nthPrime = function nthPrime(n) {
  let ans;
  for (let i = 1; ; i += 1) {
    if (isPrime(i) === true) {
      ans = i;
      n--;
    }
    if (n === 0) return ans;
  }
};
