const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Replace with your actual Make.com webhook URL:
const MAKE_WEBHOOK_URL = 'https://hook.us1.make.com/your-real-webhook-url';

app.get('/', (req, res) => {
  res.send('CoFounder Webhook Server is running!');
});

app.post('/webhook', async (req, res) => {
  try {
    await axios.post(MAKE_WEBHOOK_URL, req.body); // forward data to Make
    res.status(200).send('Forwarded to Make.com');
  } catch (err) {
    console.error('Error forwarding to Make:', err.message);
    res.status(500).send('Failed to forward');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

