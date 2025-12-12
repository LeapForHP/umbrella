
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AboutPageJa: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link to="/ja">
                <img 
                  src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/logo_hd.jpg" 
                  alt="丸安洋傘株式会社|職人が手作りした日本製の傘"
                  className="h-12"
                />
              </Link>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <Link to="/ja" className="text-gray-700 hover:text-gray-900">ホーム</Link>
              <div className="relative group">
                <button className="text-gray-700 hover:text-gray-900 flex items-center">
                  取扱商品
                  <i className="ri-arrow-down-s-line ml-1"></i>
                </button>
                <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <Link to="/ja/products/silent-umbrella" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">サイレントアンブレラ</Link>
                  <Link to="/ja/products/braid-umbrella" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">雅桜組ひも長傘</Link>
                  <Link to="/ja/products/folding-umbrella" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">レインポケット折傘</Link>
                  <Link to="/ja/products/parasol" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">晴雨兼用日傘</Link>
                  <Link to="/ja/products/koshu-weaving" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">甲州織</Link>
                  <Link to="/ja/products/others" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">その他</Link>
                </div>
              </div>
              <Link to="/ja/repair" className="text-gray-700 hover:text-gray-900">修理・お直し</Link>
              <Link to="/ja/about" className="text-gray-700 hover:text-gray-900">会社概要</Link>
              <Link to="/ja/news" className="text-gray-700 hover:text-gray-900">お知らせ</Link>
              <Link to="/ja/contact" className="text-gray-700 hover:text-gray-900">お問い合わせ</Link>
            </nav>

            {/* Language Selector */}
            <div className="relative">
              <button 
                onClick={toggleDropdown}
                className="flex items-center space-x-2 px-3 py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
              >
                <span className="text-sm font-medium">日本語</span>
                <i className="ri-arrow-down-s-line"></i>
              </button>
              
              {dropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-32 bg-white shadow-lg rounded-md z-50">
                  <Link 
                    to="/about" 
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <span className="mr-2">🇺🇸</span>
                    English
                  </Link>
                  <Link 
                    to="/ja/about" 
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <span className="mr-2">🇯🇵</span>
                    日本語
                  </Link>
                  <Link 
                    to="/zh/about" 
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <span className="mr-2">🇨🇳</span>
                    中文
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Visual */}
      <div className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">会社概要</h1>
        </div>
      </div>

      <main>
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-3">
          <div className="max-w-7xl mx-auto px-4">
            <nav className="flex items-center text-sm">
              <Link to="/ja" className="text-gray-600 hover:text-gray-900">ホーム</Link>
              <i className="ri-arrow-right-s-line text-gray-400 mx-2"></i>
              <span className="text-gray-900">会社概要</span>
            </nav>
          </div>
        </div>

        {/* Company Overview Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-center text-3xl font-bold mb-16">
              会社概要<br />
              <span className="text-lg font-normal text-gray-600">COMPANY</span>
            </h2>

            {/* Company Table */}
            <div className="max-w-4xl mx-auto">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <tbody>
                  <tr className="border-b">
                    <th className="bg-amber-700 text-white text-left px-6 py-4 w-32 font-medium">会社名</th>
                    <td className="px-6 py-4 text-gray-700">丸安洋傘株式会社</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <th className="bg-amber-700 text-white text-left px-6 py-4 font-medium">所在地</th>
                    <td className="px-6 py-4 text-gray-700">
                      〒545-0001<br />
                      大阪市阿倍野区天王寺町北2-6-15
                    </td>
                  </tr>
                  <tr className="border-b">
                    <th className="bg-amber-700 text-white text-left px-6 py-4 font-medium">営業時間</th>
                    <td className="px-6 py-4 text-gray-700">10:00~17:00</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <th className="bg-amber-700 text-white text-left px-6 py-4 font-medium">休業日</th>
                    <td className="px-6 py-4 text-gray-700">土・日・祝祭日・夏季・年末年始</td>
                  </tr>
                  <tr>
                    <th className="bg-amber-700 text-white text-left px-6 py-4 font-medium">TEL</th>
                    <td className="px-6 py-4 text-gray-700">
                      <a href="tel:06-6713-8308" className="text-blue-600 hover:text-blue-800 font-semibold">
                        06-6713-8308
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Company Images */}
            <div className="flex flex-wrap gap-8 justify-center mt-16">
              <div>
                <img 
                  src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/company/img01.jpg" 
                  alt="丸安洋傘株式会社"
                  className="w-80 h-auto rounded-lg shadow-lg"
                />
              </div>
              <div>
                <img 
                  src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/company/img02.jpg" 
                  alt="丸安洋傘株式会社"
                  className="w-80 h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Access Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-center text-3xl font-bold mb-16">
              アクセスマップ<br />
              <span className="text-lg font-normal text-gray-600">MAP</span>
            </h2>

            <div className="max-w-5xl mx-auto">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13129.339800821062!2d135.523265!3d34.646243!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf9994b3754dd912f!2z5Li45a6J5rSL5YKY77yI5qCq77yJ!5e0!3m2!1sja!2sjp!4v1649917843683!5m2!1sja!2sjp"
                width="100%" 
                height="400"
                className="border-0 rounded-lg shadow-lg"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-center text-3xl font-bold mb-12">
              お問い合わせ<br />
              <span className="text-lg font-normal text-gray-600">CONTACT</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="text-center">
                <div className="mb-6">
                  <div className="flex justify-center items-center mb-4">
                    <img 
                      src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/ico_tel_contact.png" 
                      alt="電話アイコン"
                      className="w-6 h-6 mr-3"
                    />
                    <span className="text-2xl font-bold">06-6713-8308</span>
                  </div>
                  <p className="text-gray-600">営業時間 10:00~17:00(定休日:土・日・祝)</p>
                </div>
              </div>
              
              <div className="text-center">
                <Link to="/ja/contact" className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors">
                  <img 
                    src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/ico_mail_contact.png" 
                    alt="メール"
                    className="w-6 h-6 mr-3"
                  />
                  メールでのお問い合わせ
                </Link>
              </div>
            </div>

            <div className="text-center">
              <a href="https://maruyasu19.thebase.in/" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/bannur.jpg" 
                  alt="販売サイトはこちら"
                  className="mx-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <Link to="/ja">
                <img 
                  src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/logo_hd.jpg" 
                  alt="丸安洋傘株式会社|職人が手作りした日本製の傘"
                  className="h-12 mb-4"
                />
              </Link>
              <h3 className="text-lg font-semibold mb-2">丸安洋傘株式会社</h3>
              <p className="text-gray-300">
                〒545-0001<br />
                大阪市阿倍野区天王寺町北2-6-15
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">ホーム</h4>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">取扱商品</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/ja/products/silent-umbrella" className="hover:text-white">- サイレントアンブレラ</Link></li>
                <li><Link to="/ja/products/braid-umbrella" className="hover:text-white">- 雅桜組ひも長傘</Link></li>
                <li><Link to="/ja/products/folding-umbrella" className="hover:text-white">- レインポケット折傘</Link></li>
                <li><Link to="/ja/products/parasol" className="hover:text-white">- 晴雨兼用日傘</Link></li>
                <li><Link to="/ja/products/koshu-weaving" className="hover:text-white">- 甲州織</Link></li>
                <li><Link to="/ja/products/others" className="hover:text-white">- その他</Link></li>
              </ul>
            </div>
            
            <div>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/ja/about" className="hover:text-white">会社概要</Link></li>
                <li><Link to="/ja/news" className="hover:text-white">お知らせ</Link></li>
                <li><Link to="/ja/repair" className="hover:text-white">修理・お直し</Link></li>
                <li><Link to="/ja/contact" className="hover:text-white">お問い合わせ</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              <small>Copyright © 丸安洋傘株式会社 All rights reserved.</small>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPageJa;
