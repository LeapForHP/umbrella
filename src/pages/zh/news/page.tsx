import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../home/components/Header';
import Footer from '../../home/components/Footer';

const ZhNewsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 7;

  const newsItems = [
    {
      date: '2025-10-15',
      title: '在阿倍野HARUKAS举办POPUP展览！/ 大阪创意博览会',
      link: '#'
    },
    {
      date: '2025-09-01',
      title: '展示销售角更新通知',
      link: '#'
    },
    {
      date: '2025-09-01',
      title: '读卖新闻刊登！',
      link: '#'
    },
    {
      date: '2025-09-01',
      title: '在ABC广播"惊喜！明确！三泽浩二在此"节目中亮相！',
      link: '#'
    },
    {
      date: '2025-07-08',
      title: '在大丸室内装饰馆"Musée-L"夏季盛大节日举办POPUP展览！',
      link: '#'
    },
    {
      date: '2025-06-09',
      title: '在阪急梅田总店举办POPUP展览！',
      link: '#'
    }
  ];

  const renderPagination = () => {
    const pages = [];
    
    pages.push(
      <span key="current-info" className="text-gray-600 mr-4">
        {currentPage} / {totalPages}
      </span>
    );

    pages.push(
      <span key={1} className="bg-green-800 text-white px-3 py-2 rounded mr-2">
        1
      </span>
    );

    for (let i = 2; i <= 5; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className="bg-green-800 text-white px-3 py-2 rounded mr-2 hover:bg-green-700 transition-colors"
        >
          {i}
        </button>
      );
    }

    pages.push(
      <span key="ellipsis" className="text-gray-600 px-2">...</span>
    );

    pages.push(
      <button
        key="next"
        onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
        className="bg-green-800 text-white px-3 py-2 rounded mr-2 hover:bg-green-700 transition-colors"
      >
        »
      </button>
    );

    pages.push(
      <button
        key="last"
        onClick={() => setCurrentPage(totalPages)}
        className="bg-green-800 text-white px-3 py-2 rounded hover:bg-green-700 transition-colors"
      >
        最后 »
      </button>
    );

    return pages;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">新闻</h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/zh" className="text-blue-600 hover:text-blue-800">首页</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-700">新闻</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* News List */}
          <section className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="divide-y divide-gray-200">
                {newsItems.map((item, index) => (
                  <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center">
                      <div className="text-gray-600 font-medium mb-2 md:mb-0 md:mr-6 md:w-32 flex-shrink-0">
                        {item.date}
                      </div>
                      <div className="flex-1">
                        <a 
                          href={item.link} 
                          className="text-gray-900 hover:text-green-800 transition-colors font-medium"
                        >
                          {item.title}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-8 space-x-2">
              {renderPagination()}
            </div>
          </section>
        </div>
      </main>

      {/* Contact Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">联系我们</h2>
            <p className="text-lg text-gray-600 uppercase tracking-wider">CONTACT</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <div className="mb-6">
                <div className="flex items-center justify-center md:justify-start mb-2">
                  <i className="ri-phone-line text-2xl text-green-800 mr-3"></i>
                  <span className="text-3xl font-bold text-gray-900">06-6713-8308</span>
                </div>
                <p className="text-gray-600">营业时间：10:00-17:00（周六、周日、节假日休息）</p>
              </div>
            </div>

            <div className="text-center">
              <Link 
                to="/zh/contact" 
                className="inline-flex items-center px-8 py-4 bg-green-800 text-white rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap"
              >
                <i className="ri-mail-line mr-2"></i>
                电子邮件咨询
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <a 
              href="https://maruyasu19.thebase.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/bannur.jpg" 
                alt="在线商店" 
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ZhNewsPage;
