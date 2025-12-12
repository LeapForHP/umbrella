import React from 'react';

const RepairSection: React.FC = () => {
  return (
    <section id="repair" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              <span className="text-green-600">SDGs</span>
              <br />
              Your beloved umbrella can be used for a long time
            </h2>
            
            <div className="prose prose-lg text-gray-600 mb-8">
              <p>
                Umbrellas produced domestically by our company can be repaired.
                Due to different fabric tensions depending on specifications,
                we basically only accept repairs for our domestic umbrellas.
              </p>
              <p>
                We have received words of appreciation from customers regarding "repair and alteration" services.
              </p>
            </div>

            {/* Call to Action */}
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 whitespace-nowrap"
              >
                Customer Testimonials & Repair History
                <i className="ri-arrow-right-line ml-2"></i>
              </a>
            </div>
          </div>

          {/* Before/After Images */}
          <div className="space-y-8">
            <div className="text-center">
              <img
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/repair_img.jpg"
                alt="Before Repair"
                className="w-full rounded-lg shadow-lg mb-2"
              />
              <p className="text-sm text-gray-600 font-medium">Before Repair</p>
            </div>
            
            <div className="text-center">
              <img
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/repair_img02.jpg"
                alt="After Repair"
                className="w-full rounded-lg shadow-lg mb-2"
              />
              <p className="text-sm text-gray-600 font-medium">After Repair</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepairSection;