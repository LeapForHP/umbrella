import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ZhFoldingUmbrellaPage: React.FC = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Language Dropdown */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/zh" className="flex items-center">
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/logo.png"
                alt="Maruyasu Umbrella"
                className="h-12"
              />
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/zh/about" className="text-gray-700 hover:text-green-600 transition-colors">关于我们</Link>
              <div className="relative group">
                <button className="text-gray-700 hover:text-green-600 transition-colors flex items-center">
                  产品
                  <i className="ri-arrow-down-s-line ml-1"></i>
                </button>
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link to="/zh/products/silent-umbrella" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">静音伞</Link>
                  <Link to="/zh/products/braid-umbrella" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">编织伞</Link>
                  <Link to="/zh/products/folding-umbrella" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">折叠伞</Link>
                  <Link to="/zh/products/parasol" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">晴雨伞</Link>
                  <Link to="/zh/products/koshu-weaving" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">甲州织</Link>
                  <Link to="/zh/products/others" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">其他</Link>
                </div>
              </div>
              <Link to="/zh/repair" className="text-gray-700 hover:text-green-600 transition-colors">维修</Link>
              <Link to="/zh/news" className="text-gray-700 hover:text-green-600 transition-colors">新闻</Link>
              <Link to="/zh/contact" className="text-gray-700 hover:text-green-600 transition-colors">联系</Link>
            </nav>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                onMouseEnter={() => setIsLanguageOpen(true)}
                className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <span className="text-lg">🇨🇳</span>
                <span className="text-sm font-medium">中文</span>
                <i className="ri-arrow-down-s-line text-sm"></i>
              </button>

              {isLanguageOpen && (
                <div 
                  className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg py-2 min-w-[140px] z-50"
                  onMouseLeave={() => setIsLanguageOpen(false)}
                >
                  <Link
                    to="/ja/products/folding-umbrella"
                    className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg">🇯🇵</span>
                    <span className="text-sm">日本語</span>
                  </Link>
                  <Link
                    to="/products/folding-umbrella"
                    className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg">🇺🇸</span>
                    <span className="text-sm">English</span>
                  </Link>
                  <Link
                    to="/zh/products/folding-umbrella"
                    className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 transition-colors bg-blue-50"
                  >
                    <span className="text-lg">🇨🇳</span>
                    <span className="text-sm">中文</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-green-600 to-green-800 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">雨袋折叠伞</h1>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/zh" className="text-green-600 hover:text-green-800">首页</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-700">雨袋折叠伞</span>
          </nav>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Content */}
        <section className="space-y-16">
          {/* First Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/folding/img01.jpg" 
                alt="雨伞袋" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">
                似乎应该存在但从未有过的东西<br/>
                <span className="text-green-600">雨伞袋!</span>
              </h2>
              <p className="text-gray-700 leading-relaxed">
                非常适合购物、旅行、出差和雨天外出。
                雨袋开口宽,可以让您优雅地收纳折叠伞而无需折叠。
                由雨伞布料制成的雨袋即使在拥挤的火车上也不会因水滴给他人带来麻烦。
              </p>
            </div>
          </div>

          {/* Center Text */}
          <div className="text-center py-8">
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              那个麻烦的湿折叠伞收纳瞬间完成。
            </p>
          </div>

          {/* Second Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/folding/img03.png" 
                alt="绳钩" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            <div className="space-y-6 md:order-1">
              <h2 className="text-2xl font-bold">
                <span className="text-green-600">绳钩轻松</span><br/>
                挂在包上
              </h2>
              <p className="text-gray-700 leading-relaxed">
                开发始于我在雨天乘火车时,手里拿着庆祝礼物,左手拼命拿着行李,右手拿着折叠伞,试图在拥挤的火车上不让它弄湿,这非常困难。当时,我想如果有什么东西可以立即收纳雨伞就好了。
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>重要提示:</strong>使用后请展开并晾干。
              </p>
            </div>
          </div>

          {/* Full Width Image */}
          <div className="w-full">
            <img 
              src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/folding/img02.jpg" 
              alt="绳钩演示" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Video Section */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-3xl font-bold text-center mb-8">
              视频介绍
              <span className="block text-lg font-normal text-green-600 mt-2">FOLDING</span>
            </h3>
            
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video">
                <iframe 
                  width="100%" 
                  height="400" 
                  src="https://www.youtube.com/embed/mgbry1tOaBE" 
                  title="雨袋折叠伞视频" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-50 py-16 -mx-4 mt-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              联系我们
              <span className="block text-lg font-normal text-green-600 mt-2">CONTACT</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="mb-6">
                  <p className="text-2xl font-bold text-gray-800 mb-2">
                    <i className="ri-phone-line mr-2"></i>06-6713-8308
                  </p>
                  <p className="text-gray-600">营业时间:10:00-17:00(周六、周日、节假日休息)</p>
                </div>
              </div>
              
              <div className="text-center">
                <Link 
                  to="/zh/contact" 
                  className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap"
                >
                  <i className="ri-mail-line mr-2"></i>
                  电子邮件咨询
                </Link>
              </div>
            </div>

            <div className="text-center mt-8">
              <a 
                href="https://maruyasu19.thebase.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img 
                  src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/bannur.jpg" 
                  alt="访问我们的在线商店" 
                  className="max-w-sm mx-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ZhFoldingUmbrellaPage;
