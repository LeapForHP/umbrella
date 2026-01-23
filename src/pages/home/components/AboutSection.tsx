import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutSection: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">{t('home.about.heading')}</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t('home.about.paragraph1')}
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              {t('home.about.paragraph2')}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap"
            >
              {t('home.about.button')}
              <i className="ri-arrow-right-line ml-2"></i>
            </a>
          </div>

          <div className="relative">
            <img
              src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/img09.jpg"
              alt={t('home.about.imageAlt')}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">{t('home.about.stat1Value')}</div>
              <div className="text-gray-700 font-medium">{t('home.about.stat1Label')}</div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">{t('home.about.stat2Value')}</div>
              <div className="text-gray-700 font-medium">{t('home.about.stat2Label')}</div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">{t('home.about.stat3Value')}</div>
              <div className="text-gray-700 font-medium">{t('home.about.stat3Label')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;