import React from 'react';
import { Section } from './ui/Section';

export const Hero: React.FC = () => {
  return (
    <Section className="min-h-[80vh] flex flex-col justify-center pt-32">
      <div className="max-w-3xl">
        <span className="block text-neutral-500 text-sm font-medium tracking-wide mb-6 uppercase">
          Digital Product Studio
        </span>
        
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-tight text-white mb-8">
          We craft digital<br />
          systems for<br />
          <span className="text-neutral-500">clarity and scale.</span>
        </h1>
        
        <p className="text-xl text-neutral-400 max-w-lg leading-relaxed mb-10">
          Nova fuses design and engineering to build products that are essential, intuitive, and performant.
        </p>
        
        <div className="flex gap-6">
          <a 
            href="#strategy" 
            className="text-white border-b border-white pb-1 hover:border-neutral-500 transition-colors"
          >
            Generate Strategy
          </a>
          <a 
            href="#portfolio" 
            className="text-neutral-500 hover:text-white transition-colors"
          >
            View Work
          </a>
        </div>
      </div>
    </Section>
  );
};