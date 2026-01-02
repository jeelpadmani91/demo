import React from 'react';
import { Section } from './ui/Section';

const servicesList = [
  { title: "Development", desc: "React, Next.js, and scalable architecture." },
  { title: "Interface Design", desc: "Clean, user-centric UI/UX systems." },
  { title: "AI Integration", desc: "LLM implementation and automation workflows." },
  { title: "Strategy", desc: "Digital transformation and product roadmaps." },
  { title: "Performance", desc: "Core Web Vitals and technical optimization." },
  { title: "Growth", desc: "Analytics and conversion rate optimization." }
];

export const Services: React.FC = () => {
  return (
    <Section id="services" className="border-t border-neutral-900">
      <div className="grid md:grid-cols-3 gap-x-12 gap-y-16">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-medium text-white mb-4">Expertise</h2>
          <p className="text-neutral-500 text-sm">Our core capabilities.</p>
        </div>
        
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-12">
          {servicesList.map((s, i) => (
            <div key={i} className="space-y-3">
              <h3 className="text-lg font-medium text-white">{s.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};