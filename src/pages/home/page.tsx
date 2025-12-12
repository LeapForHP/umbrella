import React from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import NewsSection from './components/NewsSection';
import ProductsSection from './components/ProductsSection';
import SilentUmbrellaSection from './components/SilentUmbrellaSection';
import BraidUmbrellaSection from './components/BraidUmbrellaSection';
import FoldingUmbrellaSection from './components/FoldingUmbrellaSection';
import RepairSection from './components/RepairSection';
import CompanySection from './components/CompanySection';
import MediaSection from './components/MediaSection';
import SocialSection from './components/SocialSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <NewsSection />
        <SilentUmbrellaSection />
        <BraidUmbrellaSection />
        <FoldingUmbrellaSection />
        <RepairSection />
        <CompanySection />
        <ProductsSection />
        <MediaSection />
        <SocialSection />
        <ContactSection />
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Repair & Maintenance Service
              <span className="block text-lg font-normal text-blue-600 mt-2">SDGs INITIATIVE</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20umbrella%20repair%20service%20craftsman%20working%20on%20traditional%20Japanese%20umbrella%20restoration%20in%20workshop%20with%20tools%20and%20materials%2C%20sustainable%20repair%20concept%2C%20eco-friendly%20maintenance%2C%20skilled%20artisan%20hands%20fixing%20umbrella%20frame%20and%20fabric&width=600&height=400&seq=repair-service-1&orientation=landscape" 
                  alt="Professional umbrella repair service" 
                  className="w-full rounded-lg shadow-lg object-top"
                />
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  Sustainable Umbrella Care
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our expert craftsmen provide comprehensive repair services to extend the life of your umbrella. 
                  From rib replacement to fabric restoration, we ensure your umbrella serves you for years to come.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-600 mr-2"></i>
                    Professional rib and frame repair
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-600 mr-2"></i>
                    Fabric replacement and restoration
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-600 mr-2"></i>
                    Handle and mechanism maintenance
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-600 mr-2"></i>
                    Water repellent treatment
                  </li>
                </ul>
                <Link 
                  to="/repair" 
                  className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Learn More About Repairs
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;