// src/components/PaymentForm.js

import React, { useState } from 'react';
import { makePayment } from '../../modules/api/payment';

const PaymentForm = () => {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit_card');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const paymentData = {
      amount: parseFloat(amount),
      paymentMethod,
      // 필요한 추가 데이터가 있을 경우 여기에 추가합니다
    };

    try {
      const result = await makePayment(paymentData);
      setSuccess('Payment successful');
      console.log('Payment result:', result);
    } catch (error) {
      setError('Payment failed');
    }
  };

  return (
    <div>
      <h1>Payment Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Amount:
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Payment Method:
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="credit_card">Credit Card</option>
              <option value="bank_transfer">Bank Transfer</option>
              <option value="virtual_account">Virtual Account</option>
              <option value="kakaopay">KakaoPay</option>
            </select>
          </label>
        </div>
        <button type="submit">Pay</button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {success && <div style={{ color: 'green' }}>{success}</div>}
    </div>
  );
};

export default PaymentForm;

