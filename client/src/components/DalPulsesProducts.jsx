import React, { useState } from "react";
import "./WholeGrains.css";
import { useTranslation } from "react-i18next";
import { Heart, HeartOff } from "lucide-react";
import { useAppContext } from "../context/AppContext";

// Import images
import agrorichImg from "../assets/greencart_assets/agrorich.jpeg";
import kandipapuImg from "../assets/greencart_assets/kandipapu.jpeg";
import yeraKandipapuImg from "../assets/greencart_assets/yera kandipapu.jpeg";
import minapapuDoublehorseImg from "../assets/greencart_assets/minapapu_doublehorse.jpeg";
import minapapuGopuramImg from "../assets/greencart_assets/minapapu_gopuram.jpeg";
import pasaraDoublehorseImg from "../assets/greencart_assets/pasarapapu_doublehorse.jpeg";
import pasaraImg from "../assets/greencart_assets/pasarapapu.jpeg";
import channapapuShaktiImg from "../assets/greencart_assets/channapapu_shakti.jpeg";
import channapapuLooseImg from "../assets/greencart_assets/channapapu_loose.jpeg";
import kabuliImg from "../assets/greencart_assets/kabuli_chana.jpeg";
import kombuImg from "../assets/greencart_assets/kombu_chana.jpeg";
import bathaniWhiteImg from "../assets/greencart_assets/bathani_white.jpeg";
import bathaniGreenImg from "../assets/greencart_assets/bathani_green.jpeg";
import pesaluImg from "../assets/greencart_assets/pesalu.jpeg";
import minguluImg from "../assets/greencart_assets/mingulu.jpeg";
import ginguluImg from "../assets/greencart_assets/gingulu.jpeg";
import kanduluImg from "../assets/greencart_assets/kandulu.jpeg";
import kodumuluImg from "../assets/greencart_assets/Kodumulu.webp";
import soluImg from "../assets/greencart_assets/Solu.jpeg";
import chenguduluImg from "../assets/greencart_assets/chanagagudulu.jpeg";
import rajmaImg from "../assets/greencart_assets/Rajma.jpeg";
import soyabeanImg from "../assets/greencart_assets/Soyabean.jpeg";

