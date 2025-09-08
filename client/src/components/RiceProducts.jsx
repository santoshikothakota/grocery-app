// RiceProducts.js (Full Updated Version)
import React, { useState } from "react";
import "./RiceProducts.css";
import { useTranslation } from "react-i18next";
import { Heart, HeartOff } from "lucide-react";
import { useAppContext } from "../context/AppContext";

// Rice products list (without price)
const riceProducts = [
  { id: 2001, key: "santhamani_cc", brand: "Santhamani", type: "CC", weight: "25kg" },
  { id: 2002, key: "santhamani_hmt", brand: "Santhamani", type: "HMT", weight: "25kg" },
  { id: 2003, key: "bell_hmt", brand: "Bell", type: "HMT", weight: "25kg" },
  { id: 2004, key: "lalita_hmt", brand: "Lalita", type: "HMT", weight: "25kg" },
  { id: 2005, key: "brundhavanam_cc", brand: "Brundhavanam", type: "CC", weight: "25kg" },
  { id: 2006, key: "brundhavanam_hmt", brand: "Brundhavanam", type: "HMT", weight: "25kg" },
  { id: 2007, key: "dkr_cc", brand: "DKR", type: "CC", weight: "25kg" },
  { id: 2008, key: "dkr_cd", brand: "DKR", type: "CD", weight: "25kg" },
  { id: 2009, key: "dkr_hmt", brand: "DKR", type: "HMT", weight: "25kg" },
  { id: 2010, key: "hmt_27", brand: "27", type: "HMT", weight: "26kg" },
  { id: 2011, key: "999_cc", brand: "999", type: "CC", weight: "25kg" },
  { id: 2012, key: "999_hmt", brand: "999", type: "HMT", weight: "25kg" },
  { id: 2013, key: "scn_cc", brand: "SCN", type: "CC", weight: "25kg" },
  { id: 2014, key: "scn_hmt", brand: "SCN", type: "HMT", weight: "25kg" },
  { id: 2015, key: "akshaya_cc_5kg", brand: "Akshaya", type: "CC", weight: "5kg" },
  { id: 2016, key: "akshaya_cc_10kg", brand: "Akshaya", type: "CC", weight: "10kg" },
  { id: 2017, key: "akshaya_hmt_5kg", brand: "Akshaya", type: "HMT", weight: "5kg" },
  { id: 2018, key: "akshaya_hmt_10kg", brand: "Akshaya", type: "HMT", weight: "10kg" },
  { id: 2019, key: "akshaya_hmt_25kg", brand: "Akshaya", type: "HMT", weight: "25kg" },
];

const RiceProducts = () => {
  const { t } = useTranslation();
  const { wishlist, toggleWishlist, cart, addToCart } = useAppContext();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

  const closeModal = () => setSelectedProduct(null);

  const filteredProducts = riceProducts.filter((product) => {
    const brandMatch = selectedBrand === "All" || product.brand === selectedBrand;
    const typeMatch = selectedType === "All" || product.type === selectedType;
    return brandMatch && typeMatch;
  });

  const uniqueBrands = ["All", ...new Set(riceProducts.map((p) => p.brand))];
  const uniqueTypes = ["All", ...new Set(riceProducts.map((p) => p.type))];

  return (
    <div className="atta-section">
      <h2 className="atta-title">🍚 {t("rice.title")}</h2>


<div className="highlighted-note">
  {t("rice.note")}
</div>


      {/* Filters */}
      <div className="filters">
        <select onChange={(e) => setSelectedBrand(e.target.value)} value={selectedBrand}>
          {uniqueBrands.map((brand) => (
            <option key={brand}>{brand}</option>
          ))}
        </select>
        <select onChange={(e) => setSelectedType(e.target.value)} value={selectedType}>
          {uniqueTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </div>

      <div className="atta-grid">
        {filteredProducts.map((product) => {
          const isWishlisted = wishlist.some((item) => item.id === product.id);
          const isInCart = cart.some((item) => item.id === product.id);

          return (
            <div key={product.id} className="atta-card">
              <div
                className="wishlist-icon"
                onClick={() => toggleWishlist(product)}
              >
                {isWishlisted ? <HeartOff color="red" /> : <Heart />}
              </div>

              <div className="atta-details">
                <p className="atta-name">{t(`rice.names.${product.key}`)}</p>
                <p className="atta-stock">📦 {t("rice.looseAvailable")}</p>
                <p className="atta-description">{t(`rice.descriptions.${product.key}`)}</p>
                <button
                  className="cart-button"
                  onClick={() => addToCart(product)}
                  disabled={isInCart}
                >
                  🛒 {isInCart ? t("rice.added") : t("rice.addToCart")}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>✖</button>
            <h3>{t(`rice.names.${selectedProduct.key}`)}</h3>
            <p>{t(`rice.descriptions.${selectedProduct.key}`)}</p>
            <p>📦 {t("rice.looseAvailable")}</p>
            <button
              className="cart-button"
              onClick={() => {
                addToCart(selectedProduct);
                closeModal();
              }}
              disabled={cart.some(item => item.id === selectedProduct.id)}
            >
              🛒 {cart.some(item => item.id === selectedProduct.id) ? t("rice.added") : t("rice.addToCart")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RiceProducts;
