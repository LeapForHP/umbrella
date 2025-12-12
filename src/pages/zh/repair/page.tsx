
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../home/components/Header';
import Footer from '../../home/components/Footer';

const ZhRepairPage: React.FC = () => {
  const [showMoreTestimonials, setShowMoreTestimonials] = useState(false);

  const testimonials = [
    {
      name: "千叶县 S.S",
      content: "今天收到了委托的雨伞。修理得非常漂亮，我很高兴。我会继续珍惜使用。非常感谢。"
    },
    {
      name: "神奈川县 Y.H", 
      content: "昨天收到了雨伞。感谢您的修理。脏污的中心杆变得闪亮，布料也很挺括——就像新的一样。如果还有机会，请再次帮忙。"
    },
    {
      name: "埼玉县 A.M",
      content: "感谢您快速处理我珍爱雨伞的修理。寄出后5天就送到了，我很惊讶。我从未如此长时间使用一把雨伞。我会继续长期珍惜使用。非常感谢。"
    },
    {
      name: "长野县 N.S",
      content: "前天雨伞安全送达。能够如此干净地回来，我很高兴。布料上残留的污渍让我想起这是我的伞，我对它很有感情。我会继续珍惜使用。谢谢。"
    },
    {
      name: "大阪府 S.E",
      content: "感谢您迅速修理。我会继续珍惜使用。"
    },
    {
      name: "广岛县 U.K",
      content: "感谢您的帮助。虽然只是一把雨伞，但它是我舍不得扔掉、长期保留在身边的纪念品。很感激我们有这样的缘分，您帮我修理了它。"
    }
  ];

  const hiddenTestimonials = [
    {
      name: "神奈川县 K.K",
      content: "雨伞刚刚送到。感谢您的快速响应。当伞骨颜色改变时，它变得非常优雅。我想我女儿会很高兴的。"
    },
    {
      name: "爱媛县 S.T", 
      content: "我出差了，昨晚回家看到修好的雨伞。能够修理得如此漂亮，我非常高兴。非常感谢。我会继续珍惜使用。今后也请多多关照。谢谢。"
    },
    {
      name: "香川县 O.S",
      content: "非常感谢您的大力帮助。能够变得像新的一样，我非常感激。"
    },
    {
      name: "东京都 N.K",
      content: "感谢您非常快速和漂亮的工作。自从收到这把雨伞作为礼物后，它改变了我对雨伞的看法，我开始珍惜它们。下次维护时我会再次请求，届时请多关照。"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-green-600 to-green-800 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">维修服务</h1>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/zh" className="text-green-600 hover:text-green-800">首页</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-700">维修服务</span>
          </nav>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Navigation Links */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#repair" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap">
              维修服务
            </a>
            <a href="#testimonials" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap">
              客户评价
            </a>
            <a href="#facebook" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap">
              Facebook
            </a>
          </div>
        </section>

        {/* Repair Information */}
        <section id="repair" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            维修服务
            <span className="block text-lg font-normal text-green-600 mt-2">REPAIR</span>
          </h2>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">
                <span className="text-green-600">关于雨伞维修</span>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                如果您希望维修雨伞，请填写附在雨伞上的维修申请表，并通过快递服务寄送到我公司。
                如果您没有维修申请表，可以只寄送雨伞（寄送到我公司的运费由客户承担）。
                雨伞到达我公司后，我们的工作人员会与您联系。维修费用根据雨伞的类型和状况而异。
                检查雨伞后，我们会通过电话告知您维修费用。（如果伞骨或零件已更新，可能会进行更换。）
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">
                <span className="text-green-600">关于交货时间</span>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                维修大约需要10天。
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">
                <span className="text-green-600">关于付款</span>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                维修完成后，我们会将邮政转账单与雨伞一起寄送，请稍后转账付款。
                （转账手续费由我公司承担。）
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">
                <span className="text-green-600">重要提示</span>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                我们只维修我公司在国内制造的雨伞。
                我们不接受其他公司的产品，因为使用的零件和规格不同，由于标准不同，布料张力也不同。
                我们的雨伞在布料内侧缝有带有我们地址和电话号码的白色标签。
                请检查这一点。（如果您寄送其他公司的雨伞进行维修，我们将以货到付款的方式退还给您。）
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">
                <span className="text-green-600">邮寄地址</span>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                〒545-0001 大阪市阿倍野区天王寺町北2-6-15<br/>
                丸安洋伞株式会社 收件人：川口<br/>
                电话：06-6713-8308
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">
                <span className="text-green-600">主要维修价格表</span>
              </h3>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p>退货运费：¥660（含税）（北海道和偏远岛屿额外收取¥1,600附加费）</p>
                <p>伞骨更换：¥3,300-¥4,400（含税）（根据材料和伞骨数量而异）</p>
                <p>零件更换：¥1,100-¥1,650（含税）</p>
                <p>手柄更换：从¥1,650起（含税）</p>
                <p>强力防水处理：¥1,100（含税）</p>
              </div>
            </div>
          </div>

          {/* Before/After Images */}
          <div className="flex flex-col md:flex-row gap-8 mt-12 justify-center">
            <div className="text-center">
              <p className="text-lg font-bold mb-4">修理前</p>
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/repair/img01.png" 
                alt="修理前" 
                className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="text-center">
              <p className="text-lg font-bold mb-4">修理后</p>
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/repair/img02.png" 
                alt="修理后" 
                className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section id="testimonials" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            客户评价
            <span className="block text-lg font-normal text-green-600 mt-2">VOICE</span>
          </h2>

          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold mb-3">
                  <span className="text-green-600">{testimonial.name}</span>
                </h3>
                <p className="text-gray-700 leading-relaxed">{testimonial.content}</p>
              </div>
            ))}

            {showMoreTestimonials && hiddenTestimonials.map((testimonial, index) => (
              <div key={`hidden-${index}`} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold mb-3">
                  <span className="text-green-600">{testimonial.name}</span>
                </h3>
                <p className="text-gray-700 leading-relaxed">{testimonial.content}</p>
              </div>
            ))}

            <div className="text-center">
              <button
                onClick={() => setShowMoreTestimonials(!showMoreTestimonials)}
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap"
              >
                {showMoreTestimonials ? '显示更少' : '显示更多'}
              </button>
            </div>
          </div>
        </section>

        {/* Facebook Section */}
        <section id="facebook" className="mb-16">
          <div className="text-center mb-8">
            <p className="text-2xl font-bold text-gray-800 mb-4">
              \定期更新Facebook/
            </p>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <iframe 
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F%25E4%25B8%25B8%25E5%25AE%2589%25E6%25B4%258B%25E5%2582%2598-%25E6%25A0%25AA%25E5%25BC%258F%25E4%25BC%259A%25E7%25A4%25BE-106929541003855%2F&tabs=timeline&width=500&height=650&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="100%" 
                height="650" 
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no" 
                frameBorder="0" 
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
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
                  <p className="text-gray-600">营业时间：10:00-17:00（周六、周日、节假日休息）</p>
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

      <Footer />
    </div>
  );
};

export default ZhRepairPage;
