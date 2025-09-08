import React, { useState } from "react";
import "./WholeGrains.css";
import { useTranslation } from "react-i18next";
import { Heart, HeartOff } from "lucide-react";
import { useAppContext } from "../context/AppContext";

// Import all oil & ghee images
import aadhaarImg from "../assets/greencart_assets/aadhar_1kg.jpeg";
import aadhaar5kgImg from "../assets/greencart_assets/aadhar_5kg.jpeg";
import aadhaar15kgImg from "../assets/greencart_assets/aadhar_15kg.jpeg";
import freedomImg from "../assets/greencart_assets/freedom_1.jpeg";
import freedom5kgImg from "../assets/greencart_assets/freedom_5kg.jpeg";
import freedom15kgImg from "../assets/greencart_assets/freedom_15kg.jpeg";
import groundnutImg from "../assets/greencart_assets/groundnutoil.jpeg";
import formAlpha1Img from "../assets/greencart_assets/form_alpha_1.jpeg";
import formAlpha16Img from "../assets/greencart_assets/form_alpha_16.jpeg";
import formFirst1Img from "../assets/greencart_assets/form_firstklass_1l.jpeg";
import formFirst15Img from "../assets/greencart_assets/form_firstclass_15kg.jpeg";
import formPriya1Img from "../assets/greencart_assets/form_priyagold_1l.jpeg";
import formPriya15Img from "../assets/greencart_assets/form_priyagold_15kg.jpeg";
import formRuchi1Img from "../assets/greencart_assets/form_ruchigold_1l.jpeg";
import formRuchi15Img from "../assets/greencart_assets/form_ruchigold_15kg.jpeg";
import amul200Img from "../assets/greencart_assets/amul_200g.jpeg";
import amul200v2Img from "../assets/greencart_assets/amul_200g2.jpeg";
import amul500Img from "../assets/greencart_assets/amul_500g.jpeg";
import amul1kgImg from "../assets/greencart_assets/amul_1kg.jpeg";
import hatsunImg from "../assets/greencart_assets/hotson_all.jpeg";
import naniImg from "../assets/greencart_assets/nani_5r.jpeg";
import grbImg from "../assets/greencart_assets/grb_200g.jpeg";

const oilGheeProducts = [
  { id: 5001, key: "aadhaar", name: "Aadhaar Sunflower Oil", size: "1L pouch", image: aadhaarImg, rating: 4.5, inStock: true },
  { id: 5002, key: "aadhaar", name: "Aadhaar Sunflower Oil", size: "0.5L pouch", image: aadhaarImg, rating: 4.5, inStock: true },
  { id: 5003, key: "aadhaar", name: "Aadhaar Sunflower Oil", size: "5L tin", image: aadhaar5kgImg, rating: 4.6, inStock: true },
  { id: 5004, key: "aadhaar", name: "Aadhaar Sunflower Oil", size: "15L tin", image: aadhaar15kgImg, rating: 4.6, inStock: true },
  { id: 5005, key: "freedom", name: "Freedom Oil", size: "1L packet", image: freedomImg, rating: 4.5, inStock: true },
  { id: 5006, key: "freedom", name: "Freedom Oil", size: "0.5L packet", image: freedomImg, rating: 4.5, inStock: true },
  { id: 5007, key: "freedom", name: "Freedom Oil", size: "5kg packet", image: freedom5kgImg, rating: 4.6, inStock: true },
  { id: 5008, key: "freedom", name: "Freedom Oil", size: "15kg tin box", image: freedom15kgImg, rating: 4.6, inStock: true },
  { id: 5009, key: "groundnut", name: "Groundnut Oil", size: "1L bottle", image: groundnutImg, rating: 4.4, inStock: true },
  { id: 5010, key: "form_alpha", name: "Form Oil (Alpha)", size: "1L packet", image: formAlpha1Img, rating: 4.5, inStock: true },
  { id: 5011, key: "form_alpha", name: "Form Oil (Alpha)", size: "15kg box", image: formAlpha16Img, rating: 4.6, inStock: true },
  { id: 5012, key: "form_priyagold", name: "Form Oil (Priya Gold)", size: "1L packet", image: formPriya1Img, rating: 4.4, inStock: true },
  { id: 5013, key: "form_priyagold", name: "Form Oil (Priya Gold)", size: "15kg box", image: formPriya15Img, rating: 4.5, inStock: true },
  { id: 5014, key: "form_ruchigold", name: "Form Oil (Ruchi Gold)", size: "1L packet", image: formRuchi1Img, rating: 4.4, inStock: true },
  { id: 5015, key: "form_ruchigold", name: "Form Oil (Ruchi Gold)", size: "15kg box", image: formRuchi15Img, rating: 4.5, inStock: true },
  { id: 5016, key: "form_firstclass", name: "Form Oil (First Class)", size: "1L packet", image: formFirst1Img, rating: 4.3, inStock: true },
  { id: 5017, key: "form_firstclass", name: "Form Oil (First Class)", size: "15kg box", image: formFirst15Img, rating: 4.4, inStock: true },
  { id: 5018, key: "amul", name: "Amul Ghee", size: "200g bottle", image: amul200Img, rating: 4.7, inStock: true },
  { id: 5019, key: "amul", name: "Amul Ghee", size: "200g bottle (v2)", image: amul200v2Img, rating: 4.7, inStock: true },
  { id: 5020, key: "amul", name: "Amul Ghee", size: "500g bottle", image: amul500Img, rating: 4.8, inStock: true },
  { id: 5021, key: "amul", name: "Amul Ghee", size: "1kg bottle", image: amul1kgImg, rating: 4.8, inStock: true },
  { id: 5022, key: "hatsun", name: "Hatsun Ghee", size: "100g", image: hatsunImg, rating: 4.6, inStock: true },
  { id: 5023, key: "hatsun", name: "Hatsun Ghee", size: "200g", image: hatsunImg, rating: 4.6, inStock: true },
  { id: 5024, key: "hatsun", name: "Hatsun Ghee", size: "0.5kg", image: hatsunImg, rating: 4.6, inStock: true },
  { id: 5025, key: "hatsun", name: "Hatsun Ghee", size: "1kg", image: hatsunImg, rating: 4.6, inStock: true },
  { id: 5026, key: "nani", name: "Nani Ghee", size: "₹5 packet", image: naniImg, rating: 4.5, inStock: true },
  { id: 5027, key: "nani", name: "Nani Ghee", size: "₹10 packet", image: naniImg, rating: 4.5, inStock: true },
  { id: 5028, key: "nani", name: "Nani Ghee", size: "50g packet", image: naniImg, rating: 4.5, inStock: true },
  { id: 5029, key: "nani", name: "Nani Ghee", size: "100g packet", image: naniImg, rating: 4.5, inStock: true },
  { id: 5030, key: "nani", name: "Nani Ghee", size: "200g packet", image: naniImg, rating: 4.5, inStock: true },
  { id: 5031, key: "nani", name: "Nani Ghee", size: "0.5kg packet", image: naniImg, rating: 4.5, inStock: true },
  { id: 5032, key: "nani", name: "Nani Ghee", size: "1kg packet", image: naniImg, rating: 4.5, inStock: true },
  { id: 5033, key: "grb", name: "GRB Ghee", size: "200g bottle", image: grbImg, rating: 4.6, inStock: true },
  { id: 5034, key: "grb", name: "GRB Ghee", size: "0.5kg bottle", image: grbImg, rating: 4.6, inStock: true },
  { id: 5035, key: "grb", name: "GRB Ghee", size: "1kg bottle", image: grbImg, rating: 4.6, inStock: true }
];

