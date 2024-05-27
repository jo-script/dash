'use client'
import { useState } from 'react';

export default function SubscriptionPayment() {
  const [subscriptionType, setSubscriptionType] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      subscriptionType,
      paymentMethod,
      cardNumber,
    });
  };

  const isButtonDisabled = !subscriptionType || !paymentMethod || (paymentMethod === 'visa' && !cardNumber);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Subscription and Payment</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Subscription Type</label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="subscriptionType"
                  value="weekly"
                  className="form-radio"
                  checked={subscriptionType === 'weekly'}
                  onChange={(e) => setSubscriptionType(e.target.value)}
                />
                <span className="ml-2">Weekly</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="subscriptionType"
                  value="monthly"
                  className="form-radio"
                  checked={subscriptionType === 'monthly'}
                  onChange={(e) => setSubscriptionType(e.target.value)}
                />
                <span className="ml-2">Monthly</span>
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Payment Method</label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="visa"
                  className="form-radio"
                  checked={paymentMethod === 'visa'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <span className="ml-2">Visa</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="wallet"
                  className="form-radio"
                  checked={paymentMethod === 'wallet'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <span className="ml-2">Wallet</span>
              </label>
            </div>
          </div>

          {paymentMethod === 'visa' && (
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                className="form-input mt-1 block w-full"
                placeholder="Enter your card number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </div>
          )}

          <button
            type="submit"
            className={`w-full py-2 px-4 rounded transition duration-200 ${isButtonDisabled ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700 text-white'}`}
            disabled={isButtonDisabled}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
