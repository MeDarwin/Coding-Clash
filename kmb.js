function seat(person) {
  let sum = 1;
  let i = 1;
  do {
    sum *= i;
    i++;
  } while (i <= person);
  return sum;
}
function seatWhileLoop(person) {
  let sum = 1;
  let i = 1;
  while (i <= person) {
    sum *= i;
    i++;
  }
  return sum;
}
function seatForLoop(person) {
  let sum = 1;
  for (let i = 1; i <= person; i++) {
    sum *= i;
  }
  return sum;
}

console.time("forLoop");
console.log(seatForLoop(0));
console.log(seatForLoop(2));
console.log(seatForLoop(3));
console.log(seatForLoop(4));
console.log(seatForLoop(5));
console.log(seatForLoop(6));
console.log(seatForLoop(195));
console.timeEnd("forLoop");

console.time("DowhileLoop");
console.log(seat(0));
console.log(seat(2));
console.log(seat(3));
console.log(seat(4));
console.log(seat(5));
console.log(seat(6));
console.log(seat(195));
console.timeEnd("DowhileLoop");

console.time("whileLoop");
console.log(seatWhileLoop(0));
console.log(seatWhileLoop(2));
console.log(seatWhileLoop(3));
console.log(seatWhileLoop(4));
console.log(seatWhileLoop(5));
console.log(seatWhileLoop(6));
console.log(seatWhileLoop(195));
console.timeEnd("whileLoop");
