import React from 'react';
import { Truck, Leaf, Tag, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WhyChooseUs = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Truck className="text-white w-5 h-5" />,
      title: t("whyChooseUs.features.fastDelivery.title"),
      description: t("whyChooseUs.features.fastDelivery.description"),
    },
    {
      icon: <Leaf className="text-white w-5 h-5" />,
      title: t("whyChooseUs.features.freshness.title"),
      description: t("whyChooseUs.features.freshness.description"),
    },
    {
      icon: <Tag className="text-white w-5 h-5" />,
      title: t("whyChooseUs.features.affordable.title"),
      description: t("whyChooseUs.features.affordable.description"),
    },
    {
      icon: <Heart className="text-white w-5 h-5" />,
      title: t("whyChooseUs.features.trust.title"),
      description: t("whyChooseUs.features.trust.description"),
    },
  ];

  return (
    <section className="py-12 px-6 bg-green-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/path-to-your-image.jpg" // Replace this with your actual image path
            alt="Grocery Delivery"
            className="rounded-xl shadow-lg max-w-full h-auto"
          />
        </div>

        {/* Right Features */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6 text-center md:text-left">
            {t("whyChooseUs.title")}
          </h2>

          <div className="space-y-5">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-green-500 rounded-full p-3">{feature.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
