// src/api/payment.js

import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const makePayment = async (paymentData) => {
  try {
    const response = await axios.post(`${API_URL}/payment`, paymentData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Payment request failed', error);
    throw error;
  }
};
