import React from 'react';

const GallerySection = () => {
  const images = [
    "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=300&fit=crop"
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8 tracking-tight">
          Life at Pranava Kshetra
        </h2>
        <div className="flex overflow-x-auto scrollbar-hide gap-6 pb-2">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 min-w-[260px] max-w-xs flex-shrink-0"
            >
              <img 
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Community Life</p>
                  <p className="text-sm opacity-90">Sustainable Living</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
            View More Photos
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
