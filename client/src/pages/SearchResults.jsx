import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../config"; // adjust path if needed

// Custom hook to parse query params
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchResults = () => {
  const query = useQuery().get("query"); // matches ?query=atta
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    setLoading(true);
    setError(null);

    axios
      .get(`${BASE_URL}/api/search?q=${encodeURIComponent(query)}`)
      .then((res) => {
        setResults(res.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Search error:", err);
        setError("Failed to fetch search results");
        setLoading(false);
      });
  }, [query]);

  if (!query) {
    return (
      <p className="text-center mt-6 text-gray-500">
        Please enter a search term
      </p>
    );
  }

  if (loading) {
    return <p className="text-center mt-6">Searching...</p>;
  }

  if (error) {
    return <p className="text-center mt-6 text-red-500">{error}</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">
        Search Results for "{query}"
      </h2>

      {results.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {results.map((product) => {
            const productId = product._id || product.id;

            return (
              <Link
                to={`/product/${productId}`}
                key={productId}
                className="border rounded-lg p-4 shadow hover:shadow-lg transition block"
              >
                <img
                  src={product.image || "/placeholder.jpg"}
                  alt={product.name || "Product"}
                  className="w-full h-32 object-cover mb-2 rounded"
                />
                <h3 className="font-semibold">
                  {product.name || "Unnamed Product"}
                </h3>
                <p className="text-gray-600 text-sm">
                  {product.category || "Uncategorized"}
                </p>
              </Link>
            );
          })}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-4">No products found</p>
      )}
    </div>
  );
};

export default SearchResults;
