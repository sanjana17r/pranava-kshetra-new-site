import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, Eye, Search, Leaf, Users, GraduationCap, Heart, Home, Sprout } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ModelVillage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&h=1080&fit=crop')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-green-600 rounded-full mr-4">
              <Leaf className="text-white" size={24} />
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">
              Model Sustainable Village
            </h1>
          </div>
          <p className="text-lg md:text-xl text-white/90 mb-6">
            Mangalgi - Planting Seeds of Sustainability, Harvesting Generations of Wellbeing
          </p>
          <div className="inline-flex items-center bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
            <Users className="mr-2" size={16} />
            Centered around Volunteering
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-4 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <Link 
            to="/"
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Link>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            At Pranava Kshetra, our Model Village in <span className="font-semibold text-green-700">Mangalgi</span> is a living example of how rural life can thrive through sustainability, traditional wisdom, and inner wellbeing. Rooted in ancient wisdom and guided by modern ecological care, this project revives village life through natural farming, conscious architecture, health, education, and local livelihoods—all grounded in volunteerism and community spirit.
          </p>
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">The Heart of Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              The village forms the heart of our mission: to create a self-reliant, joyful, and resilient rural India that can inspire the world.
            </p>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Purpose */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Vision */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-600 rounded-lg mr-4">
                  <Eye className="text-white" size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-green-800">Vision</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4 font-medium">Long term picture</p>
              <p className="text-gray-700 leading-relaxed">
                To create inclusive communities centered around wellbeing, resilience, sustainability and volunteerism as the core culture through inner and behavioral transformation.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-orange-600 rounded-lg mr-4">
                  <Target className="text-white" size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-orange-800">Mission</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4 font-medium">Means to achieve it</p>
              <p className="text-gray-700 leading-relaxed">
                To facilitate individuals in becoming conscious, responsible, and rooted human beings through tools of wellbeing like yoga, education, health, ecology, economy and training on ancient natural wisdom.
              </p>
            </div>

            {/* Purpose */}
            <div className="bg-gradient-to-br from-amber-50 to-yellow-100 rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-amber-600 rounded-lg mr-4">
                  <Search className="text-white" size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-amber-800">Purpose</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4 font-medium">Why this matters</p>
              <p className="text-gray-700 leading-relaxed">
                India's roots lie in its villages—once thriving centers of joy, community, and conscious living. We believe the future lies in reviving and reimagining our villages as centers of conscious, sustainable, and joyful living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
            The Story of Rural India
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Past Glory */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Heart className="text-green-600 mr-3" size={20} />
                <h3 className="text-lg font-bold text-gray-800">Yesterday's Wisdom</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm">
                Just a few decades ago, rural life reflected self-sufficiency, robust health, and mutual care, despite having little in terms of money. Farmers practiced conscious subsistence farming, education was passed through generations, and every resource was approached with reverence and restraint.
              </p>
            </div>

            {/* Current Challenge */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Search className="text-orange-600 mr-3" size={20} />
                <h3 className="text-lg font-bold text-gray-800">Today's Challenge</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm">
                Today, that legacy is rapidly fading. Cities are increasingly unsustainable, while rural India is losing its self-reliance. Yet, India cannot thrive unless its villages do.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Our Solution</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Through a blend of traditional wisdom and modern practices, we aim to build a scalable, replicable model village rooted in the culture of "conserve and use." Our true focus is on creating conscious individuals—because only they can carry this culture forward organically, with wisdom and flexibility.
            </p>
            <div className="flex items-center justify-center">
              <Sprout className="text-green-600 mr-2" size={20} />
              <span className="font-semibold text-green-700">Conscious Individuals = Sustainable Future</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
            Village Pillars
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: Sprout, title: "Natural Farming", color: "green" },
              { icon: Home, title: "Conscious Architecture", color: "orange" },
              { icon: Heart, title: "Health & Wellness", color: "red" },
              { icon: GraduationCap, title: "Education", color: "blue" },
              { icon: Users, title: "Local Livelihoods", color: "purple" },
              { icon: Leaf, title: "Volunteerism", color: "emerald" }
            ].map((pillar, index) => (
              <div key={index} className={`bg-gradient-to-br from-${pillar.color}-50 to-${pillar.color}-100 rounded-xl p-4 text-center shadow hover:shadow-lg transition-shadow`}>
                <div className={`p-3 bg-${pillar.color}-600 rounded-lg mx-auto mb-3 w-fit`}>
                  <pillar.icon className="text-white" size={20} />
                </div>
                <h4 className={`font-semibold text-${pillar.color}-800 text-sm`}>{pillar.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Join the Village Revolution
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Be part of creating a self-reliant, joyful, and resilient rural India that can inspire the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Volunteer with Us
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ModelVillage;