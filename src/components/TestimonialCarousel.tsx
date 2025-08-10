import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialCarousel = () => {
  const testimonials = [
    {
      name: "Ananya Sharma",
      quote: "Pranava Kshetra transformed my understanding of sustainable living. The community here is truly inspiring.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b4c45bc4?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Rajesh Kumar",
      quote: "The Gurukulam program helped my child develop both academic excellence and deep spiritual values.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Priya Patel",
      quote: "Being part of the Model Village project has been life-changing. We're creating real solutions here.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Dr. Suresh Nair",
      quote: "The holistic approach to education and living at Pranava Kshetra is exactly what our world needs.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-16 bg-amber-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8 tracking-tight">
          What Our Community Says
        </h2>
        
        <div className="relative">
          <div className="flex overflow-x-auto scrollbar-hide gap-6 pb-4">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">Community Member</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation buttons for larger screens */}
          <div className="hidden md:flex justify-center mt-8 gap-4">
            <button className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
              <ChevronLeft className="text-gray-600" size={24} />
            </button>
            <button className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
              <ChevronRight className="text-gray-600" size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
