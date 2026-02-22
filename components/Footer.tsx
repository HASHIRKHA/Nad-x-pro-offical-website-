
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded flex items-center justify-center">
                <span className="text-black font-bold text-sm">N</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tighter">NAD X PRO</span>
            </Link>
            <p className="text-gray-500 leading-relaxed mb-8">
              Your 360° global partner for AI-driven automation, software excellence, and creative growth.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/p/DLPGDG0McbU/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:-translate-y-1 hover:scale-110"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61577153053928"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:-translate-y-1 hover:scale-110"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/NadXPro143"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:-translate-y-1 hover:scale-110"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/nad-x-pro-b1599a392?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:-translate-y-1 hover:scale-110"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-tight">Services</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><Link to="/services" className="hover:text-cyan-400 transition-colors">AI & Automation</Link></li>
              <li><Link to="/services" className="hover:text-cyan-400 transition-colors">Development</Link></li>
              <li><Link to="/services" className="hover:text-cyan-400 transition-colors">Digital Marketing</Link></li>
              <li><Link to="/services" className="hover:text-cyan-400 transition-colors">Creative Design</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-tight">Company</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><Link to="/about" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">News</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-tight">Let's build something</h4>
            <p className="text-gray-500 text-sm mb-6">Have a project in mind? Connect with us and let's make it real.</p>
            <Link to="/contact" className="group inline-flex items-center text-cyan-400 font-bold">
              Start a project
              <ArrowUpRight className="ml-2 w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 uppercase tracking-widest gap-4">
          <p>© 2025 Nad X Pro. All Rights Reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
