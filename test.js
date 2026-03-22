const fs = require("fs");
const { analyze } = require("./ai");

const tests = [
  { input: "This is great and awesome", expected: "positive" },
  { input: "This is bad and terrible", expected: "negative" },
  { input: "This is a sentence", expected: "neutral" },
];

const results = [];
let passed = 0;

tests.forEach(({ input, expected }) => {
  const result = analyze(input);
  const ok = result.sentiment === expected;
  if (ok) passed++;
  console.log(`[${ok ? "PASS" : "FAIL"}] "${input}" => ${result.sentiment} (score: ${result.score})`);
  results.push({ input, expected, actual: result.sentiment, score: result.score, passed: ok });
});

console.log(`\n${passed}/${tests.length} tests passed`);

if (process.argv.includes("--report")) {
  const report = {
    timestamp: new Date().toISOString(),
    total: tests.length,
    passed,
    failed: tests.length - passed,
    results,
  };
  fs.mkdirSync("test-results", { recursive: true });
  fs.writeFileSync("test-results/report.json", JSON.stringify(report, null, 2));
  console.log("Test report saved to test-results/report.json");
}

if (passed !== tests.length) process.exit(1);
