function sortNumber(a, b, c) {

  const numbers = [a, b, c];
  numbers.sort((x, y) => x - y);
  return numbers;
}

module.exports = sortNumber;
