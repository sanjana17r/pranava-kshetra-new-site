
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import WelcomeSection from '../components/WelcomeSection';
import TwoPillarsSection from '../components/TwoPillarsSection';
import MissionVisionSection from '../components/MissionVisionSection';
import TestimonialCarousel from '../components/TestimonialCarousel';
import GallerySection from '../components/GallerySection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WelcomeSection />
      <TwoPillarsSection />
      <MissionVisionSection />
      <TestimonialCarousel />
      <GallerySection />
      <Footer />
    </div>
  );
};

export default Index;
