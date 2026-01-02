import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-neutral-900 py-8 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <span className="text-sm font-medium text-white">Nova.</span>
        <span className="text-xs text-neutral-600">© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};