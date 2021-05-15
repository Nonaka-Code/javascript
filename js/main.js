const array = [2, 4, 7, 5, 4, 3, 8];

const result = array.filter(function (x, i, number) {
  return number.indexOf(x) !== number.lastIndexOf(x);
});

console.log(result);
