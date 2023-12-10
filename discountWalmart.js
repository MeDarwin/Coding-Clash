function discount(price) {
  let discount = 0;
  if (price > 500000) discount = 10 / 100;
  if (price > 1000000) discount = 15 / 100;
  return Math.round(price - price * discount);
}
console.log(discount(1000000));
console.log(discount(1000001));
console.log(discount(500001));
console.log(discount(500000.5));
