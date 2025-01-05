import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import axios from 'axios';

const STKPush = () => {


const cartItems=useSelector(state=>state.items)
const amount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);  



  const [phoneNumber, setPhoneNumber] = useState('');
  
  const [message, setMessage] = useState('');

  const handlePayment = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await axios.post('https://munchiez-1.onrender.com', {
        phoneNumber,
        amount,
      });
      setMessage('Payment prompt initiated.');
    } catch (error) {
      console.error('Error initiating STK Push:', error);
      setMessage('Failed to send payment prompt. Please try again.');
    }
  };

  return (
    <div className="payment-page">
      <h2 className="hero-title">M-Pesa Payment</h2>
      <div className="payment-amount">
         Total amount: {amount}
        </div>
      <form onSubmit={handlePayment}>
        <div className='payment-number'>
          <label>Phone Number:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="e.g. 2547XXXXXXXX"
            required
          />
        </div>
       <div className="payment-button">
        <button type="submit" className="pay-button">Pay</button></div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default STKPush;