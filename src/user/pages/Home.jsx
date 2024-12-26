import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCart } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

// Sample categories
const categories = [
  "Samsung", "Apple", "Pixel", "Xiaomi", "Motorola", "Redmi", "Realme", 
  "Nothing", "OnePlus", "Poco", "Vivo", "Oppo", "Sony"
];

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("Smartphone brands"); // Default category
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  // Fetch product data from db.json or API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        console.log("Fetched products:", response.data); // Log to check the data structure
        setProducts(response.data || []); // Ensure the response has a `products` array
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on the selected category (case-insensitive)
  const filteredProducts = products.filter(
    (product) =>
      product.category && product.category.toLowerCase() === selectedCategory.toLowerCase()
  );

  // console.log("Selected Category:", selectedCategory);
  // console.log("Filtered Products:", filteredProducts); // Check the filtered products

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-4">
      {/* Category Menu */}
      <div className="flex space-x-6 overflow-x-auto pb-4 mb-6 border-b">
        {categories.map((category) => (
          <button
            key={category}
            className={`py-2 px-4 text-lg font-semibold ${
              selectedCategory === category
                ? "text-white bg-amber-500"
                : "text-gray-600 hover:bg-gray-200"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Display */}
      <h2 className="text-3xl font-semibold mb-8">
          Flagship {selectedCategory}
      </h2>

      {/* Show message if no products are found */}
      {!filteredProducts.length === 0 ? (
        <p>No products found in this category</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden group"
            >
              <div className="h-48 w-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-lg font-medium text-gray-600">{product.price}</p>
                <div className="flex justify-center mt-4">
                  <div className="flex flex-col p-2 space-y-4">
                    <Link to={`/product/${product.id}`}>
                      <button
                        className="px-6 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition"
                      >
                        View Details
                      </button>
                    </Link>
                    <button
                      className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-500 transition"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
