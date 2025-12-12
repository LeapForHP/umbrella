import React from 'react';

const SocialSection: React.FC = () => {
  return (
    <section id="social" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Facebook Section */}
          <div>
            <div className="text-center mb-6">
              <p className="text-lg font-semibold text-gray-900">
                \Facebook - Updated Regularly/
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <i className="ri-facebook-fill text-4xl mb-2"></i>
                  <p>Facebook Feed</p>
                  <p className="text-sm">Follow us for latest updates</p>
                </div>
              </div>
            </div>
          </div>

          {/* Purchase Links Section */}
          <div>
            <div className="text-center mb-6">
              <p className="text-lg font-semibold text-gray-900">
                \Purchase Here/
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {/* BASE */}
              <a
                href="https://maruyasu19.thebase.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 group"
              >
                <img
                  src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/bnr_base.png"
                  alt="BASE"
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                />
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/channel/UCMKigDgLfoYZ9vFCZNruO5g"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 group"
              >
                <img
                  src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/bnr_yt.png"
                  alt="YOUTUBE"
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                />
              </a>

              {/* Yahoo Shopping */}
              <a
                href="https://store.shopping.yahoo.co.jp/maruyasuyougasa/search.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 group"
              >
                <img
                  src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/bnr_yh.png"
                  alt="Yahoo Shopping"
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/maruyasuyougasa/"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 group"
              >
                <img
                  src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/bnr_ig.png"
                  alt="Instagram"
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;