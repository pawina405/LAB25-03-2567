// 1. Implement Expect Function ✓ ✕
// 2. Implement Test Function
const sortNumber = require("../exercise01/sortNumber");

function test(title, callback) {
  try {
    callback();
    console.log(`✓ ${title}`);
  } catch (error) {
    console.error(`✕ ${title}`);
    console.error(error);
  }
}

function expect(result) {
  return {
    toBe: function(expected) {
      if (JSON.stringify(result) === JSON.stringify(expected)) {
        return true;
      } else {
        throw new Error(`${result} is not equal to ${expected}`);
      }
    }
  };
}

// Example unit test
test("test that (c > b > a) must return sorted arr", () => {
  expect(sortNumber(3, 2, 1)).toBe([1, 2, 3]);
});

// Additional test cases
test("test that (a > b > c) must return sorted arr", () => {
  expect(sortNumber(3, 1, 2)).toBe([1, 2, 3]);
});

test("test that (a > c > b) must return sorted arr", () => {
  expect(sortNumber(2, 3, 1)).toBe([1, 2, 3]);
});


