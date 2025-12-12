import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const location = useLocation();

  // Determine current language based on URL
  const getCurrentLanguage = () => {
    if (location.pathname.startsWith('/zh')) {
      return 'zh';
    }
    return 'ja'; // Default to Japanese
  };

  const currentLanguage = getCurrentLanguage();

  // Get language display info
  const getLanguageInfo = (lang: string) => {
    switch (lang) {
      case 'ja':
        return { 
          name: '日本語', 
          flag: (
            <div className="w-6 h-4 bg-white border border-gray-200 rounded-sm flex items-center justify-center relative">
              <div className="w-3 h-3 bg-red-600 rounded-full"></div>
            </div>
          )
        };
      case 'en':
        return { 
          name: 'English', 
          flag: (
            <div className="w-6 h-4 bg-red-600 rounded-sm flex items-center justify-center">
              <div className="w-4 h-3 bg-white rounded-sm flex items-center justify-center">
                <div className="w-3 h-1.5 bg-red-600 rounded-sm"></div>
              </div>
            </div>
          )
        };
      case 'zh':
        return { 
          name: '中文', 
          flag: (
            <div className="w-6 h-4 bg-red-600 rounded-sm flex items-center justify-center relative">
              <div className="absolute top-0 left-0 w-3 h-2 bg-red-600"></div>
              <div className="absolute top-0 right-0 w-3 h-4 bg-yellow-400 flex items-center justify-center">
                <div className="text-red-600 text-xs">★</div>
              </div>
            </div>
          )
        };
      default:
        return { name: '日本語', flag: null };
    }
  };

  // Get path for language switch
  const getLanguagePath = (targetLang: string) => {
    const currentPath = location.pathname;
    
    if (targetLang === 'ja') {
      // Convert to Japanese (default) - remove language prefix
      if (currentPath.startsWith('/zh')) {
        return currentPath.replace('/zh', '') || '/';
      }
      return currentPath;
    } else if (targetLang === 'zh') {
      // Convert to Chinese
      if (currentPath.startsWith('/zh')) {
        return currentPath;
      }
      return currentPath === '/' ? '/zh' : `/zh${currentPath}`;
    } else if (targetLang === 'en') {
      // Convert to English (same as Japanese for now)
      if (currentPath.startsWith('/zh')) {
        return currentPath.replace('/zh', '') || '/';
      }
      return currentPath;
    }
    
    return currentPath;
  };

  const languages = ['ja', 'en', 'zh'];
  const currentLangInfo = getLanguageInfo(currentLanguage);

  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1>
              <a href={currentLanguage === 'zh' ? '/zh' : '/'} className="flex items-center">
                <img 
                  src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/logo_hd.jpg" 
                  alt="Maruyasu Umbrella Co., Ltd. | Handcrafted Japanese Umbrellas"
                  className="h-12"
                />
              </a>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 items-center">
            {currentLanguage === 'zh' ? (
              <>
                <a href="/zh" className="text-gray-700 hover:text-green-600 font-medium whitespace-nowrap">首页</a>
                <div className="relative">
                  <button
                    onClick={() => setIsProductsOpen(!isProductsOpen)}
                    className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <span>产品</span>
                    <i className={`ri-arrow-down-s-line transition-transform ${isProductsOpen ? 'rotate-180' : ''}`}></i>
                  </button>
                  
                  {isProductsOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border z-50">
                      <div className="py-2">
                        <Link 
                          to="/zh/products/silent-umbrella" 
                          className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                          onClick={() => setIsProductsOpen(false)}
                        >
                          静音伞
                        </Link>
                        <Link 
                          to="/zh/products/braid-umbrella" 
                          className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                          onClick={() => setIsProductsOpen(false)}
                        >
                          雅樱编织长伞
                        </Link>
                        <Link 
                          to="/zh/products/folding-umbrella" 
                          className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                          onClick={() => setIsProductsOpen(false)}
                        >
                          雨袋折叠伞
                        </Link>
                        <Link 
                          to="/zh/products/parasol" 
                          className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                          onClick={() => setIsProductsOpen(false)}
                        >
                          晴雨两用伞
                        </Link>
                        <Link 
                          to="/zh/products/koshu-weaving" 
                          className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                          onClick={() => setIsProductsOpen(false)}
                        >
                          甲州织
                        </Link>
                        <Link 
                          to="/zh/products/others" 
                          className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                          onClick={() => setIsProductsOpen(false)}
                        >
                          其他
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                <Link to="/zh/repair" className="text-gray-700 hover:text-green-600 transition-colors whitespace-nowrap">
                  维修服务
                </Link>
                <Link to="/zh/about" className="text-gray-700 hover:text-green-600 font-medium whitespace-nowrap">关于我们</Link>
                <Link to="/zh/news" className="text-gray-700 hover:text-green-600 font-medium whitespace-nowrap">新闻</Link>
                <Link to="/zh/contact" className="text-gray-700 hover:text-green-600 font-medium whitespace-nowrap">联系我们</Link>
              </>
            ) : (
              <>
                <a href="/" className="text-gray-700 hover:text-green-600 font-medium whitespace-nowrap">ホーム</a>
                <div className="relative">
                  <button
                    onClick={() => setIsProductsOpen(!isProductsOpen)}
                    className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <span>製品</span>
                    <i className={`ri-arrow-down-s-line transition-transform ${isProductsOpen ? 'rotate-180' : ''}`}></i>
                  </button>
                  
                  {isProductsOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border z-50">
                      <div className="py-2">
                        <Link 
                          to="/products/silent-umbrella" 
                          className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                          onClick={() => setIsProductsOpen(false)}
                        >
                          静音傘
                        </Link>
                        <Link 
                          to="/products/braid-umbrella" 
                          className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                          onClick={() => setIsProductsOpen(false)}
                        >
                          雅桜編組長傘
                        </Link>
                        <Link 
                          to="/products/folding-umbrella" 
                          className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                          onClick={() => setIsProductsOpen(false)}
                        >
                          レインポケット折りたたみ傘
                        </Link>
                        <Link 
                          to="/products/parasol" 
                          className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                          onClick={() => setIsProductsOpen(false)}
                        >
                          晴雨兼用日傘
                        </Link>
                        <Link 
                          to="/products/koshu-weaving" 
                          className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                          onClick={() => setIsProductsOpen(false)}
                        >
                          甲州織
                        </Link>
                        <Link 
                          to="/products/others" 
                          className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                          onClick={() => setIsProductsOpen(false)}
                        >
                          その他
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                <Link to="/repair" className="text-gray-700 hover:text-green-600 transition-colors whitespace-nowrap">
                  修理サービス
                </Link>
                <Link to="/about" className="text-gray-700 hover:text-green-600 font-medium whitespace-nowrap">会社概要</Link>
                <Link to="/news" className="text-gray-700 hover:text-green-600 font-medium whitespace-nowrap">ニュース</Link>
                <Link to="/contact" className="text-gray-700 hover:text-green-600 font-medium whitespace-nowrap">お問い合わせ</Link>
              </>
            )}
            
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-md border border-gray-300 hover:border-green-600 hover:bg-green-50 transition-colors cursor-pointer whitespace-nowrap"
              >
                {currentLangInfo.flag}
                <span className="text-sm font-medium">{currentLangInfo.name}</span>
                <i className={`ri-arrow-down-s-line text-xs transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`}></i>
              </button>
              
              {isLanguageOpen && (
                <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border z-50">
                  <div className="py-2">
                    {languages.map((lang) => {
                      const langInfo = getLanguageInfo(lang);
                      return (
                        <a
                          key={lang}
                          href={getLanguagePath(lang)}
                          className={`flex items-center space-x-2 px-4 py-2 text-sm transition-colors cursor-pointer ${
                            lang === currentLanguage
                              ? 'bg-green-50 text-green-600'
                              : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
                          }`}
                          onClick={() => setIsLanguageOpen(false)}
                        >
                          {langInfo.flag}
                          <span>{langInfo.name}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600 focus:outline-none"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                <span className={`block w-5 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="py-4 space-y-4">
              {currentLanguage === 'zh' ? (
                <>
                  <a href="/zh" className="block text-gray-700 hover:text-green-600 font-medium">首页</a>
                  <div>
                    <div className="text-gray-700 font-medium mb-2">产品</div>
                    <div className="pl-4 space-y-2">
                      <Link to="/zh/products/silent-umbrella" className="block text-sm text-gray-600 hover:text-green-600">- 静音伞</Link>
                      <Link to="/zh/products/braid-umbrella" className="block text-sm text-gray-600 hover:text-green-600">- 雅樱编织长伞</Link>
                      <Link to="/zh/products/folding-umbrella" className="block text-sm text-gray-600 hover:text-green-600">- 雨袋折叠伞</Link>
                      <Link to="/zh/products/parasol" className="block text-sm text-gray-600 hover:text-green-600">- 晴雨两用伞</Link>
                      <Link to="/zh/products/koshu-weaving" className="block text-sm text-gray-600 hover:text-green-600">- 甲州织</Link>
                      <Link to="/zh/products/others" className="block text-sm text-gray-600 hover:text-green-600">- 其他</Link>
                    </div>
                  </div>
                  <Link to="/zh/repair" className="block text-gray-700 hover:text-green-600 font-medium">维修服务</Link>
                  <Link to="/zh/about" className="block text-gray-700 hover:text-green-600 font-medium">关于我们</Link>
                  <Link to="/zh/news" className="block text-gray-700 hover:text-green-600 font-medium">新闻</Link>
                  <Link to="/zh/contact" className="block text-gray-700 hover:text-green-600 font-medium">联系我们</Link>
                </>
              ) : (
                <>
                  <a href="/" className="block text-gray-700 hover:text-green-600 font-medium">ホーム</a>
                  <div>
                    <div className="text-gray-700 font-medium mb-2">製品</div>
                    <div className="pl-4 space-y-2">
                      <Link to="/products/silent-umbrella" className="block text-sm text-gray-600 hover:text-green-600">- 静音傘</Link>
                      <Link to="/products/braid-umbrella" className="block text-sm text-gray-600 hover:text-green-600">- 雅桜編組長傘</Link>
                      <Link to="/products/folding-umbrella" className="block text-sm text-gray-600 hover:text-green-600">- レインポケット折りたたみ傘</Link>
                      <Link to="/products/parasol" className="block text-sm text-gray-600 hover:text-green-600">- 晴雨兼用日傘</Link>
                      <Link to="/products/koshu-weaving" className="block text-sm text-gray-600 hover:text-green-600">- 甲州織</Link>
                      <Link to="/products/others" className="block text-sm text-gray-600 hover:text-green-600">- その他</Link>
                    </div>
                  </div>
                  <Link to="/repair" className="block text-gray-700 hover:text-green-600 font-medium">修理サービス</Link>
                  <Link to="/about" className="block text-gray-700 hover:text-green-600 font-medium">会社概要</Link>
                  <Link to="/news" className="block text-gray-700 hover:text-green-600 font-medium">ニュース</Link>
                  <Link to="/contact" className="block text-gray-700 hover:text-green-600 font-medium">お問い合わせ</Link>
                </>
              )}
              
              {/* Mobile Language Selection */}
              <div className="pt-4 border-t">
                <div className="text-gray-700 font-medium mb-2">言語 / Language</div>
                <div className="space-y-2">
                  {languages.map((lang) => {
                    const langInfo = getLanguageInfo(lang);
                    return (
                      <a
                        key={lang}
                        href={getLanguagePath(lang)}
                        className={`flex items-center space-x-2 text-sm cursor-pointer ${
                          lang === currentLanguage
                            ? 'text-green-600 font-medium'
                            : 'text-gray-600 hover:text-green-600'
                        }`}
                      >
                        {langInfo.flag}
                        <span>{langInfo.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <div className="flex items-center text-green-600 mb-2">
                  <i className="ri-phone-line mr-2"></i>
                  <span className="font-mono">06-6713-8308</span>
                </div>
                <Link to={currentLanguage === 'zh' ? '/zh/contact' : '/contact'} className="flex items-center text-green-600">
                  <i className="ri-mail-line mr-2"></i>
                  <span>{currentLanguage === 'zh' ? '联系我们' : 'お問い合わせ'}</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;