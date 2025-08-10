import React from 'react';
import { Facebook, Instagram, Youtube, ArrowRight } from 'lucide-react';

const WelcomeSection = () => {
  return (
    <section className="py-6 bg-amber-50">
      <div className="max-w-xl mx-auto px-2 text-center">
        <div className="bg-white rounded-xl shadow p-4 md:p-6">
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            A space for living in harmony with nature, self, and society. Explore how you can be part of conscious change and discover pathways to sustainable living and inner growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-3">
              <span className="text-gray-600 font-medium text-xs">Follow us:</span>
              <div className="flex gap-2">
                <a href="#" className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Facebook size={16} />
                </a>
                <a href="#" className="p-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors">
                  <Instagram size={16} />
                </a>
                <a href="#" className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                  <Youtube size={16} />
                </a>
              </div>
            </div>
            <a 
              href="#" 
              className="flex items-center gap-1 text-orange-600 hover:text-orange-700 font-semibold transition-colors group text-xs md:text-sm"
            >
              Know More 
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
