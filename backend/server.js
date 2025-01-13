const express = require('express');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
const crypto = require('crypto');
require('dotenv').config();


const app = express();

app.use(bodyParser.json());
app.use(cors({ origin: 'https://nellymaina.github.io/munchiez' }));
app.use(express.json());

const JWT_SECRET = crypto.randomBytes(64).toString('hex');



mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);




app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error registering user' });
  }
});





app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: "Username and password are required!" });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials!" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials!" });
    }

    const token = jwt.sign({ id: user._id },JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Error logging in!" });
  }
});


const consumerKey =process.env.CONSUMER_KEY
const consumerSecret =process.env.CONSUMER_SECRET

const shortcode = '174379'; 
const passkey =process.env.PASSKEY
const jtw=require('crypto').randomBytes(64).toString('hex');

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


app.listen(5000, () => console.log('server is running on port 5000'));
