import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-4 glass border-b' : 'py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform">
            <span className="text-black font-extrabold text-lg -rotate-12">N</span>
          </div>
          <span className="text-2xl font-bold tracking-tighter text-white">
            NAD X <span className="text-cyan-400">PRO</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-cyan-400 ${
                location.pathname === link.path ? 'text-cyan-400' : 'text-gray-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <motion.div
            whileHover="hover"
            className="relative"
          >
            <Link 
              to="/contact" 
              className="px-6 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-cyan-400 transition-all duration-300 flex items-center space-x-2 group relative z-10 overflow-hidden"
            >
              <span className="relative z-10">Let's Talk</span>
              <motion.div
                variants={{
                  hover: {
                    scale: [1, 1.25, 1],
                    x: 4,
                    transition: {
                      scale: {
                        repeat: Infinity,
                        duration: 0.8,
                        ease: "easeInOut"
                      },
                      x: { duration: 0.2 }
                    }
                  }
                }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </Link>
            {/* Sophisticated Glow Layer */}
            <motion.div 
              variants={{
                hover: { opacity: 0.5, scale: 1.1 }
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              className="absolute inset-0 bg-cyan-400 blur-md rounded-full -z-0 pointer-events-none"
            />
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 bg-black transition-transform duration-500 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-4xl font-bold ${
                location.pathname === link.path ? 'text-cyan-400' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="px-10 py-4 bg-cyan-400 text-black font-bold rounded-full"
          >
            Start Project
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;