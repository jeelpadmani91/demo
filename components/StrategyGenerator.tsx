import React, { useState } from 'react';
import { Section } from './ui/Section';
import { generateBrandStrategy } from '../services/gemini';
import { StrategyResponse, LoadingState } from '../types';
import { Loader2, ArrowRight } from 'lucide-react';

export const StrategyGenerator: React.FC = () => {
  const [desc, setDesc] = useState('');
  const [industry, setIndustry] = useState('');
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const [result, setResult] = useState<StrategyResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!desc || !industry) return;

    setStatus(LoadingState.LOADING);
    try {
      const response = await generateBrandStrategy(desc, industry);
      setResult(response);
      setStatus(LoadingState.SUCCESS);
    } catch (error) {
      console.error(error);
      setStatus(LoadingState.ERROR);
    }
  };

  return (
    <Section id="strategy" className="border-t border-neutral-900 bg-neutral-900/30">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
           <h2 className="text-2xl font-medium text-white mb-4">AI Strategy Brief</h2>
           <p className="text-neutral-400 mb-8 max-w-md">
             Input your business concept to instantly generate a strategic roadmap powered by Gemini.
           </p>

           <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
            <div>
              <label className="block text-xs font-medium text-neutral-500 mb-2 uppercase tracking-wide">Business Description</label>
              <textarea 
                className="w-full bg-transparent border border-neutral-800 p-4 text-white placeholder-neutral-700 focus:border-white transition-colors rounded-none h-32 resize-none"
                placeholder="Describe your project..."
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                required
              />
            </div>
            <div>
               <label className="block text-xs font-medium text-neutral-500 mb-2 uppercase tracking-wide">Industry</label>
               <input 
                 type="text"
                 className="w-full bg-transparent border border-neutral-800 p-4 text-white placeholder-neutral-700 focus:border-white transition-colors rounded-none"
                 placeholder="e.g. Fintech, Retail"
                 value={industry}
                 onChange={(e) => setIndustry(e.target.value)}
                 required
               />
            </div>
            
            <button 
              type="submit"
              disabled={status === LoadingState.LOADING}
              className="px-6 py-3 bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-colors flex items-center gap-2 disabled:opacity-50"
            >
              {status === LoadingState.LOADING ? (
                <>Generating...</>
              ) : (
                <>Generate <ArrowRight className="w-4 h-4" /></>
              )}
            </button>
          </form>
        </div>

        {/* Results */}
        <div className="border-l border-neutral-800 pl-0 lg:pl-16 pt-8 lg:pt-0">
           {status === LoadingState.LOADING && (
              <div className="flex items-center gap-2 text-neutral-500">
                <Loader2 className="w-4 h-4 animate-spin" /> Thinking...
              </div>
           )}
           
           {result && (
             <div className="space-y-8 animate-in fade-in duration-500">
                <div>
                   <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Tagline</span>
                   <h3 className="text-3xl text-white mt-2">"{result.tagline}"</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium text-white mb-2">Summary</h4>
                    <p className="text-neutral-400 text-sm leading-relaxed">{result.summary}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-8">
                     <div>
                        <h4 className="text-sm font-medium text-white mb-3">Stack</h4>
                        <ul className="space-y-1">
                           {result.suggestedStack.map((tech, i) => (
                             <li key={i} className="text-sm text-neutral-500">{tech}</li>
                           ))}
                        </ul>
                     </div>
                     <div>
                        <h4 className="text-sm font-medium text-white mb-3">Angles</h4>
                        <ul className="space-y-1">
                           {result.marketingAngles.map((angle, i) => (
                             <li key={i} className="text-sm text-neutral-500">{angle}</li>
                           ))}
                        </ul>
                     </div>
                  </div>
                </div>
             </div>
           )}
        </div>
      </div>
    </Section>
  );
};