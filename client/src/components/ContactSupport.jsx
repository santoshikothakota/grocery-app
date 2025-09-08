import React from 'react';
import { useTranslation } from 'react-i18next';

const ContactSupport = () => {
  const { t } = useTranslation();

  return (
    <section className="py-10 px-6 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        {t("contact.title")}
      </h2>

      <div className="space-y-4 text-sm md:text-base text-gray-700 max-w-xl mx-auto">
        <div>
          <p className="font-semibold">{t("contact.phone.label")}</p>
          <p>{t("contact.phone.number")}</p>
          <p>{t("contact.phone.hours")}</p>
        </div>
        <div>
          <p className="font-semibold">{t("contact.email.label")}</p>
          <p>{t("contact.email.address")}</p>
          <p>{t("contact.email.response")}</p>
        </div>
        <div>
          <p className="font-semibold">{t("contact.visit.label")}</p>
          <p>{t("contact.visit.address")}</p>
          <p>{t("contact.visit.open")}</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSupport;
