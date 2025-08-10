import React from 'react';
import { ArrowRight, Leaf, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const TwoPillarsSection = () => {
  return (
    <section className="py-6 bg-white">
      <div className="max-w-3xl mx-auto px-2">
        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-6">
          {/* Model Village Card */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-3 sm:p-4 md:p-6 shadow group flex flex-col justify-between min-h-[160px]">
            <div>
              <div className="flex items-center mb-2 sm:mb-3 md:mb-4">
                <div className="p-1.5 sm:p-2 md:p-3 bg-green-600 rounded-lg mr-2 sm:mr-3 md:mr-4">
                  <Leaf className="text-white" size={14} />
                </div>
                <h3 className="text-xs sm:text-lg md:text-xl font-bold text-green-800">Model Village</h3>
              </div>
              <p className="text-gray-700 text-[10px] sm:text-xs md:text-base mb-2 sm:mb-3 md:mb-4 leading-relaxed">
                A self-sustaining ecosystem for conscious rural living. Experience community-driven agriculture, renewable energy, and holistic wellness practices.
              </p>
            </div>
            <Link 
              to="/model-village"
              className="bg-green-600 hover:bg-green-700 text-white px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-lg font-semibold transition-all duration-200 flex items-center gap-1 sm:gap-2 group-hover:gap-3 text-xs md:text-sm"
            >
              Explore
              <ArrowRight size={10} className="sm:w-4 sm:h-4" />
            </Link>
          </div>

          {/* Gurukulam Card */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-3 sm:p-4 md:p-6 shadow group flex flex-col justify-between min-h-[160px]">
            <div>
              <div className="flex items-center mb-2 sm:mb-3 md:mb-4">
                <div className="p-1.5 sm:p-2 md:p-3 bg-orange-600 rounded-lg mr-2 sm:mr-3 md:mr-4">
                  <GraduationCap className="text-white" size={14} />
                </div>
                <h3 className="text-xs sm:text-lg md:text-xl font-bold text-orange-800">Gurukulam</h3>
              </div>
              <p className="text-gray-700 text-[10px] sm:text-xs md:text-base mb-2 sm:mb-3 md:mb-4 leading-relaxed">
                Reviving ancient wisdom through holistic education. Nurturing young minds with traditional knowledge, modern skills, and consciousness development.
              </p>
            </div>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-lg font-semibold transition-all duration-200 flex items-center gap-1 sm:gap-2 group-hover:gap-3 text-xs md:text-sm">
              Explore
              <ArrowRight size={10} className="sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoPillarsSection;
