import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/logo_hd.jpg"
                alt="Maruyasu Umbrella Co., Ltd. | Handcrafted Japanese Umbrellas"
                className="h-12 mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Maruyasu Umbrella Co., Ltd.</h3>
              <address className="text-gray-300 not-italic">
                〒545-0001<br />
                2-6-15 Tennoji-cho Kita, Abeno-ku,<br />
                Osaka City, Osaka
              </address>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Main Links */}
              <div>
                <ul className="space-y-3">
                  <li>
                    <a href="/" className="text-gray-300 hover:text-white transition-colors duration-300">
                      Home
                    </a>
                  </li>
                </ul>
              </div>

              {/* Products */}
              <div>
                <h4 className="text-white font-semibold mb-4">Products</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#silent" className="text-gray-300 hover:text-white transition-colors duration-300">
                      - Silent Umbrella
                    </a>
                  </li>
                  <li>
                    <a href="#braid" className="text-gray-300 hover:text-white transition-colors duration-300">
                      - Miyabi Sakura Braided Long Umbrella
                    </a>
                  </li>
                  <li>
                    <a href="#folding" className="text-gray-300 hover:text-white transition-colors duration-300">
                      - Rain Pocket Folding Umbrella
                    </a>
                  </li>
                  <li>
                    <a href="#parasol" className="text-gray-300 hover:text-white transition-colors duration-300">
                      - Sun & Rain Parasol
                    </a>
                  </li>
                  <li>
                    <a href="#koshu" className="text-gray-300 hover:text-white transition-colors duration-300">
                      - Koshu-ori
                    </a>
                  </li>
                  <li>
                    <a href="#others" className="text-gray-300 hover:text-white transition-colors duration-300">
                      - Others
                    </a>
                  </li>
                </ul>
              </div>

              {/* Other Links */}
              <div>
                <ul className="space-y-3">
                  <li>
                    <a href="#company" className="text-gray-300 hover:text-white transition-colors duration-300">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#news" className="text-gray-300 hover:text-white transition-colors duration-300">
                      News
                    </a>
                  </li>
                  <li>
                    <a href="#repair" className="text-gray-300 hover:text-white transition-colors duration-300">
                      Repair Service
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                      Sitemap
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              Copyright © Maruyasu Umbrella Co., Ltd. All rights reserved.
            </p>
            <div className="mt-4 sm:mt-0">
              <a 
                href="https://readdy.ai/?origin=logo" 
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website Builder
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;