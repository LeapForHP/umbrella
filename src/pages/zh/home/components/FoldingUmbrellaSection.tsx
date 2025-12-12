import React from 'react';
import { Link } from 'react-router-dom';

const FoldingUmbrellaSection: React.FC = () => {
  return (
    <section id="folding" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              雨袋折叠伞
              <span className="block text-lg font-normal text-green-600 mt-2">RAIN POCKET FOLDING UMBRELLA</span>
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              创新设计的折叠伞，配备专用的雨水收纳袋。使用后可以将湿润的伞面收纳在防水袋中，避免弄湿包包或衣物。便携设计让您随时随地都能应对突然的降雨。
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              轻量化设计和坚固的伞骨结构，确保在强风中也能保持稳定。是现代都市生活的理想选择。
            </p>
            <Link 
              to="/zh/products/folding-umbrella" 
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors inline-block cursor-pointer whitespace-nowrap"
            >
              了解详情
            </Link>
          </div>
          <div>
            <img 
              src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/img04.jpg" 
              alt="雨袋折叠伞" 
              className="w-full rounded-lg shadow-lg object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoldingUmbrellaSection;