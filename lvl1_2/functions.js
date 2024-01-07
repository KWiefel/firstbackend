const firstElement = (array) => array[0];

const withoutLast = (array) => [...array].slice(0, -1);

const onlyLast = (array) => [...array].slice(-1);

const withoutFirst = (array) => [...array].slice(1);

const remove = (array, removeIndex) =>
  array.filter((elt) => (elt !== removeIndex ? elt : null));

const sum = (array) => {
  let init = 0;
  for (let i = 0; i < array.length; i++) {
    init += array[i];
  }
  return init;
};

const randomeNumber = (num1, num2) =>
  Math.floor(Math.random() * (num2 - num1 + 1) + num1);

const capitalyze = (string) => {
  const character = string.split(" ");
  const uppercase = character.map(
    (char) => char.charAt(0).toUpperCase() + char.slice(1)
  );
  return uppercase.join(" ");
};

const capitalyzeAll = (string) => {
  const character = string.split(" ");
  const uppercase = character.map((char) => char.toUpperCase());
  return uppercase.join(" ");
};

const compare = (string, char) => string[string.length - 1] === char;

module.exports = {
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
};
