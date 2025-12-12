import React from 'react';

const ProductsSection: React.FC = () => {
  const products = [
    {
      id: 1,
      title: 'Silent Umbrella',
      image: 'https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/product_img01.jpg',
      link: '#silent'
    },
    {
      id: 2,
      title: 'Miyabi Sakura Braided Long Umbrella',
      image: 'https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/product_img02.jpg',
      link: '#braid'
    },
    {
      id: 3,
      title: 'Rain Pocket Folding Umbrella',
      image: 'https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/product_img03.jpg',
      link: '#folding'
    },
    {
      id: 4,
      title: 'Sun & Rain Parasol',
      image: 'https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/product_img04.jpg',
      link: '#parasol'
    },
    {
      id: 5,
      title: 'Koshu-ori',
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
            Products
          </h2>
          <p className="text-lg text-gray-600 uppercase tracking-wider">Our Handcrafted Collection</p>
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
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {product.title}
                    </h3>
                    <div className="inline-flex items-center text-blue-600 font-medium group-hover:translate-x-1 transition-transform duration-300 whitespace-nowrap">
                      Learn More
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