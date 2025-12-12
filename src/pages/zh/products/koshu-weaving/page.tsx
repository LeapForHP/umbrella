import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ZhKoshuWeavingPage: React.FC = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  
  const materials = [
    { name: "甲州织条纹", image: "https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/kosyu/img04.jpg" },
    { name: "甲州织双面背格", image: "https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/kosyu/img05.jpg" },
    { name: "甲州织双面素色", image: "https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/kosyu/img06.jpg" },
    { name: "甲州织锦缎", image: "https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/kosyu/img07.jpg" }
  ];

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
                    to="/ja/products/koshu-weaving"
                    className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg">🇯🇵</span>
                    <span className="text-sm">日本語</span>
                  </Link>
                  <Link
                    to="/products/koshu-weaving"
                    className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg">🇺🇸</span>
                    <span className="text-sm">English</span>
                  </Link>
                  <Link
                    to="/zh/products/koshu-weaving"
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
        <h1 className="text-4xl font-bold text-white">甲州织</h1>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/zh" className="text-green-600 hover:text-green-800">首页</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-700">甲州织</span>
          </nav>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            用富士山融雪水编织的日本工艺。<br/>
            散发日本和谐的优雅质感，带有光泽和宁静。
          </p>
        </div>

        {/* Main Content */}
        <section className="space-y-16">
          {/* First Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/kosyu/img01.png" 
                alt="甲州织" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">
                <span className="text-green-600">美丽的深沉颜色和光泽</span>
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  甲州织的美在于其先染。<br/>
                  因为线是先染色的，它们具有深沉的颜色和光泽，<br/>
                  散发出优雅和奢华。
                </p>
                
                <div className="mt-6">
                  <a 
                    href="https://youtu.be/gMR18OJuC5Q" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors inline-block whitespace-nowrap"
                  >
                    观看视频
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Second Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/kosyu/img02.png" 
                alt="甲州织工艺" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            <div className="space-y-6 md:order-1">
              <p className="text-gray-700 leading-relaxed">
                甲州织涉及提前染色线。<br/>
                颜色和图案通过经纬线的组合编织而成。
              </p>
              
              <div className="mt-6">
                <a 
                  href="https://www.youtube.com/watch?v=-YrMXeuof3o" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors inline-block whitespace-nowrap"
                >
                  观看视频
                </a>
              </div>
            </div>
          </div>

          {/* Third Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/kosyu/img03.png" 
                alt="终身物品" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">
                <span className="text-green-600">终身物品</span>
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  甲州织长期以来一直用于雨伞。<br/>
                  它建立了日本雨伞的地位。<br/>
                  非常适合作为送给亲人和庆祝活动的礼物。<br/>
                  特别雨天的终身物品。<br/>
                  可以维修，因此您可以长期使用。
                </p>
                
                <div className="mt-6">
                  <a 
                    href="https://www.youtube.com/watch?v=00SJ-0FD0YE" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors inline-block whitespace-nowrap"
                  >
                    观看视频
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Materials Section */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-3xl font-bold text-center mb-8">
              材料列表
              <span className="block text-lg font-normal text-green-600 mt-2">MATERIAL</span>
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {materials.map((material, index) => (
                <div key={index} className="text-center">
                  <img 
                    src={material.image} 
                    alt={material.name} 
                    className="w-full aspect-square object-cover rounded-lg shadow-lg mb-3"
                  />
                  <p className="text-sm font-medium text-gray-700">{material.name}</p>
                </div>
              ))}
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
                  <p className="text-gray-600">营业时间：10:00-17:00（周六、周日、节假日休息）</p>
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

export default ZhKoshuWeavingPage;
