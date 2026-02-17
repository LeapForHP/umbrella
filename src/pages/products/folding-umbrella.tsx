import React from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const FoldingUmbrellaPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-green-600 to-green-800 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Rain Pocket Folding Umbrella</h1>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-green-600 hover:text-green-800">Home</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-700">Rain Pocket Folding Umbrella</span>
          </nav>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Content */}
        <section className="space-y-16">
          {/* First Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/folding/img01.jpg" 
                alt="Umbrella bag" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">
                Something that seemed like it should exist, but never did before<br/>
                <span className="text-green-600">Umbrella Bag!</span>
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Very convenient for shopping, traveling, business trips, and rainy day outings.
                Rain Pocket has a wide opening and allows you to smartly store folding umbrellas without folding them.
                The Rain Pocket made from umbrella fabric won't cause trouble to others with water droplets even in crowded trains.
              </p>
            </div>
          </div>

          {/* Center Text */}
          <div className="text-center py-8">
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              That troublesome storage of wet folding umbrellas is completed in an instant.
            </p>
          </div>

          {/* Second Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/folding/img03.png" 
                alt="String hook" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            <div className="space-y-6 md:order-1">
              <h2 className="text-2xl font-bold">
                <span className="text-green-600">Easy with String Hook</span><br/>
                Hang it on your bag
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The development began when I was on a train on a rainy day, holding a celebratory present, desperately trying to hold luggage in my left hand and a folding umbrella in my right hand to keep it from getting wet in the crowded train, which was very difficult. At that time, I thought it would be great if there was something that could instantly store the umbrella.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Important:</strong> Please spread it out and air dry after use.
              </p>
            </div>
          </div>

          {/* Full Width Image */}
          <div className="w-full">
            <img 
              src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/folding/img02.jpg" 
              alt="String hook demonstration" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Video Section */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-3xl font-bold text-center mb-8">
              Video Introduction
              <span className="block text-lg font-normal text-green-600 mt-2">FOLDING</span>
            </h3>
            
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video">
                <iframe 
                  width="100%" 
                  height="400" 
                  src="https://www.youtube.com/embed/mgbry1tOaBE" 
                  title="Rain Pocket Folding Umbrella video" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-50 py-16 -mx-4 mt-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Contact Us
              <span className="block text-lg font-normal text-green-600 mt-2">CONTACT</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="mb-6">
                  <p className="text-2xl font-bold text-gray-800 mb-2">
                    <i className="ri-phone-line mr-2"></i>06-6713-8308
                  </p>
                  <p className="text-gray-600">Business Hours: 10:00-17:00 (Closed: Sat, Sun, Holidays)</p>
                </div>
              </div>
              
              <div className="text-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <i className="ri-mail-line mr-2"></i>
                  Email Inquiry
                </Link>
              </div>
            </div>

            <div className="text-center mt-8">
              <a 
                href="https://maruyasu19.thebase.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img 
                  src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/bannur.jpg" 
                  alt="Visit our online store" 
                  className="max-w-sm mx-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FoldingUmbrellaPage;