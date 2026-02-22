import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Bot, Code, Globe as GlobeIcon, Users, Quote, Star, ExternalLink } from 'lucide-react';
import Globe from '../components/Globe';
import { portfolioProjects } from '../data/projects';

const Home: React.FC = () => {
  const revealRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0', 'active-reveal');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    revealRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "CEO, TechFlow",
      text: "Nad X Pro didn't just automate our workflow; they fundamentally evolved how we think about scale. A truly 360° transformation.",
      avatar: "https://i.pravatar.cc/150?u=sarah",
      gradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
      name: "David Chen",
      role: "Founder, Zenith AI",
      text: "The synergy between their design and AI implementation is unmatched. They delivered a powerhouse ecosystem that put us 2 years ahead.",
      avatar: "https://i.pravatar.cc/150?u=david",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      name: "Elena Rodriguez",
      role: "CMO, Global Retail",
      text: "Our marketing ROI tripled in six months. Their data-backed approach to growth is surgical and highly effective.",
      avatar: "https://i.pravatar.cc/150?u=elena",
      gradient: "from-yellow-500/20 to-orange-500/20"
    },
    {
      name: "Michael Ross",
      role: "CTO, NextStream",
      text: "Precision software meets visionary leadership. Working with the Nad X team felt like having a glimpse into the future of enterprise.",
      avatar: "https://i.pravatar.cc/150?u=michael",
      gradient: "from-green-500/20 to-teal-500/20"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === activeFilter);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover scale-[1.02] filter brightness-75 contrast-125"
          >
            <source src="https://player.vimeo.com/external/370331493.sd.mp4?s=7b34d7d3c75d4f3b8908f515d487f5978168e376&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] z-20"></div>
          <div className="absolute -inset-[100px] bg-[radial-gradient(circle_at_30%_30%,rgba(0,242,255,0.08)_0%,transparent_50%)] z-20 animate-pulse duration-[10s]"></div>
          <div className="absolute inset-0 pointer-events-none z-30 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#050505] to-transparent z-40"></div>
        </div>

        <div className="container mx-auto px-6 relative z-50 text-center">
          <div className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full glass border border-white/10 mb-8 animate-fade-in-up shadow-[0_0_20px_rgba(34,211,238,0.1)]">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></span>
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-cyan-400">Total Digital Transformation</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-[1] max-w-5xl mx-auto animate-fade-in-up delay-100 opacity-0 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
            The <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">360° Partner</span> For Your Next Big Leap
          </h1>
          
          <p className="text-base md:text-xl text-gray-200 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-200 opacity-0 px-4 md:px-0 font-medium">
            Integrating AI automation, high-end design, and precision marketing into a single powerhouse ecosystem for your growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up delay-300 opacity-0">
            <Link 
              to="/contact" 
              className="w-full sm:w-auto px-10 py-5 bg-cyan-400 text-black font-black rounded-full hover:bg-white transition-all transform hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] flex items-center justify-center"
            >
              Start Evolution <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/services" 
              className="w-full sm:w-auto px-10 py-5 glass text-white font-bold rounded-full hover:bg-white/10 transition-all border border-white/20 text-center backdrop-blur-xl"
            >
              Our Ecosystem
            </Link>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-40 hidden md:block z-50">
           <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
             <div className="w-1 h-2 bg-white rounded-full"></div>
           </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-32 bg-[#050505] relative z-10">
        <div className="container mx-auto px-6">
          <div ref={addToRefs} className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 transition-all duration-1000 transform opacity-0 translate-y-10">
            <div className="max-w-2xl">
              <h2 className="text-xs md:text-sm font-bold text-cyan-400 uppercase tracking-[0.3em] mb-4">Integrated Power</h2>
              <h3 className="text-3xl md:text-6xl font-bold tracking-tight">One Partnership. <br className="hidden md:block" />Infinite Growth.</h3>
            </div>
            <Link to="/services" className="mt-8 md:mt-0 flex items-center text-gray-400 hover:text-cyan-400 transition-colors group">
              Explore 360° services <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { 
                icon: <Bot className="w-8 h-8 text-cyan-400" />, 
                title: "AI & Automation", 
                desc: "Scaling operations through intelligent systems that work while you sleep." 
              },
              { 
                icon: <Code className="w-8 h-8 text-purple-500" />, 
                title: "Creative Tech", 
                desc: "Where design meets performance. Software and brand identities built for the future." 
              },
              { 
                icon: <Zap className="w-8 h-8 text-yellow-400" />, 
                title: "Growth Marketing", 
                desc: "Data-backed marketing and sales strategies to capture global market share." 
              }
            ].map((service, i) => (
              <div 
                key={i} 
                ref={addToRefs}
                className="group p-8 md:p-10 glass rounded-3xl border border-white/5 hover:border-cyan-400/30 transition-all duration-700 transform opacity-0 translate-y-10"
              >
                <div className="mb-6 md:mb-8 p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(255,255,255,0.02)]">
                  {service.icon}
                </div>
                <h4 className="text-xl md:text-2xl font-bold mb-4 tracking-tight">{service.title}</h4>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed mb-8">{service.desc}</p>
                <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 to-purple-600 transition-all duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-40 bg-white text-black md:rounded-[5rem] relative z-20 md:-my-20 shadow-[0_-20px_80px_rgba(0,0,0,0.5)]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
            
            {/* Left Content */}
            <div ref={addToRefs} className="transition-all duration-1000 transform opacity-0 translate-y-10">
              <h2 className="text-xs md:text-sm font-bold text-black opacity-30 uppercase tracking-[0.4em] mb-6">The Nad X Pro Advantage</h2>
              <h3 className="text-4xl md:text-8xl font-black tracking-tighter mb-10 md:mb-12 leading-[0.9]">Why Leaders <br/>Trust Our Hub.</h3>
              
              <div className="space-y-8 md:space-y-12">
                {[
                  { title: "Universal Synergy", desc: "No more juggling vendors. We align your tech, marketing, and design into one seamless flow." },
                  { title: "Proprietary AI", desc: "Access custom-built automation tools that your competitors don't even know exist." },
                  { title: "Market Domination", desc: "Our 360° approach is designed to win, not just participate, in the global economy." }
                ].map((item, i) => (
                  <div key={i} className="flex space-x-6 md:space-x-8 group cursor-default">
                    <span className="text-3xl md:text-4xl font-black text-black/10 group-hover:text-cyan-500 transition-all duration-500 group-hover:scale-110">0{i+1}</span>
                    <div className="border-l border-black/5 pl-8 group-hover:border-cyan-400 transition-colors duration-500">
                      <h4 className="text-xl md:text-2xl font-bold mb-3 tracking-tight group-hover:translate-x-1 transition-transform">{item.title}</h4>
                      <p className="text-sm md:text-lg text-black/50 leading-relaxed group-hover:text-black transition-colors">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visuals */}
            <div className="relative grid grid-cols-2 gap-4 md:gap-8 mt-12 lg:mt-0 perspective-1000">
              <div className="space-y-4 md:space-y-8 md:pt-16">
                <div className="animate-float group relative h-56 md:h-80 bg-cyan-100 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] hover:shadow-[0_40px_80px_rgba(34,211,238,0.3)] transition-all duration-700 hover:-rotate-2 hover:scale-[1.05]">
                  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 brightness-90 group-hover:brightness-100" alt="Innovation" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
                    <span className="text-white font-bold text-xs uppercase tracking-widest">Innovation Hub</span>
                  </div>
                </div>
                <div className="animate-float-extra-delayed p-8 md:p-12 bg-[#050505] text-white rounded-[2rem] md:rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_30px_60px_rgba(34,211,238,0.2)] transition-all duration-700 hover:rotate-3 hover:scale-[1.02] border border-white/5">
                  <div className="text-4xl md:text-6xl font-black mb-3 text-cyan-400 tracking-tighter">500+</div>
                  <div className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] opacity-40">Global Impact Projects</div>
                </div>
              </div>
              <div className="space-y-4 md:space-y-8">
                <div className="animate-float-delayed p-8 md:p-12 bg-gradient-to-br from-purple-600 to-indigo-800 text-white rounded-[2rem] md:rounded-[3rem] shadow-[0_20px_50px_rgba(124,58,237,0.3)] hover:shadow-[0_30px_60px_rgba(124,58,237,0.5)] transition-all duration-700 hover:-rotate-3 hover:scale-[1.02] group">
                  <Bot className="w-10 h-10 md:w-14 md:h-14 mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500" />
                  <div className="text-3xl md:text-5xl font-black mb-3 tracking-tighter">360°</div>
                  <div className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] opacity-60">Complete Ecosystem</div>
                </div>
                <div className="animate-float group relative h-64 md:h-[28rem] bg-gray-100 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] hover:shadow-[0_40px_80px_rgba(34,211,238,0.2)] transition-all duration-700 hover:rotate-2 hover:scale-[1.05]">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 brightness-90 group-hover:brightness-100" alt="Team Synergy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* World Impact Section */}
      <section className="py-24 md:py-40 bg-[#050505] relative overflow-hidden perspective-2000">
        <div className="container mx-auto px-6 relative z-10">
          <div ref={addToRefs} className="text-center mb-20 md:mb-32 transition-all duration-1000 transform opacity-0 translate-y-10 group">
            <h2 className="text-xs md:text-sm font-black text-cyan-400 uppercase tracking-[0.5em] mb-6 animate-pulse">World Impact</h2>
            <h3 className="text-4xl md:text-8xl font-black tracking-tighter group-hover:scale-[1.02] transition-transform duration-700">A <span className="text-white/40">Borderless</span> Network</h3>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 md:gap-24">
             {/* Enhanced Globe Column */}
             <div className="w-full lg:w-1/2 relative">
               <div ref={addToRefs} className="transition-all duration-1000 transform opacity-0 scale-90 delay-300">
                 <Globe />
               </div>
               {/* Orbital Stat Floating Labels */}
               <div className="absolute top-1/4 -left-4 md:-left-12 animate-float glass px-6 py-3 rounded-2xl border border-cyan-400/20 backdrop-blur-md z-20">
                 <div className="text-cyan-400 font-black text-xl">ASIA</div>
                 <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Active Nodes</div>
               </div>
               <div className="absolute bottom-1/4 -right-4 md:-right-12 animate-float-delayed glass px-6 py-3 rounded-2xl border-purple-500/20 backdrop-blur-md z-20">
                 <div className="text-purple-500 font-black text-xl">AMERICAS</div>
                 <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Fast Expansion</div>
               </div>
             </div>

             {/* Interactive Info Cards Column */}
             <div className="w-full lg:w-1/2 space-y-8 md:space-y-12">
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                 <div 
                  ref={addToRefs} 
                  className="animate-float group glass p-10 rounded-[2.5rem] border border-white/5 transition-all duration-700 transform opacity-0 translate-y-10 hover:border-cyan-400/50 hover:bg-white/5 hover:-translate-y-4 hover:rotate-2 shadow-2xl"
                 >
                   <div className="text-cyan-400 mb-6 bg-cyan-400/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users className="w-8 h-8" />
                   </div>
                   <div className="text-4xl font-black mb-2 tracking-tighter group-hover:text-cyan-400 transition-colors">30+</div>
                   <p className="text-gray-500 font-bold uppercase text-[10px] tracking-widest">Target Markets</p>
                 </div>

                 <div 
                  ref={addToRefs} 
                  className="animate-float-delayed group glass p-10 rounded-[2.5rem] border border-white/5 transition-all duration-700 transform opacity-0 translate-y-10 delay-200 hover:border-purple-500/50 hover:bg-white/5 hover:-translate-y-4 hover:-rotate-2 shadow-2xl"
                 >
                   <div className="text-purple-500 mb-6 bg-purple-500/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <GlobeIcon className="w-8 h-8" />
                   </div>
                   <div className="text-4xl font-black mb-2 tracking-tighter group-hover:text-purple-500 transition-colors">24/7</div>
                   <p className="text-gray-500 font-bold uppercase text-[10px] tracking-widest">Execution Hubs</p>
                 </div>
               </div>

               <div ref={addToRefs} className="transition-all duration-1000 transform opacity-0 translate-y-10 delay-400">
                 <p className="text-xl md:text-3xl text-gray-400 leading-tight font-medium italic border-l-4 border-cyan-400/50 pl-10 group-hover:text-white transition-colors duration-500">
                   "Our infrastructure is built to scale at the speed of light, ensuring your business stays ahead of the global curve."
                 </p>
               </div>

               <Link 
                ref={addToRefs}
                to="/about" 
                className="inline-flex items-center space-x-4 text-white font-black text-lg group transition-all duration-1000 transform opacity-0 translate-y-10 delay-500"
              >
                <span className="relative">
                  Discover our global story
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-500 group-hover:w-full"></span>
                </span>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-cyan-400 group-hover:border-cyan-400 transition-all">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 group-hover:text-black transition-all" />
                </div>
              </Link>
             </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section - "Showcase of Excellence" */}
      <section className="py-24 md:py-40 bg-white text-black md:rounded-[5rem] relative z-20 shadow-[0_-20px_80px_rgba(0,0,0,0.1)]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
            <div ref={addToRefs} className="max-w-2xl transition-all duration-1000 transform opacity-0 translate-y-10">
              <h2 className="text-xs md:text-sm font-black text-black/30 uppercase tracking-[0.4em] mb-6">Our Work</h2>
              <h3 className="text-4xl md:text-7xl font-black tracking-tighter leading-[1]">Pioneering <br/>Digital Proof.</h3>
            </div>
            
            {/* Dynamic Filter Bar */}
            <div ref={addToRefs} className="flex flex-wrap gap-2 glass p-2 rounded-2xl border-black/5 bg-gray-50 transition-all duration-1000 transform opacity-0 translate-y-10 delay-200">
              {['All', 'AI & Automation', 'Software Dev', 'Marketing', 'Creative Design'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2.5 rounded-xl text-[10px] md:text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                    activeFilter === filter 
                    ? 'bg-black text-white shadow-xl scale-105' 
                    : 'text-black/40 hover:text-black hover:bg-black/5'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Staggered Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {filteredProjects.map((project, i) => (
              <div 
                key={project.id}
                ref={addToRefs}
                className="group relative h-[30rem] md:h-[35rem] rounded-[3rem] overflow-hidden transition-all duration-700 transform opacity-0 translate-y-10 hover:-translate-y-4 shadow-2xl"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Parallax Image */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                />
                
                {/* Cinematic Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/90 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Floating Content Hub */}
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end text-white">
                  <div className={`w-fit px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4 bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-500 group-hover:bg-cyan-400 group-hover:text-black group-hover:border-cyan-400 group-hover:-translate-y-2`}>
                    {project.category}
                  </div>
                  
                  <h4 className="text-3xl md:text-4xl font-black mb-3 tracking-tighter transition-all duration-500 group-hover:-translate-y-2">{project.title}</h4>
                  <p className="text-white/60 text-sm md:text-base mb-8 max-w-xs transition-all duration-500 group-hover:-translate-y-2 opacity-0 group-hover:opacity-100 transform translate-y-4">
                    {project.desc}
                  </p>
                  
                  <div className="flex items-center space-x-4 transition-all duration-700 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    <Link to={`/project/${project.id}`} className="flex-1 py-4 bg-white text-black font-black rounded-2xl flex items-center justify-center hover:bg-cyan-400 transition-colors group/btn">
                      View Project <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </Link>
                    <button className="w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center hover:bg-white hover:text-black transition-all">
                      <Star className="w-5 h-5 fill-current" />
                    </button>
                  </div>
                </div>

                {/* Decorative Accent Ring on hover */}
                <div className="absolute top-10 right-10 w-20 h-20 border border-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-1000 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Bottom Callout */}
          <div ref={addToRefs} className="mt-20 md:mt-32 text-center transition-all duration-1000 transform opacity-0 translate-y-10">
            <p className="text-black/30 font-bold uppercase tracking-[0.4em] mb-8">Want to see more case studies?</p>
            <Link to="/services" className="inline-flex items-center space-x-6 text-black font-black text-xl group">
              <span className="relative">
                Browse our full ecosystem
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-500 group-hover:w-full"></span>
              </span>
              <div className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section - "Voices of the Evolution" */}
      <section className="py-24 md:py-40 bg-[#050505] relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500 rounded-full blur-[150px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500 rounded-full blur-[150px] animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div ref={addToRefs} className="max-w-3xl mb-16 md:mb-24 transition-all duration-1000 transform opacity-0 translate-y-10">
            <h2 className="text-xs md:text-sm font-black text-cyan-400 uppercase tracking-[0.4em] mb-6">Partner Success</h2>
            <h3 className="text-4xl md:text-7xl font-black tracking-tighter leading-[1]">Voices Of The <br/>Digital Evolution.</h3>
          </div>

          {/* Testimonial Orbit Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 perspective-2000">
            {testimonials.map((t, i) => (
              <div 
                key={i} 
                ref={addToRefs}
                className={`group relative p-8 md:p-10 glass rounded-[2.5rem] border border-white/5 transition-all duration-1000 transform opacity-0 translate-y-10 hover:border-cyan-400/40 hover:-translate-y-4 hover:rotate-2 shadow-2xl overflow-hidden cursor-default`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Highlight Glow */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${t.gradient} blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                
                <div className="relative z-10">
                  <Quote className="w-10 h-10 text-cyan-400/20 mb-6 group-hover:text-cyan-400 transition-colors duration-500 group-hover:scale-110" />
                  
                  <p className="text-gray-300 font-medium leading-relaxed mb-8 group-hover:text-white transition-colors duration-300 italic">
                    "{t.text}"
                  </p>

                  <div className="flex items-center space-x-4 mt-auto">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-cyan-400 transition-colors">
                      <img src={t.avatar} alt={t.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm tracking-tight">{t.name}</h4>
                      <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>

                  <div className="flex space-x-1 mt-6">
                    {[1,2,3,4,5].map(star => (
                      <Star key={star} className="w-3 h-3 fill-cyan-400 text-cyan-400 group-hover:scale-125 transition-transform" style={{ transitionDelay: `${star * 50}ms` }} />
                    ))}
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white/5 group-hover:border-cyan-400/50 transition-colors rounded-br-xl"></div>
              </div>
            ))}
          </div>

          {/* Scrolling Brand Marquee */}
          <div ref={addToRefs} className="mt-24 md:mt-40 transition-all duration-1000 transform opacity-0 translate-y-10">
            <h4 className="text-center text-[10px] font-black text-white/20 uppercase tracking-[0.5em] mb-12">Trusted By Global Industry Disruptors</h4>
            <div className="relative overflow-hidden w-full py-10 border-y border-white/5">
              <div className="flex animate-marquee whitespace-nowrap space-x-12 md:space-x-32 items-center">
                {[1,2,3,4,5,6,1,2,3,4,5,6].map((brand, bIndex) => (
                  <div key={bIndex} className="text-3xl md:text-5xl font-black text-white/5 hover:text-cyan-400/40 transition-all duration-500 cursor-none select-none italic tracking-tighter">
                    {brand % 2 === 0 ? 'VANGUARD' : brand % 3 === 0 ? 'ORBITAL' : 'NEXUS'} CORP
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 relative bg-gradient-to-b from-[#050505] to-purple-900/20">
        <div className="container mx-auto px-6 text-center">
           <h2 className="text-3xl md:text-7xl font-bold mb-8 md:mb-10 tracking-tighter leading-[1.1]">Ready to <br/><span className="text-cyan-400">Scale 360°</span>?</h2>
           <Link 
            to="/contact" 
            className="group relative inline-flex items-center justify-center w-full sm:w-auto px-12 py-6 overflow-hidden font-bold text-black transition-all bg-cyan-400 rounded-full hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(34,211,238,0.3)]"
           >
             <span className="relative z-10 flex items-center">
               Start Your Project <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
             </span>
             <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
           </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;