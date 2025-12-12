import React from 'react';

const MediaSection: React.FC = () => {
  return (
    <section id="media" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="mb-8">
              <img
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/top/media_ttl.png"
                alt="Rain Pocket Shizuku featured on TV"
                className="max-w-full h-auto"
              />
            </div>
          </div>

          {/* Video */}
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/mgbry1tOaBE"
                title="Rain Pocket Shizuku - YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;