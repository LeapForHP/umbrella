import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NewsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 7;

  const newsItems = [
    {
      date: '2025-10-15',
      title: 'POPUP Exhibition at Abeno Harukas! / Osaka Creative Fair',
      link: '#'
    },
    {
      date: '2025-09-01',
      title: 'Exhibition and Sales Corner Renewal Notice',
      link: '#'
    },
    {
      date: '2025-09-01',
      title: 'Featured in Yomiuri Shimbun!',
      link: '#'
    },
    {
      date: '2025-09-01',
      title: 'Appeared on ABC Radio "Dokkiri! Hakkiri! Miyosawa Koji desu"!',
      link: '#'
    },
    {
      date: '2025-07-08',
      title: 'POPUP Exhibition at Daimaru Interior Hall "Musée-L" Summer Grand Festa!',
      link: '#'
    },
    {
      date: '2025-06-09',
      title: 'POPUP Exhibition at Hankyu Umeda Main Store!',
      link: '#'
    }
  ];

  const renderPagination = () => {
    const pages = [];
    
    // Current page indicator
    pages.push(
      <span key="current-info" className="text-gray-600 mr-4">
        {currentPage} / {totalPages}
      </span>
    );

    // Page 1 (current)
    pages.push(
      <span key={1} className="bg-green-800 text-white px-3 py-2 rounded mr-2">
        1
      </span>
    );

    // Pages 2-5
    for (let i = 2; i <= 5; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className="bg-green-800 text-white px-3 py-2 rounded mr-2 hover:bg-green-700 transition-colors"
        >
          {i}
        </button>
      );
    }

    // Ellipsis
    pages.push(
      <span key="ellipsis" className="text-gray-600 px-2">...</span>
    );

    // Next button
    pages.push(
      <button
        key="next"
        onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
        className="bg-green-800 text-white px-3 py-2 rounded mr-2 hover:bg-green-700 transition-colors"
      >
        »
      </button>
    );

    // Last page button
    pages.push(
      <button
        key="last"
        onClick={() => setCurrentPage(totalPages)}
        className="bg-green-800 text-white px-3 py-2 rounded hover:bg-green-700 transition-colors"
      >
        Last »
      </button>
    );

    return pages;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-green-800" style={{ fontFamily: 'Pacifico, serif' }}>
                logo
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8 items-center">
              <Link to="/" className="text-gray-700 hover:text-green-800 transition-colors">Home</Link>
              <div className="relative group">
                <button className="text-gray-700 hover:text-green-800 transition-colors flex items-center">
                  Products
                  <i className="ri-arrow-down-s-line ml-1"></i>
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <Link to="/products/silent-umbrella" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-800">Silent Umbrella</Link>
                    <Link to="/products/braid-umbrella" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-800">Miyabi Sakura Braided Long Umbrella</Link>
                    <Link to="/products/folding-umbrella" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-800">Rain Pocket Folding Umbrella</Link>
                    <Link to="/products/parasol" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-800">Rain or Shine Parasol</Link>
                    <Link to="/products/koshu-weaving" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-800">Koshu Weaving</Link>
                    <Link to="/products/others" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-800">Others</Link>
                  </div>
                </div>
              </div>
              <Link to="/repair" className="text-gray-700 hover:text-green-800 transition-colors">Repair Service</Link>
              <Link to="/about" className="text-gray-700 hover:text-green-800 transition-colors">About Us</Link>
              <Link to="/news" className="text-green-800 font-medium">News</Link>
              <Link to="/contact" className="text-gray-700 hover:text-green-800 transition-colors">Contact</Link>
              
              {/* Language Switcher Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-2 px-3 py-2 rounded-md border border-gray-300 hover:border-green-600 hover:bg-green-50 transition-colors cursor-pointer whitespace-nowrap">
                  <div className="w-6 h-4 bg-red-600 rounded-sm flex items-center justify-center">
                    <div className="w-4 h-2 bg-white rounded-sm flex items-center justify-center">
                      <div className="w-2 h-1 bg-red-600 rounded-sm"></div>
                    </div>
                  </div>
                  <span className="text-sm font-medium">English</span>
                  <i className="ri-arrow-down-s-line"></i>
                </button>
                <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <Link to="/ja/news" className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-800">
                      <div className="w-6 h-4 bg-white rounded-sm flex items-center justify-center border border-gray-300">
                        <div className="w-4 h-3 bg-red-600 rounded-full"></div>
                      </div>
                      <span className="text-sm">日本語</span>
                    </Link>
                    <div className="flex items-center space-x-2 px-4 py-2 bg-green-50 text-green-800">
                      <div className="w-6 h-4 bg-red-600 rounded-sm flex items-center justify-center">
                        <div className="w-4 h-2 bg-white rounded-sm flex items-center justify-center">
                          <div className="w-2 h-1 bg-red-600 rounded-sm"></div>
                        </div>
                      </div>
                      <span className="text-sm font-medium">English</span>
                    </div>
                    <Link to="/zh/news" className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-800">
                      <div className="w-6 h-4 bg-red-600 rounded-sm flex items-center justify-center relative">
                        <div className="absolute top-0 left-0 w-3 h-2 bg-red-600"></div>
                        <div className="absolute top-0 right-0 w-3 h-4 bg-yellow-400 flex items-center justify-center">
                          <div className="text-red-600 text-xs">★</div>
                        </div>
                      </div>
                      <span className="text-sm">中文</span>
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold">News</h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
              </li>
              <li>
                <span className="text-gray-400 mx-2">/</span>
                <span className="text-gray-900">News</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* News List */}
          <section className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="divide-y divide-gray-200">
                {newsItems.map((item, index) => (
                  <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center">
                      <div className="text-gray-600 font-medium mb-2 md:mb-0 md:mr-6 md:w-32 flex-shrink-0">
                        {item.date}
                      </div>
                      <div className="flex-1">
                        <a 
                          href={item.link} 
                          className="text-gray-900 hover:text-green-800 transition-colors font-medium"
                        >
                          {item.title}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-8 space-x-2">
              {renderPagination()}
            </div>
          </section>
        </div>
      </main>

      {/* Contact Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600 uppercase tracking-wider">CONTACT</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <div className="mb-6">
                <div className="flex items-center justify-center md:justify-start mb-2">
                  <i className="ri-phone-line text-2xl text-green-800 mr-3"></i>
                  <span className="text-3xl font-bold text-gray-900">06-6713-8308</span>
                </div>
                <p className="text-gray-600">Business Hours: 10:00-17:00 (Closed: Sat, Sun, Holidays)</p>
              </div>
            </div>

            <div className="text-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 bg-green-800 text-white rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap"
              >
                <i className="ri-mail-line mr-2"></i>
                Email Inquiry
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
                alt="Online Store" 
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="mb-4">
                <Link to="/" className="text-2xl font-bold" style={{ fontFamily: 'Pacifico, serif' }}>
                  logo
                </Link>
              </div>
              <h3 className="text-lg font-semibold mb-2">Maruyasu Yougasa Co., Ltd.</h3>
              <p className="text-gray-400 text-sm">
                〒545-0001<br />
                2-6-15 Tennoji-cho Kita, Abeno-ku, Osaka City, Osaka
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/products/silent-umbrella" className="text-gray-400 hover:text-white transition-colors">- Silent Umbrella</Link></li>
                <li><Link to="/products/braid-umbrella" className="text-gray-400 hover:text-white transition-colors">- Miyabi Sakura Braided Long Umbrella</Link></li>
                <li><Link to="/products/folding-umbrella" className="text-gray-400 hover:text-white transition-colors">- Rain Pocket Folding Umbrella</Link></li>
                <li><Link to="/products/parasol" className="text-gray-400 hover:text-white transition-colors">- Rain or Shine Parasol</Link></li>
                <li><Link to="/products/koshu-weaving" className="text-gray-400 hover:text-white transition-colors">- Koshu Weaving</Link></li>
                <li><Link to="/products/others" className="text-gray-400 hover:text-white transition-colors">- Others</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/news" className="text-gray-400 hover:text-white transition-colors">News</Link></li>
                <li><Link to="/repair" className="text-gray-400 hover:text-white transition-colors">Repair Service</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              Copyright © Maruyasu Yougasa Co., Ltd. All rights reserved. | 
              <a href="https://readdy.ai/?origin=logo" className="ml-2 hover:text-white transition-colors">Website Builder</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NewsPage;