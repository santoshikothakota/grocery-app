import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";

const OrderNotice = () => {
  const controls = useAnimation();
  const [visible, setVisible] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    let isMounted = true;

    const animateLoop = async () => {
      while (isMounted && visible) {
        await controls.start({
          x: 0,
          opacity: 1,
          transition: { duration: 1.2, ease: "easeOut" },
        });
        await new Promise((res) => setTimeout(res, 60000));
        await controls.start({
          x: "-100%",
          opacity: 0,
          transition: { duration: 1 },
        });
        await new Promise((res) => setTimeout(res, 1000));
      }
    };

    animateLoop();
    return () => {
      isMounted = false;
    };
  }, [controls, visible]);

  if (!visible) return null;

  return (
    <div className="relative overflow-hidden font-sans">
      <motion.div
        className="relative max-w-5xl bg-yellow-50 border border-yellow-300 rounded-xl shadow-xl p-4 md:p-6 my-4 mx-2 md:mx-auto"
        animate={controls}
        initial={{ x: "-100%", opacity: 0 }}
      >
        <button
          onClick={() => setVisible(false)}
          className="absolute top-2 right-3 text-lg text-gray-600 hover:text-gray-900 transition bg-transparent border-none outline-none"
          aria-label="Close"
        >
          ×
        </button>

        <h2 className="text-xl md:text-2xl font-extrabold text-yellow-800 mb-3 text-center drop-shadow-sm">
          📢 {t("orderNotice.title")}{" "}
          <span className="text-purple-700 font-bold">SriVenkataSaiKirana</span>!
        </h2>

        <p className="text-gray-800 text-sm md:text-base mb-2 text-center">
          🛒 {t("orderNotice.subtitle")}
        </p>

        {/* 🔥 Highlighted Rule with Pulse */}
        <motion.div
          className="bg-red-100 border border-red-400 rounded-md px-4 py-3 text-center font-semibold text-red-800 shadow-sm text-sm md:text-base mb-3"
          animate={{ scale: [1, 1.05, 1], opacity: [1, 0.95, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          {t("orderNotice.deliveryHighlight")}
        </motion.div>

        <p className="text-gray-800 text-sm md:text-base mb-1 text-center">
          📞 {t("orderNotice.call")}{" "}
          <a
            href="tel:9299908318"
            className="text-purple-700 font-semibold underline hover:text-purple-900 transition"
          >
            9299908318
          </a>{" "}
          &{" "}
          <a
            href="tel:8309404933"
            className="text-purple-700 font-semibold underline hover:text-purple-900 transition"
          >
            8309404933
          </a>
        </p>

        <p className="text-gray-800 text-sm md:text-base mb-1 text-center">
          💬 {t("orderNotice.whatsapp")}{" "}
          <a
            href="https://wa.me/919299908608"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 font-semibold underline hover:text-green-900 transition"
          >
            WhatsApp 1
          </a>{" "}
          |{" "}
          <a
            href="https://wa.me/918309404932"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 font-semibold underline hover:text-green-900 transition"
          >
            WhatsApp 2
          </a>{" "}
          {t("orderNotice.orderInstant")}
        </p>

        <p className="text-orange-600 font-medium italic mt-3 text-sm md:text-base text-center">
          👉 {t("orderNotice.confirmationNote")}
        </p>
      </motion.div>
    </div>
  );
};

export default OrderNotice;
