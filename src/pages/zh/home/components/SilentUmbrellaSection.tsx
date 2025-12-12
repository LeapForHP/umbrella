import React from 'react';
import { Link } from 'react-router-dom';

const SilentUmbrellaSection: React.FC = () => {
  return (
    <section id="silent" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              静音伞
              <span className="block text-lg font-normal text-green-600 mt-2">SILENT UMBRELLA</span>
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              我们开发的静音雨伞获得了专利技术。通过特殊的伞骨结构和面料设计，大幅减少了雨滴撞击时产生的噪音。这项创新技术让您在雨天也能享受宁静的时光。
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              无论是在办公室、图书馆还是需要安静环境的场所，静音雨伞都能为您提供完美的雨天保护，同时不会打扰到周围的人。
            </p>
            <Link 
              to="/zh/products/silent-umbrella" 
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors inline-block cursor-pointer whitespace-nowrap"
            >
              了解详情
            </Link>
          </div>
          <div>
            <img 
              src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/img02.jpg" 
              alt="静音伞" 
              className="w-full rounded-lg shadow-lg object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SilentUmbrellaSection;