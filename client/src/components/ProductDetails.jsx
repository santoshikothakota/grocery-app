// -------------------- ProductDetails.jsx --------------------
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    setError(null);

    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Product fetch error:", err);
        setError("Product not found");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="text-center mt-6">Loading product...</p>;
  }

  if (error) {
    return (
      <p className="text-center mt-6 text-red-500">
        {error} – <Link to="/products" className="underline">Go back</Link>
      </p>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img
        src={product.image || "/placeholder.jpg"}
        alt={product.name}
        className="w-full h-64 object-cover rounded-lg shadow mb-4"
      />
      <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
      <p className="text-gray-600 mb-2">{product.category}</p>
      <p className="text-lg font-semibold text-green-700 mb-4">
        ₹{product.price} ({product.quantity})
      </p>
      <p className="text-gray-700 mb-6">{product.description}</p>

      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
