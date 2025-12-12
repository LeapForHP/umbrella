import React from 'react';
import { Link } from 'react-router-dom';

const CompanySection: React.FC = () => {
  return (
    <section id="company" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              关于我们
              <span className="block text-lg font-normal text-green-600 mt-2">ABOUT US</span>
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              丸安洋伞株式会社是一家专注于手工制作高品质雨伞的日本企业。我们秉承传统工艺，同时不断创新，为客户提供既实用又美观的雨伞产品。
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              从传统的日本制雨伞到获得专利的静音雨伞，我们始终坚持品质第一的理念，每一把伞都凝聚着职人的匠心和技艺。
            </p>
            <Link 
              to="/zh/about" 
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors inline-block cursor-pointer whitespace-nowrap"
            >
              了解更多
            </Link>
          </div>
          <div className="md:order-1">
            <img 
              src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/img06.jpg" 
              alt="公司介绍" 
              className="w-full rounded-lg shadow-lg object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;