const OilGheeProducts = () => {
  const { t } = useTranslation();
  const { wishlist, toggleWishlist, cart, addToCart } = useAppContext();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const closeModal = () => setSelectedProduct(null);

  return (
    <div className="wholegrain-section">
      <h2 className="wholegrain-title">🛢️ {t("oilGhee.title")}</h2>
      <div className="products-disclaimer">{t("products.priceDisclaimer")}</div>
      <div className="wholegrain-grid">
        {oilGheeProducts.map((product) => {
          const isWishlisted = wishlist.some((item) => item.id === product.id);
          const isInCart = cart.some((item) => item.id === product.id);

          return (
            <div key={product.id} className="wholegrain-card">
              <div className="wishlist-icon" onClick={() => toggleWishlist(product)}>
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
                <p className="grain-name">{t(`oilGhee.products.${product.key}`)}</p>
                <p className="grain-description">{t(`oilGhee.descriptions.${product.key}`)}</p>
                <p className="grain-size">📦 {product.size}</p>
                <p className="grain-rating">⭐ {product.rating} / 5</p>
                <p className={`grain-stock ${product.inStock ? "in-stock" : "out-stock"}`}>
                  {product.inStock ? "📦 " + t("dalPulses.inStock") : "❌ " + t("dalPulses.outOfStock")}
                </p>
                <button
                  className="cart-button"
                  onClick={() => addToCart(product)}
                  disabled={!product.inStock || isInCart}
                >
                  🛒 {isInCart ? t("dalPulses.added") : t("dalPulses.addToCart")}
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
            <h3>{t(`oilGhee.products.${selectedProduct.key}`)}</h3>
            <p className="grain-description">
              {t(`oilGhee.descriptions.${selectedProduct.key}`, { lng: "en" })}<br />
              <span style={{ fontWeight: 500 }}>{t(`oilGhee.descriptions.${selectedProduct.key}`, { lng: "te" })}</span>
            </p>
            <p>📦 {selectedProduct.size}</p>
            <p>⭐ {selectedProduct.rating} / 5</p>
            <p>{selectedProduct.inStock ? t("dalPulses.inStock") : t("dalPulses.outOfStock")}</p>
            <button
              className="cart-button"
              onClick={() => {
                addToCart(selectedProduct);
                closeModal();
              }}
              disabled={!selectedProduct.inStock || cart.some(item => item.id === selectedProduct.id)}
            >
              🛒 {cart.some(item => item.id === selectedProduct.id) ? t("dalPulses.added") : t("dalPulses.addToCart")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OilGheeProducts;
