import React from 'react';
import { Link } from 'react-router-dom';

const ProductsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          产品一览
          <span className="block text-lg font-normal text-green-600 mt-2">PRODUCTS</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-product-shop>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img 
              src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/img02.jpg"
              alt="静音伞"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">静音伞</h3>
              <p className="text-gray-600 mb-4">获得专利的创新技术，大幅减少雨滴噪音</p>
              <Link to="/zh/products/silent-umbrella" className="text-green-600 hover:text-green-800 font-semibold cursor-pointer whitespace-nowrap">
                查看详情 →
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img 
              src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/img03.jpg"
              alt="雅樱编织长伞"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">雅樱编织长伞</h3>
              <p className="text-gray-600 mb-4">传统编织工艺，精美樱花图案</p>
              <Link to="/zh/products/braid-umbrella" className="text-green-600 hover:text-green-800 font-semibold cursor-pointer whitespace-nowrap">
                查看详情 →
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img 
              src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/img04.jpg"
              alt="雨袋折叠伞"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">雨袋折叠伞</h3>
              <p className="text-gray-600 mb-4">创新设计，配备专用收纳袋</p>
              <Link to="/zh/products/folding-umbrella" className="text-green-600 hover:text-green-800 font-semibold cursor-pointer whitespace-nowrap">
                查看详情 →
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img 
              src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/img07.jpg"
              alt="晴雨两用伞"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">晴雨两用伞</h3>
              <p className="text-gray-600 mb-4">防紫外线和防雨双重功能</p>
              <Link to="/zh/products/parasol" className="text-green-600 hover:text-green-800 font-semibold cursor-pointer whitespace-nowrap">
                查看详情 →
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img 
              src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/img08.jpg"
              alt="甲州织"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">甲州织</h3>
              <p className="text-gray-600 mb-4">传统甲州织面料，文化遗产工艺</p>
              <Link to="/zh/products/koshu-weaving" className="text-green-600 hover:text-green-800 font-semibold cursor-pointer whitespace-nowrap">
                查看详情 →
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img 
              src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/img09.jpg"
              alt="其他产品"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">其他</h3>
              <p className="text-gray-600 mb-4">各种雨伞配件和其他产品</p>
              <Link to="/zh/products/others" className="text-green-600 hover:text-green-800 font-semibold cursor-pointer whitespace-nowrap">
                查看详情 →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;