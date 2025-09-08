import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <section className="py-10 px-6 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
        {t("about.title")}
      </h2>

      <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-3xl mx-auto whitespace-pre-line">
        {t("about.description")}
      </p>
    </section>
  );
};

export default AboutUs;
