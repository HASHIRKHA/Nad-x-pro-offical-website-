
import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Linkedin, Twitter, Globe, Navigation, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [hoveredLocation, setHoveredLocation] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  // Fix: Change type to HTMLElement
  const revealRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    revealRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Fix: Change parameter type to HTMLElement
  const addToRefs = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const locations = [
    { 
      id: 0, 
      city: "Punjab", 
      region: "Punjab, Pakistan", 
      zone: "HQ", 
      color: "cyan", 
      top: "45%", 
      left: "62%" 
    },
    { 
      id: 1, 
      city: "San Francisco", 
      region: "Mission St, Silicon Valley", 
      zone: "Americas", 
      color: "purple", 
      top: "38%", 
      left: "15%" 
    },
    { 
      id: 2, 
      city: "London", 
      region: "The Shard, Bridge St", 
      zone: "Europe", 
      color: "yellow", 
      top: "30%", 
      left: "48%" 
    }
  ];

  return (
    <div className="pt-24 min-h-screen overflow-hidden">
      <section className="py-12 md:py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
            {/* Left Info */}
            <div ref={addToRefs} className="transition-all duration-1000 transform opacity-0 translate-y-10">
              <div className="inline-block px-4 py-2 rounded-full glass border border-white/10 mb-6">
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-cyan-400">Let's Connect</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.1]">Reach <span className="text-purple-500">Global</span> Hub.</h1>
              <p className="text-lg md:text-xl text-gray-500 mb-12 leading-relaxed">
                Whether you're looking for a full 360° overhaul or specific AI automation, 
                our team is ready to deliver.
              </p>

              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start space-x-4 md:space-x-6 group">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 font-bold uppercase text-[10px] md:text-xs tracking-widest mb-1">Email Us</h4>
                    <p className="text-lg md:text-xl font-bold">nadxproofficial@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 md:space-x-6 group">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-purple-500 shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 font-bold uppercase text-[10px] md:text-xs tracking-widest mb-1">Call Us</h4>
                    <p className="text-lg md:text-xl font-bold">+92 337 1607702 | +92 319 7200178</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 md:space-x-6 group">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-yellow-400 shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 font-bold uppercase text-[10px] md:text-xs tracking-widest mb-1">Global HQ</h4>
                    <p className="text-lg md:text-xl font-bold">Punjab, Pakistan</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 md:mt-16">
                 <h4 className="text-gray-400 font-bold uppercase text-[10px] md:text-xs tracking-widest mb-6">Follow our journey</h4>
                 <div className="flex space-x-4">
                    {[<Linkedin />, <Twitter />, <Globe />].map((icon, i) => (
                      <a key={i} href="#" className="w-12 h-12 glass rounded-2xl flex items-center justify-center hover:bg-white hover:text-black transition-all transform hover:-translate-y-1">
                        {React.cloneElement(icon as React.ReactElement<any>, { className: "w-5 h-5" })}
                      </a>
                    ))}
                 </div>
              </div>
            </div>

            {/* Right Form */}
            <div ref={addToRefs} className="relative transition-all duration-1000 transform opacity-0 translate-y-10 delay-200">
              <div className="absolute inset-0 bg-cyan-400/5 blur-[100px] -z-10"></div>
              <div className="glass p-8 md:p-16 rounded-3xl md:rounded-[3rem] border border-white/5 min-h-[500px] flex flex-col justify-center">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                        <input 
                          required
                          type="text" 
                          placeholder="Your Name"
                          className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-6 py-4 focus:outline-none focus:border-cyan-400 transition-colors text-sm md:text-base"
                          value={formData.name}
                          onChange={e => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                        <input 
                          required
                          type="email" 
                          placeholder="name@company.com"
                          className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-6 py-4 focus:outline-none focus:border-cyan-400 transition-colors text-sm md:text-base"
                          value={formData.email}
                          onChange={e => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400">Company Name</label>
                      <input 
                        type="text" 
                        placeholder="Company Ltd"
                        className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-6 py-4 focus:outline-none focus:border-cyan-400 transition-colors text-sm md:text-base"
                        value={formData.company}
                        onChange={e => setFormData({...formData, company: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400">Message</label>
                      <textarea 
                        required
                        rows={4}
                        placeholder="Tell us about your project or vision..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-6 py-4 focus:outline-none focus:border-cyan-400 transition-colors resize-none text-sm md:text-base"
                        value={formData.message}
                        onChange={e => setFormData({...formData, message: e.target.value})}
                      />
                    </div>
                    <button 
                      type="submit" 
                      className="w-full py-5 bg-cyan-400 text-black font-black rounded-xl md:rounded-2xl hover:bg-white transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center space-x-2 group"
                    >
                      <span className="text-sm md:text-base">Send Message</span>
                      <Send className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-12 flex flex-col items-center">
                    {/* Bouncing Checkmark Icon */}
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-cyan-400 text-black rounded-full flex items-center justify-center mb-10 shadow-[0_0_50px_rgba(34,211,238,0.3)] animate-success-bounce">
                      <CheckCircle2 className="w-12 h-12 md:w-16 md:h-16 opacity-0 animate-rotate-check" />
                    </div>

                    {/* Sliding Text Content */}
                    <div className="space-y-4">
                      <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tighter opacity-0 animate-smooth-slide-up delay-200">
                        Transmission Received.
                      </h2>
                      <p className="text-sm md:text-lg text-gray-400 leading-relaxed max-w-sm mx-auto opacity-0 animate-smooth-slide-up delay-300">
                        Thank you, <span className="text-white font-bold">{formData.name}</span>. Our hub has cataloged your request. Expect a strategic response within 24 hours.
                      </p>
                    </div>

                    <button 
                      onClick={() => setSubmitted(false)}
                      className="mt-12 text-cyan-400 font-black hover:text-white transition-all opacity-0 animate-smooth-slide-up delay-500 flex items-center group"
                    >
                      <MessageCircle className="w-4 h-4 mr-2 group-hover:scale-125 transition-transform" />
                      Initiate New Sync
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Locations Section */}
      <section className="py-20 md:py-24 bg-white text-black px-6 md:rounded-t-[4rem]">
        <div className="container mx-auto">
           <h3 className="text-2xl md:text-3xl font-bold mb-8 tracking-tighter text-center">Global Synergy Hubs</h3>
           
           {/* Visual Map Interface */}
           <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] mb-16 bg-gray-50 rounded-[2rem] md:rounded-[4rem] overflow-hidden border border-black/5">
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/world-map.png')] bg-center bg-no-repeat bg-contain"></div>
             
             {/* Pulsing Pins */}
             {locations.map((loc) => (
               <div 
                 key={loc.id}
                 style={{ top: loc.top, left: loc.left }}
                 className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-30 group animate-soft-float`}
                 onMouseEnter={() => setHoveredLocation(loc.id)}
                 onMouseLeave={() => setHoveredLocation(null)}
               >
                 <div className="relative w-8 h-8 md:w-12 md:h-12 flex items-center justify-center">
                    {/* Pulsing Outer Rings */}
                    <div className={`absolute inset-0 rounded-full pulse-pin-ring ${loc.color === 'cyan' ? 'bg-cyan-400' : loc.color === 'purple' ? 'bg-purple-500' : 'bg-yellow-400'} opacity-30`}></div>
                    <div className={`absolute inset-0 rounded-full pulse-pin-ring delay-500 ${loc.color === 'cyan' ? 'bg-cyan-400' : loc.color === 'purple' ? 'bg-purple-500' : 'bg-yellow-400'} opacity-20`}></div>
                    
                    {/* Inner Dot */}
                    <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full pulse-pin-dot transition-all duration-300 shadow-xl z-10 ${
                      loc.color === 'cyan' ? 'bg-cyan-400' : loc.color === 'purple' ? 'bg-purple-500' : 'bg-yellow-400'
                    } ${hoveredLocation === loc.id ? 'scale-150 shadow-cyan-400/50' : 'scale-100'}`}></div>
                    
                    {/* Label Tooltip */}
                    <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-3 py-1 bg-black text-white text-[10px] md:text-xs font-bold rounded-lg transition-all duration-300 shadow-2xl ${
                      hoveredLocation === loc.id ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-90'
                    }`}>
                      {loc.city}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45 -mt-1"></div>
                    </div>
                 </div>
               </div>
             ))}
           </div>

           {/* Location Cards Grid */}
           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
             {locations.map((loc) => (
               <div 
                 key={loc.id} 
                 onMouseEnter={() => setHoveredLocation(loc.id)}
                 onMouseLeave={() => setHoveredLocation(null)}
                 className={`p-8 border rounded-2xl md:rounded-3xl transition-all duration-500 group cursor-default relative overflow-hidden ${
                   hoveredLocation === loc.id 
                    ? 'bg-[#050505] text-white border-transparent shadow-2xl scale-[1.03] z-10' 
                    : 'bg-transparent border-black/5 text-black'
                 }`}
               >
                 {/* Visual Accent */}
                 <div className={`absolute top-0 right-0 p-4 transition-opacity duration-500 ${hoveredLocation === loc.id ? 'opacity-100' : 'opacity-0'}`}>
                   <Navigation className="w-5 h-5 text-cyan-400 animate-pulse" />
                 </div>

                 <div className={`text-[10px] font-bold uppercase tracking-widest opacity-50 mb-2 transition-colors ${
                   hoveredLocation === loc.id ? 'text-cyan-400' : ''
                 }`}>
                   {loc.zone}
                 </div>
                 <h4 className="text-xl md:text-2xl font-bold mb-2 tracking-tight">{loc.city}</h4>
                 <p className={`text-sm transition-opacity duration-500 ${
                   hoveredLocation === loc.id ? 'opacity-70' : 'opacity-50'
                 }`}>
                   {loc.region}
                 </p>
                 
                 {/* Card Indicator */}
                 <div className={`h-1 w-0 absolute bottom-0 left-0 bg-cyan-400 transition-all duration-700 ${
                   hoveredLocation === loc.id ? 'w-full' : ''
                 }`}></div>
               </div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
