import React from 'react';
import { useTranslation } from 'react-i18next';

const DeliveryInfo = () => {
  const { t } = useTranslation();

  return (
    <section className="py-10 px-4 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        {t("delivery.title")}
      </h2>

      <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
        <div>
          <h3 className="font-semibold text-lg">{t("delivery.items.fastTitle")}</h3>
          <p>{t("delivery.items.fastDesc")}</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg">{t("delivery.items.slotsTitle")}</h3>
          <p>{t("delivery.items.slotsDesc")}</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg">{t("delivery.items.secureTitle")}</h3>
          <p>{t("delivery.items.secureDesc")}</p>
        </div>
      </div>
    </section>
  );
};

export default DeliveryInfo;
