import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

// Component imports
import MainBanner from "../components/MainBanner";
import Categories from "../components/Categories";
import DeliveryInfo from "../components/DeliveryInfo";
import AboutUs from "../components/AboutUs";
import ContactSupport from "../components/ContactSupport";
import OrderNotice from "../components/OrderNotice";
import ShopGallery from "../components/ShopGallery";

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      {/* 🔔 Order Notice */}
      <OrderNotice />

      {/* 📸 Banner & Highlights */}
      <MainBanner />
      
      {/* 🛒 Categories */}
      <Categories />

      {/* 🔗 View All Button */}

      {/* 🧡 Kirana Store Section */}
      <section className="bg-orange-50 py-10 px-4 mt-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-orange-700 mb-6">
            {t("home.kiranaSection.title")}
          </h2>
          <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
            {t("home.kiranaSection.description")}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-orange-800">
            <div>
              <p className="text-3xl">👪</p>
              <p>{t("home.kiranaSection.points.family")}</p>
            </div>
            <div>
              <p className="text-3xl">🛍️</p>
              <p>{t("home.kiranaSection.points.localBrands")}</p>
            </div>
            <div>
              <p className="text-3xl">📦</p>
              <p>{t("home.kiranaSection.points.dailyEssentials")}</p>
            </div>
            <div>
              <p className="text-3xl">📞</p>
              <p>{t("home.kiranaSection.points.contactOrders")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 📦 Delivery & Support Info */}
      <DeliveryInfo />
      <ShopGallery />
      <AboutUs />
      <ContactSupport />
    </>
  );
};

export default Home;
