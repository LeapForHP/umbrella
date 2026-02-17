import React from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const KoshuWeavingPage: React.FC = () => {
  const materials = [
    { name: "Koshu Weave Border", image: "https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/kosyu/img04.jpg" },
    { name: "Koshu Weave Double-sided Back Check", image: "https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/kosyu/img05.jpg" },
    { name: "Koshu Weave Double-sided Plain", image: "https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/kosyu/img06.jpg" },
    { name: "Koshu Weave Brocade", image: "https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/kosyu/img07.jpg" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-green-600 to-green-800 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Koshu Weaving</h1>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-green-600 hover:text-green-800">Home</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-700">Koshu Weaving</span>
          </nav>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Japanese craftsmanship woven with Fuji's snowmelt water.<br/>
            Elegant texture with luster and tranquility that exudes Japanese harmony.
          </p>
        </div>

        {/* Main Content */}
        <section className="space-y-16">
          {/* First Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/kosyu/img01.png" 
                alt="Koshu Weaving" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">
                <span className="text-green-600">Beautiful Deep Colors and Luster</span>
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  The beauty of Koshu weaving lies in its pre-dyeing.<br/>
                  Because the threads are dyed first, they have deep colors and luster,<br/>
                  exuding elegance and luxury.
                </p>
                
                <div className="mt-6">
                  <a 
                    href="https://youtu.be/gMR18OJuC5Q" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors inline-block"
                  >
                    Watch Video
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Second Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/kosyu/img02.png" 
                alt="Koshu Weaving Process" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            <div className="space-y-6 md:order-1">
              <p className="text-gray-700 leading-relaxed">
                Koshu weaving involves dyeing the threads in advance.<br/>
                Colors and patterns are woven through the combination<br/>
                of warp and weft threads.
              </p>
              
              <div className="mt-6">
                <a 
                  href="https://www.youtube.com/watch?v=-YrMXeuof3o" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors inline-block"
                >
                  Watch Video
                </a>
              </div>
            </div>
          </div>

          {/* Third Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/kosyu/img03.png" 
                alt="Lifetime Item" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">
                <span className="text-green-600">A Lifetime Item</span>
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Koshu weaving has long been used for umbrellas.<br/>
                  It has built up the status of Japanese umbrellas.<br/>
                  Perfect as a gift for loved ones and for celebrations.<br/>
                  A lifetime item for particular rainy days.<br/>
                  Can be repaired, so you can use it for a long time.
                </p>
                
                <div className="mt-6">
                  <a 
                    href="https://www.youtube.com/watch?v=00SJ-0FD0YE" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors inline-block"
                  >
                    Watch Video
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Materials Section */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-3xl font-bold text-center mb-8">
              Material List
              <span className="block text-lg font-normal text-green-600 mt-2">MATERIAL</span>
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {materials.map((material, index) => (
                <div key={index} className="text-center">
                  <img 
                    src={material.image} 
                    alt={material.name} 
                    className="w-full aspect-square object-cover rounded-lg shadow-lg mb-3"
                  />
                  <p className="text-sm font-medium text-gray-700">{material.name}</p>
                </div>
              ))}
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

export default KoshuWeavingPage;