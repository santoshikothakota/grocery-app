// WholeGrainsProducts.jsx
import React, { useState } from "react";
import "./WholeGrains.css";
import { useTranslation } from "react-i18next";
import { Heart, HeartOff } from "lucide-react";
import { useAppContext } from "../context/AppContext";

// Import images
import korraluImg from "../assets/greencart_assets/korralu.jpeg";
import udaluImg from "../assets/greencart_assets/udalu.jpeg";
import samaluImg from "../assets/greencart_assets/samalu.jpeg";
import arkeluImg from "../assets/greencart_assets/arkelu.webp";
import gantiluImg from "../assets/greencart_assets/gantilu.webp";
import jonaluImg from "../assets/greencart_assets/jonalu.webp";
import andukorraluImg from "../assets/greencart_assets/andukorralu.webp";
import sajaluImg from "../assets/greencart_assets/sajjalu.webp";
import barleyImg from "../assets/greencart_assets/barley.jpeg";
import oatsImg from "../assets/greencart_assets/oatslion.jpeg";

const wholeGrains = [
  { id: 3001, key: "korralu", name: "Foxtail Millet", size: "0.5kg", image: korraluImg, rating: 4.6, inStock: true },
  { id: 3002, key: "udalu", name: "Barnyard Millet", size: "0.5kg", image: udaluImg, rating: 4.5, inStock: true },
  { id: 3003, key: "samalu", name: "Little Millet", size: "0.5kg", image: samaluImg, rating: 4.4, inStock: true },
  { id: 3004, key: "arkelu", name: "Kodo Millet", size: "0.5kg", image: arkeluImg, rating: 4.3, inStock: true },
  { id: 3005, key: "gantilu", name: "Proso Millet", size: "0.5kg", image: gantiluImg, rating: 4.2, inStock: true },
  { id: 3006, key: "jonalu", name: "Sorghum", size: "0.5kg", image: jonaluImg, rating: 4.3, inStock: true },
  { id: 3007, key: "andukorralu", name: "Browntop Millet", size: "0.5kg", image: andukorraluImg, rating: 4.4, inStock: true },
  { id: 3008, key: "sajalu", name: "Pearl Millet", size: "0.5kg", image: sajaluImg, rating: 4.2, inStock: true },
  { id: 3009, key: "barley", name: "Barley", size: "loose", image: barleyImg, rating: 4.1, inStock: true, loose: true },
  { id: 3010, key: "oats_05", name: "Oats (Lion Brand)", size: "0.5kg", image: oatsImg, rating: 4.5, inStock: true },
  { id: 3011, key: "oats_1", name: "Oats (Lion Brand)", size: "1kg", image: oatsImg, rating: 4.6, inStock: true }
];


const WholeGrainsProducts = () => {
  const { t } = useTranslation();
  const { wishlist, toggleWishlist, cart, addToCart } = useAppContext();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const closeModal = () => setSelectedProduct(null);

  return (
    <div className="wholegrain-section">
      <h2 className="wholegrain-title">🌾 {t("wholeGrains.title")}</h2>

      <div className="wholegrain-grid">
        {wholeGrains.map((product) => {
          const isWishlisted = wishlist.some((item) => item.id === product.id);
          const isInCart = cart.some((item) => item.id === product.id);

          return (
            <div key={product.id} className="wholegrain-card">
              <div
                className="wishlist-icon"
                onClick={() => toggleWishlist(product)}
                title={isWishlisted ? t("wholeGrains.removeFromWishlist") : t("wholeGrains.addToWishlist")}
              >
                {isWishlisted ? <HeartOff color="red" /> : <Heart />}
              </div>

              <img
                src={product.image}
                alt={product.name}
                className="wholegrain-image"
                onClick={() => setSelectedProduct(product)}
                style={{ cursor: "pointer" }}
              />

              <div className="wholegrain-details">
                <p className="grain-name">{t(`wholeGrains.products.${product.key}`)}</p>

                {/* Bilingual Description */}
               <p className="grain-description">
  {t(`wholeGrains.descriptions.${product.key}`)}
</p>


                <p className="grain-size">📦 {product.size}</p>

                {product.loose && (
                  <div className="grain-qty">
                    <label>{t("wholeGrains.selectQuantity")}:</label>
                    <select defaultValue="0.5kg">
                      {Array.from({ length: 25 }, (_, i) => (i + 1) * 0.5).map((qty) => (
                        <option key={qty} value={`${qty}kg`}>
                          {qty} kg
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <p className="grain-rating">⭐ {product.rating} / 5</p>
                <p className={`grain-stock ${product.inStock ? "in-stock" : "out-stock"}`}>
                  {product.inStock ? "📦 " + t("wholeGrains.inStock") : "❌ " + t("wholeGrains.outOfStock")}
                </p>
                <button
                  className="cart-button"
                  onClick={() => addToCart(product)}
                  disabled={!product.inStock || isInCart}
                >
                  🛒 {isInCart ? t("wholeGrains.added") : t("wholeGrains.addToCart")}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>✖</button>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="modal-image" />
            <h3>{t(`wholeGrains.products.${selectedProduct.key}`)}</h3>

            {/* Modal bilingual description */}
            <p className="grain-description">
              {t(`wholeGrains.descriptions.${selectedProduct.key}`, { lng: "en" })}<br />
              <span style={{ fontWeight: 500 }}>{t(`wholeGrains.descriptions.${selectedProduct.key}`, { lng: "te" })}</span>
            </p>

            <p>📦 {selectedProduct.size}</p>
            <p>⭐ {selectedProduct.rating} / 5</p>
            <p>{selectedProduct.inStock ? t("wholeGrains.inStock") : t("wholeGrains.outOfStock")}</p>
            <button
              className="cart-button"
              onClick={() => {
                addToCart(selectedProduct);
                closeModal();
              }}
              disabled={!selectedProduct.inStock || cart.some(item => item.id === selectedProduct.id)}
            >
              🛒 {cart.some(item => item.id === selectedProduct.id) ? t("wholeGrains.added") : t("wholeGrains.addToCart")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WholeGrainsProducts;
