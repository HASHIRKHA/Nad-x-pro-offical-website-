
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Target, Shield, Heart, Lightbulb, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  // Fix: Change type to HTMLElement to support multiple element types
  const revealRefs = useRef<(HTMLElement | null)[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll progress specifically within the timeline section for the vertical line
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far through the timeline the user has scrolled
      const start = rect.top - windowHeight / 2;
      const height = rect.height;
      const progress = Math.max(0, Math.min(1, -start / (height - windowHeight / 2)));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0', 'active');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { 
      threshold: 0.3,
      rootMargin: "0px 0px -100px 0px" // Trigger slightly before it hits center
    });

    revealRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Fix: Change parameter type to HTMLElement for broader compatibility
  const addToRefs = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const timelineData = [
    { year: "2025", title: "The Foundation", desc: "Founded with a vision to integrate AI in every business function on a global scale." },
    { year: "2025 (Q3)", title: "Global Expansion", desc: "Opened 3 new international hubs and reached 100+ clients across 5 continents." },
    { year: "2026", title: "Automation Standard", desc: "Launched proprietary 360° automation frameworks for enterprise efficiency." }
  ];

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center overflow-hidden px-6">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
          className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale" 
          alt="Office" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]"></div>
        <div className="container mx-auto relative z-10 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter mb-4 animate-fade-in-up">About <span className="text-cyan-400">Nad X Pro</span></h1>
          <p className="text-lg md:text-2xl text-gray-400 max-w-2xl font-medium animate-fade-in-up delay-100 opacity-0">Architects of the Automated Future.</p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div ref={addToRefs} className="max-w-4xl mx-auto text-center transition-all duration-1000 transform opacity-0 translate-y-10">
            <h2 className="text-xs md:text-sm font-bold text-cyan-400 uppercase tracking-[0.3em] mb-12">Our Mission</h2>
            <p className="text-2xl md:text-5xl font-bold tracking-tight leading-tight mb-12">
              To redefine the digital landscape by merging human creativity with machine intelligence, delivering 360° excellence.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>
          </div>
        </div>
      </section>

      {/* Enhanced Timeline */}
      <section ref={timelineRef} className="py-20 md:py-32 bg-white/[0.02] border-y border-white/5 overflow-hidden">
        <div className="container mx-auto px-6">
          <h3 ref={addToRefs} className="text-3xl md:text-4xl font-black mb-20 md:mb-32 tracking-tighter text-center transition-all transform opacity-0 translate-y-10">Our Evolution</h3>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Base Vertical Track */}
            <div className="absolute top-0 left-6 md:left-1/2 h-full w-[2px] bg-white/5 md:-translate-x-1/2"></div>
            
            {/* Animated Vertical Progress Track */}
            <div 
              className="absolute top-0 left-6 md:left-1/2 w-[2px] bg-gradient-to-b from-cyan-400 via-purple-500 to-cyan-400 md:-translate-x-1/2 transition-all duration-300 ease-out shadow-[0_0_15px_rgba(34,211,238,0.5)]"
              style={{ height: `${scrollProgress * 100}%` }}
            ></div>
            
            <div className="space-y-24 md:space-y-32">
              {timelineData.map((milestone, i) => (
                <div 
                  key={i} 
                  ref={addToRefs}
                  className={`reveal-on-scroll flex flex-col md:flex-row items-start md:items-center relative pl-12 md:pl-0 transition-all duration-1000 transform opacity-0 translate-y-10 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}
                >
                  {/* Central Dot */}
                  <div className="absolute left-[1.05rem] md:left-1/2 top-0 md:top-1/2 w-5 h-5 rounded-full border-2 border-white/10 bg-[#050505] md:-translate-x-1/2 md:-translate-y-1/2 z-30 transition-all duration-500 group-[.active]:border-cyan-400/50 timeline-dot-pulse">
                    <div className="absolute inset-1 rounded-full bg-white/20 group-[.active]:bg-cyan-400 transition-colors duration-500"></div>
                  </div>
                  
                  {/* Horizontal Connector Line: High-speed laser growth */}
                  <div className={`hidden md:block absolute top-1/2 h-[1px] z-10 transition-all duration-700 delay-300 ease-[cubic-bezier(0.19,1,0.22,1)] scale-x-0 group-[.active]:scale-x-100 opacity-0 group-[.active]:opacity-100 shadow-[0_0_10px_rgba(34,211,238,0.4)] ${
                    i % 2 === 0 
                      ? 'right-1/2 w-[calc(50%-48px)] origin-right bg-gradient-to-l from-cyan-400 via-cyan-400/30 to-transparent' 
                      : 'left-1/2 w-[calc(50%-48px)] origin-left bg-gradient-to-r from-cyan-400 via-cyan-400/30 to-transparent'
                  }`}>
                  </div>
                  
                  <div className="hidden md:block flex-1"></div>
                  
                  {/* Content Card with Slide-in effect */}
                  <div className={`flex-1 glass p-8 md:p-12 rounded-3xl border border-white/5 transition-all duration-1000 delay-500 transform ${
                    i % 2 === 0 
                      ? 'md:text-right md:translate-x-12 group-[.active]:translate-x-0' 
                      : 'md:text-left md:-translate-x-12 group-[.active]:translate-x-0'
                  }`}>
                    <div className="inline-block px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 font-bold text-[10px] md:text-xs tracking-widest uppercase mb-4">
                      {milestone.year}
                    </div>
                    <h4 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight text-white">{milestone.title}</h4>
                    <p className="text-sm md:text-lg text-gray-400 leading-relaxed font-light">{milestone.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-32 px-6">
        <div className="container mx-auto">
          <div ref={addToRefs} className="text-center mb-16 md:mb-24 transition-all duration-1000 transform opacity-0 translate-y-10">
            <h2 className="text-xs md:text-sm font-bold text-cyan-400 uppercase tracking-[0.3em] mb-4">Core Principles</h2>
            <h3 className="text-3xl md:text-6xl font-black tracking-tight">The DNA of Innovation</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: <Lightbulb />, title: "Visionary Tech", desc: "We don't just use AI; we pioneer new ways it can serve humanity." },
              { icon: <Shield />, title: "Absolute Trust", desc: "Data security and ethical automation are built into every pixel." },
              { icon: <Heart />, title: "Human Centric", desc: "Technology should feel natural, intuitive, and remarkably helpful." },
              { icon: <Target />, title: "Impact Driven", desc: "We measure success by the global results our partners achieve." }
            ].map((value, i) => (
              <div 
                key={i} 
                ref={addToRefs}
                className="group p-8 md:p-10 text-center glass border border-white/5 rounded-[2.5rem] hover:bg-white hover:text-black transition-all duration-700 transform opacity-0 translate-y-10"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mx-auto mb-8 text-cyan-400 group-hover:bg-black group-hover:text-cyan-400 transition-all duration-500 rotate-3 group-hover:rotate-0">
                  {React.cloneElement(value.icon as React.ReactElement<any>, { className: "w-10 h-10" })}
                </div>
                <h4 className="text-xl md:text-2xl font-bold mb-4 tracking-tight">{value.title}</h4>
                <p className="text-sm md:text-base opacity-50 group-hover:opacity-80 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-32 bg-white text-black md:rounded-[5rem] px-6">
        <div className="container mx-auto">
           <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 md:mb-24 gap-8">
             <div className="max-w-2xl">
               <h2 className="text-xs font-bold text-black/30 uppercase tracking-[0.3em] mb-4">The Collective</h2>
               <h3 className="text-4xl md:text-7xl font-black tracking-tighter leading-[0.9]">A Synergy of World-Class Minds.</h3>
             </div>
             <p className="text-base md:text-lg text-black/60 max-w-sm font-medium">
               Our team spans the globe, bridging gaps in language and logic to build the extraordinary.
             </p>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
             {[
               { name: "Alex Rivers", role: "Chief Visionary Officer", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
               { name: "Sofia Chen", role: "Lead AI Architect", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
               { name: "Marcus Thorne", role: "Director of UX", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" },
               { name: "Elena Volkov", role: "Head of Strategy", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" }
             ].map((person, i) => (
               <div key={i} className="group relative overflow-hidden rounded-[2rem] shadow-2xl transition-transform hover:-translate-y-2">
                 <img src={person.img} className="w-full aspect-[4/5] object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" alt={person.name} />
                 <div className="absolute inset-0 bg-gradient-to-t from-cyan-400 via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex flex-col justify-end p-8">
                   <h4 className="text-black font-black text-2xl tracking-tighter mb-1">{person.name}</h4>
                   <p className="text-black/80 font-bold text-xs uppercase tracking-widest">{person.role}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-40 text-center px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-12 tracking-tighter">Want to join the mission?</h2>
          <Link 
            to="/contact" 
            className="group relative inline-flex items-center space-x-4 px-12 py-6 glass border border-cyan-400/30 text-cyan-400 rounded-full font-black text-lg md:text-xl transition-all hover:bg-cyan-400 hover:text-black overflow-hidden"
          >
            <span className="relative z-10">Let's Ignite Your Future</span>
            <ArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            <div className="absolute inset-0 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
