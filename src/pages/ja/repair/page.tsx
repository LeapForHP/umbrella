
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RepairPageJa: React.FC = () => {
  const [showMore, setShowMore] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMore = () => {
    setShowMore(!showMore);
  };

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
                    to="/repair" 
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <span className="mr-2">🇺🇸</span>
                    English
                  </Link>
                  <Link 
                    to="/ja/repair" 
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <span className="mr-2">🇯🇵</span>
                    日本語
                  </Link>
                  <Link 
                    to="/zh/repair" 
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
          <h1 className="text-4xl font-bold">修理・お直し</h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center text-sm">
            <Link to="/ja" className="text-gray-600 hover:text-gray-900">ホーム</Link>
            <i className="ri-arrow-right-s-line text-gray-400 mx-2"></i>
            <span className="text-gray-900">修理・お直し</span>
          </nav>
        </div>
      </div>

      <main>
        {/* Navigation Buttons */}
        <section className="bg-gray-50 py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#repair" className="bg-amber-700 text-white px-6 py-3 rounded-full hover:bg-amber-800 transition-colors">
                修理・お直し
              </a>
              <a href="#voice" className="bg-amber-700 text-white px-6 py-3 rounded-full hover:bg-amber-800 transition-colors">
                お客様の声
              </a>
              <a href="#facebook" className="bg-amber-700 text-white px-6 py-3 rounded-full hover:bg-amber-800 transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </section>

        {/* Repair Section */}
        <section id="repair" className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-center text-3xl font-bold mb-4">
              修理・お直し<br />
              <span className="text-lg font-normal text-gray-600">repair</span>
            </h2>

            <div className="mt-16 space-y-16">
              {/* 傘の修理について */}
              <div>
                <h3 className="text-xl font-bold text-left mb-6">
                  <span className="text-green-600">傘の修理について</span>
                </h3>
                <div className="text-gray-700 leading-relaxed space-y-3">
                  <p>修理をご希望の方は、傘に付いておりました修理依頼書に記入して宅配便等で弊社までお送りください。</p>
                  <p>修理依頼書が無い場合は傘だけでも大丈夫です。(弊社までの配送はお客様ご負担となります)</p>
                  <p>傘が弊社に到着しましたら、担当者よりご連絡いたします。傘の種類や状態によって修理代金が変動します。</p>
                  <p>傘を拝見後、お電話で修理代金をご連絡させて頂きます。(骨、部材が新しくなっているものは、変更する場合があります)</p>
                </div>
              </div>

              {/* 納期について */}
              <div>
                <h3 className="text-xl font-bold text-left mb-6">
                  <span className="text-green-600">納期について</span>
                </h3>
                <div className="text-gray-700">
                  <p>修理は約10日前後かかります。</p>
                </div>
              </div>

              {/* お支払いについて */}
              <div>
                <h3 className="text-xl font-bold text-left mb-6">
                  <span className="text-green-600">お支払いについて</span>
                </h3>
                <div className="text-gray-700 leading-relaxed space-y-3">
                  <p>修理完了後、傘と一緒に郵便振替用紙を同送いたしますので後日お振込みお願いいたします。</p>
                  <p>(振込手数料は弊社負担になります)</p>
                </div>
              </div>

              {/* ご注意 */}
              <div>
                <h3 className="text-xl font-bold text-left mb-6">
                  <span className="text-green-600">ご注意</span>
                </h3>
                <div className="text-gray-700 leading-relaxed space-y-3">
                  <p>修理は、弊社の国内生産の傘のみ対応させていただきます。</p>
                  <p>他社製品は使用パーツなどが異なり、規格により生地の張りが違うため弊社ではお受けしておりません。</p>
                  <p>弊社の傘には、生地の内側に住所と電話番号が印刷された白ラベルが縫われております。</p>
                  <p>ご確認お願いします。(他社の修理傘をお送りいただいた場合は、着払いにてご返送させていただきます)</p>
                </div>
              </div>

              {/* お送り先 */}
              <div>
                <h3 className="text-xl font-bold text-left mb-6">
                  <span className="text-green-600">お送り先</span>
                </h3>
                <div className="text-gray-700 leading-relaxed space-y-3">
                  <p>〒545-0001 大阪市阿倍野区天王寺町北2-6-15</p>
                  <p>丸安洋傘㈱ 担当 川口まで</p>
                  <p>TEL:06-6713-8308</p>
                </div>
              </div>

              {/* 主な修理代金表 */}
              <div>
                <h3 className="text-xl font-bold text-left mb-6">
                  <span className="text-green-600">主な修理代金表</span>
                </h3>
                <div className="text-gray-700 leading-relaxed space-y-3">
                  <p>返却時の配送の送料 ¥660税込(北海道、離島は遠方送料¥1600がプラスされます)</p>
                  <p>骨交換 3300円~4400円税込 (材質や本数により異なります)</p>
                  <p>部品交換 1100~1650円税込</p>
                  <p>持ち手交換 1650円税込から</p>
                  <p>強力撥水加工 1100円税込</p>
                </div>
              </div>
            </div>

            {/* Before/After Images */}
            <div className="flex flex-wrap gap-8 justify-center mt-16">
              <div className="text-center">
                <p className="mb-4 text-lg font-semibold">before</p>
                <a href="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/repair/img01.png" className="block">
                  <img 
                    src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/repair/img01.png" 
                    alt="before"
                    className="w-48 h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  />
                </a>
              </div>
              <div className="text-center">
                <p className="mb-4 text-lg font-semibold">after</p>
                <a href="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/repair/img02.png" className="block">
                  <img 
                    src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/repair/img02.png" 
                    alt="after"
                    className="w-48 h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Voice Section */}
        <section id="voice" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-center text-3xl font-bold mb-16">
              お客様の声<br />
              <span className="text-lg font-normal text-gray-600">voice</span>
            </h2>

            <div className="space-y-12">
              {/* 千葉県S.S様 */}
              <div className="target">
                <h3 className="text-xl font-bold text-left mb-6">
                  <span className="text-green-600">千葉県S.S様</span>
                </h3>
                <div className="text-gray-700 leading-relaxed">
                  <p>本日、お願いしていた傘が届きました。とてもきれいに直っていて、とても嬉しく思いました。これからも大事に使って参ります。有難うございました。</p>
                </div>
              </div>

              {/* 神奈川県Y.H様 */}
              <div className="target">
                <h3 className="text-xl font-bold text-left mb-6">
                  <span className="text-green-600">神奈川県Y.H様</span>
                </h3>
                <div className="text-gray-700 leading-relaxed">
                  <p>昨日、傘受け取りました。修理有難うございます。汚れていた中棒もツルピカで、生地もパリッとしていてもはや新品状態でした。また機会がありましたら宜しくお願い致します。</p>
                </div>
              </div>

              {/* 埼玉県A.M様 */}
              <div className="target">
                <h3 className="text-xl font-bold text-left mb-6">
                  <span className="text-green-600">埼玉県A.M様</span>
                </h3>
                <div className="text-gray-700 leading-relaxed">
                  <p>この度は長年愛用の傘修理をお願いしたところ敏速に対応していただき有難うございました。送って5日で納品されびっくりしています。1本の傘をこれほど長年にわたって愛用していることはありません。これからも長く大事に使います。感謝申し上げます。</p>
                </div>
              </div>

              {/* 長野県N.S様 */}
              <div className="target">
                <h3 className="text-xl font-bold text-left mb-6">
                  <span className="text-green-600">長野県N.S様</span>
                </h3>
                <div className="text-gray-700 leading-relaxed">
                  <p>一昨日、無事に傘届きました。とってもきれいになって帰ってきてくれてうれしいです。以前の汚れが布に少し残っているところがまた、ああ自分のだあという感じがして愛着がわきます。これからも大事につかいます。ありがとうございました。</p>
                </div>
              </div>

              {/* 大阪府S.E様 */}
              <div className="target">
                <h3 className="text-xl font-bold text-left mb-6">
                  <span className="text-green-600">大阪府S.E様</span>
                </h3>
                <div className="text-gray-700 leading-relaxed">
                  <p>早速の修理、有難うございました。これからも大切に使わせて戴きます。</p>
                </div>
              </div>

              {/* 広島県U.K様 */}
              <div className="target">
                <h3 className="text-xl font-bold text-left mb-6">
                  <span className="text-green-600">広島県U.K様</span>
                </h3>
                <div className="text-gray-700 leading-relaxed">
                  <p>お世話になりました。かさ1本ですが想いでのかさでとても捨てがたく長く手元においておりました。ご縁が出来、修理して頂きありがとうございました。</p>
                </div>
              </div>

              {/* Hidden voices that show on "もっと見る" */}
              {showMore && (
                <>
                  {/* 神奈川県K.K様 */}
                  <div className="target">
                    <h3 className="text-xl font-bold text-left mb-6">
                      <span className="text-green-600">神奈川県K.K様</span>
                    </h3>
                    <div className="text-gray-700 leading-relaxed">
                      <p>先程、傘届きました。敏速に対応下さりありがとうございます。親骨の色が替わるととてもエレガントな雰囲気になるのですね、娘も喜ぶと思います。</p>
                    </div>
                  </div>

                  {/* 愛媛県S.T様 */}
                  <div className="target">
                    <h3 className="text-xl font-bold text-left mb-6">
                      <span className="text-green-600">愛媛県S.T様</span>
                    </h3>
                    <div className="text-gray-700 leading-relaxed">
                      <p>出張に出ていて、昨夜帰宅して修理された傘を拝見しました。見事に修理していただき、たいへんうれしいです。ほんとうにありがとうございました。これからも大事に使わせていただきます。今後ともどうかよろしくお願いいたします。ありがとうございました。</p>
                    </div>
                  </div>

                  {/* 香川県O.S様 */}
                  <div className="target">
                    <h3 className="text-xl font-bold text-left mb-6">
                      <span className="text-green-600">香川県O.S様</span>
                    </h3>
                    <div className="text-gray-700 leading-relaxed">
                      <p>この度は大変お世話になりまして誠にありがとうございました。新品同様になりまして大変感謝しております。</p>
                    </div>
                  </div>

                  {/* 東京都N.K様 */}
                  <div className="target">
                    <h3 className="text-xl font-bold text-left mb-6">
                      <span className="text-green-600">東京都N.K様</span>
                    </h3>
                    <div className="text-gray-700 leading-relaxed">
                      <p>大変迅速で美しい仕事をして下さり、本当にありがとうございます。この傘をプレゼントされてから傘への思いが変わり、大切にするようになりました。又、メンテナンスをお願いしますのでその時はよろしくお願い致します。</p>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="text-center mt-12">
              <button 
                onClick={toggleMore}
                className="bg-amber-700 text-white px-8 py-3 rounded-full hover:bg-amber-800 transition-colors"
              >
                もっと見る
              </button>
            </div>
          </div>
        </section>

        {/* Facebook Section */}
        <section id="facebook" className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div>
              <p className="text-center text-lg font-semibold mb-8">\FaceBook 随時更新中/</p>
              <div className="flex justify-center">
                <iframe 
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F%25E4%25B8%25B8%25E5%25AE%2589%25E6%25B4%258B%25E5%2582%2598-%25E6%25A0%25AA%25E5%25BC%258F%25E4%25BC%259A%25E7%25A4%25BE-106929541003855%2F&tabs=timeline&width=500&height=650&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                  width="500" 
                  height="650"
                  className="border-0 rounded-lg shadow-lg"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              </div>
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

export default RepairPageJa;
