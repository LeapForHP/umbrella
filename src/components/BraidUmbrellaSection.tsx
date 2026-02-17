import React from 'react';
import { useTranslation } from 'react-i18next';

const BraidUmbrellaSection: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <section id="braid" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div>
            <img
              src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/cnt02_img01.jpg"
              alt={t('home.braidUmbrella.imageAlt1')}
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              <span className="text-green-600">{t('home.braidUmbrella.heading')}</span>
              <br />
              {t('home.braidUmbrella.subheading')}
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                {t('home.braidUmbrella.description1')}
                <br />
                {t('home.braidUmbrella.description2')}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="prose prose-lg text-gray-600 mb-8">
              <p>
                {t('home.braidUmbrella.paragraph1')}
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-3 text-sm text-gray-600">
              <p><span className="text-red-600 font-semibold">*</span> {t('home.braidUmbrella.achievement1')}</p>
              <p><span className="text-red-600 font-semibold">*</span> {t('home.braidUmbrella.achievement2')}</p>
            </div>
          </div>

          {/* Image */}
          <div>
            <img
              src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/cnt02_img02.jpg"
              alt={t('home.braidUmbrella.imageAlt2')}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BraidUmbrellaSection;