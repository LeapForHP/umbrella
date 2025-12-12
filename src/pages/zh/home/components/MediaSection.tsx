import React from 'react';

const MediaSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          媒体报道
          <span className="block text-lg font-normal text-green-600 mt-2">MEDIA</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/img10.jpg" 
              alt="媒体采访" 
              className="w-full rounded-lg shadow-lg object-top"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">电视台采访</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              我们的静音雨伞技术受到了多家媒体的关注和报道。NHK等知名电视台对我们的创新技术进行了专题采访，介绍了我们如何通过传统工艺与现代技术的结合，创造出这项独特的专利技术。
            </p>
            <p className="text-gray-700 leading-relaxed">
              这些媒体报道不仅展示了我们的技术实力，也让更多人了解到日本传统雨伞制作工艺的魅力和价值。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;