import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
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
              <Link to="/about" className="text-green-800 font-medium">About Us</Link>
              <Link to="/news" className="text-gray-700 hover:text-green-800 transition-colors">News</Link>
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
                    <Link to="/ja/about" className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-800">
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
                    <Link to="/zh/about" className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-800">
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
          <h1 className="text-4xl font-bold">Company Overview</h1>
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
                <span className="text-gray-900">About Us</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Company Overview Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Company Overview</h2>
              <p className="text-lg text-gray-600 uppercase tracking-wider">COMPANY</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="bg-amber-900 text-white px-6 py-4 font-medium w-1/4">Company Name</td>
                    <td className="px-6 py-4 text-gray-900">Maruyasu Yougasa Co., Ltd.</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-amber-900 text-white px-6 py-4 font-medium">Address</td>
                    <td className="px-6 py-4 text-gray-900">
                      〒545-0001<br />
                      2-6-15 Tennoji-cho Kita, Abeno-ku, Osaka City, Osaka
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-amber-900 text-white px-6 py-4 font-medium">Business Hours</td>
                    <td className="px-6 py-4 text-gray-900">10:00 - 17:00</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-amber-900 text-white px-6 py-4 font-medium">Closed</td>
                    <td className="px-6 py-4 text-gray-900">Saturdays, Sundays, National Holidays, Summer holidays, Year-end and New Year holidays</td>
                  </tr>
                  <tr>
                    <td className="bg-amber-900 text-white px-6 py-4 font-medium">TEL</td>
                    <td className="px-6 py-4 text-gray-900">
                      <a href="tel:06-6713-8308" className="text-green-800 hover:text-green-600 font-medium">
                        06-6713-8308
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Company Images */}
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/company/img01.jpg" 
                  alt="Maruyasu Yougasa Co., Ltd." 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/company/img02.jpg" 
                  alt="Maruyasu Yougasa Co., Ltd." 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </section>

          {/* Access Map Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Access Map</h2>
              <p className="text-lg text-gray-600 uppercase tracking-wider">MAP</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13129.339800821062!2d135.523265!3d34.646243!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf9994b3754dd912f!2z5Li45a6J5rSL5YKY77yI5qCq77yJ!5e0!3m2!1sja!2sjp!4v1649917843683!5m2!1sja!2sjp"
                width="100%" 
                height="400" 
                className="border-0"
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
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

export default AboutPage;
