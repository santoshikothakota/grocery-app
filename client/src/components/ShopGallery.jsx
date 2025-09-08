import React from "react";
import Slider from "react-slick";
import "./ShopGallery.css";
import { useTranslation } from "react-i18next";
// Import slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Shop Images
import shop1 from "../assets/greencart_assets/shop1.jpg";
import shop2 from "../assets/greencart_assets/shop2.jpg";
import shop3 from "../assets/greencart_assets/shop3.jpg";

const ShopGallery = () => {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
  };

  return (
    <div className="shop-gallery">
      <h2 className="gallery-title">{t("gallery.title")}</h2>
      <Slider {...settings}>
        <div><img src={shop1} alt={t("gallery.alt1")} /></div>
        <div><img src={shop2} alt={t("gallery.alt2")} /></div>
        <div><img src={shop3} alt={t("gallery.alt3")} /></div>
      </Slider>
    </div>
  );
};

export default ShopGallery;