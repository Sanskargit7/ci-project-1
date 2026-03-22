const POSITIVE = ["good", "great", "awesome", "happy", "love", "excellent", "best", "wonderful", "fantastic", "nice"];
const NEGATIVE = ["bad", "terrible", "awful", "hate", "worst", "horrible", "poor", "sad", "ugly", "wrong"];

function analyze(text) {
  const words = text.toLowerCase().split(/\W+/);
  let score = 0;

  words.forEach(word => {
    if (POSITIVE.includes(word)) score++;
    if (NEGATIVE.includes(word)) score--;
  });

  const sentiment = score > 0 ? "positive" : score < 0 ? "negative" : "neutral";
  return { text, score, sentiment };
}

module.exports = { analyze };
