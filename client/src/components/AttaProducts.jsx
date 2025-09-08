import React, { useState } from "react";
import "./AttaProducts.css";
import { useTranslation } from "react-i18next";
import { Heart, HeartOff } from "lucide-react";
import { useAppContext } from "../context/AppContext";

// Image imports
import aashirvaadImg from "../assets/greencart_assets/aashirvaad.jpg";
import multigrainImg from "../assets/greencart_assets/Aashirvaad Atta With Multigrains, 5 kg.jpg";
import multigrain1kg from "../assets/greencart_assets/Aashirvaad Atta with Multigrains,1kg.jpg";
import multigrain11kg from "../assets/greencart_assets/Aashirvaad Atta with Multigrains,11kg.jpg";
import lalitaImg from "../assets/greencart_assets/Lalita_Atta1_5.jpg";
import annapurnaImg from "../assets/greencart_assets/AnnapurnaAtta_Farm Fresh_Chakki.jpg";
import fortuneImg from "../assets/greencart_assets/fortune_atta.webp";

// Product data
const attaProducts = [
  { id: 1001, key: "aashirvaad1kg", price: 65, originalPrice: 72, image: aashirvaadImg, inStock: true, rating: 4.5 },
  { id: 1002, key: "aashirvaad5kg", price: 305, originalPrice: 340, image: aashirvaadImg, inStock: true, rating: 4.7 },
  { id: 1003, key: "multi1kg", price: 75, originalPrice: 82, image: multigrain1kg, inStock: true, rating: 4.6 },
  { id: 1004, key: "multi5kg", price: 370, originalPrice: 410, image: multigrainImg, inStock: true, rating: 4.8 },
  { id: 1005, key: "multi11kg", price: 790, originalPrice: 850, image: multigrain11kg, inStock: false, rating: 4.4 },
  { id: 1006, key: "lalita1kg", price: 55, originalPrice: 60, image: lalitaImg, inStock: true, rating: 4.2 },
  { id: 1007, key: "lalita5kg", price: 250, originalPrice: 280, image: lalitaImg, inStock: true, rating: 4.3 },
  { id: 1008, key: "annapurna1kg", price: 60, originalPrice: 68, image: annapurnaImg, inStock: true, rating: 4.6 },
  { id: 1009, key: "annapurna5kg", price: 275, originalPrice: 305, image: annapurnaImg, inStock: true, rating: 4.7 },
  { id: 1010, key: "fortune0_5kg", price: 30, originalPrice: 35, image: fortuneImg, inStock: true, rating: 4.1 },
  { id: 1011, key: "fortune1kg", price: 60, originalPrice: 68, image: fortuneImg, inStock: true, rating: 4.4 },
  { id: 1012, key: "fortune5kg", price: 295, originalPrice: 325, image: fortuneImg, inStock: true, rating: 4.5 },
];


const AttaProducts = () => {
  const { t } = useTranslation();
  const { wishlist, toggleWishlist, cart, addToCart } = useAppContext();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const closeModal = () => setSelectedProduct(null);

  return (
    <div className="atta-section">
      <h2 className="atta-title">🌾 {t("atta.title")}</h2>

      <div className="atta-grid">
        {attaProducts.map((product) => {
          const isWishlisted = wishlist.some((item) => item.id === product.id);
          const isInCart = cart.some((item) => item.id === product.id);

          return (
            <div key={product.id} className="atta-card">
              <div
                className="wishlist-icon"
                onClick={() => toggleWishlist(product)}
                title={isWishlisted ? t("atta.removeFromWishlist") : t("atta.addToWishlist")}
              >
                {isWishlisted ? <HeartOff color="red" /> : <Heart />}
              </div>

              <img
                src={product.image}
                alt={t(`atta.names.${product.key}`)}
                className="atta-image"
                onClick={() => setSelectedProduct(product)}
                style={{ cursor: "pointer" }}
              />

              <div className="atta-details">
                <p className="atta-name">{t(`atta.names.${product.key}`)}</p>
                <p className="atta-price">
                  <span className="original-price">₹{product.originalPrice}</span>
                  <span className="discounted-price">₹{product.price}</span>
                </p>
                <p className={`atta-stock ${product.inStock ? "in-stock" : "out-stock"}`}>
                  {product.inStock ? "📦 " + t("atta.inStock") : "❌ " + t("atta.outOfStock")}
                </p>
                <p className="atta-rating">⭐ {product.rating} / 5</p>
                <p className="atta-description">{t(`atta.descriptions.${product.key}`)}</p>

                <button
                  className="cart-button"
                  onClick={() => addToCart(product)}
                  disabled={!product.inStock || isInCart}
                  title={isInCart ? t("atta.alreadyInCart") : t("atta.addToCart")}
                >
                  🛒 {isInCart ? t("atta.added") : t("atta.addToCart")}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Fullscreen Modal */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>✖</button>
            <img src={selectedProduct.image} alt={t(`atta.names.${selectedProduct.key}`)} className="modal-image" />
            <h3>{t(`atta.names.${selectedProduct.key}`)}</h3>
            <p className="modal-price">
              <span className="original-price">₹{selectedProduct.originalPrice}</span>
              <span className="discounted-price">₹{selectedProduct.price}</span>
            </p>
            <p>{t(`atta.descriptions.${selectedProduct.key}`)}</p>
            <p>⭐ {selectedProduct.rating} / 5</p>
            <p>{selectedProduct.inStock ? t("atta.inStock") : t("atta.outOfStock")}</p>
            <button
              className="cart-button"
              onClick={() => {
                addToCart(selectedProduct);
                closeModal();
              }}
              disabled={!selectedProduct.inStock || cart.some(item => item.id === selectedProduct.id)}
            >
              🛒 {cart.some(item => item.id === selectedProduct.id) ? t("atta.added") : t("atta.addToCart")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AttaProducts;
