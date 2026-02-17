import React from 'react';
import { useTranslation } from 'react-i18next';

const ProductsSection: React.FC = () => {
  const { t } = useTranslation('common');

  const products = [
    {
      id: 1,
      titleKey: 'products.silentUmbrella',
      image: 'https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/product_img01.jpg',
      link: '#silent'
    },
    {
      id: 2,
      titleKey: 'products.braidUmbrella',
      image: 'https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/product_img02.jpg',
      link: '#braid'
    },
    {
      id: 3,
      titleKey: 'products.foldingUmbrella',
      image: 'https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/product_img03.jpg',
      link: '#folding'
    },
    {
      id: 4,
      titleKey: 'products.parasol',
      image: 'https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/product_img04.jpg',
      link: '#parasol'
    },
    {
      id: 5,
      titleKey: 'products.koshuWeaving',
      image: 'https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/product_img05.jpg',
      link: '#koshu'
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('home.productsSection.heading')}
          </h2>
          <p className="text-lg text-gray-600 uppercase tracking-wider">{t('home.productsSection.subtitle')}</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8" data-product-shop>
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group cursor-pointer"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <a href={product.link} className="block">
                <div className="relative overflow-hidden rounded-lg shadow-lg bg-white">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={t(product.titleKey)}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {t(product.titleKey)}
                    </h3>
                    <div className="inline-flex items-center text-blue-600 font-medium group-hover:translate-x-1 transition-transform duration-300 whitespace-nowrap">
                      {t('home.productsSection.learnMore')}
                      <i className="ri-arrow-right-line ml-2"></i>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;