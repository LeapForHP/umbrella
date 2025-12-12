import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../home/components/Header';
import Footer from '../../home/components/Footer';

const ZhAboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">公司概况</h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/zh" className="text-blue-600 hover:text-blue-800">首页</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-700">关于我们</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Company Overview Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">公司概况</h2>
              <p className="text-lg text-gray-600 uppercase tracking-wider">COMPANY</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="bg-amber-900 text-white px-6 py-4 font-medium w-1/4">公司名称</td>
                    <td className="px-6 py-4 text-gray-900">丸安洋伞株式会社</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-amber-900 text-white px-6 py-4 font-medium">地址</td>
                    <td className="px-6 py-4 text-gray-900">
                      〒545-0001<br />
                      大阪府大阪市阿倍野区天王寺町北2-6-15
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-amber-900 text-white px-6 py-4 font-medium">营业时间</td>
                    <td className="px-6 py-4 text-gray-900">10:00 - 17:00</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-amber-900 text-white px-6 py-4 font-medium">休息日</td>
                    <td className="px-6 py-4 text-gray-900">周六、周日、国定假日、暑假、年末年初</td>
                  </tr>
                  <tr>
                    <td className="bg-amber-900 text-white px-6 py-4 font-medium">电话</td>
                    <td className="px-6 py-4 text-gray-900">
                      <a href="tel:06-6713-8308" className="text-green-800 hover:text-green-600 font-medium">
                        06-6713-8308
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Company Images */}
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/company/img01.jpg" 
                  alt="丸安洋伞株式会社" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/company/img02.jpg" 
                  alt="丸安洋伞株式会社" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </section>

          {/* Access Map Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">交通地图</h2>
              <p className="text-lg text-gray-600 uppercase tracking-wider">MAP</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13129.339800821062!2d135.523265!3d34.646243!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf9994b3754dd912f!2z5Li45a6J5rSL5YKY77yI5qCq77yJ!5e0!3m2!1sja!2sjp!4v1649917843683!5m2!1sja!2sjp"
                width="100%" 
                height="400" 
                className="border-0"
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
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

export default ZhAboutPage;
