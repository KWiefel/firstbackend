const { names, numbers } = require("./data.js");
const {
  firstElement,
  withoutLast,
  onlyLast,
  withoutFirst,
  remove,
  sum,
  randomeNumber,
  capitalyze,
  capitalyzeAll,
  compare,
} = require("./functions.js");

console.log("First Element");
console.log(firstElement(names));
console.log(firstElement(numbers));

console.log("Without Last Element");
console.log(withoutLast(names));
console.log(withoutLast(numbers));

console.log("Only Last Element");
console.log(onlyLast(names));
console.log(onlyLast(numbers));

console.log("Without First Element");
console.log(withoutFirst(names));
console.log(withoutFirst(numbers));

console.log("Remove");
console.log(remove(names, "Eric"));
console.log(remove(numbers, 4));

console.log("Sum");
console.log(sum(numbers));

console.log("Random Number");
console.log(randomeNumber(2, 20));

console.log("Capital First Letter");
console.log(capitalyze("hallo"));

console.log("Capital All Letter");
console.log(capitalyzeAll("hallo"));

console.log("Compare");
console.log(compare("hallo", "o"));
