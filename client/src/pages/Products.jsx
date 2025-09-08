import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ShoppingBasket, Sparkles, Home } from "lucide-react";
import "./Products.css";
import AttaProducts from "../components/AttaProducts";
import RiceProducts from "../components/RiceProducts";
import DalPulsesProducts from "../components/DalPulsesProducts";
import OilGheeProducts from "../components/OilGheeProducts";

// 🖼️ Image imports
import attaRiceGrains from "../assets/greencart_assets/p_atta_rice_grains.jpg";
import dalPulses from "../assets/greencart_assets/p_dal_pluses.jpg";
import oilGhee from "../assets/greencart_assets/p_oil_ghee.jpg";
import masalaSpices from "../assets/greencart_assets/p_masala_species.jpg";
import saltSugar from "../assets/greencart_assets/salt_sugar.jpg";
import teaCoffee from "../assets/greencart_assets/tea_coffee.jpg";
import juicesColdDrinks from "../assets/greencart_assets/p_juices_colddrinks.png";
import maggieNoodlesPasta from "../assets/greencart_assets/p_maggie_noodles_pasta.png";
import snacksBiscuits from "../assets/greencart_assets/p_snacks_biscuits.png";
import saucesSpreads from "../assets/greencart_assets/p_sauces_spreads.png";
import chocolates from "../assets/greencart_assets/p_chocolates.jpg";
import milkDairies from "../assets/greencart_assets/p_milk_diaries.jpg";
import cerealsDryFruits from "../assets/greencart_assets/p_cereals_dryfruits.png";
import bathBody from "../assets/greencart_assets/p_bathbody.jpg";
import hairCare from "../assets/greencart_assets/pm_haircare.jpg";
import oralCare from "../assets/greencart_assets/p_oralcare.jpg";
import feminineHygiene from "../assets/greencart_assets/p_feminine hygiene.jpg";
import skinFace from "../assets/greencart_assets/p_skinface.jpg";
import menGrooming from "../assets/greencart_assets/p_mengrooming.jpg";
import babyCare from "../assets/greencart_assets/p_babycare.jpg";
import deosPerfumes from "../assets/greencart_assets/p_does_perfumes.jpg";
import pharmaWellness from "../assets/greencart_assets/p_pharma_wellness.jpg";
import laundryDetergents from "../assets/greencart_assets/p_laundary_detergents.jpg";
import toiletCleaners from "../assets/greencart_assets/p_toilet_cleaners.jpg";

const Products = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("attaRiceGrains");

  useEffect(() => {
    const pathCategory = location.pathname.split("/").pop();
    if (pathCategory) {
      const formatted = pathCategory.replace(/-/g, "");
      setSelectedCategory(formatted);
    }
  }, [location.pathname]);

  const emojiMap = {
    attaRiceGrains: "🌾",
    dalPulses: "🥣",
    oilGhee: "🟢",
    masalaSpices: "🫒",
    saltSugar: "🍚",
    teaCoffee: "☕",
    juicesColdDrinks: "🥤",
    maggieNoodlesPasta: "🍜",
    snacksBiscuits: "🍪",
    saucesSpreads: "🥯",
    chocolates: "🍫",
    milkDairies: "🥛",
    cerealsDryFruits: "🥜",
    bathBody: "🛁",
    hairCare: "💇‍♀️",
    oralCare: "🦷",
    feminineHygiene: "🪜",
    skinFace: "🧴",
    menGrooming: "🧍",
    babyCare: "👶",
    deosPerfumes: "🌸",
    pharmaWellness: "💊",
    laundryDetergents: "🧺",
    toiletCleaners: "🚽",
  };

  const imageMap = {
    attaRiceGrains,
    dalPulses,
    oilGhee,
    masalaSpices,
    saltSugar,
    teaCoffee,
    juicesColdDrinks,
    maggieNoodlesPasta,
    snacksBiscuits,
    saucesSpreads,
    chocolates,
    milkDairies,
    cerealsDryFruits,
    bathBody,
    hairCare,
    oralCare,
    feminineHygiene,
    skinFace,
    menGrooming,
    babyCare,
    deosPerfumes,
    pharmaWellness,
    laundryDetergents,
    toiletCleaners,
  };

  const sections = [
    {
      title: t("categories.sections.groceries"),
      icon: <ShoppingBasket className="section-icon" />,
      items: [
        "attaRiceGrains", "dalPulses", "oilGhee", "masalaSpices", "saltSugar",
        "teaCoffee", "juicesColdDrinks", "maggieNoodlesPasta", "snacksBiscuits",
        "saucesSpreads", "chocolates", "milkDairies", "cerealsDryFruits"
      ],
    },
    {
      title: t("categories.sections.beauty"),
      icon: <Sparkles className="section-icon" />,
      items: [
        "bathBody", "hairCare", "oralCare", "feminineHygiene", "skinFace",
        "menGrooming", "babyCare", "deosPerfumes", "pharmaWellness"
      ],
    },
    {
      title: t("categories.sections.household"),
      icon: <Home className="section-icon" />,
      items: ["laundryDetergents", "toiletCleaners"],
    },
  ];

  const toKebabCase = (str) =>
    str.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());

  return (
    <div className="products-section">
      <h2 className="products-heading">{t("categories.title")}</h2>

      {/* 📢 Price disclaimer */}
      <div className="products-disclaimer">
        {t("products.priceDisclaimer")}
      </div>

      {sections.map((section, secIdx) => (
        <div key={secIdx} className="category-section">
          <h3 className="section-title">
            <span className="highlighted-title">
              {section.icon}
              <span className="title-text">{section.title}</span>
            </span>
          </h3>

          <div className="products-grid">
            {section.items.map((key, idx) => (
              <div
                key={idx}
                className={`product-card ${selectedCategory === key ? "active" : ""}`}
                onClick={() => {
                  setSelectedCategory(key);
                  navigate(`/products/${toKebabCase(key)}`);
                }}
              >
                <img
                  src={imageMap[key]}
                  alt={t(`categories.names.${key}`)}
                  className="product-image"
                />
                <p className="product-label">
                  {emojiMap[key]} {t(`categories.names.${key}`)}
                </p>
              </div>
            ))}
          </div>

          {/* ✅ Display products by selected category */}
          {selectedCategory === "attaRiceGrains" && (
            <div className="atta-rice-group">
              <h4 className="category-title">{t("products.attaTitle")}</h4>
              <AttaProducts />
              <h4 className="category-title">{t("products.riceTitle")}</h4>
              <RiceProducts />
            </div>
          )}

          {selectedCategory === "dalPulses" && (
            <div className="dal-group">
              <h4 className="category-title">{t("products.dalPulsesTitle")}</h4>
              <DalPulsesProducts />
            </div>
          )}

          {selectedCategory === "oilGhee" && (
            <div className="oil-ghee-group">
              <h4 className="category-title">{t("products.oilGheeTitle")}</h4>
              <OilGheeProducts />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Products;