import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../home/components/Footer';

const FoldingUmbrellaPage: React.FC = () => {
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
                    to="/ja/products/folding-umbrella"
                    className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg">🇯🇵</span>
                    <span className="text-sm">日本語</span>
                  </Link>
                  <Link
                    to="/products/folding-umbrella"
                    className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 transition-colors bg-blue-50"
                  >
                    <span className="text-lg">🇺🇸</span>
                    <span className="text-sm">English</span>
                  </Link>
                  <Link
                    to="/zh/products/folding-umbrella"
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
      <div className="relative h-64 bg-gradient-to-r from-green-600 to-green-800 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Rain Pocket Folding Umbrella</h1>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-green-600 hover:text-green-800">Home</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-700">Rain Pocket Folding Umbrella</span>
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
                alt="Umbrella bag" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">
                Something that seemed like it should exist, but never did before<br/>
                <span className="text-green-600">Umbrella Bag!</span>
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Very convenient for shopping, traveling, business trips, and rainy day outings.
                Rain Pocket has a wide opening and allows you to smartly store folding umbrellas without folding them.
                The Rain Pocket made from umbrella fabric won't cause trouble to others with water droplets even in crowded trains.
              </p>
            </div>
          </div>

          {/* Center Text */}
          <div className="text-center py-8">
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              That troublesome storage of wet folding umbrellas is completed in an instant.
            </p>
          </div>

          {/* Second Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/folding/img03.png" 
                alt="String hook" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            <div className="space-y-6 md:order-1">
              <h2 className="text-2xl font-bold">
                <span className="text-green-600">Easy with String Hook</span><br/>
                Hang it on your bag
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The development began when I was on a train on a rainy day, holding a celebratory present, desperately trying to hold luggage in my left hand and a folding umbrella in my right hand to keep it from getting wet in the crowded train, which was very difficult. At that time, I thought it would be great if there was something that could instantly store the umbrella.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Important:</strong> Please spread it out and air dry after use.
              </p>
            </div>
          </div>

          {/* Full Width Image */}
          <div className="w-full">
            <img 
              src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/folding/img02.jpg" 
              alt="String hook demonstration" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Video Section */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-3xl font-bold text-center mb-8">
              Video Introduction
              <span className="block text-lg font-normal text-green-600 mt-2">FOLDING</span>
            </h3>
            
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video">
                <iframe 
                  width="100%" 
                  height="400" 
                  src="https://www.youtube.com/embed/mgbry1tOaBE" 
                  title="Rain Pocket Folding Umbrella video" 
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
              Contact Us
              <span className="block text-lg font-normal text-green-600 mt-2">CONTACT</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="mb-6">
                  <p className="text-2xl font-bold text-gray-800 mb-2">
                    <i className="ri-phone-line mr-2"></i>06-6713-8308
                  </p>
                  <p className="text-gray-600">Business Hours: 10:00-17:00 (Closed: Sat, Sun, Holidays)</p>
                </div>
              </div>
              
              <div className="text-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <i className="ri-mail-line mr-2"></i>
                  Email Inquiry
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
                  alt="Visit our online store" 
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

export default FoldingUmbrellaPage;