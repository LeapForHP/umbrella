
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SilentUmbrellaPage = () => {
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
                    to="/ja/products/silent-umbrella"
                    className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 bg-blue-50 border-l-2 border-blue-500"
                  >
                    <span>🇯🇵</span>
                    <span>日本語</span>
                  </Link>
                  <Link 
                    to="/products/silent-umbrella"
                    className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <span>🇺🇸</span>
                    <span>English</span>
                  </Link>
                  <Link 
                    to="/zh/products/silent-umbrella"
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
        <h1 className="text-3xl font-bold text-white">サイレントアンブレラ</h1>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        <nav className="text-sm text-gray-600">
          <Link to="/ja" className="hover:text-green-600">ホーム</Link>
          <span className="mx-2">&gt;</span>
          <span className="text-gray-900">サイレントアンブレラ</span>
        </nav>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 pb-16">
        {/* Product Introduction */}
        <section className="mt-8">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="lg:w-1/2">
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/quiet/img01.jpg" 
                alt="サイレントアンブレラ" 
                className="w-full mb-4"
              />
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/quiet/1-2.gif" 
                alt="サイレントアンブレラ" 
                className="w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                  開発のきっかけは、視覚障がいの方から「雨音の静かな傘を作れないでしょうか?」とのお話がありました。その時は何のためにそんな傘が必要なのかと思いました。
                </p>
                <p className="mb-4">
                  話を聞くと視覚障がいの方は、雨で外出した時、傘を使うと雨音で周りの音が消されるので外出が不安になるそうです。そこから何年もかけて試行錯誤、完成したのがサイレントアンブレラです。
                </p>
                <p className="mb-4">
                  多くの人が雨の日には不快な傘の音に悩まされていると思います。この傘は二重構造で雨滴の音を軽減し静かな雨音が落ち着いた気持ちを演出します。<br />
                  「パサッパサッ」と言うやさしい雨音に変わります。「雪が当っているみたい、線香花火のような音」とも言われます。小雨では雨が止んだと錯覚する感じです。強い雨では小雨の感覚です。<br />
                  雨の日も心地よく話し声や周りの音などが聞き取りやすくなります。
                </p>
                <p className="mb-4">
                  夏では日傘としてご使用できます。二重構造で紫外線と熱を遮断、感覚が木陰に入った時のような涼しさです。一般の当社輸入日傘との実験では内側の温度が10度以上の違いがありました。
                </p>
                <p className="mb-6">
                  手作りの傘は細かい工程を入れると100以上になります。傘職人が丁寧に手作りで作り上げます。<br />
                  このサイレントアンブレラで是非、快適な雨の日を体験してみてください。
                </p>
                <a 
                  href="https://youtu.be/jNkFi-SeYoA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
                >
                  動画で見る
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Research Data */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold text-green-600 mb-8">神奈川工科大学の上田計測データ</h3>
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="lg:w-1/2">
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/quiet/img11.jpg" 
                alt="サイレントアンブレラ" 
                className="w-full mb-6"
              />
            </div>
            <div className="lg:w-1/2">
              <div className="text-gray-700 leading-relaxed">
                <p className="text-red-600 font-bold mb-2">
                  雨音を30~35%カット<br />
                  ビニール傘の雨音50~60dbが図書館の室内30~40db位に静かになります。
                </p>
                <p className="text-red-600 font-bold mb-4">
                  内側温度10度以上カット。<br />
                  紫外線遮蔽率/遮光率100%以上
                </p>
                <p className="mb-2">
                  紫外線遮蔽率感覚が木陰に入った時のような涼しさです。
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  &lt;紫外線遮蔽率:メッシュ65%高密度織99.5%&gt;<br />
                  &lt;遮光率:メッシュ66.7%高密度織97.5%&gt;
                </p>
                <p className="mb-6">
                  SDGs サイレントアンブレラは修理ができます。&lt;依頼書入&gt;
                </p>
                <a 
                  href="https://maruyasu19.thebase.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
                >
                  ご購入はこちら BASE
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Scenarios */}
        <section className="mt-16">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">雨の日の外出に</h3>
            <div className="text-gray-700 leading-relaxed mb-6">
              <p className="mb-3">
                ●雨の日、従来の雨傘では、雨による傘生地への衝撃音で周囲の音が聞き取りにくく、特に後方からの自動車等の接近音は察知しにくいものです。<br />
                でも「サイレントアンブレラ」なら周囲の音が聞き取りやすくなるので自動車等の接近音も従来の雨傘より察知しやすくなります。
              </p>
              <p className="mb-3">
                ●雨音が低減され、音のなる信号機の音も聞き取りやすくなります。
              </p>
              <p>
                ●雨の日のお出かけの中、会話をしても相手の話し声が聞き取りやすくなります。
              </p>
            </div>

            <h4 className="text-lg font-bold text-gray-800 mb-4">紫外線熱中症対策に</h4>
            <p className="text-gray-700 mb-6">
              ●傘が二重構造の為、太陽光や太陽熱も緩和しやすくなります。外出やスポーツ観戦などの日傘として。
            </p>

            <h4 className="text-lg font-bold text-gray-800 mb-4">仕事や趣味の為に</h4>
            <div className="text-gray-700 mb-6">
              <p className="mb-3">
                ●雨の日、野外での音響設備の調整や収録、実況放送等もしやすくなります。
              </p>
              <p>
                ●雨の日、自然の中で雨音を聞いたり、自然の音を楽しんだり今までとは違う雨の日を体感できます。
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/quiet/img03.jpg" 
                alt="サイレントアンブレラ" 
                className="flex-1"
              />
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/quiet/img04.jpg" 
                alt="サイレントアンブレラ" 
                className="flex-1"
              />
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/quiet/img05.jpg" 
                alt="サイレントアンブレラ" 
                className="flex-1"
              />
            </div>
          </div>
        </section>

        {/* Video Comparison */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-2">雨音の比較 動画で紹介</h3>
          <p className="text-center text-green-600 text-xl font-bold mb-8">SILENT UMBRELLA</p>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3">
              <h4 className="text-lg font-bold mb-4">&lt;ご注意&gt;</h4>
              <div className="text-gray-700 leading-relaxed">
                <p className="mb-3">
                  ●傘の構造上、水滴がたまりやすくなっております。重くなったと感じましたら傘を前後か左右に傾けて水滴を落として下さい。
                </p>
                <p>
                  ●雨音が完全に無くなるわけでは無いのでご了承ください。
                </p>
              </div>
            </div>
            <div className="lg:w-2/3 space-y-6">
              <div className="aspect-video">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/bnFQftshv4o" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
              <div className="aspect-video">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/9Y04vdOayFg" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
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

export default SilentUmbrellaPage;
