import React from "react";
import { useTranslation } from "react-i18next";

const Register = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold text-center text-green-700">{t("register.title")}</h2>

        <div>
          <label className="block mb-1 font-semibold">{t("register.name")}</label>
          <input
            type="text"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder={t("register.namePlaceholder")}
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">{t("register.email")}</label>
          <input
            type="email"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder={t("register.emailPlaceholder")}
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">{t("register.password")}</label>
          <input
            type="password"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder={t("register.passwordPlaceholder")}
          />
        </div>

        <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
          {t("register.button")}
        </button>

        <p className="text-center text-sm">
          {t("register.haveAccount")}{" "}
          <a href="/login" className="text-green-600 font-semibold hover:underline">
            {t("register.loginLink")}
          </a>
        </p>
      </form>
    </div>
  );
};

export default Register;
