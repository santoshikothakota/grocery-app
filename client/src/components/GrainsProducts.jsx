// src/components/GrainsProducts.jsx
import React from "react";
import AttaProducts from "./AttaProducts";
import RiceProducts from "./RiceProducts";
import { useTranslation } from "react-i18next";

const GrainsProducts = () => {
  const { t } = useTranslation();

  return (
    <div className="grains-container">
      <h1 className="grains-title">{t("products.attaRiceGrains")}</h1>

      {/* Atta Section */}
      <section className="grains-section">
        <h2 className="section-heading">{t("products.atta")}</h2>
        <AttaProducts />
      </section>

      {/* Rice Section */}
      <section className="grains-section">
        <h2 className="section-heading">{t("products.rice")}</h2>
        <RiceProducts />
      </section>
    </div>
  );
};

export default GrainsProducts;
