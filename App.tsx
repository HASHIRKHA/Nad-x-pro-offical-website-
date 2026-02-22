
import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));

const PageLoader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-[#050505] z-50">
    <div className="relative w-24 h-24">
      <div className="absolute inset-0 border-t-2 border-cyan-400 rounded-full animate-spin"></div>
      <div className="absolute inset-4 border-r-2 border-purple-500 rounded-full animate-spin duration-1000"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-cyan-400 font-bold text-xs">NADX</span>
      </div>
    </div>
  </div>
);

const AppContent: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col selection:bg-cyan-400 selection:text-black">
      <CustomCursor />
      <Navbar />
      <ScrollToTop />
      <main className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;
