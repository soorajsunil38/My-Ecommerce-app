import React, { useEffect } from "react";
import { useCart } from "../../contexts/CartContext";
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } = useCart();
    const navigate = useNavigate();

    // Debugging: Log cart items to verify their structure
    useEffect(() => {
        console.log("Cart items:", cartItems);
    }, [cartItems]);

    // const totalSum = () => {
    //     return cartItems.reduce((total,item)=>{
    //        return item.price * item.quantiy
    //     })
    // }

    const calculateTotal = () => {
        const total = cartItems
            .reduce((acc, item) => {
                const price = parseFloat(item.price); // Ensure price is a number
                const quantity = item.quantity;

                // Ensure both price and quantity are valid numbers
                if (!isNaN(price) && !isNaN(quantity)) {
                    return acc + price * quantity;
                }
                return acc; // If invalid price or quantity, don't include in total
            }, 0)
            .toFixed(2);

        return total;
    };

    const calculateItemSubtotal = (price, quantity) => {
        return (parseFloat(price) * quantity).toFixed(2);
    };

    const handleProceedToPayment = () => {
        // Navigate to the Payment page
        navigate('/payment');
    };


    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => {
                            const itemSubtotal = calculateItemSubtotal(item.price, item.quantity);

                            return (
                                <div
                                    key={item.id}
                                    className="flex items-center justify-between border-b py-4"
                                >
                                    <div className="flex items-center">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-20 h-20 object-cover rounded-lg mr-4"
                                        />
                                        <div>
                                            <h2 className="text-lg font-semibold">{item.name}</h2>
                                            <p className="text-sm text-gray-500">{item.price}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <button
                                            onClick={() => decrementQuantity(item.id)}
                                            className="px-3 py-1 bg-gray-200 text-gray-600 rounded hover:bg-gray-300"
                                        >
                                            -
                                        </button>
                                        <span className="text-lg font-semibold">{item.quantity}</span>
                                        <button
                                            onClick={() => incrementQuantity(item.id)}
                                            className="px-3 py-1 bg-gray-200 text-gray-600 rounded hover:bg-gray-300"
                                        >
                                            +
                                        </button>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <p className="text-center text-gray-500">Your cart is empty.</p>
                    )}
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                    <div className="flex justify-between mb-4">
                        <span>Subtotal</span>
                        <span>₹{calculateTotal()}</span>
                    </div>
                    <button
                        className="w-full bg-amber-500 text-white py-2 rounded hover:bg-amber-600 transition"
                        disabled={cartItems.length === 0}
                        onClick={handleProceedToPayment}
                    >
                        Proceed to Payment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
