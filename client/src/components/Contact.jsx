// src/components/Contact.jsx
import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t("contact.successAlert"));
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl overflow-hidden max-w-5xl w-full grid md:grid-cols-2">

        {/* LEFT: Store Info */}
        <div className="bg-gradient-to-br from-blue-600 to-green-500 text-white p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">{t("contact.getInTouchTitle")}</h2>
          <p className="text-blue-100 mb-8">{t("contact.getInTouchText")}</p>

          <div className="space-y-6">
            {/* Phone */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <Phone size={24} />
                <p className="text-lg font-semibold">{t("contact.phone.label")}</p>
              </div>
              <p className="text-lg">{t("contact.phone.number")}</p>
              <p className="text-lg">{t("contact.phone.hours")}</p>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <Mail size={24} />
                <p className="text-lg font-semibold">{t("contact.email.label")}</p>
              </div>
              <p className="text-lg">{t("contact.email.address")}</p>
              <p className="text-lg">{t("contact.email.response")}</p>
            </div>

            {/* Location */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <MapPin size={24} />
                <p className="text-lg font-semibold">{t("contact.visit.label")}</p>
              </div>
              <p className="text-lg">{t("contact.visit.address")}</p>
              <p className="text-lg">{t("contact.visit.open")}</p>
            </div>
          </div>
        </div>

        {/* RIGHT: Contact Form */}
        <div className="p-10 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">{t("contact.sendMessageTitle")}</h2>
          
          <form onSubmit={handleSubmit} className="space-y-5 w-full max-w-md mx-auto">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t("contact.namePlaceholder")}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("contact.emailPlaceholder")}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t("contact.messagePlaceholder")}
              required
              rows="5"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-4 py-3 transition duration-300 shadow-md"
            >
              {t("contact.sendButton")}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
