import React from 'react';
import { useTranslation } from 'react-i18next';

const SilentUmbrellaSection: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <section id="silent" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              <span className="text-green-600">{t('home.silentUmbrella.heading')}</span>
              <br />
              {t('home.silentUmbrella.subheading')}
            </h2>
            <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-6">
              {t('home.silentUmbrella.title')}
              <br />
              {t('home.silentUmbrella.subtitle')}
            </h3>

            <div className="prose prose-lg text-gray-600 mb-8">
              <p>
                {t('home.silentUmbrella.description')}
              </p>
            </div>

            {/* Features */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('home.silentUmbrella.recommendedUsesTitle')}</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <i className="ri-check-line text-green-600 mt-1 mr-2 flex-shrink-0"></i>
                  <span>{t('home.silentUmbrella.use1')}</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-green-600 mt-1 mr-2 flex-shrink-0"></i>
                  <span>{t('home.silentUmbrella.use2')}</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-green-600 mt-1 mr-2 flex-shrink-0"></i>
                  <span>{t('home.silentUmbrella.use3')}</span>
                </li>
              </ul>
            </div>

            {/* Achievements */}
            <div className="space-y-3 text-sm text-gray-600">
              <p><span className="text-red-600 font-semibold">*</span> {t('home.silentUmbrella.achievement1')}</p>
              <p><span className="text-red-600 font-semibold">*</span> {t('home.silentUmbrella.achievement2')}</p>
              <p><span className="text-red-600 font-semibold">*</span> {t('home.silentUmbrella.achievement3')}</p>
            </div>

            {/* GIF Image */}
            <div className="mt-8">
              <img
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/cnt01_img03.gif"
                alt={t('home.silentUmbrella.imageAlt3')}
                className="w-full max-w-md mx-auto lg:mx-0 rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Images */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="relative">
              <img
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/cnt01_img01.jpg"
                alt={t('home.silentUmbrella.imageAlt1')}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="relative">
              <img
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/cnt01_img02.jpg"
                alt={t('home.silentUmbrella.imageAlt2')}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SilentUmbrellaSection;