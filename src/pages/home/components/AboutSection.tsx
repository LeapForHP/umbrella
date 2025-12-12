import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Maruyasu Umbrella</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Founded in 1950, Maruyasu Umbrella Co., Ltd. has been crafting high-quality umbrellas for over 70 years. 
              We are committed to preserving traditional Japanese umbrella-making techniques while incorporating modern innovations 
              to create umbrellas that are both beautiful and functional.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Our dedication to quality and craftsmanship has made us a trusted name in the umbrella industry. 
              From silent umbrellas to traditional braided designs, each product reflects our commitment to excellence 
              and attention to detail.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap"
            >
              Learn More
              <i className="ri-arrow-right-line ml-2"></i>
            </a>
          </div>
          
          <div className="relative">
            <img 
              src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/img09.jpg" 
              alt="Maruyasu Umbrella Craftsmanship" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">70+</div>
              <div className="text-gray-700 font-medium">Years of Experience</div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-700 font-medium">Quality Guarantee</div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-700 font-medium">Product Varieties</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;