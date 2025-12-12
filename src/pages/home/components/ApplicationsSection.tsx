import React, { useState } from 'react';

const ApplicationsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const applications = [
    {
      id: 1,
      title: "Daily Use",
      description: "Perfect for everyday protection from rain and sun",
      image: "https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/img05.jpg"
    },
    {
      id: 2,
      title: "Business",
      description: "Professional umbrellas for business occasions",
      image: "https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/img06.jpg"
    },
    {
      id: 3,
      title: "Special Events",
      description: "Elegant designs for ceremonies and special occasions",
      image: "https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/img07.jpg"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Applications</h2>
          <p className="text-gray-600">Discover the perfect umbrella for every occasion</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4">
            {applications.map((app, index) => (
              <button
                key={app.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === index 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {app.title}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="relative">
          {applications.map((app, index) => (
            <div
              key={app.id}
              className={`transition-all duration-500 ${
                activeTab === index 
                  ? 'opacity-100 visible' 
                  : 'opacity-0 invisible absolute inset-0'
              }`}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">{app.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {app.description}
                  </p>
                  <a
                    href="#products"
                    className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap"
                  >
                    View Products
                    <i className="ri-arrow-right-line ml-2"></i>
                  </a>
                </div>
                
                <div>
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;