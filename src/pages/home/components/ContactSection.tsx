import React from 'react';
import { useTranslation } from 'react-i18next';

const ContactSection: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('home.contact.heading')}
          </h2>
          <p className="text-lg text-gray-600 uppercase tracking-wider">{t('home.contact.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Phone Contact */}
          <div className="text-center lg:text-left">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <i className="ri-phone-line text-blue-600 text-2xl mr-3"></i>
                <span className="text-2xl lg:text-3xl font-mono font-bold text-gray-900">
                  {t('home.contact.phone')}
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                {t('home.contact.businessHours')}
              </p>
            </div>
          </div>

          {/* Email Contact */}
          <div className="text-center lg:text-left">
            <a
              href="#"
              className="block bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-8 transition-colors duration-300 group"
            >
              <div className="flex items-center justify-center lg:justify-start">
                <i className="ri-mail-line text-2xl mr-3"></i>
                <span className="text-xl font-semibold">{t('home.contact.emailButton')}</span>
                <i className="ri-arrow-right-line ml-3 group-hover:translate-x-1 transition-transform duration-300"></i>
              </div>
            </a>
          </div>
        </div>

        {/* Online Store Banner */}
        <div className="mt-16 text-center">
          <a
            href="https://maruyasu19.thebase.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:scale-105 transition-transform duration-300"
          >
            <img
              src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/bannur.jpg"
              alt={t('home.contact.onlineStoreAlt')}
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;