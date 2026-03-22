const express = require("express");
const { analyze } = require("./ai");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "AI Sentiment Tool is running. POST /analyze with { text: '...' }" });
});

app.post("/analyze", (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: "text field is required" });
  res.json(analyze(text));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
