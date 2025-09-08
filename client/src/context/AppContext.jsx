import React, { createContext, useContext, useState, useEffect } from "react";

// 1. Create Context
const AppContext = createContext();

// 2. Export custom hook
export const useAppContext = () => useContext(AppContext);

// 3. Provider Component
export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);

  // 🛒 Cart
  const [cart, setCart] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("cart"));
      return Array.isArray(saved)
        ? saved.map((item) => ({
            ...item,
            quantity: Number(item.quantity) || 1,
            price: Number(item.price) || 0,
          }))
        : [];
    } catch {
      return [];
    }
  });

  // 💖 Wishlist
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("wishlist"));
      return Array.isArray(saved) ? saved : [];
    } catch {
      return [];
    }
  });

  // 📦 Persist cart and wishlist
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // ➕ Add to Cart
  const addToCart = (product) => {
    if (!product.price) return;
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // ❌ Remove from Cart
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // 🧹 Clear entire Cart
  const clearCart = () => setCart([]);

  // 🔼 Increase quantity
  const increaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      )
    );
  };

  // 🔽 Decrease quantity (but not less than 1)
  const decreaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, (item.quantity || 1) - 1) }
          : item
      )
    );
  };

  // 💖 Toggle Wishlist item
  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      return exists
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, product];
    });
  };

  // ❤️ Move from Wishlist to Cart
  const moveToCart = (productId) => {
    const product = wishlist.find((item) => item.id === productId);
    if (!product) return;

    addToCart(product);
    setWishlist((prev) => prev.filter((item) => item.id !== productId));
  };

  // 🌍 Context value
  const value = {
    user,
    setUser,
    isSeller,
    setIsSeller,
    showUserLogin,
    setShowUserLogin,
    cart,
    setCart,
    addToCart,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
    wishlist,
    setWishlist,
    toggleWishlist,
    moveToCart,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
