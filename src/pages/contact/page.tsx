import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    firstNameKana: '',
    lastNameKana: '',
    email: '',
    phone: '',
    message: '',
    privacyConsent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // Form submission URL
  const submitUrl = 'https://readdy.ai/api/form/d4cnb9u820p5j87gafa0';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!submitUrl) return;

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const formDataToSend = new URLSearchParams();
      formDataToSend.append('firstName', formData.firstName);
      formDataToSend.append('lastName', formData.lastName);
      formDataToSend.append('firstNameKana', formData.firstNameKana);
      formDataToSend.append('lastNameKana', formData.lastNameKana);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('privacyConsent', formData.privacyConsent.toString());

      const response = await fetch(submitUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSend.toString()
      });

      if (response.ok) {
        setSubmitStatus('Thank you for your inquiry. We will contact you soon.');
        setFormData({
          firstName: '',
          lastName: '',
          firstNameKana: '',
          lastNameKana: '',
          email: '',
          phone: '',
          message: '',
          privacyConsent: false
        });
      } else {
        setSubmitStatus('Failed to send your inquiry. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-green-800" style={{ fontFamily: '"Pacifico", serif' }}>
                logo
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8 items-center">
              <a href="/" className="text-gray-700 hover:text-green-800 transition-colors cursor-pointer">Home</a>
              <div className="relative group">
                <button className="text-gray-700 hover:text-green-800 transition-colors cursor-pointer">
                  Products
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <a href="/products/silent-umbrella" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Silent Umbrella</a>
                    <a href="/products/braid-umbrella" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Miyabi Sakura Braided Long Umbrella</a>
                    <a href="/products/folding-umbrella" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Rain Pocket Folding Umbrella</a>
                    <a href="/products/parasol" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Sun/Rain Parasol</a>
                    <a href="/products/koshu-weaving" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Koshu Weaving</a>
                    <a href="/products/others" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Others</a>
                  </div>
                </div>
              </div>
              <a href="/repair" className="text-gray-700 hover:text-green-800 transition-colors cursor-pointer">Repair Service</a>
              <a href="/about" className="text-gray-700 hover:text-green-800 transition-colors cursor-pointer">About Us</a>
              <a href="/news" className="text-gray-700 hover:text-green-800 transition-colors cursor-pointer">News</a>
              <a href="/contact" className="text-green-800 font-semibold cursor-pointer">Contact</a>
              
              {/* Language Switcher Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-2 px-3 py-2 rounded-md border border-gray-300 hover:border-green-600 hover:bg-green-50 transition-colors cursor-pointer whitespace-nowrap">
                  <div className="w-6 h-4 bg-red-600 rounded-sm flex items-center justify-center">
                    <div className="w-4 h-2 bg-white rounded-sm flex items-center justify-center">
                      <div className="w-2 h-1 bg-red-600 rounded-sm"></div>
                    </div>
                  </div>
                  <span className="text-sm font-medium">English</span>
                  <i className="ri-arrow-down-s-line"></i>
                </button>
                <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <a href="/ja/contact" className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-800 cursor-pointer">
                      <div className="w-6 h-4 bg-white rounded-sm flex items-center justify-center border border-gray-300">
                        <div className="w-4 h-3 bg-red-600 rounded-full"></div>
                      </div>
                      <span className="text-sm">日本語</span>
                    </a>
                    <div className="flex items-center space-x-2 px-4 py-2 bg-green-50 text-green-800">
                      <div className="w-6 h-4 bg-red-600 rounded-sm flex items-center justify-center">
                        <div className="w-4 h-2 bg-white rounded-sm flex items-center justify-center">
                          <div className="w-2 h-1 bg-red-600 rounded-sm"></div>
                        </div>
                      </div>
                      <span className="text-sm font-medium">English</span>
                    </div>
                    <a href="/zh/contact" className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-800 cursor-pointer">
                      <div className="w-6 h-4 bg-red-600 rounded-sm flex items-center justify-center relative">
                        <div className="absolute top-0 left-0 w-3 h-2 bg-red-600"></div>
                        <div className="absolute top-0 right-0 w-3 h-4 bg-yellow-400 flex items-center justify-center">
                          <div className="text-red-600 text-xs">★</div>
                        </div>
                      </div>
                      <span className="text-sm">中文</span>
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold">Contact Us</h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form - Left Side */}
          <div className="lg:w-2/3">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Contact Us
                <br />
                <span className="text-lg font-normal text-gray-600">CONTACT</span>
              </h3>
              <p className="text-gray-700 mb-4">
                For questions, consultations, and other inquiries, please use the form below.
                <br />
                We also accept inquiries by phone.
              </p>
              <p className="text-gray-700">
                After filling in each field, please click the "Send" button.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6" data-readdy-form id="contact-inquiry">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b">
                      <th className="bg-amber-900 text-white p-4 text-left align-top w-1/4">
                        Name
                        <span className="bg-red-600 text-white px-2 py-1 text-xs ml-2 rounded">Required</span>
                      </th>
                      <td className="p-4">
                        <div className="flex flex-col sm:flex-row gap-4">
                          <div className="flex-1">
                            <span className="text-sm text-gray-600 mb-1 block">Last Name</span>
                            <input
                              type="text"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              required
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                          </div>
                          <div className="flex-1">
                            <span className="text-sm text-gray-600 mb-1 block">First Name</span>
                            <input
                              type="text"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              required
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <th className="bg-amber-900 text-white p-4 text-left align-top">Furigana</th>
                      <td className="p-4">
                        <div className="flex flex-col sm:flex-row gap-4">
                          <div className="flex-1">
                            <span className="text-sm text-gray-600 mb-1 block">Sei</span>
                            <input
                              type="text"
                              name="lastNameKana"
                              value={formData.lastNameKana}
                              onChange={handleInputChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                          </div>
                          <div className="flex-1">
                            <span className="text-sm text-gray-600 mb-1 block">Mei</span>
                            <input
                              type="text"
                              name="firstNameKana"
                              value={formData.firstNameKana}
                              onChange={handleInputChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <th className="bg-amber-900 text-white p-4 text-left align-top">
                        Email Address
                        <span className="bg-red-600 text-white px-2 py-1 text-xs ml-2 rounded">Required</span>
                      </th>
                      <td className="p-4">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <th className="bg-amber-900 text-white p-4 text-left align-top">Phone Number</th>
                      <td className="p-4">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <th className="bg-amber-900 text-white p-4 text-left align-top">
                        Inquiry Content
                        <span className="bg-red-600 text-white px-2 py-1 text-xs ml-2 rounded">Required</span>
                      </th>
                      <td className="p-4">
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          maxLength={500}
                          rows={8}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 resize-vertical"
                          placeholder="Please limit your message to 500 characters."
                        />
                        <div className="text-sm text-gray-500 mt-1">
                          {formData.message.length}/500 characters
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th className="bg-amber-900 text-white p-4 text-left align-top">
                        Privacy Policy
                        <span className="bg-red-600 text-white px-2 py-1 text-xs ml-2 rounded">Required</span>
                      </th>
                      <td className="p-4">
                        <div className="bg-gray-50 p-4 rounded-md mb-4 max-h-64 overflow-y-auto text-sm">
                          <p className="mb-4">
                            Maruyasu Yougasa Co., Ltd. (hereinafter referred to as "the Company") establishes the following privacy policy, builds a personal information protection system, and promotes the protection of personal information by ensuring that all employees recognize the importance of personal information protection and work on it.
                          </p>
                          
                          <h4 className="font-bold mb-2">【Personal Information Management】</h4>
                          <p className="mb-4">
                            The Company keeps customers' personal information accurate and up-to-date, and takes necessary measures such as maintaining security systems, establishing management systems, and thoroughly educating employees to prevent unauthorized access, loss, damage, falsification, and leakage of personal information, and implements safety measures to strictly manage personal information.
                          </p>
                          
                          <h4 className="font-bold mb-2">【Purpose of Use of Personal Information】</h4>
                          <p className="mb-4">
                            Personal information received from customers will be used for sending emails and materials as responses to inquiries and business guidance from the Company.
                          </p>
                          
                          <h4 className="font-bold mb-2">【Prohibition of Disclosure and Provision of Personal Information to Third Parties】</h4>
                          <p className="mb-4">
                            The Company appropriately manages personal information received from customers and will not disclose personal information to third parties except in the following cases:
                          </p>
                          <ul className="list-disc list-inside mb-4 ml-4">
                            <li>When there is consent from the customer</li>
                            <li>When disclosing to contractors to whom the Company outsources business to provide services desired by customers</li>
                            <li>When disclosure is required by law</li>
                          </ul>
                          
                          <h4 className="font-bold mb-2">【Security Measures for Personal Information】</h4>
                          <p className="mb-4">
                            The Company takes comprehensive security measures to ensure the accuracy and safety of personal information.
                          </p>
                          
                          <h4 className="font-bold mb-2">【Inquiry by the Person】</h4>
                          <p className="mb-4">
                            When customers wish to inquire, modify, or delete their personal information, we will respond after confirming their identity.
                          </p>
                          
                          <h4 className="font-bold mb-2">【Compliance with Laws and Regulations and Review】</h4>
                          <p className="mb-4">
                            The Company complies with Japanese laws and other regulations applicable to personal information held, and strives to review and improve the contents of this policy as appropriate.
                          </p>
                          
                          <h4 className="font-bold mb-2">【Inquiries】</h4>
                          <p className="mb-4">
                            For inquiries regarding the Company's handling of personal information, please contact us below.
                            <br />
                            Maruyasu Yougasa Co., Ltd.
                            <br />
                            〒545-0001
                            <br />
                            2-6-15 Tennoji-cho Kita, Abeno-ku, Osaka City
                            <br />
                            TEL: 06-6713-8308
                          </p>
                        </div>
                        
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            name="privacyConsent"
                            checked={formData.privacyConsent}
                            onChange={handleInputChange}
                            required
                            className="mr-2 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                          />
                          <label className="text-sm text-gray-700">
                            I agree to the Privacy Policy
                          </label>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.privacyConsent}
                  className="bg-green-800 text-white px-8 py-3 rounded-md hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                >
                  {isSubmitting ? 'Sending...' : 'Send'}
                </button>
              </div>

              {submitStatus && (
                <div className={`text-center p-4 rounded-md ${submitStatus.includes('Thank you') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {submitStatus}
                </div>
              )}
            </form>
          </div>

          {/* Contact Information - Right Side */}
          <div className="lg:w-1/3">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="ri-phone-line text-green-600 mr-3 w-5 h-5"></i>
                  <div>
                    <div className="font-semibold">06-6713-8308</div>
                    <div className="text-sm text-gray-600">Business Hours: 10:00-17:00 (Closed: Sat, Sun, Holidays)</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <i className="ri-mail-line text-green-600 mr-3 w-5 h-5"></i>
                  <div>
                    <div className="font-semibold">Email Inquiry</div>
                    <div className="text-sm text-gray-600">Use the form on the left</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Contact Us
              <span className="block text-lg font-normal text-gray-600 mt-2">CONTACT</span>
            </h2>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <img src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/ico_tel_contact.png" alt="Phone Icon" className="mr-2" />
                <span className="text-2xl font-bold text-gray-900">06-6713-8308</span>
              </div>
              <p className="text-gray-600">Business Hours: 10:00-17:00 (Closed: Sat, Sun, Holidays)</p>
            </div>
            
            <div className="text-center">
              <a href="/contact" className="inline-flex items-center bg-green-800 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors cursor-pointer">
                <img src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/ico_mail_contact.png" alt="Mail Icon" className="mr-2" />
                Email Inquiry
              </a>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="https://maruyasu19.thebase.in/" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
              <img src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/bannur.jpg" alt="Online Store" className="mx-auto" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold text-green-800 mb-4" style={{ fontFamily: '"Pacifico", serif' }}>
                logo
              </h2>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Maruyasu Yougasa Co., Ltd.</h3>
              <p className="text-gray-600 text-sm">
                〒545-0001<br />
                2-6-15 Tennoji-cho Kita, Abeno-ku, Osaka City
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="text-gray-600 hover:text-green-800 cursor-pointer">Home</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Products</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/products/silent-umbrella" className="text-gray-600 hover:text-green-800 cursor-pointer">- Silent Umbrella</a></li>
                <li><a href="/products/braid-umbrella" className="text-gray-600 hover:text-green-800 cursor-pointer">- Miyabi Sakura Braided Long Umbrella</a></li>
                <li><a href="/products/folding-umbrella" className="text-gray-600 hover:text-green-800 cursor-pointer">- Rain Pocket Folding Umbrella</a></li>
                <li><a href="/products/parasol" className="text-gray-600 hover:text-green-800 cursor-pointer">- Sun/Rain Parasol</a></li>
                <li><a href="/products/koshu-weaving" className="text-gray-600 hover:text-green-800 cursor-pointer">- Koshu Weaving</a></li>
                <li><a href="/products/others" className="text-gray-600 hover:text-green-800 cursor-pointer">- Others</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/about" className="text-gray-600 hover:text-green-800 cursor-pointer">About Us</a></li>
                <li><a href="/news" className="text-gray-600 hover:text-green-800 cursor-pointer">News</a></li>
                <li><a href="/repair" className="text-gray-600 hover:text-green-800 cursor-pointer">Repair Service</a></li>
                <li><a href="/contact" className="text-gray-600 hover:text-green-800 cursor-pointer">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center">
            <p className="text-sm text-gray-600">
              Copyright © Maruyasu Yougasa Co., Ltd. All rights reserved.
              <a href="https://readdy.ai/?origin=logo" className="ml-4 text-green-600 hover:text-green-800 cursor-pointer">Website Builder</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
