import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch product data based on the ID
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/products/${id}`); // Assuming your API is set up like this
        setProduct(response.data); // Set product data
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        setError("Error fetching product data.");
        setLoading(false); // Set loading to false even on error
      }
    };

    fetchProduct();
  }, [id]); // Re-fetch product when ID changes (if navigating to different product)

  // Show loading, error or the actual product detail
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      <div className="flex flex-col lg:flex-row">
        {/* Product Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="object-contain mx-auto max-w-full h-auto"
          />
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
            {product.name}
          </h2>
          <p className="text-xl font-semibold text-gray-700 mt-4">{product.price}</p>
          <p className="text-base text-gray-600 mt-4">{product.description}</p> {/* Optional description */}
          <button className="flex mt-6 px-6 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition">
            Add to Cart
          </button>
          <button className="mt-4 px-8 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-500 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
