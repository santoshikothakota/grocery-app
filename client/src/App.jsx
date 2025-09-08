import React from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductsPage from "./pages/Products";
import CategoryProducts from "./pages/CategoryProducts";
import Register from "./components/Register";
import Login from "./components/Login";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";
import Contact from "./components/Contact";   // ✅ Added Contact
import SearchResults from "./pages/SearchResults"; // ✅ Added SearchResults
import ProductDetails from "./components/ProductDetails";
import { useAppContext } from "./context/AppContext";

// Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Slick Carousel Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const { showUserLogin } = useAppContext();
  const isSellerPath = useLocation().pathname.includes("seller");

  return (
    <div className="w-full">
      {/* Show navbar if not on seller route */}
      {!isSellerPath && <Navbar />}

      {/* Show login modal if triggered */}
      {showUserLogin && <Login />}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />

        {/* Normalized category route */}
        <Route path="/products/:category" element={<CategoryProducts />} />

        {/* Category alias redirects */}
        <Route
          path="/products/oil-and-ghee"
          element={<Navigate to="/products/oil-ghee" replace />}
        />
        <Route
          path="/products/dals-and-pulses"
          element={<Navigate to="/products/dal-pulses" replace />}
        />

        {/* Other routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />

        {/* ✅ Contact Page Route */}
        <Route path="/contact" element={<Contact />} />

        {/* ✅ Search Results Route */}
        <Route path="/search" element={<SearchResults />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>

      {/* Toast Notifications */}
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
}

export default App;
