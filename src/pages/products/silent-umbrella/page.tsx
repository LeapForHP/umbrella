import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../home/components/Footer';

const SilentUmbrellaPage: React.FC = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Language Dropdown */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/cmn/logo.png"
                alt="Maruyasu Umbrella"
                className="h-12"
              />
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/about" className="text-gray-700 hover:text-green-600 transition-colors">About Us</Link>
              <div className="relative group">
                <button className="text-gray-700 hover:text-green-600 transition-colors flex items-center">
                  Products
                  <i className="ri-arrow-down-s-line ml-1"></i>
                </button>
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link to="/products/silent-umbrella" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Silent Umbrella</Link>
                  <Link to="/products/braid-umbrella" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Braid Umbrella</Link>
                  <Link to="/products/folding-umbrella" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Folding Umbrella</Link>
                  <Link to="/products/parasol" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Parasol</Link>
                  <Link to="/products/koshu-weaving" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Koshu Weaving</Link>
                  <Link to="/products/others" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Others</Link>
                </div>
              </div>
              <Link to="/repair" className="text-gray-700 hover:text-green-600 transition-colors">Repair</Link>
              <Link to="/news" className="text-gray-700 hover:text-green-600 transition-colors">News</Link>
              <Link to="/contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact</Link>
            </nav>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                onMouseEnter={() => setIsLanguageOpen(true)}
                className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <span className="text-lg">🇺🇸</span>
                <span className="text-sm font-medium">English</span>
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
                    className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 transition-colors bg-blue-50"
                  >
                    <span className="text-lg">🇺🇸</span>
                    <span className="text-sm">English</span>
                  </Link>
                  <Link
                    to="/zh/products/silent-umbrella"
                    className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 transition-colors"
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
        <h1 className="text-4xl font-bold text-white">Silent Umbrella</h1>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-green-600 hover:text-green-800">Home</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-700">Silent Umbrella</span>
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
                alt="Silent Umbrella" 
                className="w-full rounded-lg shadow-lg"
              />
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/quiet/1-2.gif" 
                alt="Silent Umbrella Animation" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                The development began when a visually impaired person asked us, "Could you make a quiet umbrella?" At that time, I wondered why such an umbrella was needed.
              </p>
              <p className="text-gray-700 leading-relaxed">
                When I listened to their story, I learned that visually impaired people become anxious when going out in the rain because the sound of rain on the umbrella drowns out surrounding sounds. After years of trial and error, we completed the Silent Umbrella.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Many people are troubled by the unpleasant sound of umbrellas on rainy days. This umbrella has a double structure that reduces the sound of raindrops and creates a calm feeling with quiet rain sounds.
                The sound changes to a gentle "pat-pat" sound. It's been described as "like snow falling" or "like sparklers." In light rain, you might feel like the rain has stopped. In heavy rain, it feels like light rain.
                Even on rainy days, you can comfortably hear conversations and surrounding sounds.
              </p>
              <p className="text-gray-700 leading-relaxed">
                In summer, it can be used as a parasol. The double structure blocks UV rays and heat, giving you the coolness of being in the shade of a tree. In experiments with our imported parasols, there was a difference of more than 10 degrees in internal temperature.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Handmade umbrellas involve more than 100 detailed processes. Umbrella craftsmen carefully handcraft each one.
                Please experience comfortable rainy days with this Silent Umbrella.
              </p>
              
              <div className="mt-8">
                <a 
                  href="https://youtu.be/jNkFi-SeYoA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors inline-block"
                >
                  Watch Video
                </a>
              </div>
            </div>
          </div>

          {/* Technical Data */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h3 className="text-2xl font-bold mb-6">
              <span className="text-green-600">Measurement Data from Kanagawa Institute of Technology</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/quiet/img11.jpg" 
                  alt="Technical measurement data" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              
              <div className="space-y-4">
                <div className="text-red-600 font-bold text-lg">
                  <p>Rain sound reduced by 30-35%</p>
                  <p>Vinyl umbrella rain sound of 50-60db becomes as quiet as library interior 30-40db.</p>
                </div>
                
                <div className="text-red-600 font-bold text-lg">
                  <p>Internal temperature reduced by more than 10 degrees.</p>
                  <p>UV protection rate/light blocking rate 100% or more</p>
                </div>
                
                <p className="text-gray-700">
                  UV protection rate gives you the coolness of being in the shade of a tree.
                </p>
                <p className="text-gray-600 text-sm">
                  &lt;UV protection rate: Mesh 65% High-density weave 99.5%&gt;<br/>
                  &lt;Light blocking rate: Mesh 66.7% High-density weave 97.5%&gt;
                </p>
                
                <p className="text-gray-700 mt-4">
                  SDGs: Silent Umbrella can be repaired. &lt;Request form included&gt;
                </p>
                
                <div className="mt-6">
                  <a 
                    href="https://maruyasu19.thebase.in/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors inline-block"
                  >
                    Purchase Here - BASE
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Usage Scenarios */}
          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold mb-6">For Rainy Day Outings</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                ● On rainy days, conventional umbrellas make it difficult to hear surrounding sounds due to the impact sound of rain on the umbrella fabric, especially the approach of cars from behind.
                But with the "Silent Umbrella," surrounding sounds are easier to hear, making it easier to detect approaching cars compared to conventional umbrellas.
              </p>
              <p>● Rain sounds are reduced, making it easier to hear audio signals.</p>
              <p>● During rainy day outings, conversations are easier to hear even while talking.</p>
            </div>
            
            <h4 className="text-xl font-bold mt-8 mb-4">For UV and Heat Stroke Prevention</h4>
            <p className="text-gray-700">
              ● Because the umbrella has a double structure, sunlight and solar heat are also mitigated. For outings and sports viewing as a parasol.
            </p>
            
            <h4 className="text-xl font-bold mt-8 mb-4">For Work and Hobbies</h4>
            <div className="space-y-4 text-gray-700">
              <p>● On rainy days, outdoor audio equipment adjustment, recording, and live broadcasting become easier.</p>
              <p>● On rainy days, you can listen to rain sounds in nature and enjoy natural sounds differently than before.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/quiet/img03.jpg" 
                alt="Silent Umbrella usage" 
                className="w-full rounded-lg shadow-lg"
              />
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/quiet/img04.jpg" 
                alt="Silent Umbrella usage" 
                className="w-full rounded-lg shadow-lg"
              />
              <img 
                src="https://maruyasuweb.jp/wp-content/themes/maruyasuweb/img/quiet/img05.jpg" 
                alt="Silent Umbrella usage" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Video Comparison */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-8">
              Rain Sound Comparison - Video Introduction
              <span className="block text-lg font-normal text-green-600 mt-2">SILENT UMBRELLA</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold mb-4">&lt;Important Notice&gt;</h4>
                <div className="space-y-2 text-gray-700 text-sm">
                  <p>● Due to the umbrella's structure, water droplets tend to accumulate. If you feel it has become heavy, please tilt the umbrella forward, backward, left, or right to let the water droplets fall.</p>
                  <p>● Please note that rain sounds are not completely eliminated.</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="aspect-video">
                  <iframe 
                    width="100%" 
                    height="315" 
                    src="https://www.youtube.com/embed/bnFQftshv4o" 
                    title="Rain sound comparison video 1" 
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
                    title="Rain sound comparison video 2" 
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
              Contact Us
              <span className="block text-lg font-normal text-green-600 mt-2">CONTACT</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="mb-6">
                  <p className="text-2xl font-bold text-gray-800 mb-2">
                    <i className="ri-phone-line mr-2"></i>06-6713-8308
                  </p>
                  <p className="text-gray-600">Business Hours: 10:00-17:00 (Closed: Sat, Sun, Holidays)</p>
                </div>
              </div>
              
              <div className="text-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <i className="ri-mail-line mr-2"></i>
                  Email Inquiry
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
                  alt="Visit our online store" 
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

export default SilentUmbrellaPage;