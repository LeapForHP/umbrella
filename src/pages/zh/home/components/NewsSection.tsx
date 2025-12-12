import React from 'react';
import { Link } from 'react-router-dom';

const NewsSection: React.FC = () => {
  return (
    <section id="news" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          新闻·通知
          <span className="block text-lg font-normal text-green-600 mt-2">NEWS</span>
        </h2>
        
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center space-x-4">
                <span className="text-green-600 font-semibold">2024.03.15</span>
                <span className="text-gray-900">
                  新年营业开始通知
                </span>
              </div>
              <Link to="/zh/news" className="text-green-600 hover:text-green-800 text-sm cursor-pointer whitespace-nowrap">
                查看详情 →
              </Link>
            </div>
            
            <div className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center space-x-4">
                <span className="text-green-600 font-semibold">2024.02.28</span>
                <span className="text-gray-900">
                  年末年始休业通知
                </span>
              </div>
              <Link to="/zh/news" className="text-green-600 hover:text-green-800 text-sm cursor-pointer whitespace-nowrap">
                查看详情 →
              </Link>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-green-600 font-semibold">2024.01.20</span>
                <span className="text-gray-900">
                  静音雨伞新型号发售开始
                </span>
              </div>
              <Link to="/zh/news" className="text-green-600 hover:text-green-800 text-sm cursor-pointer whitespace-nowrap">
                查看详情 →
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link to="/zh/news" className="text-green-600 hover:text-green-800 font-semibold cursor-pointer whitespace-nowrap">
              查看所有新闻 →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;