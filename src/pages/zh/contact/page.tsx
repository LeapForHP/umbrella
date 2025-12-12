import { useState } from 'react';

export default function ContactPageZh() {
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
  const submitUrl = 'https://readdy.ai/api/form/d4cnbbm820p5j87gafag';

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
        setSubmitStatus('感谢您的咨询。我们将尽快与您联系。');
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
        setSubmitStatus('发送咨询失败。请重试。');
      }
    } catch (error) {
      setSubmitStatus('发生错误。请重试。');
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
              <a href="/zh" className="text-gray-700 hover:text-green-800 transition-colors cursor-pointer">首页</a>
              <div className="relative group">
                <button className="text-gray-700 hover:text-green-800 transition-colors cursor-pointer">
                  产品
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <a href="/zh/products/silent-umbrella" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">静音雨伞</a>
                    <a href="/zh/products/braid-umbrella" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">雅樱编织长伞</a>
                    <a href="/zh/products/folding-umbrella" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">雨袋折叠伞</a>
                    <a href="/zh/products/parasol" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">晴雨两用伞</a>
                    <a href="/zh/products/koshu-weaving" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">甲州织</a>
                    <a href="/zh/products/others" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">其他</a>
                  </div>
                </div>
              </div>
              <a href="/zh/repair" className="text-gray-700 hover:text-green-800 transition-colors cursor-pointer">维修服务</a>
              <a href="/zh/about" className="text-gray-700 hover:text-green-800 transition-colors cursor-pointer">关于我们</a>
              <a href="/zh/news" className="text-gray-700 hover:text-green-800 transition-colors cursor-pointer">新闻</a>
              <a href="/zh/contact" className="text-green-800 font-semibold cursor-pointer">联系我们</a>
              
              {/* Language Switcher Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-2 px-3 py-2 rounded-md border border-gray-300 hover:border-green-600 hover:bg-green-50 transition-colors cursor-pointer whitespace-nowrap">
                  <div className="w-6 h-4 bg-red-600 rounded-sm flex items-center justify-center relative">
                    <div className="absolute top-0 left-0 w-3 h-2 bg-red-600"></div>
                    <div className="absolute top-0 right-0 w-3 h-4 bg-yellow-400 flex items-center justify-center">
                      <div className="text-red-600 text-xs">★</div>
                    </div>
                  </div>
                  <span className="text-sm font-medium">中文</span>
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
                    <a href="/contact" className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-800 cursor-pointer">
                      <div className="w-6 h-4 bg-red-600 rounded-sm flex items-center justify-center">
                        <div className="w-4 h-2 bg-white rounded-sm flex items-center justify-center">
                          <div className="w-2 h-1 bg-red-600 rounded-sm"></div>
                        </div>
                      </div>
                      <span className="text-sm">English</span>
                    </a>
                    <div className="flex items-center space-x-2 px-4 py-2 bg-green-50 text-green-800">
                      <div className="w-6 h-4 bg-red-600 rounded-sm flex items-center justify-center relative">
                        <div className="absolute top-0 left-0 w-3 h-2 bg-red-600"></div>
                        <div className="absolute top-0 right-0 w-3 h-4 bg-yellow-400 flex items-center justify-center">
                          <div className="text-red-600 text-xs">★</div>
                        </div>
                      </div>
                      <span className="text-sm font-medium">中文</span>
                    </div>
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
          <h2 className="text-4xl font-bold">联系我们</h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form - Left Side */}
          <div className="lg:w-2/3">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                联系我们
                <br />
                <span className="text-lg font-normal text-gray-600">CONTACT</span>
              </h3>
              <p className="text-gray-700 mb-4">
                如有疑问、咨询等询问,请使用下面的表格。
                <br />
                我们也接受电话咨询。
              </p>
              <p className="text-gray-700">
                填写各项内容后,请点击"发送"按钮。
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6" data-readdy-form id="contact-inquiry-zh">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b">
                      <th className="bg-amber-900 text-white p-4 text-left align-top w-1/4">
                        姓名
                        <span className="bg-red-600 text-white px-2 py-1 text-xs ml-2 rounded">必填</span>
                      </th>
                      <td className="p-4">
                        <div className="flex flex-col sm:flex-row gap-4">
                          <div className="flex-1">
                            <span className="text-sm text-gray-600 mb-1 block">姓</span>
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
                            <span className="text-sm text-gray-600 mb-1 block">名</span>
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
                      <th className="bg-amber-900 text-white p-4 text-left align-top">假名</th>
                      <td className="p-4">
                        <div className="flex flex-col sm:flex-row gap-4">
                          <div className="flex-1">
                            <span className="text-sm text-gray-600 mb-1 block">姓</span>
                            <input
                              type="text"
                              name="lastNameKana"
                              value={formData.lastNameKana}
                              onChange={handleInputChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                          </div>
                          <div className="flex-1">
                            <span className="text-sm text-gray-600 mb-1 block">名</span>
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
                        电子邮箱
                        <span className="bg-red-600 text-white px-2 py-1 text-xs ml-2 rounded">必填</span>
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
                      <th className="bg-amber-900 text-white p-4 text-left align-top">电话号码</th>
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
                        咨询内容
                        <span className="bg-red-600 text-white px-2 py-1 text-xs ml-2 rounded">必填</span>
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
                          placeholder="请将您的留言限制在500个字符以内。"
                        />
                        <div className="text-sm text-gray-500 mt-1">
                          {formData.message.length}/500 字符
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th className="bg-amber-900 text-white p-4 text-left align-top">
                        隐私政策
                        <span className="bg-red-600 text-white px-2 py-1 text-xs ml-2 rounded">必填</span>
                      </th>
                      <td className="p-4">
                        <div className="bg-gray-50 p-4 rounded-md mb-4 max-h-64 overflow-y-auto text-sm">
                          <p className="mb-4">
                            丸安洋伞株式会社（以下简称"本公司"）制定以下隐私政策，构建个人信息保护体系，通过让全体员工认识到个人信息保护的重要性并彻底实施相关措施，推进个人信息的保护。
                          </p>
                          
                          <h4 className="font-bold mb-2">【个人信息管理】</h4>
                          <p className="mb-4">
                            本公司将客户的个人信息保持准确和最新状态，为防止对个人信息的非法访问、丢失、损坏、篡改、泄露等，采取维护安全系统、完善管理体制、彻底进行员工教育等必要措施，实施安全对策，严格管理个人信息。
                          </p>
                          
                          <h4 className="font-bold mb-2">【个人信息的使用目的】</h4>
                          <p className="mb-4">
                            从客户处获得的个人信息，将用于本公司的联络、业务指导和回答咨询，以电子邮件和资料发送的形式使用。
                          </p>
                          
                          <h4 className="font-bold mb-2">【禁止向第三方披露和提供个人信息】</h4>
                          <p className="mb-4">
                            本公司适当管理从客户处获得的个人信息，除以下任一情况外，不会向第三方披露个人信息：
                          </p>
                          <ul className="list-disc list-inside mb-4 ml-4">
                            <li>获得客户同意的情况</li>
                            <li>为提供客户希望的服务而向本公司委托业务的承包商披露的情况</li>
                            <li>根据法令需要披露的情况</li>
                          </ul>
                          
                          <h4 className="font-bold mb-2">【个人信息的安全对策】</h4>
                          <p className="mb-4">
                            本公司为确保个人信息的准确性和安全性，采取全面的安全对策。
                          </p>
                          
                          <h4 className="font-bold mb-2">【本人查询】</h4>
                          <p className="mb-4">
                            当客户希望查询、修改、删除本人的个人信息时，在确认本人身份后，我们将予以应对。
                          </p>
                          
                          <h4 className="font-bold mb-2">【遵守法令、规范和审查】</h4>
                          <p className="mb-4">
                            本公司遵守适用于所持有个人信息的日本法令和其他规范，并努力适时审查本政策内容并加以改善。
                          </p>
                          
                          <h4 className="font-bold mb-2">【咨询】</h4>
                          <p className="mb-4">
                            关于本公司个人信息处理的咨询，请联系以下地址。
                            <br />
                            丸安洋伞株式会社
                            <br />
                            〒545-0001
                            <br />
                            大阪市阿倍野区天王寺町北2-6-15
                            <br />
                            电话：06-6713-8308
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
                            我同意隐私政策
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
                  {isSubmitting ? '发送中...' : '发送'}
                </button>
              </div>

              {submitStatus && (
                <div className={`text-center p-4 rounded-md ${submitStatus.includes('感谢') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {submitStatus}
                </div>
              )}
            </form>
          </div>

          {/* Contact Information - Right Side */}
          <div className="lg:w-1/3">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">联系信息</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="ri-phone-line text-green-600 mr-3 w-5 h-5"></i>
                  <div>
                    <div className="font-semibold">06-6713-8308</div>
                    <div className="text-sm text-gray-600">营业时间:10:00-17:00(休息日:周六、周日、节假日)</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <i className="ri-mail-line text-green-600 mr-3 w-5 h-5"></i>
                  <div>
                    <div className="font-semibold">邮件咨询</div>
                    <div className="text-sm text-gray-600">请使用左侧表格</div>
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
              联系我们
              <span className="block text-lg font-normal text-gray-600 mt-2">CONTACT</span>
            </h2>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <img src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/ico_tel_contact.png" alt="电话图标" className="mr-2" />
                <span className="text-2xl font-bold text-gray-900">06-6713-8308</span>
              </div>
              <p className="text-gray-600">营业时间：10:00-17:00（休息日：周六、周日、节假日）</p>
            </div>
            
            <div className="text-center">
              <a href="/zh/contact" className="inline-flex items-center bg-green-800 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors cursor-pointer">
                <img src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/ico_mail_contact.png" alt="邮件图标" className="mr-2" />
                邮件咨询
              </a>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="https://maruyasu19.thebase.in/" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
              <img src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/bannur.jpg" alt="在线商店" className="mx-auto" />
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">丸安洋伞株式会社</h3>
              <p className="text-gray-600 text-sm">
                〒545-0001<br />
                大阪市阿倍野区天王寺町北2-6-15
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">导航</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/zh" className="text-gray-600 hover:text-green-800 cursor-pointer">首页</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">产品</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/zh/products/silent-umbrella" className="text-gray-600 hover:text-green-800 cursor-pointer">- 静音雨伞</a></li>
                <li><a href="/zh/products/braid-umbrella" className="text-gray-600 hover:text-green-800 cursor-pointer">- 雅樱编织长伞</a></li>
                <li><a href="/zh/products/folding-umbrella" className="text-gray-600 hover:text-green-800 cursor-pointer">- 雨袋折叠伞</a></li>
                <li><a href="/zh/products/parasol" className="text-gray-600 hover:text-green-800 cursor-pointer">- 晴雨两用伞</a></li>
                <li><a href="/zh/products/koshu-weaving" className="text-gray-600 hover:text-green-800 cursor-pointer">- 甲州织</a></li>
                <li><a href="/zh/products/others" className="text-gray-600 hover:text-green-800 cursor-pointer">- 其他</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">公司</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/zh/about" className="text-gray-600 hover:text-green-800 cursor-pointer">关于我们</a></li>
                <li><a href="/zh/news" className="text-gray-600 hover:text-green-800 cursor-pointer">新闻</a></li>
                <li><a href="/zh/repair" className="text-gray-600 hover:text-green-800 cursor-pointer">维修服务</a></li>
                <li><a href="/zh/contact" className="text-gray-600 hover:text-green-800 cursor-pointer">联系我们</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center">
            <p className="text-sm text-gray-600">
              版权所有 © 丸安洋伞株式会社 保留所有权利。
              <a href="https://readdy.ai/?origin=logo" className="ml-4 text-green-600 hover:text-green-800 cursor-pointer">网站建设</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
