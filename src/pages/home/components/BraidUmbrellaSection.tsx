import React from 'react';

const BraidUmbrellaSection: React.FC = () => {
  return (
    <section id="braid" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div>
            <img
              src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/cnt02_img01.jpg"
              alt="Miyabi Sakura Braided Long Umbrella"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              <span className="text-green-600">Miyabi Sakura Braided Long Umbrella</span>
              <br />
              Fusion of Braided Cord and Koshu-ori
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                A Japanese umbrella that embodies Japanese aesthetic sense!
                <br />
                An umbrella with a Japanese atmosphere has been completed.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="prose prose-lg text-gray-600 mb-8">
              <p>
                The handle is made from Nara Yoshino mountain cherry wood, carefully wrapped with braided cord.
                It has a pleasant feel and won't slip with just a light grip.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-3 text-sm text-gray-600">
              <p><span className="text-red-600 font-semibold">*</span> Winner of Omotenashi Selection Award.</p>
              <p><span className="text-red-600 font-semibold">*</span> Utility model patent obtained for braided cord handle.</p>
            </div>
          </div>

          {/* Image */}
          <div>
            <img
              src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/cnt02_img02.jpg"
              alt="Miyabi Sakura Braided Long Umbrella Detail"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BraidUmbrellaSection;