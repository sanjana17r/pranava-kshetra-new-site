import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-[28vh] md:h-[32vh] flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1920&h=1080&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight">
          Welcome to Pranava Kshetra
        </h1>
        <p className="text-sm md:text-lg text-white/90 mb-0">
          Building Conscious Communities Through{' '}
          <span className="text-orange-400">Sustainability</span> and{' '}
          <span className="text-green-400">Inner Transformation</span>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
