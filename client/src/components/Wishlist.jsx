// src/pages/Wishlist.jsx
import React from "react";
import { useAppContext } from "../context/AppContext";

const Wishlist = () => {
  const { wishlist } = useAppContext();

  return (
    <div style={{ padding: "30px" }}>
      <h2>❤️ Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul>
          {wishlist.map((item, index) => (
            <li key={index}>
              {item.name} - ₹{item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
