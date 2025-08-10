import React from 'react';
import { Target, Eye } from 'lucide-react';

const MissionVisionSection = () => {
  return (
    <section className="py-6 bg-gradient-to-r from-green-50 to-orange-50">
      <div className="max-w-3xl mx-auto px-2">
        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-6">
          {/* Mission */}
          <div className="bg-white rounded-lg p-3 sm:p-4 md:p-6 shadow border-l-4 border-green-600 flex flex-col justify-between min-h-[120px]">
            <div className="flex items-center mb-2 sm:mb-3 md:mb-4">
              <div className="p-2 bg-green-100 rounded-lg mr-2">
                <Target className="text-green-600" size={18} />
              </div>
              <h3 className="text-xs sm:text-lg md:text-xl font-bold text-gray-800">Our Mission</h3>
            </div>
            <p className="text-gray-700 text-[10px] sm:text-xs md:text-base leading-relaxed">
              To create sustainable communities that foster inner transformation, environmental consciousness, and social harmony through practical living solutions and ancient wisdom.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-lg p-3 sm:p-4 md:p-6 shadow border-l-4 border-orange-600 flex flex-col justify-between min-h-[120px]">
            <div className="flex items-center mb-2 sm:mb-3 md:mb-4">
              <div className="p-2 bg-orange-100 rounded-lg mr-2">
                <Eye className="text-orange-600" size={18} />
              </div>
              <h3 className="text-xs sm:text-lg md:text-xl font-bold text-gray-800">Our Vision</h3>
            </div>
            <p className="text-gray-700 text-[10px] sm:text-xs md:text-base leading-relaxed">
              A world where conscious communities thrive globally, demonstrating that sustainable living and spiritual growth are not just possible, but essential for humanity's future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
