import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ZhParasolPage: React.FC = () => {
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
                    to="/ja/products/parasol"
                    className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg">🇯🇵</span>
                    <span className="text-sm">日本語</span>
                  </Link>
                  <Link
                    to="/products/parasol"
                    className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg">🇺🇸</span>
                    <span className="text-sm">English</span>
                  </Link>
                  <Link
                    to="/zh/products/parasol"
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
      <div className="bg-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">晴雨两用遮阳伞</h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/zh" className="text-blue-600 hover:text-blue-800">首页</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-700">晴雨两用遮阳伞</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-16">
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            根据环境省的防暑对策呼吁，遮阳伞不仅可以防止晒伤<br className="hidden md:block" />
            还被推荐用于预防中暑。<br className="hidden md:block" />
            已经证明，与帽子相比，出汗量显著减少。
          </p>
        </section>

        {/* Product 1: Koshu Weaving Brocade */}
        <section className="mb-20">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/parasol/img01.jpg" 
                alt="甲州织锦缎晴雨两用长遮阳伞"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-green-600">甲州织</span><br />
                锦缎晴雨两用长遮阳伞
              </h2>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-gray-600">KOB91E</span>
                <span className="text-2xl font-bold text-green-600">¥15,890（含税）</span>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                锦缎布料也用于豪华礼服，具有光泽的花卉图案似乎漂浮在上面。<br />
                触摸时，布料本身会膨胀，花卉图案被编织进去。它的美丽散发出优雅的氛围和宁静。
              </p>
              <a 
                href="https://www.youtube.com/watch?v=WUXHzL4AfEY" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-amber-800 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors"
              >
                观看视频
              </a>
            </div>
          </div>
        </section>

        {/* Product 2: Koshu Weaving */}
        <section className="mb-20">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
            <div className="lg:w-1/2">
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/parasol/img02.jpg" 
                alt="甲州织晴雨两用长遮阳伞"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-green-600">甲州织</span><br />
                晴雨两用长遮阳伞
              </h2>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-gray-600">KO91</span>
                <span className="text-2xl font-bold text-green-600">¥11,500（含税）</span>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                甲州织的美在于其先染技术。由于线是先染色的，它具有深沉的颜色和光泽，散发出优雅和奢华。<br />
                这款晴雨两用遮阳伞使用12根伞骨完成了美丽的形状。
              </p>
              <a 
                href="https://youtu.be/xCELbcgKPfw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-amber-800 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors"
              >
                观看视频
              </a>
            </div>
          </div>
        </section>

        {/* Product 3: Chirimen Weaving */}
        <section className="mb-20">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/parasol/img03.png" 
                alt="绉织晴雨两用折叠遮阳伞"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-green-600">绉织</span><br />
                晴雨两用折叠遮阳伞
              </h2>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-gray-600">CH81E</span>
                <span className="text-2xl font-bold text-green-600">¥16,500（含税）</span>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                绉织的深沉颜色和花卉图案具有轻微的光泽，营造出谦逊优雅的设计。
              </p>
              <a 
                href="https://youtu.be/lt-3JG34w2k" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-amber-800 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors"
              >
                观看视频
              </a>
            </div>
          </div>
        </section>

        {/* Materials Section */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-2">布料系列</h3>
          <p className="text-center text-gray-600 mb-12 uppercase tracking-wider">MATERIAL</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/parasol/img03.jpg" 
                alt="提花织"
                className="w-full h-48 object-cover rounded-lg shadow-md mb-4"
              />
              <p className="font-medium">提花织</p>
            </div>
            <div className="text-center">
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/parasol/img04.jpg" 
                alt="绉织"
                className="w-full h-48 object-cover rounded-lg shadow-md mb-4"
              />
              <p className="font-medium">绉织</p>
            </div>
            <div className="text-center">
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/parasol/img05.jpg" 
                alt="甲州织锦缎"
                className="w-full h-48 object-cover rounded-lg shadow-md mb-4"
              />
              <p className="font-medium">甲州织锦缎</p>
            </div>
            <div className="text-center">
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/parasol/img06.jpg" 
                alt="甲州织条纹"
                className="w-full h-48 object-cover rounded-lg shadow-md mb-4"
              />
              <p className="font-medium">甲州织条纹</p>
            </div>
            <div className="text-center">
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/parasol/img07.jpg" 
                alt="甲州织双面背格"
                className="w-full h-48 object-cover rounded-lg shadow-md mb-4"
              />
              <p className="font-medium">甲州织双面背格</p>
            </div>
            <div className="text-center">
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/parasol/img08.jpg" 
                alt="甲州织双面素色"
                className="w-full h-48 object-cover rounded-lg shadow-md mb-4"
              />
              <p className="font-medium">甲州织双面素色</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-blue-50 py-16 -mx-4 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2">联系我们</h2>
            <p className="text-center text-gray-600 mb-12 uppercase tracking-wider">CONTACT</p>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <i className="ri-phone-line text-2xl text-blue-600"></i>
                  <span className="text-3xl font-bold">06-6713-8308</span>
                </div>
                <p className="text-gray-600">营业时间：10:00~17:00（周六、周日、节假日休息）</p>
              </div>
              
              <div>
                <Link 
                  to="/zh/contact" 
                  className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <i className="ri-mail-line text-xl"></i>
                  电子邮件咨询
                </Link>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <a 
                href="https://maruyasu19.thebase.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img 
                  src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/bannur.jpg" 
                  alt="在线商店"
                  className="h-16 mx-auto hover:opacity-80 transition-opacity"
                />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ZhParasolPage;