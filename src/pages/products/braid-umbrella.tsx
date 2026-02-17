import React from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const BraidUmbrellaPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-green-600 to-green-800 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Miyabi-Zakura Braided Long Umbrella</h1>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-green-600 hover:text-green-800">Home</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-700">Miyabi-Zakura Braided Long Umbrella</span>
          </nav>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <p className="text-xl text-gray-700">
            An umbrella that embodies Japanese aesthetic sense and can truly be called a Japanese umbrella!
          </p>
        </div>

        {/* Main Content */}
        <section className="space-y-16">
          {/* First Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/braid/img01.jpg" 
                alt="Miyabi-Zakura Braided Long Umbrella" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">
                <span className="text-green-600">Traditional Japanese Craft of Braiding</span>
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Miyabi-Zakura was created from this concept.
                Using materials that evoke Japan - mountain cherry, Koshu weaving - craftsmen handcraft each umbrella one by one.
                Koshu weaving fabric is woven after dyeing the threads, so the vertical and horizontal threads create an elegant, substantial texture and feel, with a unique luster.
              </p>
            </div>
          </div>

          {/* Second Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/braid/img02.jpg" 
                alt="Braiding and umbrella fusion" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            <div className="space-y-6 md:order-1">
              <h2 className="text-2xl font-bold">
                <span className="text-green-600">Fusion of Braiding and Umbrella</span>
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Inspired by kimono obi-jime (sash cords), we carefully wrap braided cord around handles carved from rare mountain cherry from Nara's Yoshino.
                The grip feel of Miyabi-Zakura is an unprecedented, comfortable touch. The handle doesn't slip when holding the umbrella.
                The unique texture of Koshu weaving and braiding creates a piece that can truly be called a Made in Japan umbrella.
              </p>
            </div>
          </div>

          {/* Center Text */}
          <div className="text-center py-8">
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Ten cords are hand-braided in a plain weave and carefully wrapped around the mountain cherry handle.
            </p>
          </div>

          {/* Third Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/braid/img03.png" 
                alt="Lucky charm with expanding shape" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">
                <span className="text-green-600">Lucky Charm with Expanding Shape</span>
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Umbrellas have long been treated as lucky charms with an expanding shape, and have been used as betrothal gifts and wedding favors.
                They are also perfect as gifts for loved ones. If any problems occur, we can repair them immediately upon request, so you can use them for a long time.
              </p>
            </div>
          </div>

          {/* Video Section */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-3xl font-bold text-center mb-8">
              Video Introduction
              <span className="block text-lg font-normal text-green-600 mt-2">MOVIE</span>
            </h3>
            
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video mb-6">
                <iframe 
                  width="100%" 
                  height="450" 
                  src="https://www.youtube.com/embed/Q566FYjFcA4" 
                  title="Miyabi-Zakura Braided Long Umbrella video" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
              
              <div className="text-center space-y-2">
                <p className="text-gray-700">*Received Omotenashi Selection Award.</p>
                <p className="text-gray-700">*Obtained utility model for braided handle.</p>
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

export default BraidUmbrellaPage;