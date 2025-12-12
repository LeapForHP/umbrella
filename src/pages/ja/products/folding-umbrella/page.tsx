
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FoldingUmbrellaPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/ja" className="flex items-center">
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/logo_hd.jpg" 
                alt="丸安洋傘株式会社|職人が手作りした日本製の傘" 
                className="h-12"
              />
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/ja" className="text-gray-700 hover:text-green-600 font-medium">ホーム</Link>
              <div className="relative">
                <button 
                  className="text-gray-700 hover:text-green-600 font-medium flex items-center"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  取扱商品
                  <i className="ri-arrow-down-s-line ml-1"></i>
                </button>
                {isMenuOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <Link to="/ja/products/silent-umbrella" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">サイレントアンブレラ</Link>
                    <Link to="/ja/products/braid-umbrella" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">雅桜組ひも長傘</Link>
                    <Link to="/ja/products/folding-umbrella" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">レインポケット折傘</Link>
                    <Link to="/ja/products/parasol" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">晴雨兼用日傘</Link>
                    <Link to="/ja/products/koshu-weaving" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">甲州織</Link>
                    <Link to="/ja/products/others" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">その他</Link>
                  </div>
                )}
              </div>
              <Link to="/ja/repair" className="text-gray-700 hover:text-green-600 font-medium">修理・お直し</Link>
              <Link to="/ja/about" className="text-gray-700 hover:text-green-600 font-medium">会社概要</Link>
              <Link to="/ja/news" className="text-gray-700 hover:text-green-600 font-medium">お知らせ</Link>
              <Link to="/ja/contact" className="text-gray-700 hover:text-green-600 font-medium">お問い合わせ</Link>
            </nav>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
              >
                <span className="text-lg">🇯🇵</span>
                <span className="text-sm font-medium">日本語</span>
                <i className="ri-arrow-down-s-line text-gray-500"></i>
              </button>
              
              {isLanguageOpen && (
                <div className="absolute right-0 top-full mt-1 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <Link 
                    to="/ja/products/folding-umbrella"
                    className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 bg-blue-50 border-l-2 border-blue-500"
                  >
                    <span>🇯🇵</span>
                    <span>日本語</span>
                  </Link>
                  <Link 
                    to="/products/folding-umbrella"
                    className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <span>🇺🇸</span>
                    <span>English</span>
                  </Link>
                  <Link 
                    to="/zh/products/folding-umbrella"
                    className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <span>🇨🇳</span>
                    <span>中文</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-green-600 py-12 text-center">
        <h1 className="text-3xl font-bold text-white">レインポケット折傘</h1>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        <nav className="text-sm text-gray-600">
          <Link to="/ja" className="hover:text-green-600">ホーム</Link>
          <span className="mx-2">&gt;</span>
          <span className="text-gray-900">レインポケット折傘</span>
        </nav>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 pb-16">
        {/* Product Introduction */}
        <section className="mt-8">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="lg:w-1/2">
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/folding/img01.jpg" 
                alt="傘袋" 
                className="w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4">
                ありそうで、いままでなかった<br />
                <span className="text-green-600">傘袋!</span>
              </h3>
              <div className="text-gray-700 leading-relaxed">
                <p>
                  買い物の時、旅行の時、出張の時、雨の日のお出かけにとっても便利です。<br />
                  レインポケットは、入れ口が広く折傘をたたまずにスマートに収納できます。<br />
                  傘生地のレインポケットは、満員電車の中でも水滴で周りに迷惑をかけません。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Catch Copy */}
        <div className="text-center py-16">
          <p className="text-xl text-gray-700">あのわずらわしい濡れた折りたたみ傘の収納も一瞬で完了。</p>
        </div>

        {/* Section 2 */}
        <section className="mt-8">
          <div className="flex flex-col lg:flex-row-reverse items-start gap-8">
            <div className="lg:w-1/2">
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/folding/img03.png" 
                alt="紐のフック" 
                className="w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4">
                紐のフックを<br />
                <span className="text-green-600">カバンにかけて楽々</span>
              </h3>
              <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                  開発のきっかけは、雨の日にお祝いのプレゼントを抱えて電車に乗った時、満員の電車の中で左手には荷物、右手には折りたたみ傘を濡れないようにと必死で持ち、大変苦労した経験です。その時に傘を瞬時に収納できるものがあればと考えました。
                </p>
                <p>ご注意:ご使用後は広げて陰干ししてください。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Full Width Image */}
        <section className="mt-16">
          <img 
            src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/folding/img02.jpg" 
            alt="紐のフック" 
            className="w-full rounded-lg"
          />
        </section>

        {/* Video Section */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-2">動画でご紹介</h3>
          <p className="text-center text-green-600 text-xl font-bold mb-8">FOLDING</p>
          
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/mgbry1tOaBE" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mt-16 bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-2">お問い合わせ</h2>
          <p className="text-center text-gray-600 font-bold mb-8">CONTACT</p>
          
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="text-center lg:text-left">
              <p className="text-2xl font-bold text-gray-800 mb-2">
                <i className="ri-phone-line mr-2"></i>
                06-6713-8308
              </p>
              <p className="text-sm text-gray-600">営業時間 10:00~17:00(定休日:土・日・祝)</p>
            </div>
            <div>
              <Link 
                to="/ja/contact" 
                className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                <i className="ri-mail-line mr-2"></i>
                メールでのお問い合わせ
              </Link>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a 
              href="https://maruyasu19.thebase.in/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/bannur.jpg" 
                alt="販売サイトはこちら" 
                className="mx-auto max-w-md"
              />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="mb-8 lg:mb-0">
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/logo_hd.jpg" 
                alt="丸安洋傘株式会社" 
                className="h-12 mb-4"
              />
              <h3 className="text-lg font-bold mb-2">丸安洋傘株式会社</h3>
              <p className="text-gray-400">
                〒545-0001<br />
                大阪市阿倍野区天王寺町北2-6-15
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <ul className="space-y-2">
                  <li><Link to="/ja" className="text-gray-300 hover:text-white">ホーム</Link></li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2">取扱商品</p>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/ja/products/silent-umbrella" className="text-gray-300 hover:text-white">- サイレントアンブレラ</Link></li>
                  <li><Link to="/ja/products/braid-umbrella" className="text-gray-300 hover:text-white">- 雅桜組ひも長傘</Link></li>
                  <li><Link to="/ja/products/folding-umbrella" className="text-gray-300 hover:text-white">- レインポケット折傘</Link></li>
                  <li><Link to="/ja/products/parasol" className="text-gray-300 hover:text-white">- 晴雨兼用日傘</Link></li>
                  <li><Link to="/ja/products/koshu-weaving" className="text-gray-300 hover:text-white">- 甲州織</Link></li>
                  <li><Link to="/ja/products/others" className="text-gray-300 hover:text-white">- その他</Link></li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li><Link to="/ja/about" className="text-gray-300 hover:text-white">会社概要</Link></li>
                  <li><Link to="/ja/news" className="text-gray-300 hover:text-white">お知らせ</Link></li>
                  <li><Link to="/ja/repair" className="text-gray-300 hover:text-white">修理・お直し</Link></li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li><Link to="/ja/contact" className="text-gray-300 hover:text-white">お問い合わせ</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              Copyright © 丸安洋傘株式会社 All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FoldingUmbrellaPage;
