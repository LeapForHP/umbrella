import React from 'react';
import { Link } from 'react-router-dom';

const RepairSection: React.FC = () => {
  return (
    <section id="repair" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          维修·修理服务
          <span className="block text-lg font-normal text-green-600 mt-2">SDGs INITIATIVE</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/img05.jpg" 
              alt="专业雨伞维修服务" 
              className="w-full rounded-lg shadow-lg object-top"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">
              可持续雨伞护理
            </h3>
            <p className="text-gray-700 leading-relaxed">
              我们的专业工匠提供全面的维修服务，延长您雨伞的使用寿命。
              从伞骨更换到面料修复，我们确保您的雨伞能为您服务多年。
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <i className="ri-check-line text-green-600 mr-2"></i>
                专业伞骨和框架维修
              </li>
              <li className="flex items-center">
                <i className="ri-check-line text-green-600 mr-2"></i>
                面料更换和修复
              </li>
              <li className="flex items-center">
                <i className="ri-check-line text-green-600 mr-2"></i>
                手柄和机械维护
              </li>
              <li className="flex items-center">
                <i className="ri-check-line text-green-600 mr-2"></i>
                防水处理
              </li>
            </ul>
            <Link 
              to="/zh/repair" 
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              了解更多维修信息
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepairSection;