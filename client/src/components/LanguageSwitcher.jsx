// LanguageSwitcher.jsx
import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng); // ⬅️ Save to localStorage
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <label htmlFor="lang-select" style={{ fontSize: "14px" }}>
        🌐
      </label>
      <select
        id="lang-select"
        onChange={(e) => changeLanguage(e.target.value)}
        value={i18n.language}
        style={{
          padding: "6px 10px",
          borderRadius: "6px",
          fontSize: "14px",
          border: "1px solid #ccc",
          backgroundColor: "#f9f9f9",
          cursor: "pointer",
        }}
      >
        <option value="en">English</option>
        <option value="te">తెలుగు</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
