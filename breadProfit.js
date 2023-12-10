function profit(/** @type {Number|String} */ flour, egg, percentage) {
  let oneBreadPrice = (flour + 5 * egg) / 10;
  return ~~((oneBreadPrice * (100 + percentage)) / 100);
}
console.log(profit(10000, 2000, 10));
console.log(profit(15000, 3000, 5));
console.log(profit(10000, 1000, 30));
console.log(profit(7500, 1000, 10));
console.log(profit(5000, 5000, 50));
console.log(profit(5000.500, 5000.500, 50));
