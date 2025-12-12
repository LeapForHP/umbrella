
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface LanguageDropdownProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
}

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({ currentLang, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'ja', name: '日本語', flag: '🇯🇵', path: '/ja/repair' },
    { code: 'en', name: 'English', flag: '🇺🇸', path: '/repair' },
    { code: 'zh', name: '中文', flag: '🇨🇳', path: '/zh/repair' }
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
            <Link
              key={language.code}
              to={language.path}
              className={`flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors ${
                currentLang === language.code ? 'bg-green-50 text-green-600' : 'text-gray-700'
              }`}
              onClick={() => {
                onLanguageChange(language.code);
                setIsOpen(false);
              }}
            >
              <span className="text-lg">{language.flag}</span>
              <span className="font-medium">{language.name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const RepairPage: React.FC = () => {
  const [currentLang, setCurrentLang] = useState('en');
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
      <section className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Repair & Maintenance Service</h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link to="/" className="text-green-600 hover:text-green-700">
                Home
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li className="text-gray-700">Repair Service</li>
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
              Repair Service
            </a>
            <a 
              href="#voice"
              className="bg-amber-700 text-white px-8 py-3 rounded-full hover:bg-amber-800 transition-colors font-medium"
            >
              Customer Reviews
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Umbrella Repair Service
              <span className="block text-lg text-green-600 font-normal mt-2">SDGs Initiative</span>
            </h2>
          </div>

          {/* Repair Information */}
          <div className="space-y-12">
            {/* About Umbrella Repair */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold text-green-600 mb-6 border-l-4 border-green-600 pl-4">
                About Our Umbrella Repair Service
              </h3>
              <p className="text-gray-700 leading-relaxed">
                If you wish to have your umbrella repaired, please fill out the repair request form attached to your umbrella and send it to us via courier service.<br />
                If you don't have the repair request form, you can send just the umbrella (shipping costs to our company are at your expense).<br />
                Once your umbrella arrives at our facility, our staff will contact you. Repair costs vary depending on the type and condition of the umbrella.<br />
                After examining your umbrella, we will contact you by phone with the repair cost estimate. (Parts and materials may be updated if newer versions are available)
              </p>
            </div>

            {/* Delivery Time */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold text-green-600 mb-6 border-l-4 border-green-600 pl-4">
                Delivery Time
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Repairs take approximately 10 days to complete.
              </p>
            </div>

            {/* Payment Information */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold text-green-600 mb-6 border-l-4 border-green-600 pl-4">
                Payment Information
              </h3>
              <p className="text-gray-700 leading-relaxed">
                After the repair is completed, we will send your umbrella along with a postal transfer form for payment at a later date.<br />
                (Transfer fees are covered by our company)
              </p>
            </div>

            {/* Important Notice */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold text-green-600 mb-6 border-l-4 border-green-600 pl-4">
                Important Notice
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We only accept repairs for umbrellas manufactured domestically by our company.<br />
                We cannot accept umbrellas from other manufacturers as they use different parts and specifications, making fabric tension different.<br />
                Our umbrellas have a white label with our address and phone number sewn inside the fabric.<br />
                Please check for this label. (If you send an umbrella from another manufacturer, we will return it at your expense)
              </p>
            </div>

            {/* Shipping Address */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold text-green-600 mb-6 border-l-4 border-green-600 pl-4">
                Shipping Address
              </h3>
              <p className="text-gray-700 leading-relaxed">
                〒545-0001 2-6-15 Tennoji-cho Kita, Abeno-ku, Osaka City<br />
                Maruyasu Umbrella Co., Ltd. Attention: Mr. Kawaguchi<br />
                TEL: 06-6713-8308
              </p>
            </div>

            {/* Repair Price List */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold text-green-600 mb-6 border-l-4 border-green-600 pl-4">
                Main Repair Price List
              </h3>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p>Return shipping fee: ¥660 including tax (Hokkaido and remote islands: additional ¥1600)</p>
                <p>Frame replacement: ¥3,300~¥4,400 including tax (varies by material and number of ribs)</p>
                <p>Parts replacement: ¥1,100~¥1,650 including tax</p>
                <p>Handle replacement: from ¥1,650 including tax</p>
                <p>Strong water-repellent treatment: ¥1,100 including tax</p>
              </div>
            </div>

            {/* Before/After Images */}
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
              <div className="text-center">
                <p className="text-lg font-medium text-gray-700 mb-4">Before</p>
                <img 
                  src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/repair/img01.png" 
                  alt="Umbrella before repair"
                  className="w-64 h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="text-center">
                <p className="text-lg font-medium text-gray-700 mb-4">After</p>
                <img 
                  src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/repair/img02.png" 
                  alt="Umbrella after repair"
                  className="w-64 h-64 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Customer Voices Section */}
        <section id="voice" className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Customer Reviews
              <span className="block text-lg text-green-600 font-normal mt-2">testimonials</span>
            </h2>
          </div>

          <div className="space-y-8">
            {/* Voice 1 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-lg font-bold text-green-600 mb-4 border-l-4 border-green-600 pl-4">
                S.S from Chiba Prefecture
              </h3>
              <p className="text-gray-700 leading-relaxed">
                "The umbrella I requested for repair arrived today. It was so beautifully repaired that I was very pleased. 
                I will continue to use it with great care. Thank you very much."
              </p>
            </div>

            {/* Voice 2 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-lg font-bold text-green-600 mb-4 border-l-4 border-green-600 pl-4">
                Y.H from Kanagawa Prefecture
              </h3>
              <p className="text-gray-700 leading-relaxed">
                "I received the umbrella yesterday. Thank you for the repair. 
                The dirty central shaft is now shiny, and the fabric is crisp - it's practically in new condition. 
                I will ask for your services again if the opportunity arises."
              </p>
            </div>

            {/* Voice 3 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-lg font-bold text-green-600 mb-4 border-l-4 border-green-600 pl-4">
                A.M from Saitama Prefecture
              </h3>
              <p className="text-gray-700 leading-relaxed">
                "Thank you for promptly responding to my request to repair my long-beloved umbrella. 
                I was surprised that it was delivered just 5 days after sending it. I have never used a single umbrella for such a long time. 
                I will continue to use it with great care for a long time. Thank you so much."
              </p>
            </div>

            {/* Voice 4 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-lg font-bold text-green-600 mb-4 border-l-4 border-green-600 pl-4">
                N.S from Nagano Prefecture
              </h3>
              <p className="text-gray-700 leading-relaxed">
                "The umbrella arrived safely the day before yesterday. I'm so happy that it came back so beautifully. 
                The slight stains remaining on the fabric give me that feeling of 'ah, this is mine,' which makes me feel more attached to it. 
                I will continue to use it with care. Thank you very much."
              </p>
            </div>

            {/* Voice 5 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-lg font-bold text-green-600 mb-4 border-l-4 border-green-600 pl-4">
                S.E from Osaka Prefecture
              </h3>
              <p className="text-gray-700 leading-relaxed">
                "Thank you for the quick repair. I will continue to use it with great care."
              </p>
            </div>

            {/* Voice 6 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-lg font-bold text-green-600 mb-4 border-l-4 border-green-600 pl-4">
                U.K from Hiroshima Prefecture
              </h3>
              <p className="text-gray-700 leading-relaxed">
                "Thank you for your help. Although it's just one umbrella, it's a memorable one that I couldn't bear to throw away and kept by my side for a long time. 
                I'm grateful that we had this connection and you repaired it for me."
              </p>
            </div>

            {/* More voices - hidden by default */}
            {showMoreVoices && (
              <>
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h3 className="text-lg font-bold text-green-600 mb-4 border-l-4 border-green-600 pl-4">
                    K.K from Kanagawa Prefecture
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    "The umbrella arrived just now. Thank you for your prompt response. 
                    When the rib color changes, it becomes very elegant - I think my daughter will be pleased."
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-8">
                  <h3 className="text-lg font-bold text-green-600 mb-4 border-l-4 border-green-600 pl-4">
                    S.T from Ehime Prefecture
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    "I was on a business trip and saw the repaired umbrella when I returned home last night. 
                    I'm very happy that you repaired it so beautifully. Thank you very much. 
                    I will use it with great care from now on. Please continue to support us in the future. Thank you."
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-8">
                  <h3 className="text-lg font-bold text-green-600 mb-4 border-l-4 border-green-600 pl-4">
                    O.S from Kagawa Prefecture
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    "Thank you very much for your great help this time. It looks like new and I'm very grateful."
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-8">
                  <h3 className="text-lg font-bold text-green-600 mb-4 border-l-4 border-green-600 pl-4">
                    N.K from Tokyo
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    "Thank you for your very prompt and beautiful work. 
                    Since receiving this umbrella as a gift, my feelings about umbrellas have changed and I've started to take better care of them. 
                    I will ask for maintenance again, so please take care of me then."
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
                {showMoreVoices ? 'Show Less' : 'Show More'}
              </button>
            </div>
          </div>
        </section>

        {/* Facebook Section */}
        <section id="facebook" className="mb-20">
          <div className="text-center mb-8">
            <p className="text-lg text-gray-600 mb-4">
              \ Follow Our Facebook Page /
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
              Contact Us
              <span className="block text-lg text-green-600 font-normal mt-2">GET IN TOUCH</span>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
            {/* Phone Contact */}
            <div className="flex items-center space-x-4 bg-white rounded-lg p-6 shadow-md">
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/ico_tel_contact.png" 
                alt="Phone Icon"
                className="w-8 h-8"
              />
              <div>
                <p className="text-2xl font-bold text-gray-800">06-6713-8308</p>
                <p className="text-sm text-gray-600">Business Hours: 10:00~17:00 (Closed: Sat, Sun, Holidays)</p>
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
                  alt="Email"
                  className="w-6 h-6"
                />
                <span className="font-medium">Email Inquiry</span>
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
                alt="Visit Our Online Shop"
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
                  alt="Maruyasu Umbrella Co., Ltd." 
                  className="h-12 mb-4"
                />
                <h3 className="text-xl font-bold mb-2">Maruyasu Umbrella Co., Ltd.</h3>
                <p className="text-green-100">
                  〒545-0001<br />
                  2-6-15 Tennoji-cho Kita, Abeno-ku, Osaka City
                </p>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="font-bold mb-4">Sitemap</h4>
              <ul className="space-y-2 text-green-100">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/news" className="hover:text-white transition-colors">News</Link></li>
                <li><Link to="/repair" className="hover:text-white transition-colors">Repair Service</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-green-100">
                <li><Link to="/products/silent-umbrella" className="hover:text-white transition-colors">- Silent Umbrella</Link></li>
                <li><Link to="/products/braid-umbrella" className="hover:text-white transition-colors">- Braid Umbrella</Link></li>
                <li><Link to="/products/folding-umbrella" className="hover:text-white transition-colors">- Folding Umbrella</Link></li>
                <li><Link to="/products/parasol" className="hover:text-white transition-colors">- Parasol</Link></li>
                <li><Link to="/products/koshu-weaving" className="hover:text-white transition-colors">- Koshu Weaving</Link></li>
                <li><Link to="/products/others" className="hover:text-white transition-colors">- Others</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-green-700 pt-8 mt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-green-100 text-sm">
                Copyright © Maruyasu Umbrella Co., Ltd. All rights reserved.
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
