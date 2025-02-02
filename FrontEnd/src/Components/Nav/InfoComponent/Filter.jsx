import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Filter = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();
 
  useEffect(() => {
    const getFilteredProducts = async () => {
      try {
        const response1 = await axios.get("http://localhost:8000/products1");
        const products1 = response1.data.result.map((product) => ({
          ...product,
          source: "Amazon",
        }));

        const response2 = await axios.get("http://localhost:8000/products2");
        const products2 = response2.data.result.map((product) => ({
          ...product,
          source: "Target",
        }));

        // Combine the products from both sources
        const allProducts = [...products1, ...products2];

        // Sort the products by price in ascending order
        allProducts.sort((a, b) => a.price - b.price);

        // Get the first 40 products after sorting
        const filteredProductsArray = allProducts.slice(0, 40);

        setFilteredProducts(filteredProductsArray);
      } catch (error) {
        console.error("Error fetching and filtering products", error);
      }
    };

    getFilteredProducts();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <div className="flex flex-wrap justify-center">
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className="border border-green-500 rounded p-2 flex flex-col transition duration-300 hover:shadow-md hover:bg-green-100 cursor-pointer w-1/3 mb-4"
            onClick={() => navigate(`/get-product/${product._id}`)}
          >
            <div className="w-full h-140 mb-2">
              {product.image && (
                <img
                  src={product.image}
                  alt="Product Image"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <p className="font-bold mb-2 text-sm">{product.title}</p>
            <p className="text-gray-600 mb-2 text-sm">Price: ${product.price}</p>
            <button
              className="bg-blue-500 text-white px-2 py-1 rounded mt-auto text-sm"
              onClick={() => navigate(`/get-product/${product._id}`)}
            >
              View Detail
            </button>
            <p className="text-gray-600 mt-2 text-sm">From: {product.source}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;