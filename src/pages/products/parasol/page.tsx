import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ParasolPage: React.FC = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Language Dropdown */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/logo.png"
                alt="Maruyasu Umbrella"
                className="h-12"
              />
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/about" className="text-gray-700 hover:text-green-600 transition-colors">About Us</Link>
              <div className="relative group">
                <button className="text-gray-700 hover:text-green-600 transition-colors flex items-center">
                  Products
                  <i className="ri-arrow-down-s-line ml-1"></i>
                </button>
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link to="/products/silent-umbrella" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Silent Umbrella</Link>
                  <Link to="/products/braid-umbrella" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Braid Umbrella</Link>
                  <Link to="/products/folding-umbrella" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Folding Umbrella</Link>
                  <Link to="/products/parasol" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Parasol</Link>
                  <Link to="/products/koshu-weaving" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Koshu Weaving</Link>
                  <Link to="/products/others" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Others</Link>
                </div>
              </div>
              <Link to="/repair" className="text-gray-700 hover:text-green-600 transition-colors">Repair</Link>
              <Link to="/news" className="text-gray-700 hover:text-green-600 transition-colors">News</Link>
              <Link to="/contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact</Link>
            </nav>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                onMouseEnter={() => setIsLanguageOpen(true)}
                className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <span className="text-lg">🇺🇸</span>
                <span className="text-sm font-medium">English</span>
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
                    className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 transition-colors bg-blue-50"
                  >
                    <span className="text-lg">🇺🇸</span>
                    <span className="text-sm">English</span>
                  </Link>
                  <Link
                    to="/zh/products/parasol"
                    className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 transition-colors"
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
          <h1 className="text-4xl font-bold text-center">Rain or Shine Parasols</h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav className="text-sm text-gray-600">
          <a href="/" className="hover:text-green-600">Home</a>
          <span className="mx-2">&gt;</span>
          <span>Rain or Shine Parasols</span>
        </nav>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-16">
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            Following the Ministry of the Environment's call for heat countermeasures, parasols not only prevent sunburn<br className="hidden md:block" />
            but are also recommended for heatstroke prevention.<br className="hidden md:block" />
            It has been proven that compared to hats, the amount of sweat is significantly reduced.
          </p>
        </section>

        {/* Product 1: Koshu Weaving Brocade */}
        <section className="mb-20">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/parasol/img01.jpg" 
                alt="Koshu Weaving Brocade Rain or Shine Long Parasol"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-green-600">Koshu Weaving</span><br />
                Brocade Rain or Shine Long Parasol
              </h2>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-gray-600">KOB91E</span>
                <span className="text-2xl font-bold text-green-600">¥15,890 (tax included)</span>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Brocade fabric, which is also used in luxury dresses, has a lustrous floral pattern that appears to float.<br />
                When touched, the fabric itself swells and the floral pattern is woven. Its beauty exudes an elegant atmosphere and tranquility.
              </p>
              <a 
                href="https://www.youtube.com/watch?v=WUXHzL4AfEY" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-amber-800 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors"
              >
                Watch Video
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
                alt="Koshu Weaving Rain or Shine Long Parasol"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-green-600">Koshu Weaving</span><br />
                Rain or Shine Long Parasol
              </h2>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-gray-600">KO91</span>
                <span className="text-2xl font-bold text-green-600">¥11,500 (tax included)</span>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The beauty of Koshu weaving lies in its yarn-dyed technique. Since the yarn is dyed first, it has deep colors and luster, exuding elegance and luxury.<br />
                This rain or shine parasol is finished with a beautiful form using 12 ribs.
              </p>
              <a 
                href="https://youtu.be/xCELbcgKPfw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-amber-800 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors"
              >
                Watch Video
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
                alt="Chirimen Weaving Rain or Shine Folding Parasol"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-green-600">Chirimen Weaving</span><br />
                Rain or Shine Folding Parasol
              </h2>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-gray-600">CH81E</span>
                <span className="text-2xl font-bold text-green-600">¥16,500 (tax included)</span>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The deep colors and floral patterns of chirimen weaving have a slight luster and create a modest and elegant design.
              </p>
              <a 
                href="https://youtu.be/lt-3JG34w2k" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-amber-800 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors"
              >
                Watch Video
              </a>
            </div>
          </div>
        </section>

        {/* Materials Section */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-2">Fabric Collection</h3>
          <p className="text-center text-gray-600 mb-12 uppercase tracking-wider">MATERIAL</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/parasol/img03.jpg" 
                alt="Jacquard Weaving"
                className="w-full h-48 object-cover rounded-lg shadow-md mb-4"
              />
              <p className="font-medium">Jacquard Weaving</p>
            </div>
            <div className="text-center">
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/parasol/img04.jpg" 
                alt="Chirimen Weaving"
                className="w-full h-48 object-cover rounded-lg shadow-md mb-4"
              />
              <p className="font-medium">Chirimen Weaving</p>
            </div>
            <div className="text-center">
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/parasol/img05.jpg" 
                alt="Koshu Weaving Brocade"
                className="w-full h-48 object-cover rounded-lg shadow-md mb-4"
              />
              <p className="font-medium">Koshu Weaving Brocade</p>
            </div>
            <div className="text-center">
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/parasol/img06.jpg" 
                alt="Koshu Weaving Border"
                className="w-full h-48 object-cover rounded-lg shadow-md mb-4"
              />
              <p className="font-medium">Koshu Weaving Border</p>
            </div>
            <div className="text-center">
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/parasol/img07.jpg" 
                alt="Koshu Weaving Double-sided Back Plaid"
                className="w-full h-48 object-cover rounded-lg shadow-md mb-4"
              />
              <p className="font-medium">Koshu Weaving Double-sided Back Plaid</p>
            </div>
            <div className="text-center">
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/parasol/img08.jpg" 
                alt="Koshu Weaving Double-sided Plain"
                className="w-full h-48 object-cover rounded-lg shadow-md mb-4"
              />
              <p className="font-medium">Koshu Weaving Double-sided Plain</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-green-50 py-16 -mx-4 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2">Contact Us</h2>
            <p className="text-center text-gray-600 mb-12 uppercase tracking-wider">CONTACT</p>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <i className="ri-phone-line text-2xl text-green-600"></i>
                  <span className="text-3xl font-bold">06-6713-8308</span>
                </div>
                <p className="text-gray-600">Business Hours: 10:00~17:00 (Closed: Sat, Sun, Holidays)</p>
              </div>
              
              <div>
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <i className="ri-mail-line text-xl"></i>
                  Email Inquiry
                </a>
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
                  alt="Online Store"
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

export default ParasolPage;