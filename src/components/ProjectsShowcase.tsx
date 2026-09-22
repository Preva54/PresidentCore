import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  X,
  Briefcase
} from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectsShowcaseProps {
  projects: ProjectItem[];
  onRequestQuote: () => void;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({
  projects,
  onRequestQuote
}) => {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = [
    'All',
    'IT Infrastructure & Security',
    'Industrial & Maintenance',
    'IT Infrastructure',
    'Construction & Equipment Supply'
  ];

  const filteredProjects = filterCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === filterCategory);

  return (
    <section id="projects" className="py-24 lg:py-32 bg-[#070F1E] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRACK RECORD & CAPABILITY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
            PROJECTS & SOLUTIONS
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal">
            Real enterprise and industrial delivery across South Africa.
          </p>

          <div className="w-16 h-1 bg-amber-400 mx-auto my-5 rounded-full" />
        </div>

        {/* Project Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="group rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/80 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-2xl"
            >
              {/* Image Banner */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                
                {/* Category & Location Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-lg bg-blue-600/90 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                    {project.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-950/80 text-amber-300 text-xs font-semibold backdrop-blur-md flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{project.year}</span>
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-1.5 text-xs text-blue-300 font-medium mb-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight uppercase group-hover:text-amber-300 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Summary Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {project.summary}
                </p>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div className="text-xs text-slate-400">
                    Client Sector: <strong className="text-slate-200">{project.clientSector}</strong>
                  </div>

                  <button
                    id={`btn-view-project-${project.id}`}
                    onClick={() => setActiveProject(project)}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-700 max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
            
            {/* Modal Header Image */}
            <div className="relative h-60 sm:h-72 shrink-0">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
              
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/80 text-white hover:text-amber-400 border border-slate-700"
                aria-label="Close Project Modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  {activeProject.category} • {activeProject.year}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white uppercase mt-1">
                  {activeProject.title}
                </h3>
              </div>
            </div>

            {/* Modal Content Scroll Area */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-300">
              <div className="flex flex-wrap gap-4 text-xs p-3 rounded-xl bg-slate-950 border border-slate-800">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span><strong>Location:</strong> {activeProject.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-blue-400" />
                  <span><strong>Sector:</strong> {activeProject.clientSector}</span>
                </div>
              </div>

              <div>
                <h4 className="text-base font-bold text-white uppercase tracking-tight mb-2">
                  Project Overview & Scope
                </h4>
                <p className="leading-relaxed">
                  {activeProject.fullDescription}
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-white uppercase tracking-tight mb-3">
                  Key Scope Deliverables
                </h4>
                <ul className="space-y-2">
                  {activeProject.deliverables.map((deliv, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
                <button
                  onClick={() => setActiveProject(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-300 font-semibold text-xs uppercase"
                >
                  Close
                </button>

                <button
                  onClick={() => {
                    setActiveProject(null);
                    onRequestQuote();
                  }}
                  className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
                >
                  Request Similar Project Proposal
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
