import React from 'react';
import { Link } from 'react-router-dom';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          联系我们
          <span className="block text-lg font-normal text-green-600 mt-2">CONTACT</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-blue-50 rounded-lg p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <i className="ri-phone-line text-3xl text-green-600 mr-3"></i>
                <span className="text-3xl font-bold text-gray-900">06-6713-8308</span>
              </div>
              <p className="text-gray-600 mb-6">
                营业时间：10:00-17:00<br />
                （休息日：周六、周日、节假日）
              </p>
            </div>
          </div>
          
          <div>
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <i className="ri-mail-line text-4xl text-green-600 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">邮件咨询</h3>
              <p className="text-gray-600 mb-6">
                有任何问题或咨询，请通过邮件联系我们。
              </p>
              <Link 
                to="/zh/contact" 
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors inline-block cursor-pointer whitespace-nowrap"
              >
                发送邮件
              </Link>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a href="https://maruyasu19.thebase.in/" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/bannur.jpg" 
              alt="在线商店" 
              className="mx-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;