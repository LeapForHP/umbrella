import React from 'react';

const SilentUmbrellaSection: React.FC = () => {
  return (
    <section id="silent" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              <span className="text-green-600">Are you stressed by the sound of rain?</span>
              <br />
              Born from the voice of visually impaired people: "We want a quiet umbrella"
            </h2>
            <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-6">
              Silent Umbrella - transforms into a quiet and comfortable sound.
              <br />
              Recommended for those sensitive to sound and those involved in music and audio!
            </h3>
            
            <div className="prose prose-lg text-gray-600 mb-8">
              <p>
                This umbrella has a double structure that reduces the sound of raindrops, creating a quiet rain sound that produces a calm feeling.
                The three-dimensional space between the mesh fabric and the umbrella fabric creates an unprecedented silhouette.
              </p>
            </div>

            {/* Features */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Recommended Uses</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <i className="ri-check-line text-green-600 mt-1 mr-2 flex-shrink-0"></i>
                  <span>You can hear surrounding sounds clearly</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-green-600 mt-1 mr-2 flex-shrink-0"></i>
                  <span>Provides coolness like being in the shade</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-green-600 mt-1 mr-2 flex-shrink-0"></i>
                  <span>Perfect for work on rainy days</span>
                </li>
              </ul>
            </div>

            {/* Achievements */}
            <div className="space-y-3 text-sm text-gray-600">
              <p><span className="text-red-600 font-semibold">*</span> Presented at university academic conferences.</p>
              <p><span className="text-red-600 font-semibold">*</span> Patent obtained for umbrellas with rain noise reduction effect.</p>
              <p><span className="text-red-600 font-semibold">*</span> Comparison experiments with regular parasols conducted using thermographic cameras.</p>
            </div>

            {/* GIF Image */}
            <div className="mt-8">
              <img
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/cnt01_img03.gif"
                alt="Silent Umbrella Animation"
                className="w-full max-w-md mx-auto lg:mx-0 rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Images */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="relative">
              <img
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/cnt01_img01.jpg"
                alt="Silent Umbrella"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="relative">
              <img
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/cnt01_img02.jpg"
                alt="Silent Umbrella Detail"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SilentUmbrellaSection;