const dalPulses = [
  { id: 4001, key: "agrorich", name: "Kandipapu (Agrorich)", size: "1kg packet", image: agrorichImg, rating: 4.6, inStock: true },
  { id: 4002, key: "agrorich", name: "Kandipapu (Sona)", size: "1kg packet", image: kandipapuImg, rating: 4.5, inStock: true },
  { id: 4003, key: "kandipapu", name: "Kandipapu (Sona)", size: "loose", image: kandipapuImg, rating: 4.5, inStock: true, loose: true },
  { id: 4004, key: "yera_kandipapu", name: "Kandipapu (Akolla)", size: "loose", image: yeraKandipapuImg, rating: 4.4, inStock: true, loose: true },
  { id: 4005, key: "minapapu_doublehorse", name: "Minapapu (Double Horse)", size: "0.5kg packet", image: minapapuDoublehorseImg, rating: 4.4, inStock: true },
  { id: 4006, key: "minapapu_doublehorse", name: "Minapapu (Double Horse)", size: "1kg packet", image: minapapuDoublehorseImg, rating: 4.4, inStock: true },
  { id: 4007, key: "minapapu_gopuram", name: "Minapapu (Gopuram)", size: "loose", image: minapapuGopuramImg, rating: 4.3, inStock: true, loose: true },
  { id: 4008, key: "pasarapapu_doublehorse", name: "Pasarapapu (Double Horse)", size: "0.5kg packet", image: pasaraDoublehorseImg, rating: 4.3, inStock: true },
  { id: 4009, key: "pasarapapu_doublehorse", name: "Pasarapapu (Double Horse)", size: "1kg packet", image: pasaraDoublehorseImg, rating: 4.3, inStock: true },
  { id: 4010, key: "pasarapapu_thumbup", name: "Pasarapapu (Thumb Up)", size: "loose", image: pasaraImg, rating: 4.2, inStock: true, loose: true },
  { id: 4011, key: "channapapu_shakti", name: "Channapapu (Shakti)", size: "0.5kg packet", image: channapapuShaktiImg, rating: 4.4, inStock: true },
  { id: 4012, key: "channapapu_shakti", name: "Channapapu (Shakti)", size: "1kg packet", image: channapapuShaktiImg, rating: 4.4, inStock: true },
  { id: 4013, key: "channapapu_loose", name: "Channapapu (Loose Chocolate)", size: "loose", image: channapapuLooseImg, rating: 4.3, inStock: true, loose: true },
  { id: 4014, key: "kabuli", name: "Kabuli Chana", size: "250g–1kg", image: kabuliImg, rating: 4.3, inStock: true, loose: true },
  { id: 4015, key: "kombu", name: "Kombu Chana", size: "250g–1kg", image: kombuImg, rating: 4.2, inStock: true, loose: true },
  { id: 4016, key: "bathani_white", name: "Bathani White", size: "250g–1kg", image: bathaniWhiteImg, rating: 4.3, inStock: true, loose: true },
  { id: 4017, key: "bathani_green", name: "Bathani Green", size: "250g–1kg", image: bathaniGreenImg, rating: 4.3, inStock: true, loose: true },
  { id: 4018, key: "pesalu", name: "Pesalu", size: "250g–1kg", image: pesaluImg, rating: 4.3, inStock: true, loose: true },
  { id: 4019, key: "mingulu", name: "Mingulu", size: "250g–1kg", image: minguluImg, rating: 4.2, inStock: true, loose: true },
  { id: 4020, key: "gingulu", name: "Gingulu", size: "250g–1kg", image: ginguluImg, rating: 4.2, inStock: true, loose: true },
  { id: 4021, key: "kandulu", name: "Kandulu", size: "250g–1kg", image: kanduluImg, rating: 4.2, inStock: true, loose: true },
  { id: 4022, key: "kodumulu", name: "Kodumulu", size: "250g–1kg", image: kodumuluImg, rating: 4.3, inStock: true, loose: true },
  { id: 4023, key: "solu", name: "Solu", size: "250g–1kg", image: soluImg, rating: 4.1, inStock: true, loose: true },
  { id: 4024, key: "chengudulu", name: "Chengudulu", size: "250g–1kg", image: chenguduluImg, rating: 4.2, inStock: true, loose: true },
  { id: 4025, key: "rajma", name: "Rajma", size: "250g–1kg", image: rajmaImg, rating: 4.4, inStock: true, loose: true },
  { id: 4026, key: "soyabean", name: "Soyabean (Chikkudu Pikkalu)", size: "250g–1kg", image: soyabeanImg, rating: 4.3, inStock: true, loose: true }
];


const DalPulsesProducts = () => {
  const { t } = useTranslation();
  const { wishlist, toggleWishlist, cart, addToCart } = useAppContext();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const closeModal = () => setSelectedProduct(null);

  return (
    <div className="wholegrain-section">
      <h2 className="wholegrain-title">🫘 {t("dalPulses.title")}</h2>
        {/* 📢 Price disclaimer */}
      <div className="products-disclaimer">
        {t("products.priceDisclaimer")}
      </div>
      <div className="wholegrain-grid">
        {dalPulses.map((product) => {
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
                <p className="grain-name">{t(`dalPulses.products.${product.key}`)}</p>
                <p className="grain-description">{t(`dalPulses.descriptions.${product.key}`)}</p>
                <p className="grain-size">📦 {product.size}</p>
                {product.loose && (
                  <div className="grain-qty">
                    <label>{t("dalPulses.selectQuantity")}:</label>
                    <select defaultValue="0.5kg">
                      {[...Array(10)].map((_, i) => (
                        <option key={i} value={`${(i + 1) * 0.25}kg`}>
                          {(i + 1) * 0.25} kg
                        </option>
                      ))}
                    </select>
                  </div>
                )}
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
            <h3>{t(`dalPulses.products.${selectedProduct.key}`)}</h3>
            <p className="grain-description">
              {t(`dalPulses.descriptions.${selectedProduct.key}`, { lng: "en" })}<br />
              <span style={{ fontWeight: 500 }}>{t(`dalPulses.descriptions.${selectedProduct.key}`, { lng: "te" })}</span>
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

export default DalPulsesProducts;
