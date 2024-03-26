const sortNumber = require("./sortNumber");

const testCases = [
  { input: [3, 1, 2], expected: [1, 2, 3] }, // ตัวเลขไม่เรียงลำดับ
  { input: [5, 5, 5], expected: [5, 5, 5] }, // ตัวเลขเหมือนกันทั้งหมด
  { input: [-1, -2, -3], expected: [-3, -2, -1] }, // ตัวเลขลบ
  { input: [10, 0, -10], expected: [-10, 0, 10] }, // ตัวเลขบวกและลบ
];

testCases.forEach(({ input, expected }, index) => {
  const result = sortNumber(...input);
  console.log(`Test case ${index + 1}: Input: ${input}, Expected: ${expected}, Result: ${result}`);
  if (JSON.stringify(result) === JSON.stringify(expected)) {
    console.log(`  => Passed`);
  } else {
    console.log(`  => Failed`);
  }
});
