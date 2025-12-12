import React from 'react';

const FoldingUmbrellaSection: React.FC = () => {
  return (
    <section id="folding" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div>
            <img
              src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/cnt03_img01.jpg"
              alt="Rain Pocket Folding Umbrella"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              <span className="text-green-600">Rain Pocket Folding Umbrella</span>
              <br />
              When closed, store it immediately without folding
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                Solves the problems of folding umbrellas!
                <br />
                When closed, store it quickly without folding.
                <br />
                Are you having trouble storing your folding umbrella on crowded trains and buses?
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
                When you have luggage on the train, wet umbrellas are easy to carry and very useful.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-3 text-sm text-gray-600">
              <p><span className="text-red-600 font-semibold">*</span> Featured on TV broadcasts.</p>
              <p><span className="text-red-600 font-semibold">*</span> Patent obtained.</p>
            </div>
          </div>

          {/* Image */}
          <div>
            <img
              src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/cnt03_img02.jpg"
              alt="Rain Pocket Folding Umbrella Detail"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoldingUmbrellaSection;