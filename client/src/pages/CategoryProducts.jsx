import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./CategoryProducts.css";

// Import product components
import AttaProducts from "../components/AttaProducts";
import RiceProducts from "../components/RiceProducts";
import OilGheeProducts from "../components/OilGheeProducts";
import DalPulsesProducts from "../components/DalPulsesProducts";

const CategoryProducts = () => {
  const { category } = useParams();
  const { t } = useTranslation();

  // Normalize slugs: handle alternate spellings like "dals-and-pulses"
  const normalizedCategoryMap = {
    "atta-rice-grains": "atta-rice-grains",
    "rice": "rice",
    "dal-pulses": "dal-pulses",
    "dals-and-pulses": "dal-pulses",
    "oil-ghee": "oil-ghee",
    "oil-and-ghee": "oil-ghee",
  };

  const normalizedCategory = normalizedCategoryMap[category] || category;

  const formattedName = normalizedCategory
    .replaceAll("-", " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  const categoryComponents = {
    "atta-rice-grains": <AttaProducts />,
    "rice": <RiceProducts />,
    "dal-pulses": <DalPulsesProducts />,
    "oil-ghee": <OilGheeProducts />,
  };

  const categoryComponent = categoryComponents[normalizedCategory];

  return (
    <div className="category-products-page">
      <h1 className="category-title">
        {t("categories.filteredTitle", {
          category: t(`categories.names.${normalizedCategory}`, formattedName),
        })}
      </h1>

      {categoryComponent ? (
        categoryComponent
      ) : (
        <p className="not-available-message">
          {t("categories.notAvailable", { category: formattedName })}
        </p>
      )}
    </div>
  );
};

export default CategoryProducts;
