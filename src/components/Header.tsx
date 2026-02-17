import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation('common');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  // Use i18n language instead of URL-based language
  const currentLanguage = i18n.language || 'ja';

  // Get language display info
  const getLanguageInfo = (lang: string) => {
    switch (lang) {
      case 'ja': return { name: t('language.japanese') };
      case 'en': return { name: t('language.english') };
      case 'zh': return { name: t('language.chinese') };
      default:   return { name: t('language.japanese') };
    }
  };

  // Change language without navigating
  const changeLanguage = (targetLang: string) => {
    // Change i18n language only, don't navigate
    i18n.changeLanguage(targetLang);
    setIsLanguageOpen(false);
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
              <Link to="/" className="flex items-center">
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
            <Link to="/" className="text-gray-700 hover:text-green-600 font-medium whitespace-nowrap">
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
                      to="/products/silent-umbrella"
                      className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      {t('products.silentUmbrella')}
                    </Link>
                    <Link
                      to="/products/braid-umbrella"
                      className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      {t('products.braidUmbrella')}
                    </Link>
                    <Link
                      to="/products/folding-umbrella"
                      className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      {t('products.foldingUmbrella')}
                    </Link>
                    <Link
                      to="/products/parasol"
                      className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      {t('products.parasol')}
                    </Link>
                    <Link
                      to="/products/koshu-weaving"
                      className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      {t('products.koshuWeaving')}
                    </Link>
                    <Link
                      to="/products/others"
                      className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      {t('products.others')}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className="text-gray-700 hover:text-green-600 font-medium whitespace-nowrap">
              {t('nav.about')}
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-600 font-medium whitespace-nowrap">
              {t('nav.contact')}
            </Link>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-md border border-gray-300 hover:border-green-600 hover:bg-green-50 transition-colors cursor-pointer whitespace-nowrap"
              >
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
              <Link to="/" className="block text-gray-700 hover:text-green-600 font-medium">
                {t('nav.home')}
              </Link>
              <div>
                <div className="text-gray-700 font-medium mb-2">{t('nav.products')}</div>
                <div className="pl-4 space-y-2">
                  <Link to="/products/silent-umbrella" className="block text-sm text-gray-600 hover:text-green-600">
                    - {t('products.silentUmbrella')}
                  </Link>
                  <Link to="/products/braid-umbrella" className="block text-sm text-gray-600 hover:text-green-600">
                    - {t('products.braidUmbrella')}
                  </Link>
                  <Link to="/products/folding-umbrella" className="block text-sm text-gray-600 hover:text-green-600">
                    - {t('products.foldingUmbrella')}
                  </Link>
                  <Link to="/products/parasol" className="block text-sm text-gray-600 hover:text-green-600">
                    - {t('products.parasol')}
                  </Link>
                  <Link to="/products/koshu-weaving" className="block text-sm text-gray-600 hover:text-green-600">
                    - {t('products.koshuWeaving')}
                  </Link>
                  <Link to="/products/others" className="block text-sm text-gray-600 hover:text-green-600">
                    - {t('products.others')}
                  </Link>
                </div>
              </div>
              <Link to="/about" className="block text-gray-700 hover:text-green-600 font-medium">
                {t('nav.about')}
              </Link>
              <Link to="/contact" className="block text-gray-700 hover:text-green-600 font-medium">
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
                <Link to="/contact" className="flex items-center text-green-600">
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
