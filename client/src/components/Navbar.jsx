import React, { useState } from "react";
import { FiShoppingCart, FiSearch } from "react-icons/fi";
import { FaHeart, FaUser } from "react-icons/fa";
import { assets } from "../assets/greencart_assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const { user, setUser, setShowUserLogin, cart, wishlist } = useAppContext();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  const handleSearch = () => {
    if (!searchTerm.trim()) return;
    navigate(`/search?query=${searchTerm}`);
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "17px 35px",
        alignItems: "center",
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(255, 255, 255, 0.85)",
        borderBottom: "1px solid #e0e0e0",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.05)",
      }}
    >
      {/* LEFT SECTION */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <img
          src={assets.venkateswara}
          alt="Logo"
          style={{ height: "36px", borderRadius: "50%" }}
        />
        <span
          style={{ fontWeight: "bold", fontSize: "30px", color: "#6B46C1" }}
        >
          SriVenkataSaiKirana
        </span>

        <NavLink to="/" style={({ isActive }) => getNavStyle(isActive)}>
          {t("navbar.home")}
        </NavLink>
        <NavLink to="/products" style={({ isActive }) => getNavStyle(isActive)}>
          {t("navbar.products")}
        </NavLink>
        <NavLink to="/contact" style={({ isActive }) => getNavStyle(isActive)}>
          {t("navbar.contact")}
        </NavLink>
      </div>

      {/* RIGHT SECTION */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        {/* Search Bar */}
        <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={t("navbar.searchPlaceholder")}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            style={{
              padding: "7px 12px",
              borderRadius: "20px",
              border: "1px solid #ccc",
              outline: "none",
              width: "200px",
              fontSize: "16px",
              transition: "0.3s ease",
            }}
          />
          <button
            onClick={handleSearch}
            style={{
              position: "absolute",
              right: "-35px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "#6B46C1",
            }}
            title="Search"
          >
            <FiSearch size={20} />
          </button>
        </div>

        {/* Language Switcher */}
        <div style={{ marginLeft: "10px" }}>
          <LanguageSwitcher />
        </div>

        {/* Wishlist Icon with Badge */}
        <NavLink
          to="/wishlist"
          title="Wishlist"
          style={{ position: "relative", color: "#E53E3E" }}
        >
          <FaHeart size={20} />
          {(wishlist?.length || 0) > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-6px",
                right: "-8px",
                backgroundColor: "#E53E3E",
                color: "#fff",
                borderRadius: "50%",
                padding: "2px 6px",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              {wishlist.length}
            </span>
          )}
        </NavLink>

        {/* Cart Icon with Badge */}
        <NavLink
          to="/cart"
          title="Cart"
          style={{ position: "relative", color: "#333" }}
        >
          <FiShoppingCart size={22} />
          {(cart?.length || 0) > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-6px",
                right: "-8px",
                backgroundColor: "#6B46C1",
                color: "#fff",
                borderRadius: "50%",
                padding: "2px 6px",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              {cart.length}
            </span>
          )}
        </NavLink>

        {/* User Login/Logout */}
        {user ? (
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
            }}
          >
            <img
              src={assets.profileicon}
              alt="Profile"
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                border: "2px solid #6B46C1",
              }}
              title={t("navbar.profile")}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <NavLink
                to="/orders"
                style={{
                  color: "#6B46C1",
                  fontWeight: "500",
                  fontSize: "14px",
                  textDecoration: "none",
                }}
              >
                {t("navbar.my_orders")}
              </NavLink>
              <span
                onClick={handleLogout}
                style={{
                  color: "#E53E3E",
                  fontSize: "14px",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
              >
                {t("navbar.logout")}
              </span>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setShowUserLogin(true)}
            style={{
              backgroundColor: "#6B46C1",
              color: "white",
              border: "none",
              padding: "7px 16px",
              borderRadius: "20px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontWeight: "500",
              fontSize: "18px",
            }}
            title="Login"
          >
            <FaUser />
            {t("navbar.login")}
          </button>
        )}
      </div>
    </nav>
  );
};

// NavLink active style
const getNavStyle = (isActive) => ({
  textDecoration: "none",
  color: isActive ? "#6B46C1" : "#444",
  padding: "6px 12px",
  borderRadius: "6px",
  fontWeight: "500",
  fontSize: "18px",
  backgroundColor: isActive ? "#f0e8ff" : "transparent",
  transition: "background-color 0.2s, color 0.2s",
});

export default Navbar;
