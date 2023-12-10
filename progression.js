// const nArray = [2, 1, 4, 3, 6, 5, 8, 7, 10, 9];

// function sumToN(n) {
//   let nArray = [];
//   let i = 1;
//   while (nArray.length < n) {
//     nArray.push(2 * i);
//     nArray.push(2 * i - 1);
//     i++
//   }
//   return nArray.reduce((a, b) => a + b);
// }
function sumToN(n) {
  let nArray = [];
  for (let i = 1; nArray.length < n; i++) {
    if (i % 2 === 0) {
      nArray.push(i - 1);
    } else {
      nArray.push(i + 1);
    }
  }
  return nArray.reduce((a, b) => a + b);
}

console.log(sumToN(1));
console.log(sumToN(2));
console.log(sumToN(3));
console.log(sumToN(10));
