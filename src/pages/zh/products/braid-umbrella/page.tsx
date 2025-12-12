import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ZhBraidUmbrellaPage: React.FC = () => {
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
                    to="/ja/products/braid-umbrella"
                    className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg">🇯🇵</span>
                    <span className="text-sm">日本語</span>
                  </Link>
                  <Link
                    to="/products/braid-umbrella"
                    className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg">🇺🇸</span>
                    <span className="text-sm">English</span>
                  </Link>
                  <Link
                    to="/zh/products/braid-umbrella"
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
        <h1 className="text-4xl font-bold text-white">雅樱编织长伞</h1>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/zh" className="text-green-600 hover:text-green-800">首页</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-700">雅樱编织长伞</span>
          </nav>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <p className="text-xl text-gray-700">
            体现日本美学意识、真正可以称为日本伞的雨伞!
          </p>
        </div>

        {/* Main Content */}
        <section className="space-y-16">
          {/* First Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/braid/img01.jpg" 
                alt="雅樱编织长伞" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">
                <span className="text-green-600">日本传统编织工艺</span>
              </h2>
              <p className="text-gray-700 leading-relaxed">
                雅樱就是从这个概念中诞生的。
                使用让人联想到日本的材料——山樱、甲州织——工匠们一把一把地手工制作每把雨伞。
                甲州织布料是在染色线后编织的,因此纵横线创造出优雅、厚实的质感和手感,具有独特的光泽。
              </p>
            </div>
          </div>

          {/* Second Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/braid/img02.jpg" 
                alt="编织与雨伞的融合" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            <div className="space-y-6 md:order-1">
              <h2 className="text-2xl font-bold">
                <span className="text-green-600">编织与雨伞的融合</span>
              </h2>
              <p className="text-gray-700 leading-relaxed">
                受和服腰带绳的启发,我们精心地将编织绳缠绕在用奈良吉野稀有山樱雕刻的手柄上。
                雅樱的握感是前所未有的舒适触感。握伞时手柄不会滑动。
                甲州织和编织的独特质感创造出真正可以称为日本制造雨伞的作品。
              </p>
            </div>
          </div>

          {/* Center Text */}
          <div className="text-center py-8">
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              十根绳子以平纹手工编织,精心缠绕在山樱手柄上。
            </p>
          </div>

          {/* Third Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/braid/img03.png" 
                alt="具有扩展形状的吉祥物" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">
                <span className="text-green-600">具有扩展形状的吉祥物</span>
              </h2>
              <p className="text-gray-700 leading-relaxed">
                雨伞长期以来一直被视为具有扩展形状的吉祥物,并被用作订婚礼物和婚礼礼品。
                它们也非常适合作为送给亲人的礼物。如果出现任何问题,我们可以根据要求立即维修,因此您可以长期使用它们。
              </p>
            </div>
          </div>

          {/* Video Section */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-3xl font-bold text-center mb-8">
              视频介绍
              <span className="block text-lg font-normal text-green-600 mt-2">MOVIE</span>
            </h3>
            
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video mb-6">
                <iframe 
                  width="100%" 
                  height="450" 
                  src="https://www.youtube.com/embed/Q566FYjFcA4" 
                  title="雅樱编织长伞视频" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
              
              <div className="text-center space-y-2">
                <p className="text-gray-700">*获得款待精选奖。</p>
                <p className="text-gray-700">*获得编织手柄实用新型专利。</p>
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
    </div>
  );
};

export default ZhBraidUmbrellaPage;
