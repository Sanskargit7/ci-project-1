const { analyze } = require("./ai");

const tests = [
  { input: "This is great and awesome", expected: "positive" },
  { input: "This is bad and terrible", expected: "negative" },
  { input: "This is a sentence", expected: "neutral" },
];

let passed = 0;
tests.forEach(({ input, expected }) => {
  const result = analyze(input);
  const ok = result.sentiment === expected;
  console.log(`[${ok ? "PASS" : "FAIL"}] "${input}" => ${result.sentiment} (score: ${result.score})`);
  if (ok) passed++;
});

console.log(`\n${passed}/${tests.length} tests passed`);
if (passed !== tests.length) process.exit(1);
