
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../home/components/Header';
import Footer from '../home/components/Footer';
import HeroSection from '../home/components/HeroSection';
import NewsSection from '../home/components/NewsSection';
import SilentUmbrellaSection from '../home/components/SilentUmbrellaSection';
import BraidUmbrellaSection from '../home/components/BraidUmbrellaSection';
import FoldingUmbrellaSection from '../home/components/FoldingUmbrellaSection';
import RepairSection from '../home/components/RepairSection';
import CompanySection from '../home/components/CompanySection';
import ProductsSection from '../home/components/ProductsSection';
import MediaSection from '../home/components/MediaSection';
import SocialSection from '../home/components/SocialSection';
import ContactSection from '../home/components/ContactSection';

const ZhHomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <NewsSection />
        <SilentUmbrellaSection />
        <BraidUmbrellaSection />
        <FoldingUmbrellaSection />
        <RepairSection />
        <CompanySection />
        <ProductsSection />
        <MediaSection />
        <SocialSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default ZhHomePage;
