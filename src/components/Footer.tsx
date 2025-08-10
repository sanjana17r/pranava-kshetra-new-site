
import React from 'react';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent mb-4">
              Pranava Kshetra
            </h3>
            <p className="text-green-100 leading-relaxed mb-6">
              Building conscious communities through sustainability and inner transformation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-green-700 rounded-lg hover:bg-green-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-green-700 rounded-lg hover:bg-green-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-green-700 rounded-lg hover:bg-green-600 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Model Village</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Gurukula</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Events</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Resources</a></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Volunteer</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Donate</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Partnerships</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Workshops</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-green-400" />
                <span className="text-green-100 text-sm">Sustainable Village, Nature Valley</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-green-400" />
                <span className="text-green-100 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-green-400" />
                <span className="text-green-100 text-sm">hello@pranavaKshetra.org</span>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="font-semibold mb-2">Newsletter</h5>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 rounded-lg bg-green-700 text-white placeholder-green-300 border border-green-600 focus:outline-none focus:border-green-400"
                />
                <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-12 pt-8 text-center">
          <p className="text-green-100">
            © 2024 Pranava Kshetra. All rights reserved. | 
            <a href="#" className="hover:text-white transition-colors"> Privacy Policy</a> | 
            <a href="#" className="hover:text-white transition-colors"> Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
