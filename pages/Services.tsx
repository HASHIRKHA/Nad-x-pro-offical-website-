import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Bot, Code, Zap, Palette, Database, ArrowRight, CheckCircle2, 
  Sparkles, Workflow
} from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const ServiceCard = ({ cat, index }: { cat: any, index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  // Spotlight follow effect
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
    setMousePos({ x: mouseX, y: mouseY });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: 20 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1, delay: index * 0.1, type: "spring", stiffness: 80 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
      className="group relative h-[500px] flex flex-col p-px rounded-[3rem] overflow-visible cursor-none"
    >
      {/* Outer Glow / Border Gradient */}
      <div className={`absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/10 to-transparent opacity-50 group-hover:opacity-100 group-hover:from-cyan-400/40 group-hover:to-purple-500/40 transition-all duration-700 -z-10`} />

      {/* Main Card Body */}
      <div className="relative flex-grow flex flex-col bg-[#0a0a0a]/90 backdrop-blur-3xl rounded-[2.9rem] p-8 md:p-10 border border-white/5 overflow-hidden shadow-2xl">
        
        {/* Spotlight Effect Layer */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle 300px at ${mousePos.x}px ${mousePos.y}px, rgba(34, 211, 238, 0.15), transparent)`
          }}
        />

        {/* Parallax Icon Layer */}
        <div 
          style={{ transform: "translateZ(80px)" }}
          className="relative mb-8 w-fit"
        >
          <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] transition-all duration-700`}>
            {React.cloneElement(cat.icon as React.ReactElement<any>, { className: "w-8 h-8 md:w-10 md:h-10 text-black group-hover:scale-110 transition-transform duration-500" })}
          </div>
          {/* Floating Orbit Rings */}
          <div className="absolute inset-0 rounded-2xl border border-white/10 scale-125 animate-pulse" />
        </div>

        {/* Content Layers with Z-Depth */}
        <div style={{ transform: "translateZ(40px)" }} className="flex-grow">
          <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tighter text-white group-hover:text-cyan-400 transition-colors duration-500">
            {cat.title}
          </h3>
          
          <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-8 max-w-[90%] group-hover:text-gray-200 transition-colors">
            {cat.desc}
          </p>

          <div className="space-y-3" style={{ transform: "translateZ(20px)" }}>
            {cat.features.map((feat: string, j: number) => (
              <motion.div 
                key={j} 
                initial={false}
                whileHover={{ x: 5 }}
                className="flex items-center text-xs md:text-sm font-bold text-gray-500 group-hover:text-cyan-400/80 transition-colors"
              >
                <div className="w-5 h-5 rounded-full bg-cyan-400/10 flex items-center justify-center mr-3 shrink-0">
                  <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                </div>
                {feat}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Action Layer */}
        <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between" style={{ transform: "translateZ(60px)" }}>
          <Link 
            to="/contact" 
            className="flex items-center space-x-3 text-white font-black group/btn overflow-hidden"
          >
            <span className="relative text-sm md:text-lg uppercase tracking-tighter">
              Initiate Sync
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-500" />
            </span>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:bg-cyan-400 group-hover/btn:border-cyan-400 transition-all duration-500">
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:text-black transition-all" />
            </div>
          </Link>
          
          {/* Subtle Counter */}
          <span className="text-white/5 font-black text-4xl group-hover:text-cyan-400/10 transition-colors">
            0{index + 1}
          </span>
        </div>

        {/* Corner Decor */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-400/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const serviceCategories = [
    {
      icon: <Workflow />,
      title: "GoHighLevel (GHL)",
      desc: "Comprehensive CRM and marketing automation. We architect your entire sales engine inside GHL for maximum conversion and retention.",
      features: ["Advanced CRM Setup", "Sales Pipeline Mastery", "Automated Funnels", "Snapshot Customization"],
      color: "from-blue-400 to-indigo-600"
    },
    {
      icon: <Bot />,
      title: "AI & Automation",
      desc: "Intelligent automation solutions and custom LLM integrations that streamline operations and allow your team to focus on growth.",
      features: ["Custom LLM Apps", "Workflow Automation", "Predictive Analytics", "AI Voice Agents"],
      color: "from-cyan-400 to-blue-600"
    },
    {
      icon: <Code />,
      title: "Software Dev",
      desc: "High-performance full-stack development. We build scalable digital products designed for speed, security, and global reach.",
      features: ["SaaS Architecture", "Mobile Ecosystems", "Headless Commerce", "API Integration"],
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <Zap />,
      title: "Digital Growth",
      desc: "360° performance marketing. Data-backed strategies to dominate search results and capture international market share.",
      features: ["SEO Supremacy", "Paid Acquisition", "Brand Authority", "Growth Hacking"],
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Palette />,
      title: "Creative Design",
      desc: "Visionary visual identities and UI/UX systems. We craft digital experiences that are as beautiful as they are functional.",
      features: ["Spatial UI/UX", "Brand Evolution", "Motion Systems", "3D Visuals"],
      color: "from-green-400 to-emerald-600"
    },
    {
      icon: <Database />,
      title: "Data Intelligence",
      desc: "Transforming raw data into predictive business insights. We build the dashboards that guide your most critical decisions.",
      features: ["Big Data Infra", "BI Visualizations", "Market Intelligence", "EtL Pipelines"],
      color: "from-red-400 to-rose-600"
    }
  ];

  return (
    <div className="pt-24 overflow-hidden">
      {/* Header */}
      <section className="py-20 md:py-32 relative px-6 perspective-2000">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 right-0 w-1/2 h-full bg-cyan-400/5 blur-[150px] rounded-full" 
        />
        <div className="container mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-3 px-6 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-400 text-[10px] md:text-sm font-black uppercase tracking-[0.4em] mb-10 shadow-2xl"
          >
            <Sparkles className="w-4 h-4" />
            <span>The 360° Arsenal</span>
          </motion.div>
          <h1 className="text-4xl sm:text-6xl md:text-[10rem] font-black tracking-tighter mb-8 md:mb-12 leading-[0.8] animate-fade-in-up">
            Our <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">Solutions.</span>
          </h1>
          <p className="text-base md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-100 opacity-0 px-4 font-medium italic">
            "We don't just provide services; we build the infrastructure for your digital empire."
          </p>
        </div>
      </section>

      {/* Category Grid */}
      <section className="pb-32 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
            {serviceCategories.map((cat, i) => (
              <ServiceCard key={i} cat={cat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Integration Banner */}
      <section className="py-32 md:py-48 bg-white text-black md:rounded-[5rem] px-6 relative z-20 shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-[10px] md:text-xs font-black text-black/30 uppercase tracking-[0.5em] mb-8">Unified Synergy</h2>
              <h3 className="text-4xl md:text-8xl font-black tracking-tighter mb-8 md:mb-12 leading-[0.9]">Why Integration <br/>Wins.</h3>
              <p className="text-lg md:text-2xl font-medium text-black/60 mb-12 leading-relaxed">
                Individual services are pieces of a puzzle. We provide the complete picture. 
                By integrating <span className="text-black font-black">GoHighLevel</span> CRM with <span className="text-black font-black">Custom AI</span> and <span className="text-black font-black">Design</span>, we eliminate the gaps where most businesses lose revenue.
              </p>
              <div className="flex flex-wrap gap-4">
                {["Zero Data Gaps", "Automated Retention", "Unified Branding", "Real-time ROI"].map((tag, i) => (
                  <div key={i} className="px-6 py-2 bg-black text-white rounded-full font-black text-[10px] md:text-xs uppercase tracking-widest hover:scale-105 transition-transform">
                    {tag}
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square glass border-black/5 bg-gray-50 rounded-[4rem] overflow-hidden group shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" 
                alt="Synergy" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent flex flex-col justify-end p-12">
                <div className="text-white text-3xl md:text-5xl font-black tracking-tighter mb-4">The Result?</div>
                <div className="text-cyan-400 text-6xl md:text-8xl font-black tracking-tighter">10X Scale.</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Box */}
      <section className="py-40 md:py-64 px-6 bg-black">
        <div className="container mx-auto text-center">
           <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="glass p-12 md:p-24 rounded-[3rem] md:rounded-[6rem] border border-white/5 relative overflow-hidden group"
           >
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.05)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
             
             <div className="relative z-10">
               <h2 className="text-3xl md:text-7xl font-black mb-8 md:mb-12 tracking-tighter leading-tight">Ready to deploy <br/>the ecosystem?</h2>
               <p className="text-base md:text-2xl text-gray-400 mb-16 max-w-2xl mx-auto font-medium">
                 Get a 360° strategic audit of your current digital infrastructure. No fluff, just the roadmap to dominance.
               </p>
               <Link 
                to="/contact" 
                className="group/btn relative inline-flex items-center justify-center px-12 md:px-20 py-6 md:py-8 overflow-hidden font-black text-black transition-all bg-white rounded-[2rem] md:rounded-[3rem] hover:scale-110 active:scale-95 shadow-2xl"
               >
                 <span className="relative z-10 flex items-center text-lg md:text-3xl tracking-tighter uppercase group-hover/btn:text-cyan-600 transition-colors">
                   Request Audit <ArrowRight className="ml-4 w-6 h-6 md:w-10 md:h-10 group-hover/btn:translate-x-3 transition-transform" />
                 </span>
               </Link>
             </div>
           </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;