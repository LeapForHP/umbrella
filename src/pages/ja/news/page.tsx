import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../home/components/Header';
import Footer from '../../home/components/Footer';

const NewsPageJa: React.FC = () => {
  const newsItems = [
    {
      date: '2025.10.15',
      title: 'あべのハルカスにてPOPUPの出展!/大阪クリエイトフェア',
      image: 'https://maruyasuweb.jp/wp-content/uploads/2025/10/IMG_1432.jpg',
      excerpt: '大阪クリエイトフェアの一環として、あべのハルカス近鉄本店にてポップアップショップを出展いたします。期間限定で弊社の傘をご覧いただけます。',
      category: 'イベント'
    },
    {
      date: '2025.09.01',
      title: '展示販売コーナーリニューアルのお知らせ',
      image: 'https://maruyasuweb.jp/wp-content/uploads/2025/09/IMG_1746.jpg',
      excerpt: '工房内の展示販売コーナーを全面リニューアルいたしました。より多くの商品をご覧いただけるようになりました。',
      category: 'お知らせ'
    },
    {
      date: '2025.09.01',
      title: '読売新聞に掲載いただきました!',
      image: 'https://maruyasuweb.jp/wp-content/uploads/2025/09/IMG_1744.jpg',
      excerpt: '弊社の職人技術とサイレントアンブレラについて、読売新聞にて大きく取り上げていただきました。',
      category: 'メディア掲載'
    },
    {
      date: '2025.08.15',
      title: 'サイレントアンブレラの新色発売開始',
      image: 'https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/product_img01.jpg',
      excerpt: '人気のサイレントアンブレラに新色「深緑」と「紺」を追加いたしました。より多くの選択肢をご用意しております。',
      category: '新商品'
    },
    {
      date: '2025.07.20',
      title: '夏季休業のお知らせ',
      image: 'https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/company_img.png',
      excerpt: '誠に勝手ながら、8月11日（日）から8月16日（金）まで夏季休業とさせていただきます。',
      category: 'お知らせ'
    },
    {
      date: '2025.06.30',
      title: '雅桜組ひも長傘が工芸品コンテストで入賞',
      image: 'https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/product_img02.jpg',
      excerpt: '第25回全国工芸品コンテストにて、雅桜組ひも長傘が優秀賞を受賞いたしました。',
      category: '受賞'
    },
    {
      date: '2025.05.15',
      title: 'テレビ番組「匠の技」に出演いたします',
      image: 'https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/cnt01_img01.jpg',
      excerpt: 'NHK「匠の技～職人の心意気～」に弊社職人が出演し、傘作りの工程をご紹介いたします。',
      category: 'メディア掲載'
    },
    {
      date: '2025.04.10',
      title: 'レインポケット折傘の生産体制を強化',
      image: 'https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/product_img03.jpg',
      excerpt: 'ご好評いただいているレインポケット折傘の需要増加に対応するため、生産体制を強化いたします。',
      category: 'お知らせ'
    },
    {
      date: '2025.03.25',
      title: '春の新作日傘コレクション発表',
      image: 'https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/product_img04.jpg',
      excerpt: '春夏シーズンに向けた新作日傘コレクションを発表いたします。桜をモチーフにした限定デザインも。',
      category: '新商品'
    },
    {
      date: '2025.02.14',
      title: '甲州織傘の技術継承プロジェクト開始',
      image: 'https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/product_img05.jpg',
      excerpt: '伝統的な甲州織の技術を次世代に継承するため、新たな職人育成プロジェクトを開始いたします。',
      category: 'お知らせ'
    }
  ];

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
                ニュース
              </h1>
              <p className="text-xl lg:text-2xl mb-8">
                丸安洋傘の最新情報をお届けします
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
                    ニュース
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        {/* News List */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8">
              {newsItems.map((item, index) => (
                <article 
                  key={index} 
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-1">
                      <div className="aspect-video md:aspect-square overflow-hidden">
                        <img 
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    
                    <div className="md:col-span-2 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center space-x-4 mb-3">
                          <time className="text-sm text-gray-500 font-mono">
                            {item.date}
                          </time>
                          <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                            {item.category}
                          </span>
                        </div>
                        
                        <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 hover:text-green-600 transition-colors cursor-pointer">
                          {item.title}
                        </h2>
                        
                        <p className="text-gray-700 leading-relaxed mb-4">
                          {item.excerpt}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <button className="text-green-600 hover:text-green-800 font-semibold transition-colors">
                          続きを読む
                          <i className="ri-arrow-right-line ml-1"></i>
                        </button>
                        
                        <div className="flex items-center space-x-2 text-gray-500">
                          <button className="hover:text-green-600 transition-colors">
                            <i className="ri-share-line"></i>
                          </button>
                          <button className="hover:text-green-600 transition-colors">
                            <i className="ri-bookmark-line"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-2 text-gray-500 hover:text-green-600 transition-colors">
                  <i className="ri-arrow-left-s-line"></i>
                </button>
                
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg">
                  1
                </button>
                <button className="px-4 py-2 text-gray-700 hover:text-green-600 transition-colors">
                  2
                </button>
                <button className="px-4 py-2 text-gray-700 hover:text-green-600 transition-colors">
                  3
                </button>
                <span className="px-2 text-gray-500">...</span>
                <button className="px-4 py-2 text-gray-700 hover:text-green-600 transition-colors">
                  10
                </button>
                
                <button className="px-3 py-2 text-gray-500 hover:text-green-600 transition-colors">
                  <i className="ri-arrow-right-s-line"></i>
                </button>
              </nav>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              カテゴリー
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <i className="ri-megaphone-line text-green-600"></i>
                  </div>
                  <h3 className="font-semibold text-gray-800">お知らせ</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  営業時間変更、休業日などの重要なお知らせ
                </p>
                <div className="mt-3 text-right">
                  <span className="text-xs text-gray-500">15件</span>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <i className="ri-shopping-bag-line text-blue-600"></i>
                  </div>
                  <h3 className="font-semibold text-gray-800">新商品</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  新作傘や限定商品の発売情報
                </p>
                <div className="mt-3 text-right">
                  <span className="text-xs text-gray-500">8件</span>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <i className="ri-tv-line text-purple-600"></i>
                  </div>
                  <h3 className="font-semibold text-gray-800">メディア掲載</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  テレビ、新聞、雑誌での紹介情報
                </p>
                <div className="mt-3 text-right">
                  <span className="text-xs text-gray-500">12件</span>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center group-hover:bg-yellow-200 transition-colors">
                    <i className="ri-trophy-line text-yellow-600"></i>
                  </div>
                  <h3 className="font-semibold text-gray-800">受賞・イベント</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  各種受賞歴やイベント出展情報
                </p>
                <div className="mt-3 text-right">
                  <span className="text-xs text-gray-500">6件</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-green-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              ニュースレター配信
            </h2>
            <p className="text-xl mb-8">
              最新情報をメールでお届けします
            </p>
            
            <form className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="メールアドレスを入力"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
                >
                  登録
                </button>
              </div>
              <p className="text-green-100 text-sm mt-4">
                * 配信停止はいつでも可能です
              </p>
            </form>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default NewsPageJa;