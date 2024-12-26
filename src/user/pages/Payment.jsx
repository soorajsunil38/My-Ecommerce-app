// Import necessary dependencies
import React, { useState } from 'react';
import gpay from '../../assets/gpay.png'
import phonepe from '../../assets/phonepe.png'
import paytm from '../../assets/paytm.png'

const Payment = () => {
    const [paymentDetails, setPaymentDetails] = useState({
        paymentCategory: 'creditCard', // Default payment method
        cardNumber: '',
        cardHolder: '',
        expiryDate: '',
        cvv: '',
        upiId: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPaymentDetails({ ...paymentDetails, [name]: value });
    };

    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        console.log('Payment Details:', paymentDetails);
        alert('Payment processed successfully!');
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
            <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow">
                <h1 className="text-2xl font-bold mb-6">Payment Information</h1>
                <form onSubmit={handlePaymentSubmit} className="space-y-4">

                    <div>
                        <fieldset>
                            <legend className="block text-sm font-medium text-gray-700">Payment Method</legend>
                            <div className="mt-2 space-y-2">
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        id="creditCard"
                                        name="paymentCategory"
                                        value="creditCard"
                                        checked={paymentDetails.paymentCategory === 'creditCard'}
                                        onChange={handleInputChange}
                                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                                    />
                                    <label htmlFor="creditCard" className="ml-3 block text-sm font-medium text-gray-700">
                                        Credit Card
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        id="upiId"
                                        name="paymentCategory"
                                        value="upiId"
                                        checked={paymentDetails.paymentCategory === 'upiId'}
                                        onChange={handleInputChange}
                                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                                    />
                                    <label htmlFor="upiId" className="ml-3 block text-sm font-medium text-gray-700">
                                        UPI
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        id="cashOnDelivery"
                                        name="paymentCategory"
                                        value="cashOnDelivery"
                                        checked={paymentDetails.paymentCategory === 'cashOnDelivery'}
                                        onChange={handleInputChange}
                                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                                    />
                                    <label htmlFor="cashOnDelivery" className="ml-3 block text-sm font-medium text-gray-700">
                                        Cash on Delivery
                                    </label>
                                </div>
                            </div>
                        </fieldset>
                    </div>

                    {paymentDetails.paymentCategory === 'creditCard' && (
                        <>
                            <div>
                                <label
                                    htmlFor="cardNumber"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Card Number
                                </label>
                                <input
                                    type="text"
                                    id="cardNumber"
                                    name="cardNumber"
                                    value={paymentDetails.cardNumber}
                                    onChange={handleInputChange}
                                    placeholder="1234 5678 9012 3456"
                                    className="mt-1 block w-full border rounded-md px-4 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="cardHolder"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Card Holder Name
                                </label>
                                <input
                                    type="text"
                                    id="cardHolder"
                                    name="cardHolder"
                                    value={paymentDetails.cardHolder}
                                    onChange={handleInputChange}
                                    placeholder="John Doe"
                                    className="mt-1 block w-full border rounded-md px-4 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label
                                        htmlFor="expiryDate"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Expiry Date
                                    </label>
                                    <input
                                        type="text"
                                        id="expiryDate"
                                        name="expiryDate"
                                        value={paymentDetails.expiryDate}
                                        onChange={handleInputChange}
                                        placeholder="MM/YY"
                                        className="mt-1 block w-full border rounded-md px-4 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="cvv"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        CVV
                                    </label>
                                    <input
                                        type="text"
                                        id="cvv"
                                        name="cvv"
                                        value={paymentDetails.cvv}
                                        onChange={handleInputChange}
                                        placeholder="123"
                                        className="mt-1 block w-full border rounded-md px-4 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>
                            </div>
                        </>
                    )}

                    {paymentDetails.paymentCategory === 'upiId' && (
                        <>
                            <div className="mt-4">
                                <h3 className="text-lg font-medium text-gray-700">Choose a UPI method:</h3>
                                <div className="flex space-x-4 mt-2">
                                    <button 
                                        className="flex items-center space-x-2 p-2 border border-gray-300 rounded-md hover:bg-gray-100">
                                        
                                        <img src={gpay} alt="Google Pay" className="h-6 w-6" />
                                    </button>
                                    <button className="flex items-center space-x-2 p-2 border border-gray-300 rounded-md hover:bg-gray-100">
                                        <img src={phonepe} alt="PhonePe" className="h-6 w-6" />
                                    </button>
                                    <button className="flex items-center space-x-2 p-2 border border-gray-300 rounded-md hover:bg-gray-100">
                                        <img src={paytm} alt="Paytm" className="h-6 w-6" />
                                    </button>
                                </div>
                            </div>
                        </>
                    )}

                    {paymentDetails.paymentCategory === 'cashOnDelivery' && (
                        <p className="mt-2 text-sm text-gray-600">
                            Scan & Pay at delivery with Shutterly Pay UPI and get cashback up to ₹10.{' '}
                            <a href="#" className="text-blue-600 underline">
                                Know more.
                            </a>
                        </p>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-amber-500 text-white py-2 rounded hover:bg-amber-600 transition"
                    >
                        Confirm Payment
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Payment;
