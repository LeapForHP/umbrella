import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../home/components/Header';
import Footer from '../home/components/Footer';

const HomePageJa: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-gray-50 to-white">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <Link to="/ja/products/silent-umbrella" className="group">
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/fv01-01.jpg" 
                    alt="サイレントアンブレラ"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h3 className="text-white text-xl font-bold">サイレントアンブレラ</h3>
                  </div>
                </div>
              </Link>
              
              <Link to="/ja/products/braid-umbrella" className="group">
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/fv01-02.jpg" 
                    alt="雅桜組ひも長傘"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h3 className="text-white text-xl font-bold">雅桜組ひも長傘</h3>
                  </div>
                </div>
              </Link>
              
              <Link to="/ja/products/folding-umbrella" className="group">
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/fv01-03.jpg" 
                    alt="レインポケット折傘"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h3 className="text-white text-xl font-bold">レインポケット折傘</h3>
                  </div>
                </div>
              </Link>
            </div>
            
            <div className="text-center">
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-4">
                日本の職人の手作り
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                伝統の技術で一本一本丁寧に作られた傘
              </p>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section id="news" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/3">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  お知らせ
                  <span className="block text-lg font-normal text-green-600 mt-2">NEWS</span>
                </h2>
              </div>
              
              <div className="lg:w-2/3">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 pb-6 border-b">
                    <div className="flex-shrink-0">
                      <img 
                        src="https://maruyasuweb.jp/wp-content/uploads/2025/10/IMG_1432.jpg" 
                        alt="あべのハルカスにてPOPUPの出展"
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-500 mb-2">2025.10.15</div>
                      <h3 className="text-lg font-semibold text-gray-800 hover:text-green-600 transition-colors cursor-pointer">
                        あべのハルカスにてPOPUPの出展!/大阪クリエイトフェア
                      </h3>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 pb-6 border-b">
                    <div className="flex-shrink-0">
                      <img 
                        src="https://maruyasuweb.jp/wp-content/uploads/2025/09/IMG_1746.jpg" 
                        alt="展示販売コーナーリニューアル"
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-500 mb-2">2025.09.01</div>
                      <h3 className="text-lg font-semibold text-gray-800 hover:text-green-600 transition-colors cursor-pointer">
                        展示販売コーナーリニューアルのお知らせ
                      </h3>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <img 
                        src="https://maruyasuweb.jp/wp-content/uploads/2025/09/IMG_1744.jpg" 
                        alt="読売新聞に掲載"
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-500 mb-2">2025.09.01</div>
                      <h3 className="text-lg font-semibold text-gray-800 hover:text-green-600 transition-colors cursor-pointer">
                        読売新聞に掲載いただきました!
                      </h3>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link 
                    to="/ja/news" 
                    className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    一覧を見る
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Silent Umbrella Section */}
        <section id="silent" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-800">
                  <span className="text-green-600">雨音でストレスを<br />感じていませんか?</span>
                </h2>
                <h3 className="text-2xl font-semibold text-gray-800">
                  視覚障がいの方からの声<br />
                  「静かな傘がほしい」から生まれた<br />
                  雨音の静かな傘、サイレントアンブレラ
                </h3>
                <p className="text-lg text-gray-700">
                  静かで心地いい音に変わります。<br />
                  音に敏感な方！音楽など音響にたずさわる方におすすめです。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  この傘は二重構造で雨滴の音を軽減し静かな雨音が落ち着いた気持ちを演出します。<br />
                  メッシュ生地と雨傘生地との立体空間が今までにないシルエットです。
                </p>
                
                <div className="space-y-4">
                  <img 
                    src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/cnt01_img03.gif" 
                    alt="サイレントアンブレラ動作"
                    className="w-full max-w-md rounded-lg"
                  />
                  <img 
                    src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/cnt01_img02.jpg" 
                    alt="サイレントアンブレラ詳細"
                    className="w-full max-w-md rounded-lg"
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <img 
                  src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/cnt01_img01.jpg" 
                  alt="サイレントアンブレラ"
                  className="w-full rounded-lg shadow-lg"
                />
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">おすすめの使い方</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>周りの音がよく聞こえます</li>
                    <li>日陰にいるような涼しさです</li>
                    <li>雨の日のお仕事に</li>
                    <li><span className="text-red-600">*</span>大学の学会にも取り上げて頂き発表していただきました。</li>
                    <li><span className="text-red-600">*</span>雨音低減効果を有する雨傘の特許取得いたしました。</li>
                    <li><span className="text-red-600">*</span>サーモグラフィーカメラで一般の日傘との比較を実験いたしました。</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Braid Umbrella Section */}
        <section id="braid" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/cnt02_img01.jpg" 
                  alt="雅桜組ひも長傘"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-800">
                  <span className="text-green-600">雅桜組ひも長傘</span><br />
                  組ひもと甲州織の融合
                </h2>
                <p className="text-lg text-gray-700">
                  和の美意識が感じられる日本の傘を！<br />
                  和の風合い漂う傘が出来上がりました。
                </p>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  奈良吉野の山桜の持ち手に丁寧に組ひもを巻き施しています。<br />
                  気持ち良い手触りで軽く握るだけで滑りません。<br /><br />
                  <span className="text-red-600">*</span>おもてなしセレクション受賞いたしました。<br />
                  <span className="text-red-600">*</span>組ひも持ち手の実用新案取得いたしました。
                </p>
              </div>
              
              <div>
                <img 
                  src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/cnt02_img02.jpg" 
                  alt="雅桜組ひも長傘詳細"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Folding Umbrella Section */}
        <section id="folding" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/cnt03_img01.jpg" 
                  alt="レインポケット折傘"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-800">
                  <span className="text-green-600">レインポケット折傘</span><br />
                  閉じたら、そのまま、すぐに収納
                </h2>
                <p className="text-lg text-gray-700">
                  折りたたみ傘の悩みを解決！<br />
                  閉じたらたたまず、サッと収納。<br />
                  満員の電車、バスで折りたたみ傘の収納に困っていませんか？
                </p>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  電車で荷物がある時、濡れた傘も楽に持ち運べてとても重宝します。<br /><br />
                  <span className="text-red-600">*</span>TVの取材で放送されました。<br />
                  <span className="text-red-600">*</span>特許を取得いたしました。
                </p>
              </div>
              
              <div>
                <img 
                  src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/cnt03_img02.jpg" 
                  alt="レインポケット折傘詳細"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Repair Section */}
        <section id="repair" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-800">
                  <span className="text-green-600">SDGs</span><br />
                  愛着ある傘が末永く使えます
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  弊社で国内生産した傘は修理が可能です。<br />
                  規格により生地の張りが違うため、<br />
                  基本 弊社の国産傘のみの修理をお受けしております。
                </p>
                <p className="text-gray-700">
                  お客様の声より「修理・お直し」に関するお喜びの声をいただきました。
                </p>
                <Link 
                  to="/ja/repair" 
                  className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  お礼のお言葉・修理依頼履歴
                </Link>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <img 
                    src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/repair_img.jpg" 
                    alt="修理前"
                    className="w-full rounded-lg shadow-lg mb-2"
                  />
                  <p className="text-sm text-gray-600">修理前</p>
                </div>
                <div className="text-center">
                  <img 
                    src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/repair_img02.jpg" 
                    alt="修理後"
                    className="w-full rounded-lg shadow-lg mb-2"
                  />
                  <p className="text-sm text-gray-600">修理後</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Section */}
        <section id="company" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/company_img.png" 
                  alt="会社概要"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-800">
                  大阪阿倍野 日本の職人手作り<br />
                  <span className="text-green-600">丸安洋傘株式会社</span>
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  大阪阿倍野のJR寺田町駅の近くに工房があります。<br />
                  先代から引き継いだ技法と半世紀以上使い続けている道具で手作りしています。
                </p>
                <Link 
                  to="/ja/about" 
                  className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  会社概要
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                取扱商品
                <span className="block text-lg font-normal text-green-600 mt-2">PRODUCT</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              <Link to="/ja/products/silent-umbrella" className="group">
                <div className="relative overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/product_img01.jpg" 
                      alt="サイレントアンブレラ"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                      サイレントアンブレラ
                    </h3>
                    <p className="text-sm text-green-600 mt-2">詳しく見る</p>
                  </div>
                </div>
              </Link>
              
              <Link to="/ja/products/braid-umbrella" className="group">
                <div className="relative overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/product_img02.jpg" 
                      alt="雅桜組ひも長傘"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                      雅桜組ひも長傘
                    </h3>
                    <p className="text-sm text-green-600 mt-2">詳しく見る</p>
                  </div>
                </div>
              </Link>
              
              <Link to="/ja/products/folding-umbrella" className="group">
                <div className="relative overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/product_img03.jpg" 
                      alt="レインポケット折傘"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                      レインポケット折傘
                    </h3>
                    <p className="text-sm text-green-600 mt-2">詳しく見る</p>
                  </div>
                </div>
              </Link>
              
              <Link to="/ja/products/parasol" className="group">
                <div className="relative overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/product_img04.jpg" 
                      alt="晴傘・日傘"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                      晴傘・日傘
                    </h3>
                    <p className="text-sm text-green-600 mt-2">詳しく見る</p>
                  </div>
                </div>
              </Link>
              
              <Link to="/ja/products/koshu-weaving" className="group">
                <div className="relative overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/product_img05.jpg" 
                      alt="甲州織"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                      甲州織
                    </h3>
                    <p className="text-sm text-green-600 mt-2">詳しく見る</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Media Section */}
        <section id="media" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/media_ttl.png" 
                  alt="レインポケット雫テレビで紹介されました"
                  className="w-full max-w-md"
                />
              </div>
              
              <div className="aspect-video">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/mgbry1tOaBE" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="rounded-lg shadow-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Social Section */}
        <section id="social" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div>
                <p className="text-center text-lg font-semibold mb-4">\\FaceBook 随時更新中/</p>
                <div className="bg-gray-100 rounded-lg p-4 h-64 flex items-center justify-center">
                  <iframe 
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F%25E4%25B8%25B8%25E5%25AE%2589%25E6%25B4%258B%25E5%2582%2598-%25E6%25A0%25AA%25E5%25BC%258F%25E4%25BC%259A%25E7%25A4%25BE-106929541003855%2F&tabs=timeline&width=500&height=270&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                    width="100%" 
                    height="270" 
                    style={{ border: 'none', overflow: 'hidden' }} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen={true} 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </div>
              
              <div>
                <p className="text-center text-lg font-semibold mb-4">\\購入はこちらから/</p>
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="https://maruyasu19.thebase.in/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <img 
                      src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/bnr_base.png" 
                      alt="BASE" 
                      className="w-full"
                    />
                  </a>
                  <a 
                    href="https://www.youtube.com/channel/UCMKigDgLfoYZ9vFCZNruO5g" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <img 
                      src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/bnr_yt.png" 
                      alt="YOUTUBE" 
                      className="w-full"
                    />
                  </a>
                </div>
              </div>
              
              <div>
                <div className="grid grid-cols-2 gap-4 mt-10">
                  <a 
                    href="https://store.shopping.yahoo.co.jp/maruyasuyougasa/search.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <img 
                      src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/bnr_yh.png" 
                      alt="yahooショッピング" 
                      className="w-full"
                    />
                  </a>
                  <a 
                    href="https://www.instagram.com/maruyasuyougasa/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <img 
                      src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/bnr_ig.png" 
                      alt="instagram" 
                      className="w-full"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                お問い合わせ
                <span className="block text-lg font-normal text-green-600 mt-2">CONTACT</span>
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-md">
                  <i className="ri-phone-line text-3xl text-green-600"></i>
                  <div>
                    <p className="text-2xl font-mono font-bold text-gray-800">06-6713-8308</p>
                    <p className="text-sm text-gray-600">営業時間 10:00~17:00(定休日:土・日・祝)</p>
                  </div>
                </div>
              </div>
              
              <div>
                <Link 
                  to="/ja/contact" 
                  className="flex items-center justify-center space-x-3 bg-green-600 text-white p-6 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <i className="ri-mail-line text-2xl"></i>
                  <span className="text-lg font-semibold">メールでのお問い合わせ</span>
                </Link>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <a 
                href="https://maruyasu19.thebase.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <img 
                  src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/bannur.jpg" 
                  alt="販売サイトはこちら" 
                  className="rounded-lg shadow-lg"
                />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePageJa;