import React, { useState } from 'react';
import { Section } from './ui/Section';
import { X, ArrowUpRight } from 'lucide-react';
import { PortfolioItem } from '../types';

const projects: PortfolioItem[] = [
  { 
    id: 1, 
    title: 'FinTech Dashboard', 
    category: 'App Development', 
    imageUrl: 'https://picsum.photos/id/1/800/600',
    year: '2024',
    technologies: ['React', 'D3.js', 'Node.js'],
    description: 'A comprehensive financial visualization platform enabling real-time trading analysis and portfolio management for institutional investors.'
  },
  { 
    id: 2, 
    title: 'EcoTravel App', 
    category: 'UI/UX Design', 
    imageUrl: 'https://picsum.photos/id/10/800/600',
    year: '2023',
    technologies: ['Figma', 'React Native', 'Mapbox'],
    description: 'Sustainable travel planning application designed to minimize carbon footprints while maximizing adventure.'
  },
  { 
    id: 3, 
    title: 'Neon Identity', 
    category: 'Branding', 
    imageUrl: 'https://picsum.photos/id/20/800/600',
    year: '2024',
    technologies: ['Illustrator', 'Motion Graphics', 'WebGL'],
    description: 'Complete brand overhaul for a high-energy nightlife conglomerate, featuring dynamic typography and reactive visual systems.'
  },
  { 
    id: 4, 
    title: 'AI Platform', 
    category: 'Engineering', 
    imageUrl: 'https://picsum.photos/id/48/800/600',
    year: '2025',
    technologies: ['Gemini API', 'Python', 'Next.js'],
    description: 'Enterprise-grade LLM orchestration platform helping businesses automate complex data workflows with high accuracy.'
  },
];

export const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  return (
    <Section id="portfolio" className="border-t border-neutral-900">
      <div className="mb-16">
        <h2 className="text-2xl font-medium text-white">Selected Work</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <div 
            key={p.id} 
            className="group cursor-pointer"
            onClick={() => setSelectedProject(p)}
          >
            <div className="aspect-[16/9] overflow-hidden bg-neutral-900 mb-4">
              <img 
                src={p.imageUrl} 
                alt={p.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="flex justify-between items-baseline">
              <h3 className="text-lg font-medium text-white group-hover:text-neutral-300 transition-colors">{p.title}</h3>
              <span className="text-xs text-neutral-500 uppercase tracking-wider">{p.category}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div 
            className="absolute inset-0 bg-neutral-950/90 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          ></div>
          
          <div className="relative bg-neutral-900 border border-neutral-800 w-full max-w-4xl max-h-full overflow-y-auto shadow-2xl animate-in fade-in zoom-in-95 duration-300">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 text-white hover:text-neutral-400 z-10 p-2 bg-neutral-900/50 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid md:grid-cols-2">
              <div className="aspect-video md:aspect-auto h-64 md:h-full">
                <img 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide mb-2 block">
                    {selectedProject.category} — {selectedProject.year}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-medium text-white mb-6">
                    {selectedProject.title}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed mb-8">
                    {selectedProject.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-xs font-medium text-white uppercase tracking-wide mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies?.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-neutral-800 text-neutral-300 text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 text-white border-b border-white pb-1 hover:border-neutral-500 transition-colors"
                  >
                    View Case Study <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};