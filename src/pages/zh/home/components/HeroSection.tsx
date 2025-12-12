import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const slides = [
    {
      id: 1,
      type: 'products',
      products: [
        {
          image: 'https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/fv01-01.jpg',
          alt: '静音伞',
          link: '/zh/products/silent-umbrella'
        },
        {
          image: 'https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/fv01-02.jpg',
          alt: '雅樱编织长伞',
          link: '/zh/products/braid-umbrella'
        },
        {
          image: 'https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/fv01-03.jpg',
          alt: '雨袋折叠伞',
          link: '/zh/products/folding-umbrella'
        }
      ]
    },
    {
      id: 2,
      type: 'main',
      image: 'https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/fv02.jpg',
      title: '日本职人手工制作',
      alt: '主视觉图 02'
    },
    {
      id: 3,
      type: 'main',
      image: 'https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/fv03.jpg',
      title: '传承传统工艺',
      alt: '主视觉图 03'
    }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {slide.type === 'products' ? (
              <div className="flex h-full">
                {slide.products?.map((product, productIndex) => (
                  <Link
                    key={productIndex}
                    to={product.link}
                    className="flex-1 relative overflow-hidden group cursor-pointer"
                  >
                    <img
                      src={product.image}
                      alt={product.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                {slide.title && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-white text-4xl lg:text-6xl font-bold text-center px-4 animate-fade-in">
                      {slide.title}
                    </h2>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`前往幻灯片 ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 text-white animate-bounce">
        <i className="ri-arrow-down-line text-2xl"></i>
      </div>
    </section>
  );
};

export default HeroSection;