const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

const MAKE_WEBHOOK_URL = 'https://hook.us2.make.com/50o6wnkj8a3gikoqsr42odvsa5o4ntu4';

app.use(express.json());

app.get('/', (req, res) => {
  res.send('CoFounder Webhook Server is running!');
});

app.post('/webhook', async (req, res) => {
  try {
    console.log('Received webhook payload:', req.body);

    // Forward payload to Make webhook
    await axios.post(MAKE_WEBHOOK_URL, req.body);

    res.status(200).send('Payload received and forwarded.');
  } catch (error) {
    console.error('Error forwarding payload to Make:', error.message);
    res.status(500).send('Error forwarding payload.');
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
