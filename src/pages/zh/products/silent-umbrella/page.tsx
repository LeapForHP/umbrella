import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ZhSilentUmbrellaPage: React.FC = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Language Dropdown */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/zh" className="flex items-center">
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/logo.png"
                alt="Maruyasu Umbrella"
                className="h-12"
              />
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/zh/about" className="text-gray-700 hover:text-green-600 transition-colors">关于我们</Link>
              <div className="relative group">
                <button className="text-gray-700 hover:text-green-600 transition-colors flex items-center">
                  产品
                  <i className="ri-arrow-down-s-line ml-1"></i>
                </button>
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link to="/zh/products/silent-umbrella" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">静音伞</Link>
                  <Link to="/zh/products/braid-umbrella" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">编织伞</Link>
                  <Link to="/zh/products/folding-umbrella" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">折叠伞</Link>
                  <Link to="/zh/products/parasol" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">晴雨伞</Link>
                  <Link to="/zh/products/koshu-weaving" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">甲州织</Link>
                  <Link to="/zh/products/others" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">其他</Link>
                </div>
              </div>
              <Link to="/zh/repair" className="text-gray-700 hover:text-green-600 transition-colors">维修</Link>
              <Link to="/zh/news" className="text-gray-700 hover:text-green-600 transition-colors">新闻</Link>
              <Link to="/zh/contact" className="text-gray-700 hover:text-green-600 transition-colors">联系</Link>
            </nav>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                onMouseEnter={() => setIsLanguageOpen(true)}
                className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <span className="text-lg">🇨🇳</span>
                <span className="text-sm font-medium">中文</span>
                <i className="ri-arrow-down-s-line text-sm"></i>
              </button>

              {isLanguageOpen && (
                <div 
                  className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg py-2 min-w-[140px] z-50"
                  onMouseLeave={() => setIsLanguageOpen(false)}
                >
                  <Link
                    to="/ja/products/silent-umbrella"
                    className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg">🇯🇵</span>
                    <span className="text-sm">日本語</span>
                  </Link>
                  <Link
                    to="/products/silent-umbrella"
                    className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg">🇺🇸</span>
                    <span className="text-sm">English</span>
                  </Link>
                  <Link
                    to="/zh/products/silent-umbrella"
                    className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 transition-colors bg-blue-50"
                  >
                    <span className="text-lg">🇨🇳</span>
                    <span className="text-sm">中文</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-green-600 to-green-800 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">静音雨伞</h1>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/zh" className="text-green-600 hover:text-green-800">首页</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-700">静音雨伞</span>
          </nav>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Content */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/quiet/img01.jpg" 
                alt="静音雨伞" 
                className="w-full rounded-lg shadow-lg"
              />
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/quiet/1-2.gif" 
                alt="静音雨伞动画" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                开发始于一位视障人士问我们："能做一把安静的雨伞吗？"当时,我想知道为什么需要这样的雨伞。
              </p>
              <p className="text-gray-700 leading-relaxed">
                当我听了他们的故事后,我了解到视障人士在雨天外出时会感到焦虑,因为雨打在雨伞上的声音会淹没周围的声音。经过多年的反复试验,我们完成了静音雨伞。
              </p>
              <p className="text-gray-700 leading-relaxed">
                许多人在雨天被雨伞发出的不愉快声音所困扰。这把雨伞采用双层结构,可以减少雨滴的声音,用安静的雨声营造平静的感觉。
                声音变成了温柔的"啪嗒啪嗒"声。有人形容它"像雪花飘落"或"像烟花"。在小雨中,你可能会觉得雨停了。在大雨中,感觉像小雨。
                即使在雨天,您也可以舒适地听到对话和周围的声音。
              </p>
              <p className="text-gray-700 leading-relaxed">
                在夏天,它可以用作遮阳伞。双层结构可以阻挡紫外线和热量,给您树荫下的凉爽感。在我们进口的遮阳伞实验中,内部温度相差超过10度。
              </p>
              <p className="text-gray-700 leading-relaxed">
                手工制作的雨伞涉及100多个详细工序。雨伞工匠精心手工制作每一把。
                请用这把静音雨伞体验舒适的雨天。
              </p>
              
              <div className="mt-8">
                <a 
                  href="https://youtu.be/jNkFi-SeYoA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors inline-block whitespace-nowrap"
                >
                  观看视频
                </a>
              </div>
            </div>
          </div>

          {/* Technical Data */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h3 className="text-2xl font-bold mb-6">
              <span className="text-green-600">神奈川工科大学测量数据</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/quiet/img11.jpg" 
                  alt="技术测量数据" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              
              <div className="space-y-4">
                <div className="text-red-600 font-bold text-lg">
                  <p>雨声减少30-35%</p>
                  <p>透明雨伞50-60分贝的雨声变得像图书馆内部一样安静,30-40分贝。</p>
                </div>
                
                <div className="text-red-600 font-bold text-lg">
                  <p>内部温度降低超过10度。</p>
                  <p>紫外线防护率/遮光率100%或更高</p>
                </div>
                
                <p className="text-gray-700">
                  紫外线防护率给您树荫下的凉爽感。
                </p>
                <p className="text-gray-600 text-sm">
                  &lt;紫外线防护率:网眼65% 高密度编织99.5%&gt;<br/>
                  &lt;遮光率:网眼66.7% 高密度编织97.5%&gt;
                </p>
                
                <p className="text-gray-700 mt-4">
                  SDGs:静音雨伞可以维修。&lt;附维修申请表&gt;
                </p>
                
                <div className="mt-6">
                  <a 
                    href="https://maruyasu19.thebase.in/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors inline-block whitespace-nowrap"
                  >
                    在此购买 - BASE
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Usage Scenarios */}
          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold mb-6">雨天外出</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                ● 在雨天,传统雨伞由于雨打在伞布上的冲击声,很难听到周围的声音,特别是从后面接近的汽车。
                但是使用"静音雨伞",周围的声音更容易听到,与传统雨伞相比,更容易察觉接近的汽车。
              </p>
              <p>● 雨声减少,更容易听到音频信号。</p>
              <p>● 在雨天外出时,即使在交谈时也更容易听到对话。</p>
            </div>
            
            <h4 className="text-xl font-bold mt-8 mb-4">紫外线和中暑预防</h4>
            <p className="text-gray-700">
              ● 因为雨伞采用双层结构,阳光和太阳热也得到缓解。用于外出和体育观赏作为遮阳伞。
            </p>
            
            <h4 className="text-xl font-bold mt-8 mb-4">工作和爱好</h4>
            <div className="space-y-4 text-gray-700">
              <p>● 在雨天,户外音频设备调整、录音和现场广播变得更容易。</p>
              <p>● 在雨天,您可以在大自然中聆听雨声,以与以前不同的方式享受自然声音。</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/quiet/img03.jpg" 
                alt="静音雨伞使用" 
                className="w-full rounded-lg shadow-lg"
              />
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/quiet/img04.jpg" 
                alt="静音雨伞使用" 
                className="w-full rounded-lg shadow-lg"
              />
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/quiet/img05.jpg" 
                alt="静音雨伞使用" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Video Comparison */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-8">
              雨声比较 - 视频介绍
              <span className="block text-lg font-normal text-green-600 mt-2">SILENT UMBRELLA</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold mb-4">&lt;重要提示&gt;</h4>
                <div className="space-y-2 text-gray-700 text-sm">
                  <p>● 由于雨伞的结构,水滴容易积聚。如果您觉得它变重了,请将雨伞向前、向后、向左或向右倾斜,让水滴落下。</p>
                  <p>● 请注意,雨声不会完全消除。</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="aspect-video">
                  <iframe 
                    width="100%" 
                    height="315" 
                    src="https://www.youtube.com/embed/bnFQftshv4o" 
                    title="雨声比较视频1" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
                
                <div className="aspect-video">
                  <iframe 
                    width="100%" 
                    height="315" 
                    src="https://www.youtube.com/embed/9Y04vdOayFg" 
                    title="雨声比较视频2" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-50 py-16 -mx-4">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              联系我们
              <span className="block text-lg font-normal text-green-600 mt-2">CONTACT</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="mb-6">
                  <p className="text-2xl font-bold text-gray-800 mb-2">
                    <i className="ri-phone-line mr-2"></i>06-6713-8308
                  </p>
                  <p className="text-gray-600">营业时间:10:00-17:00(周六、周日、节假日休息)</p>
                </div>
              </div>
              
              <div className="text-center">
                <Link 
                  to="/zh/contact" 
                  className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap"
                >
                  <i className="ri-mail-line mr-2"></i>
                  电子邮件咨询
                </Link>
              </div>
            </div>

            <div className="text-center mt-8">
              <a 
                href="https://maruyasu19.thebase.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img 
                  src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/bannur.jpg" 
                  alt="访问我们的在线商店" 
                  className="max-w-sm mx-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ZhSilentUmbrellaPage;
