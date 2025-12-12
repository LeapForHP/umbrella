import React from 'react';

const NewsSection: React.FC = () => {
  const newsItems = [
    {
      id: 1,
      date: '2025.10.15',
      title: 'POPUP Exhibition at Abeno Harukas! / Osaka Create Fair',
      image: 'https://maruyasuweb.jp/wp-content/uploads/2025/10/IMG_1432.jpg',
      link: '#'
    },
    {
      id: 2,
      date: '2025.09.01',
      title: 'Exhibition and Sales Corner Renewal Notice',
      image: 'https://maruyasuweb.jp/wp-content/uploads/2025/09/IMG_1746.jpg',
      link: '#'
    },
    {
      id: 3,
      date: '2025.09.01',
      title: 'Featured in Yomiuri Newspaper!',
      image: 'https://maruyasuweb.jp/wp-content/uploads/2025/09/IMG_1744.jpg',
      link: '#'
    }
  ];

  return (
    <section id="news" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-12">
          {/* Section Title */}
          <div className="lg:w-1/4 mb-8 lg:mb-0">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              News
            </h2>
            <p className="text-lg text-gray-600 uppercase tracking-wider">Latest Updates</p>
          </div>

          {/* News Items */}
          <div className="lg:w-3/4">
            <div className="space-y-6">
              {newsItems.map((item) => (
                <article key={item.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <a href={item.link} className="flex flex-col sm:flex-row overflow-hidden group cursor-pointer">
                    <div className="sm:w-48 h-48 sm:h-32 flex-shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 p-6 flex flex-col justify-center">
                      <time className="text-sm text-blue-600 font-medium mb-2">
                        {item.date}
                      </time>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                        {item.title}
                      </h3>
                    </div>
                  </a>
                </article>
              ))}
            </div>

            {/* View All Button */}
            <div className="mt-8 text-center lg:text-left">
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 whitespace-nowrap"
              >
                View All News
                <i className="ri-arrow-right-line ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;