const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.post("/webhook", async (req, res) => {
  const message = req.body.message || "No message received.";

  console.log("Received from Make:", message);

  // Example dummy AI response (replace this with Lovable fetch later)
  const aiReply = `Your message was: "${message}" — thanks for reaching out!`;

  res.json({ reply: aiReply });
});

app.get("/", (req, res) => {
  res.send("CoFounder Webhook is live.");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
