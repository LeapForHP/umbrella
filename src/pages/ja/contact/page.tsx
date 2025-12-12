import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../home/components/Header';
import Footer from '../../home/components/Footer';

const ContactPageJa: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-green-600 to-green-800 text-white">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                お問い合わせ
              </h1>
              <p className="text-xl lg:text-2xl mb-8">
                傘のことなら何でもお気軽にご相談ください
              </p>
              
              <nav className="flex justify-center">
                <ol className="flex items-center space-x-2 text-green-100">
                  <li>
                    <Link to="/ja" className="hover:text-white transition-colors">
                      ホーム
                    </Link>
                  </li>
                  <li>
                    <i className="ri-arrow-right-s-line"></i>
                  </li>
                  <li className="text-white">
                    お問い合わせ
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              お問い合わせ方法
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Phone Contact */}
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-phone-line text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">お電話でのお問い合わせ</h3>
                <div className="space-y-2 mb-6">
                  <p className="text-3xl font-mono font-bold text-green-600">06-6713-8308</p>
                  <p className="text-gray-600">営業時間：10:00～17:00</p>
                  <p className="text-gray-600">定休日：土・日・祝日</p>
                </div>
                <p className="text-gray-700">
                  お電話でのお問い合わせが最も迅速に対応できます。
                  傘の修理や商品についてのご質問など、お気軽にお電話ください。
                </p>
              </div>

              {/* Email Contact */}
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-mail-line text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">メールでのお問い合わせ</h3>
                <div className="space-y-2 mb-6">
                  <p className="text-gray-600">24時間受付</p>
                  <p className="text-gray-600">返信：1～2営業日以内</p>
                </div>
                <p className="text-gray-700 mb-6">
                  詳細なご質問や資料の添付が必要な場合は、
                  下記のフォームからメールでお問い合わせください。
                </p>
                <a 
                  href="#contact-form" 
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  フォームへ移動
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact-form" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              お問い合わせフォーム
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="山田太郎"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="example@email.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    電話番号
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="06-1234-5678"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    お問い合わせ種別 <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">選択してください</option>
                    <option value="product">商品について</option>
                    <option value="repair">修理について</option>
                    <option value="order">オーダーメイド</option>
                    <option value="wholesale">卸売について</option>
                    <option value="media">取材・メディア関係</option>
                    <option value="other">その他</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="お問い合わせ内容をできるだけ詳しくお聞かせください。"
                  maxLength={500}
                ></textarea>
                <div className="text-right text-sm text-gray-500 mt-1">
                  {formData.message.length}/500文字
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">個人情報の取り扱いについて</h4>
                <p className="text-sm text-gray-700 mb-4">
                  お客様からいただいた個人情報は、お問い合わせへの回答およびご連絡のためにのみ使用いたします。
                  第三者への提供は行いません。
                </p>
                <label className="flex items-start space-x-2">
                  <input 
                    type="checkbox" 
                    required 
                    className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">
                    個人情報の取り扱いについて同意します <span className="text-red-500">*</span>
                  </span>
                </label>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-green-600 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors cursor-pointer whitespace-nowrap"
                >
                  送信する
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Company Info */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              会社情報・アクセス
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">会社情報</h3>
                  <dl className="space-y-3">
                    <div>
                      <dt className="font-medium text-gray-800">会社名</dt>
                      <dd className="text-gray-700">丸安洋傘株式会社</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-800">所在地</dt>
                      <dd className="text-gray-700">
                        〒545-0001<br />
                        大阪市阿倍野区天王寺町北2-6-15
                      </dd>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-800">電話番号</dt>
                      <dd className="text-gray-700">06-6713-8308</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-800">営業時間</dt>
                      <dd className="text-gray-700">
                        10:00～17:00<br />
                        （定休日：土・日・祝日）
                      </dd>
                    </div>
                  </dl>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">アクセス</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <i className="ri-train-line text-green-600 mr-2"></i>
                      JR関西本線 寺田町駅より徒歩3分
                    </li>
                    <li className="flex items-center">
                      <i className="ri-subway-line text-green-600 mr-2"></i>
                      地下鉄谷町線 阿倍野駅より徒歩8分
                    </li>
                    <li className="flex items-center">
                      <i className="ri-car-line text-green-600 mr-2"></i>
                      駐車場：2台まで対応可能
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.4842582961!2d135.5123456153185!3d34.64649998044219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e76b7c8b7c8b%3A0x123456789abcdef!2z5aSn6Ziq5biC6Zi%2F5YCN6YeN5Yy65aSp546L5LiZ55S65YyX!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="丸安洋傘株式会社の地図"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              よくあるご質問
            </h2>
            
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg">
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer">
                    <h3 className="text-lg font-semibold text-gray-800">修理はどのような傘でも対応可能ですか？</h3>
                    <i className="ri-arrow-down-s-line text-xl text-gray-500 group-open:rotate-180 transition-transform"></i>
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">
                    <p>
                      申し訳ございませんが、基本的には弊社で製造した国産傘のみの修理をお受けしております。
                      これは規格により生地の張りが違うためです。修理可能かどうかは実際に傘をお持ちいただければ判断いたします。
                    </p>
                  </div>
                </details>
              </div>
              
              <div className="border border-gray-200 rounded-lg">
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer">
                    <h3 className="text-lg font-semibold text-gray-800">オーダーメイドの傘は作れますか？</h3>
                    <i className="ri-arrow-down-s-line text-xl text-gray-500 group-open:rotate-180 transition-transform"></i>
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">
                    <p>
                      はい、承っております。お客様のご希望に合わせて、生地の色柄、持ち手の種類、サイズなど
                      カスタマイズした傘をお作りできます。詳細はお電話またはお問い合わせフォームからご相談ください。
                    </p>
                  </div>
                </details>
              </div>
              
              <div className="border border-gray-200 rounded-lg">
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer">
                    <h3 className="text-lg font-semibold text-gray-800">サイレントアンブレラはどこで購入できますか？</h3>
                    <i className="ri-arrow-down-s-line text-xl text-gray-500 group-open:rotate-180 transition-transform"></i>
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">
                    <p>
                      弊社工房での直販の他、BASEのオンラインショップ、Yahoo!ショッピングでもご購入いただけます。
                      また、一部百貨店や傘専門店でもお取り扱いいただいております。
                    </p>
                  </div>
                </details>
              </div>
              
              <div className="border border-gray-200 rounded-lg">
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer">
                    <h3 className="text-lg font-semibold text-gray-800">工房の見学はできますか？</h3>
                    <i className="ri-arrow-down-s-line text-xl text-gray-500 group-open:rotate-180 transition-transform"></i>
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">
                    <p>
                      事前にご連絡いただければ、工房見学も可能です。職人の手作り工程をご覧いただけます。
                      ただし、作業の都合上、お受けできない日もございますので、必ず事前にお電話でご確認ください。
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPageJa;