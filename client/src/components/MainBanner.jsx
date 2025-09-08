import React from "react";
import bannerImg from "../assets/greencart_assets/banner.jpg";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation();

  const handleOrderNowClick = () => {
    const section = document.getElementById("categories");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "40px 30px",
        backgroundColor: "#e9fce9",
      }}
    >
      {/* Text Section */}
      <div style={{ flex: "1 1 400px", padding: "10px 20px" }}>
        <p
          style={{
            fontSize: "26px",
            fontWeight: "bold",
            color: "#2d3748",
            marginBottom: "14px",
          }}
        >
          🍚 {t("banner.heading1")}{" "}
          <span style={{ color: "#6B46C1" }}>SriVenkataSaiKirana</span>
        </p>

        <p
          style={{
            fontSize: "22px",
            color: "#4a5568",
            marginBottom: "26px",
          }}
        >
          {t("banner.heading2")}
        </p>

        <button onClick={handleOrderNowClick} className="order-now-btn">
          🛒 {t("banner.orderNow")}
        </button>
      </div>

      {/* Image Section */}
      <div
        style={{
          flex: "1 1 300px",
          textAlign: "center",
          padding: "10px 20px",
        }}
      >
        <img
          src={bannerImg}
          alt={t("banner.altText")}
          style={{ maxWidth: "100%", height: "auto", borderRadius: "12px" }}
        />
      </div>
    </div>
  );
};

export default Banner;
