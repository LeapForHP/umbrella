import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation('common');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Determine current language based on URL
  const getCurrentLanguage = () => {
    if (location.pathname.startsWith('/zh')) {
      return 'zh';
    }
    if (location.pathname.startsWith('/ja')) {
      return 'ja';
    }
    return 'en'; // Default to English
  };

  const currentLanguage = getCurrentLanguage();

  // Get language display info
  const getLanguageInfo = (lang: string) => {
    switch (lang) {
      case 'ja':
        return {
          name: t('language.japanese'),
          flag: (
            <div className="w-6 h-4 bg-white border border-gray-200 rounded-sm flex items-center justify-center relative">
              <div className="w-3 h-3 bg-red-600 rounded-full"></div>
            </div>
          )
        };
      case 'en':
        return {
          name: t('language.english'),
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
          name: t('language.chinese'),
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
        return { name: t('language.japanese'), flag: null };
    }
  };

  // Change language and navigate to corresponding path
  const changeLanguage = (targetLang: string) => {
    let currentPath = location.pathname;

    // Remove current language prefix
    if (currentPath.startsWith('/zh')) {
      currentPath = currentPath.replace('/zh', '') || '/';
    } else if (currentPath.startsWith('/ja')) {
      currentPath = currentPath.replace('/ja', '') || '/';
    }

    // Add target language prefix and navigate
    let newPath = currentPath;
    if (targetLang === 'ja') {
      newPath = currentPath === '/' ? '/ja' : `/ja${currentPath}`;
    } else if (targetLang === 'zh') {
      newPath = currentPath === '/' ? '/zh' : `/zh${currentPath}`;
    }

    // Change i18n language
    i18n.changeLanguage(targetLang);

    // Navigate to new path
    navigate(newPath);
    setIsLanguageOpen(false);
  };

  const languages = ['ja', 'en', 'zh'];
  const currentLangInfo = getLanguageInfo(currentLanguage);

  // Get base path for current language
  const getBasePath = () => {
    if (currentLanguage === 'zh') return '/zh';
    if (currentLanguage === 'ja') return '/ja';
    return '';
  };

  const basePath = getBasePath();

  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1>
              <Link to={basePath || '/'} className="flex items-center">
                <img
                  src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/logo_hd.jpg"
                  alt="Maruyasu Umbrella Co., Ltd. | Handcrafted Japanese Umbrellas"
                  className="h-12"
                />
              </Link>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 items-center">
            <Link to={basePath || '/'} className="text-gray-700 hover:text-green-600 font-medium whitespace-nowrap">
              {t('nav.home')}
            </Link>

            <div className="relative">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>{t('nav.products')}</span>
                <i className={`ri-arrow-down-s-line transition-transform ${isProductsOpen ? 'rotate-180' : ''}`}></i>
              </button>

              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border z-50">
                  <div className="py-2">
                    <Link
                      to={`${basePath}/products/silent-umbrella`}
                      className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      {t('products.silentUmbrella')}
                    </Link>
                    <Link
                      to={`${basePath}/products/braid-umbrella`}
                      className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      {t('products.braidUmbrella')}
                    </Link>
                    <Link
                      to={`${basePath}/products/folding-umbrella`}
                      className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      {t('products.foldingUmbrella')}
                    </Link>
                    <Link
                      to={`${basePath}/products/parasol`}
                      className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      {t('products.parasol')}
                    </Link>
                    <Link
                      to={`${basePath}/products/koshu-weaving`}
                      className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      {t('products.koshuWeaving')}
                    </Link>
                    <Link
                      to={`${basePath}/products/others`}
                      className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      {t('products.others')}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to={`${basePath}/repair`} className="text-gray-700 hover:text-green-600 transition-colors whitespace-nowrap">
              {t('nav.repair')}
            </Link>
            <Link to={`${basePath}/about`} className="text-gray-700 hover:text-green-600 font-medium whitespace-nowrap">
              {t('nav.about')}
            </Link>
            <Link to={`${basePath}/news`} className="text-gray-700 hover:text-green-600 font-medium whitespace-nowrap">
              {t('nav.news')}
            </Link>
            <Link to={`${basePath}/contact`} className="text-gray-700 hover:text-green-600 font-medium whitespace-nowrap">
              {t('nav.contact')}
            </Link>

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
                        <button
                          key={lang}
                          onClick={() => changeLanguage(lang)}
                          className={`w-full flex items-center space-x-2 px-4 py-2 text-sm transition-colors cursor-pointer ${
                            lang === currentLanguage
                              ? 'bg-green-50 text-green-600'
                              : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
                          }`}
                        >
                          {langInfo.flag}
                          <span>{langInfo.name}</span>
                        </button>
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
              <Link to={basePath || '/'} className="block text-gray-700 hover:text-green-600 font-medium">
                {t('nav.home')}
              </Link>
              <div>
                <div className="text-gray-700 font-medium mb-2">{t('nav.products')}</div>
                <div className="pl-4 space-y-2">
                  <Link to={`${basePath}/products/silent-umbrella`} className="block text-sm text-gray-600 hover:text-green-600">
                    - {t('products.silentUmbrella')}
                  </Link>
                  <Link to={`${basePath}/products/braid-umbrella`} className="block text-sm text-gray-600 hover:text-green-600">
                    - {t('products.braidUmbrella')}
                  </Link>
                  <Link to={`${basePath}/products/folding-umbrella`} className="block text-sm text-gray-600 hover:text-green-600">
                    - {t('products.foldingUmbrella')}
                  </Link>
                  <Link to={`${basePath}/products/parasol`} className="block text-sm text-gray-600 hover:text-green-600">
                    - {t('products.parasol')}
                  </Link>
                  <Link to={`${basePath}/products/koshu-weaving`} className="block text-sm text-gray-600 hover:text-green-600">
                    - {t('products.koshuWeaving')}
                  </Link>
                  <Link to={`${basePath}/products/others`} className="block text-sm text-gray-600 hover:text-green-600">
                    - {t('products.others')}
                  </Link>
                </div>
              </div>
              <Link to={`${basePath}/repair`} className="block text-gray-700 hover:text-green-600 font-medium">
                {t('nav.repair')}
              </Link>
              <Link to={`${basePath}/about`} className="block text-gray-700 hover:text-green-600 font-medium">
                {t('nav.about')}
              </Link>
              <Link to={`${basePath}/news`} className="block text-gray-700 hover:text-green-600 font-medium">
                {t('nav.news')}
              </Link>
              <Link to={`${basePath}/contact`} className="block text-gray-700 hover:text-green-600 font-medium">
                {t('nav.contact')}
              </Link>

              {/* Mobile Language Selection */}
              <div className="pt-4 border-t">
                <div className="text-gray-700 font-medium mb-2">Language</div>
                <div className="space-y-2">
                  {languages.map((lang) => {
                    const langInfo = getLanguageInfo(lang);
                    return (
                      <button
                        key={lang}
                        onClick={() => changeLanguage(lang)}
                        className={`w-full flex items-center space-x-2 text-sm cursor-pointer ${
                          lang === currentLanguage
                            ? 'text-green-600 font-medium'
                            : 'text-gray-600 hover:text-green-600'
                        }`}
                      >
                        {langInfo.flag}
                        <span>{langInfo.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 border-t">
                <div className="flex items-center text-green-600 mb-2">
                  <i className="ri-phone-line mr-2"></i>
                  <span className="font-mono">06-6713-8308</span>
                </div>
                <Link to={`${basePath}/contact`} className="flex items-center text-green-600">
                  <i className="ri-mail-line mr-2"></i>
                  <span>{t('nav.contact')}</span>
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
