
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface LanguageDropdownProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
}

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({ currentLang, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'zh', name: '中文', flag: '🇨🇳' }
  ];

  const currentLanguage = languages.find(lang => lang.code === currentLang) || languages[1];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
      >
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className="font-medium text-gray-700">{currentLanguage.name}</span>
        <i className="ri-arrow-down-s-line text-gray-500"></i>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 min-w-[150px]">
          {languages.map((language) => (
            <button
              key={language.code}
              className={`w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left ${
                currentLang === language.code ? 'bg-green-50 text-green-600' : 'text-gray-700'
              }`}
              onClick={() => {
                onLanguageChange(language.code);
                setIsOpen(false);
              }}
            >
              <span className="text-lg">{language.flag}</span>
              <span className="font-medium">{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const RepairPage: React.FC = () => {
  const [currentLang, setCurrentLang] = useState('ja');
  const [showMoreVoices, setShowMoreVoices] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img 
                  src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/logo_hd.jpg" 
                  alt="Maruyasu Umbrella Co., Ltd." 
                  className="h-12"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors">
                Home
              </Link>
              <div className="relative group">
                <button className="text-gray-700 hover:text-green-600 transition-colors">
                  Products
                </button>
                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2 w-48">
                    <Link to="/products/silent-umbrella" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Silent Umbrella
                    </Link>
                    <Link to="/products/braid-umbrella" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Braid Umbrella
                    </Link>
                    <Link to="/products/folding-umbrella" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Folding Umbrella
                    </Link>
                    <Link to="/products/parasol" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Parasol
                    </Link>
                    <Link to="/products/koshu-weaving" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Koshu Weaving
                    </Link>
                    <Link to="/products/others" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Others
                    </Link>
                  </div>
                </div>
              </div>
              <Link to="/repair" className="text-green-600 font-medium">
                Repair Service
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-green-600 transition-colors">
                About Us
              </Link>
              <Link to="/news" className="text-gray-700 hover:text-green-600 transition-colors">
                News
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-green-600 transition-colors">
                Contact
              </Link>
              <LanguageDropdown currentLang={currentLang} onLanguageChange={setCurrentLang} />
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <LanguageDropdown currentLang={currentLang} onLanguageChange={setCurrentLang} />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif-jp text-gray-800 mb-2">
            修理・お直し
          </h1>
          <p className="text-xl text-gray-600 tracking-widest font-serif">
            REPAIR
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link to="/" className="text-green-600 hover:text-green-700">
                ホーム
              </Link>
            </li>
            <li className="text-gray-500">＞</li>
            <li className="text-gray-700">修理・お直し</li>
          </ol>
        </div>
      </nav>

      {/* Navigation Buttons */}
      <section className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#repair"
              className="bg-amber-700 text-white px-8 py-3 rounded-full hover:bg-amber-800 transition-colors font-medium"
            >
              修理サービス
            </a>
            <a
              href="#voice"
              className="bg-amber-700 text-white px-8 py-3 rounded-full hover:bg-amber-800 transition-colors font-medium"
            >
              お客様の声
            </a>
            <a
              href="#facebook"
              className="bg-amber-700 text-white px-8 py-3 rounded-full hover:bg-amber-800 transition-colors font-medium"
            >
              Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Repair Section */}
        <section id="repair" className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif-jp text-gray-800 mb-4">
              傘の修理について
            </h2>
            <p className="text-base text-gray-600 mt-2 font-sans-jp">SDGsの取り組み</p>
          </div>

          {/* Repair Information */}
          <div className="space-y-12">
            {/* About Umbrella Repair */}
            <div className="bg-white border-t-4 border-gray-300 p-8 mb-8">
              <h3 className="text-2xl font-serif-jp text-gray-800 mb-6 pb-3 border-b-2 border-gray-200">
                傘の修理について
              </h3>
              <p className="text-gray-700 leading-loose font-sans-jp">
                修理をご希望の方は、傘に付いております修理依頼書に記入し、宅配便にて弊社までお送りください。<br /><br />
                修理依頼書がない場合は傘だけでも大丈夫です（弊社までの送料はお客様負担となります）。<br /><br />
                傘が弊社に到着しましたら、担当者よりご連絡いたします。傘の種類や状態によって修理代金が変動いたします。<br /><br />
                傘拝見後、お電話にて修理代金をお伝えいたします。（骨や生地は、新しいバージョンに更新される場合がございます）
              </p>
            </div>

            {/* Delivery Time */}
            <div className="bg-white border-t-4 border-gray-300 p-8 mb-8">
              <h3 className="text-2xl font-serif-jp text-gray-800 mb-6 pb-3 border-b-2 border-gray-200">
                納期について
              </h3>
              <p className="text-gray-700 leading-loose font-sans-jp">
                修理は約10日前後かかります。
              </p>
            </div>

            {/* Payment Information */}
            <div className="bg-white border-t-4 border-gray-300 p-8 mb-8">
              <h3 className="text-2xl font-serif-jp text-gray-800 mb-6 pb-3 border-b-2 border-gray-200">
                お支払いについて
              </h3>
              <p className="text-gray-700 leading-loose font-sans-jp">
                修理完了後、傘と一緒に郵便振替用紙を同封してお送りいたします。<br /><br />
                後日、お振込みいただく形となります（振込手数料は当社負担）。
              </p>
            </div>

            {/* Important Notice */}
            <div className="bg-white border-t-4 border-gray-300 p-8 mb-8">
              <h3 className="text-2xl font-serif-jp text-gray-800 mb-6 pb-3 border-b-2 border-gray-200">
                ご注意
              </h3>
              <p className="text-gray-700 leading-loose font-sans-jp">
                修理は、弊社の国内生産の傘のみ対応させていただきます。<br /><br />
                他社様の傘は部品や骨の仕様が異なり、生地の張り具合も違うため、お断りさせていただいております。<br /><br />
                弊社の傘には、生地の内側に白いタグで住所と電話番号が縫い付けてあります。<br /><br />
                ご確認をお願いいたします。（他社様の傘をお送りいただいた場合は、着払いにてご返送させていただきます）
              </p>
            </div>

            {/* Shipping Address */}
            <div className="bg-white border-t-4 border-gray-300 p-8 mb-8">
              <h3 className="text-2xl font-serif-jp text-gray-800 mb-6 pb-3 border-b-2 border-gray-200">
                お送り先
              </h3>
              <p className="text-gray-700 leading-loose font-sans-jp">
                〒545-0001 大阪市阿倍野区天王寺町北2-6-15<br />
                丸安洋傘株式会社　川口様宛<br />
                TEL：06-6713-8308
              </p>
            </div>

            {/* Repair Price List */}
            <div className="bg-white border-t-4 border-gray-300 p-8 mb-8">
              <h3 className="text-2xl font-serif-jp text-gray-800 mb-6 pb-3 border-b-2 border-gray-200">
                主な修理代金表
              </h3>
              <div className="text-gray-700 leading-loose space-y-3 font-sans-jp">
                <p>返送送料：660円税込（北海道・離島は別途1600円）</p>
                <p>骨交換：3,300円～4,400円税込（素材や本数により異なります）</p>
                <p>部品交換：1,100円～1,650円税込</p>
                <p>持ち手交換：1,650円税込から</p>
                <p>強力撥水加工：1,100円税込</p>
              </div>
            </div>

            {/* Before/After Images */}
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
              <div className="text-center">
                <p className="text-lg font-medium text-gray-700 mb-4">修理前</p>
                <img
                  src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/repair/img01.png"
                  alt="修理前の傘"
                  className="w-64 h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="text-center">
                <p className="text-lg font-medium text-gray-700 mb-4">修理後</p>
                <img
                  src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/repair/img02.png"
                  alt="修理後の傘"
                  className="w-64 h-64 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Customer Voices Section */}
        <section id="voice" className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif-jp text-gray-800 mb-4">
              お客様の声
            </h2>
            <p className="text-base text-gray-600 mt-2 font-sans-jp">testimonials</p>
          </div>

          <div className="space-y-6">
            {/* Voice 1 */}
            <div className="bg-white border-t-4 border-gray-300 p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3 font-sans-jp">
                千葉県 S.S様
              </h3>
              <p className="text-gray-700 leading-loose font-sans-jp">
                「修理をお願いした傘が本日届きました。とてもきれいに修理していただき、大変満足しております。
                これからも大切に使わせていただきます。本当にありがとうございました。」
              </p>
            </div>

            {/* Voice 2 */}
            <div className="bg-white border-t-4 border-gray-300 p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3 font-sans-jp">
                神奈川県 Y.H様
              </h3>
              <p className="text-gray-700 leading-loose font-sans-jp">
                「昨日、傘を受け取りました。修理ありがとうございました。
                汚れていた中棒もピカピカになり、生地もパリッとして、ほぼ新品同様です。
                また機会がありましたら、よろしくお願いいたします。」
              </p>
            </div>

            {/* Voice 3 */}
            <div className="bg-white border-t-4 border-gray-300 p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3 font-sans-jp">
                埼玉県 A.M様
              </h3>
              <p className="text-gray-700 leading-loose font-sans-jp">
                「長年愛用していた傘の修理を快く引き受けてくださり、ありがとうございました。
                発送してからわずか5日で届いたのには驚きました。今まで一本の傘をこれほど長く使ったことはありません。
                これからも大切に長く使わせていただきます。本当にありがとうございました。」
              </p>
            </div>

            {/* Voice 4 */}
            <div className="bg-white border-t-4 border-gray-300 p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3 font-sans-jp">
                長野県 N.S様
              </h3>
              <p className="text-gray-700 leading-loose font-sans-jp">
                「一昨日、傘が無事に届きました。とてもきれいに戻ってきて、とても嬉しいです。
                生地に残ったわずかな染みが、『あぁ、私のだ』という感じを与えてくれて、より愛着が湧きます。
                これからも大切に使わせていただきます。ありがとうございました。」
              </p>
            </div>

            {/* Voice 5 */}
            <div className="bg-white border-t-4 border-gray-300 p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3 font-sans-jp">
                大阪府 S.E様
              </h3>
              <p className="text-gray-700 leading-loose font-sans-jp">
                「迅速な修理をありがとうございました。これからも大切に使わせていただきます。」
              </p>
            </div>

            {/* Voice 6 */}
            <div className="bg-white border-t-4 border-gray-300 p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3 font-sans-jp">
                広島県 U.K様
              </h3>
              <p className="text-gray-700 leading-loose font-sans-jp">
                「お世話になりました。たかが傘一本ですが、思い出のある傘で捨てるに捨てられず、ずっと手元に置いていました。
                ご縁があって修理していただけたこと、感謝しております。」
              </p>
            </div>

            {/* More voices - hidden by default */}
            {showMoreVoices && (
              <>
                <div className="bg-white border-t-4 border-gray-300 p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3 font-sans-jp">
                    神奈川県 K.K様
                  </h3>
                  <p className="text-gray-700 leading-loose font-sans-jp">
                    「先ほど傘が届きました。迅速なご対応ありがとうございました。
                    骨の色が変わると、とても上品になりますね。娘も喜ぶと思います。」
                  </p>
                </div>

                <div className="bg-white border-t-4 border-gray-300 p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3 font-sans-jp">
                    愛媛県 S.T様
                  </h3>
                  <p className="text-gray-700 leading-loose font-sans-jp">
                    「出張に出ており、昨晩帰宅して修理していただいた傘を見ました。
                    とてもきれいに修理していただき、大変嬉しく思います。ありがとうございました。
                    これから大切に使わせていただきます。今後ともよろしくお願いいたします。」
                  </p>
                </div>

                <div className="bg-white border-t-4 border-gray-300 p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3 font-sans-jp">
                    香川県 O.S様
                  </h3>
                  <p className="text-gray-700 leading-loose font-sans-jp">
                    「この度は大変お世話になりました。新品同様で大変感謝しております。」
                  </p>
                </div>

                <div className="bg-white border-t-4 border-gray-300 p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3 font-sans-jp">
                    東京都 N.K様
                  </h3>
                  <p className="text-gray-700 leading-loose font-sans-jp">
                    「とても迅速で美しい仕事をしていただき、ありがとうございました。
                    この傘をプレゼントされてから、傘に対する気持ちが変わり、大切にするようになりました。
                    またメンテナンスをお願いすることもあるかと思いますので、その時はよろしくお願いいたします。」
                  </p>
                </div>
              </>
            )}

            {/* More Button */}
            <div className="text-center">
              <button
                onClick={() => setShowMoreVoices(!showMoreVoices)}
                className="bg-amber-700 text-white px-8 py-3 rounded-full hover:bg-amber-800 transition-colors font-medium"
              >
                {showMoreVoices ? '閉じる' : 'もっと見る'}
              </button>
            </div>
          </div>
        </section>

        {/* Facebook Section */}
        <section id="facebook" className="mb-20">
          <div className="text-center mb-8">
            <p className="text-lg text-gray-600 mb-4">
              \ Facebookページをフォロー /
            </p>
            <div className="bg-white rounded-lg shadow-md p-8">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F%25E4%25B8%25B8%25E5%25AE%2589%25E6%25B4%258B%25E5%2582%2598-%25E6%25A0%25AA%25E5%25BC%258F%25E4%25BC%259A%25E7%25A4%25BE-106929541003855%2F&tabs=timeline&width=500&height=650&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="100%"
                height="650"
                className="border-none"
                scrolling="no"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      {/* Contact Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              お問い合わせ
              <span className="block text-lg text-green-600 font-normal mt-2">GET IN TOUCH</span>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
            {/* Phone Contact */}
            <div className="flex items-center space-x-4 bg-white rounded-lg p-6 shadow-md">
              <img
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/ico_tel_contact.png"
                alt="電話アイコン"
                className="w-8 h-8"
              />
              <div>
                <p className="text-2xl font-bold text-gray-800">06-6713-8308</p>
                <p className="text-sm text-gray-600">営業時間：10:00～17:00（土・日・祝日休み）</p>
              </div>
            </div>

            {/* Email Contact */}
            <div className="flex items-center space-x-4">
              <Link
                to="/contact"
                className="flex items-center space-x-3 bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors"
              >
                <img
                  src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/ico_mail_contact.png"
                  alt="メール"
                  className="w-6 h-6"
                />
                <span className="font-medium">メールでのお問い合わせ</span>
              </Link>
            </div>
          </div>

          {/* BASE Shop Banner */}
          <div className="text-center mt-12">
            <a
              href="https://maruyasu19.thebase.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/bannur.jpg"
                alt="オンラインショップへ"
                className="max-w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="mb-4">
                <img
                  src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/logo_hd.jpg"
                  alt="丸安洋傘株式会社"
                  className="h-12 mb-4"
                />
                <h3 className="text-xl font-bold mb-2">丸安洋傘株式会社</h3>
                <p className="text-green-100">
                  〒545-0001<br />
                  大阪市阿倍野区天王寺町北2-6-15
                </p>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="font-bold mb-4">サイトマップ</h4>
              <ul className="space-y-2 text-green-100">
                <li><Link to="/" className="hover:text-white transition-colors">ホーム</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">会社概要</Link></li>
                <li><Link to="/news" className="hover:text-white transition-colors">お知らせ</Link></li>
                <li><Link to="/repair" className="hover:text-white transition-colors">修理・お直し</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">製品</h4>
              <ul className="space-y-2 text-green-100">
                <li><Link to="/products/silent-umbrella" className="hover:text-white transition-colors">- サイレント傘</Link></li>
                <li><Link to="/products/braid-umbrella" className="hover:text-white transition-colors">- ブレード傘</Link></li>
                <li><Link to="/products/folding-umbrella" className="hover:text-white transition-colors">- 折りたたみ傘</Link></li>
                <li><Link to="/products/parasol" className="hover:text-white transition-colors">- 日傘</Link></li>
                <li><Link to="/products/koshu-weaving" className="hover:text-white transition-colors">- 甲州織</Link></li>
                <li><Link to="/products/others" className="hover:text-white transition-colors">- その他</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-green-700 pt-8 mt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-green-100 text-sm">
                Copyright © 丸安洋傘株式会社 All rights reserved.
              </p>
              <a
                href="https://readdy.ai/?origin=logo"
                className="text-green-100 hover:text-white transition-colors text-sm mt-2 sm:mt-0"
              >
                Website Builder
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RepairPage;
