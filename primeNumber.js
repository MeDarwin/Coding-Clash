function isPrimeNumber(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= ~~Math.sqrt(num); i++) {
    if (num % i === 0) {
      console.log(num + " is not a prime number");
      return false;
    }
  }
  console.log(num + " is a prime number");
  return true;
}
// console.log(isPrimeNumber(-1));
// console.log(isPrimeNumber(1));
// console.log(isPrimeNumber(2));
// console.log(isPrimeNumber(3));
// console.log(isPrimeNumber(4));
// console.log(isPrimeNumber(5));
// console.log(isPrimeNumber(6));
// console.log(isPrimeNumber(7));
// console.log(isPrimeNumber(8));
// console.log(isPrimeNumber(9));
// console.log(isPrimeNumber(10));

// console.log(isPrimeNumber(49));
// console.log(isPrimeNumber(113));

function isPrimeNumberOtherMethod(/** @type {Number} */ num) {
  let isPrime;
  if (num <= 1) {
    return num + " is not a prime number";
  }

  if (num === 2) {
    return num + " is a prime number";
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
    isPrime = true;
  }
  return isPrime ? num + " is a prime number" : num + " is not a prime number";
}
console.time("isPrimeNumberOtherMethod");
console.log(isPrimeNumberOtherMethod(-1));
console.log(isPrimeNumberOtherMethod(1));
console.log(isPrimeNumberOtherMethod(2));
console.log(isPrimeNumberOtherMethod(3));
console.log(isPrimeNumberOtherMethod(4));
console.log(isPrimeNumberOtherMethod(5));
console.log(isPrimeNumberOtherMethod(6));
console.log(isPrimeNumberOtherMethod(7));
console.log(isPrimeNumberOtherMethod(8));
console.log(isPrimeNumberOtherMethod(9));
console.log(isPrimeNumberOtherMethod(10));

console.log(isPrimeNumberOtherMethod(49));
console.log(isPrimeNumberOtherMethod(113));
console.log(isPrimeNumberOtherMethod(117));
console.timeEnd("isPrimeNumberOtherMethod");
