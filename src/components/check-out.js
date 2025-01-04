import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
      
        const response = await fetch('http://localhost:5000/payment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ amount: 5000, currency: 'ksh' })
        });
      
        const { clientSecret } = await response.json();
      
        const result = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        });
      
        if (result.error) {
          setErrorMessage(result.error.message);
        } else if (result.paymentIntent.status === 'succeeded') {
          console.log('Payment succeeded!');
        }
      
        setLoading(false);
      };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || loading}>
        {loading ? 'Processing...' : 'Pay'}
      </button>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
}

