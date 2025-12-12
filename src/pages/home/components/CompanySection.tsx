import React from 'react';

const CompanySection: React.FC = () => {
  return (
    <section id="company" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div>
            <img
              src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/company_img.png"
              alt="Company Overview"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Osaka Abeno - Handcrafted by Japanese Artisans
              <br />
              <span className="text-green-600">Maruyasu Umbrella Co., Ltd.</span>
            </h2>
            
            <div className="prose prose-lg text-gray-600 mb-8">
              <p>
                Our workshop is located near JR Teradacho Station in Osaka Abeno.
                We handcraft umbrellas using techniques inherited from our predecessors and tools that have been used for over half a century.
              </p>
            </div>

            {/* Call to Action */}
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 whitespace-nowrap"
              >
                Company Overview
                <i className="ri-arrow-right-line ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;