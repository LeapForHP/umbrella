import React from 'react';
import { useTranslation } from 'react-i18next';

const RepairSection: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <section id="repair" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              <span className="text-green-600">{t('home.repair.heading')}</span>
              <br />
              {t('home.repair.subheading')}
            </h2>

            <div className="prose prose-lg text-gray-600 mb-8">
              <p>
                {t('home.repair.paragraph1')}
              </p>
              <p>
                {t('home.repair.paragraph2')}
              </p>
            </div>

            {/* Call to Action */}
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 whitespace-nowrap"
              >
                {t('home.repair.button')}
                <i className="ri-arrow-right-line ml-2"></i>
              </a>
            </div>
          </div>

          {/* Before/After Images */}
          <div className="space-y-8">
            <div className="text-center">
              <img
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/repair_img.jpg"
                alt={t('home.repair.beforeRepairAlt')}
                className="w-full rounded-lg shadow-lg mb-2"
              />
              <p className="text-sm text-gray-600 font-medium">{t('home.repair.beforeRepairLabel')}</p>
            </div>

            <div className="text-center">
              <img
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/repair_img02.jpg"
                alt={t('home.repair.afterRepairAlt')}
                className="w-full rounded-lg shadow-lg mb-2"
              />
              <p className="text-sm text-gray-600 font-medium">{t('home.repair.afterRepairLabel')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepairSection;