import React, { useState } from 'react';
import { Section } from './ui/Section';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email) return;

    setIsSubmitting(true);
    
    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSent(true);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <Section id="contact" className="border-t border-neutral-900 pb-32">
       <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-medium text-white mb-6">Start a project</h2>
            <p className="text-neutral-500 mb-10 max-w-md">
              We are currently accepting new assignments for 2025. Tell us about your goals, and we'll help you build the roadmap.
            </p>
            
            <div className="text-sm text-neutral-600 space-y-2">
              <p>hello@novadigital.agency</p>
              <p>+1 (555) 000-1234</p>
              <p>101 Innovation Dr, Tech City, CA</p>
            </div>
          </div>

          <div>
            {isSent ? (
              <div className="bg-neutral-900 border border-neutral-800 p-8 text-center animate-in fade-in slide-in-from-bottom-4">
                <div className="w-12 h-12 bg-green-900/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium text-white mb-2">Message Received</h3>
                <p className="text-neutral-400 text-sm mb-6">
                  Thank you for reaching out. We'll review your inquiry and get back to you within 24 hours.
                </p>
                <button 
                  onClick={() => setIsSent(false)}
                  className="text-white text-sm border-b border-white pb-0.5 hover:text-neutral-400 hover:border-neutral-400 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium text-neutral-500 mb-2 uppercase tracking-wide">Name</label>
                    <input 
                      type="text" 
                      required
                      value={formState.name}
                      onChange={e => setFormState({...formState, name: e.target.value})}
                      className="w-full bg-transparent border border-neutral-800 p-3 text-white placeholder-neutral-700 focus:border-white transition-colors rounded-none"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-500 mb-2 uppercase tracking-wide">Email</label>
                    <input 
                      type="email" 
                      required
                      value={formState.email}
                      onChange={e => setFormState({...formState, email: e.target.value})}
                      className="w-full bg-transparent border border-neutral-800 p-3 text-white placeholder-neutral-700 focus:border-white transition-colors rounded-none"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-medium text-neutral-500 mb-2 uppercase tracking-wide">Message</label>
                  <textarea 
                    required
                    value={formState.message}
                    onChange={e => setFormState({...formState, message: e.target.value})}
                    className="w-full bg-transparent border border-neutral-800 p-3 text-white placeholder-neutral-700 focus:border-white transition-colors rounded-none h-32 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-colors flex items-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Message <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
       </div>
    </Section>
  );
};