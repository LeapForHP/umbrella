import React from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const OthersPage: React.FC = () => {
  const articles = [
    {
      id: 1,
      title: '"Very Happy" Postcard was sent to us.',
      image: "https://maruyasuweb.jp/wp-content/uploads/2024/04/2a91278dbc3565555e5dbe53dcd54fb5-scaled.jpg",
      link: "/others/270/"
    },
    {
      id: 2,
      title: "We received contact from parents of a daughter with auditory hypersensitivity.",
      image: "https://maruyasuweb.jp/wp-content/uploads/2024/04/SUDVY-1_result.jpg",
      link: "/others/278/"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-green-600 to-green-800 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Others</h1>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-green-600 hover:text-green-800">Home</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-700">Others</span>
          </nav>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Articles Grid */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article) => (
              <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <Link to={article.link}>
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 hover:text-green-600 transition-colors">
                      {article.title}
                    </h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-4 mt-12">
            <span className="text-gray-600">1 / 2</span>
            <span className="bg-green-600 text-white px-3 py-2 rounded">1</span>
            <Link 
              to="/others/page/2" 
              className="bg-gray-200 text-gray-700 px-3 py-2 rounded hover:bg-gray-300 transition-colors"
            >
              2
            </Link>
            <Link 
              to="/others/page/2" 
              className="text-green-600 hover:text-green-800 transition-colors"
              aria-label="Next page"
            >
              »
            </Link>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-50 py-16 -mx-4">
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

export default OthersPage;