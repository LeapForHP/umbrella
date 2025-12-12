import React from 'react';

const SocialSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          社交媒体·购买
          <span className="block text-lg font-normal text-green-600 mt-2">SOCIAL & PURCHASE</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-facebook-fill text-2xl text-white"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Facebook</h3>
            <p className="text-gray-600 mb-4">关注我们的最新动态</p>
            <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold cursor-pointer whitespace-nowrap">
              关注我们
            </a>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-instagram-line text-2xl text-white"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Instagram</h3>
            <p className="text-gray-600 mb-4">查看产品美图</p>
            <a href="#" className="text-pink-500 hover:text-pink-600 font-semibold cursor-pointer whitespace-nowrap">
              关注我们
            </a>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-youtube-fill text-2xl text-white"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">YouTube</h3>
            <p className="text-gray-600 mb-4">观看制作过程</p>
            <a href="#" className="text-red-600 hover:text-red-700 font-semibold cursor-pointer whitespace-nowrap">
              订阅频道
            </a>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-shopping-cart-line text-2xl text-white"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">在线商店</h3>
            <p className="text-gray-600 mb-4">购买我们的产品</p>
            <a href="https://maruyasu19.thebase.in/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 font-semibold cursor-pointer whitespace-nowrap">
              立即购买
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;