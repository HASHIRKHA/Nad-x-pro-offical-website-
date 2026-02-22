import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { portfolioProjects } from '../data/projects';

const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const project = portfolioProjects.find((p) => String(p.id) === id);

  if (!project) {
    return (
      <div className="pt-32 pb-24 min-h-screen px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">Project not found</h1>
          <Link to="/" className="inline-flex items-center px-8 py-4 rounded-full bg-cyan-400 text-black font-bold">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen">
      <section className="px-6 py-12 md:py-20">
        <div className="container mx-auto">
          <Link to="/" className="inline-flex items-center text-gray-400 hover:text-cyan-400 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to portfolio
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
            <div className="group rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-white/10">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            </div>

            <div>
              <div className="inline-flex px-4 py-2 rounded-full glass border border-white/10 mb-6 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-cyan-400">
                {project.category}
              </div>
              <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-[1.05] mb-6">{project.title}</h1>
              <p className="text-lg text-gray-400 leading-relaxed mb-10">{project.desc}</p>

              <div className="space-y-6">
                <div className="glass rounded-3xl border border-white/10 p-8">
                  <h3 className="text-sm uppercase tracking-[0.3em] text-white/40 font-black mb-3">Challenge</h3>
                  <p className="text-gray-300 leading-relaxed">{project.challenge}</p>
                </div>

                <div className="glass rounded-3xl border border-cyan-400/30 p-8">
                  <h3 className="text-sm uppercase tracking-[0.3em] text-cyan-400 font-black mb-3">Outcome</h3>
                  <p className="text-white leading-relaxed">{project.outcome}</p>
                </div>
              </div>

              <Link to="/contact" className="mt-10 inline-flex items-center px-8 py-4 bg-cyan-400 text-black font-black rounded-full hover:bg-white transition-all">
                Start Similar Project <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
