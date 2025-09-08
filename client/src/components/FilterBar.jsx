import React from "react";
import "./FilterBar.css";

const FilterBar = ({ onFilterChange }) => {
  return (
    <div className="filter-bar">
      <select onChange={(e) => onFilterChange("brand", e.target.value)}>
        <option value="">Brand</option>
        <option value="fortune">Fortune</option>
        <option value="tata">Tata</option>
        <option value="aashirvaad">Aashirvaad</option>
      </select>

      <select onChange={(e) => onFilterChange("size", e.target.value)}>
        <option value="">Size</option>
        <option value="1kg">1 kg</option>
        <option value="500g">500 g</option>
        <option value="5kg">5 kg</option>
      </select>

      <select onChange={(e) => onFilterChange("price", e.target.value)}>
        <option value="">Price</option>
        <option value="low-high">Low → High</option>
        <option value="high-low">High → Low</option>
      </select>
    </div>
  );
};

export default FilterBar;
