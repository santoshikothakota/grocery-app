import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import "./Categories.css";

// Image imports
import riceGrains from "../assets/greencart_assets/rice_grains.jpg";
import dalPulses from "../assets/greencart_assets/dal_pulses.jpg";
import oilGhee from "../assets/greencart_assets/oil_ghee.jpg";
import masalaSpices from "../assets/greencart_assets/masala_spices.jpg";
import saltSugar from "../assets/greencart_assets/salt_sugar.jpg";
import teaCoffee from "../assets/greencart_assets/tea_coffee.jpg";
import juicesColdDrinks from "../assets/greencart_assets/juices_cold_drinks.jpg";
import saucesSpreads from "../assets/greencart_assets/sauces_spread.jpg";
import maggieNoodlesPasta from "../assets/greencart_assets/maggie_noodles_pasta.jpg";
import snacksBiscuits from "../assets/greencart_assets/snacks_biscuits.jpg";
import chocolates from "../assets/greencart_assets/chocolates.jpg";
import hairCare from "../assets/greencart_assets/haircare.jpg";

const Categories = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const categoryList = [
    { key: "attaRiceGrains", image: riceGrains, path: "atta-rice-grains", icon: "🍚" },
    { key: "dalPulses", image: dalPulses, path: "dals-and-pulses", icon: "🥣" },
    { key: "oilGhee", image: oilGhee, path: "oil-and-ghee", icon: "🛢️" },
    { key: "masalaSpices", image: masalaSpices, path: "masala-and-spices", icon: "🌶️" },
    { key: "saltSugar", image: saltSugar, path: "salt-and-sugar", icon: "🧂" },
    { key: "teaCoffee", image: teaCoffee, path: "tea-and-coffee", icon: "☕" },
    { key: "juicesColdDrinks", image: juicesColdDrinks, path: "juices-and-cold-drinks", icon: "🥤" },
    { key: "saucesSpreads", image: saucesSpreads, path: "sauces-and-spreads", icon: "🍯" },
    { key: "maggieNoodlesPasta", image: maggieNoodlesPasta, path: "maggie-noodles-and-pasta", icon: "🍜" },
    { key: "snacksBiscuits", image: snacksBiscuits, path: "snacks-and-biscuits", icon: "🍪" },
    { key: "chocolates", image: chocolates, path: "chocolates", icon: "🍫" },
    { key: "hairCare", image: hairCare, path: "hair-care", icon: "💇‍♀️" },
  ];

  return (
    <div className="categories-section" id="categories">
      <h2 className="section-title">{t("categories.title")}</h2>

      <div className="category-grid">
        {categoryList.map((category, index) => (
          <div
            key={index}
            className="category-card"
            onClick={() => navigate(`/products/${category.path}`)}
          >
            <img src={category.image} alt={t(`categories.names.${category.key}`)} />
            <p>
              {category.icon} {t(`categories.names.${category.key}`)}
            </p>
          </div>
        ))}
      </div>

      <div className="view-all-wrapper">
        <button className="view-all-btn" onClick={() => navigate("/products")}>
          {t("categories.viewAll")} <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default Categories;
