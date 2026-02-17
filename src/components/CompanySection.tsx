import React from 'react';
import { useTranslation } from 'react-i18next';

const CompanySection: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <section id="company" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div>
            <img
              src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/company_img.png"
              alt={t('home.company.imageAlt')}
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {t('home.company.heading')}
              <br />
              <span className="text-green-600">{t('home.company.subheading')}</span>
            </h2>

            <div className="prose prose-lg text-gray-600 mb-8">
              <p>
                {t('home.company.description')}
              </p>
            </div>

            {/* Call to Action */}
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 whitespace-nowrap"
              >
                {t('home.company.button')}
                <i className="ri-arrow-right-line ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;