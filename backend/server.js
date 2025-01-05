const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());


const consumerKey =process.env.CONSUMER_KEY
const consumerSecret =process.env.CONSUMER_SECRET

const shortcode = '174379'; 
const passkey =process.env.PASSKEY


async function getAccessToken() {
  const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');
  try {
    const response = await axios.get(
      'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
      {
        headers: { Authorization: `Basic ${auth}` },
      }
    );
    return response.data.access_token;
  } catch (error) {
    console.error('Error getting access token:', error.response.data);
    throw new Error('Unable to get access token');
  }
}


app.post('/stkpush', async (req, res) => {
  const { phoneNumber, amount } = req.body; 
  const accessToken = await getAccessToken();

  const timestamp = new Date().toISOString().replace(/[-:T.Z]/g, '').slice(0, 14);
  const password = Buffer.from(`${shortcode}${passkey}${timestamp}`).toString('base64');

  const data = {
    BusinessShortCode: shortcode,
    Password: password,
    Timestamp: timestamp,
    TransactionType: 'CustomerPayBillOnline',
    Amount: amount,
    PartyA: phoneNumber,
    PartyB: shortcode,
    PhoneNumber: phoneNumber,
    CallBackURL: process.env.CALLBACK_URL,
    AccountReference: 'Test Payment',
    TransactionDesc: 'Payment description',
  };

  try {
    const response = await axios.post(
      'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
      data,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    res.status(200).json(response.data); 
  } catch (error) {
    console.error('STK Push Error:', error.response.data);
    res.status(500).json({ error: error.response.data });
  }
});

app.post('/callback', (req, res) => {
  console.log('Callback Received:', req.body);
  const callbackData = req.body.Body.stkCallback;

  if (callbackData.ResultCode === 0) {
    console.log('Payment Successful:', callbackData.CallbackMetadata);
  } else {
    console.error('Payment Failed:', callbackData.ResultDesc);
  }

  res.status(200).send('Callback received');
});


app.listen(5000, () => console.log(`Server running on port 3000`));
