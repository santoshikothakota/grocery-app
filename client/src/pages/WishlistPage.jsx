import React from "react";
import { useAppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import "./Wishlist.css"; // Ensure you style this file

const WishlistPage = () => {
  const { wishlist, toggleWishlist, addToCart } = useAppContext();

  const handleMoveToCart = (item) => {
    addToCart(item);
    toggleWishlist(item); // remove from wishlist
    toast.success("🛒 Moved to cart!");
  };

  return (
    <div className="wishlist-container">
      <h2>💖 Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className="empty-message">No items in wishlist.</p>
      ) : (
        <div className="wishlist-grid">
          {wishlist.map((item) => (
            <div className="wishlist-card" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                className="wishlist-image"
              />
              <div className="wishlist-details">
                <h3>{item.name}</h3>
                <p className="wishlist-price">₹{item.price}</p>
                <div className="wishlist-buttons">
                  <button
                    className="remove-btn"
                    onClick={() => toggleWishlist(item)}
                  >
                    ❌ Remove
                  </button>
                  <button
                    className="move-btn"
                    onClick={() => handleMoveToCart(item)}
                  >
                    🛒 Move to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
