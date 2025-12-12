import React from 'react';
import { Link } from 'react-router-dom';

const BraidUmbrellaSection: React.FC = () => {
  return (
    <section id="braid" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              雅樱编织长伞
              <span className="block text-lg font-normal text-green-600 mt-2">MIYABI SAKURA BRAIDED UMBRELLA</span>
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              采用传统日本编织工艺制作的高级长伞。精美的樱花图案编织手柄，展现了日本传统工艺的精湛技艺。每一把伞都是由经验丰富的职人手工制作，确保品质和美观。
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              这款伞不仅具有优秀的防雨功能，更是一件艺术品。无论是商务场合还是正式活动，都能彰显您的品味和风格。
            </p>
            <Link 
              to="/zh/products/braid-umbrella" 
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors inline-block cursor-pointer whitespace-nowrap"
            >
              了解详情
            </Link>
          </div>
          <div className="md:order-1">
            <img 
              src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/img03.jpg" 
              alt="雅樱编织长伞" 
              className="w-full rounded-lg shadow-lg object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BraidUmbrellaSection;