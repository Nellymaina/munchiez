import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import axios from 'axios';

const STKPush = () => {


const cartItems=useSelector(state=>state.items)
    const [checktotal, setChecktotal]=useState(cartItems)

    function checksum(){
    return checktotal.reduce((total, item)=>{
    return total+item.price*item.quantity}, 0)
    }
const sum=checksum()



  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('sum');
  const [message, setMessage] = useState('');

  const handlePayment = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await axios.post('http://localhost:5000/stkpush', {
        phoneNumber,
        amount,
      });
      setMessage('Payment prompt sent to your phone.');
    } catch (error) {
      console.error('Error initiating STK Push:', error);
      setMessage('Failed to send payment prompt. Please try again.');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>M-Pesa Payment</h2>
      <form onSubmit={handlePayment}>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="e.g. 2547XXXXXXXX"
            required
          />
        </div>
        <div>
          <label>Amount (KES):</label>
          <input
            type="number"
            value={amount}
            placeholder="amount"
            required
          />
        </div>
        <button type="submit">Pay</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default STKPush;