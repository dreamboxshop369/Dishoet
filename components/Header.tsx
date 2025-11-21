import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
            D
          </div>
          <span className="font-bold text-xl text-slate-900 tracking-tight">Dispet<span className="text-indigo-600">.AI</span></span>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">How it works</a>
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Pricing</a>
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Support</a>
        </nav>
        <div className="flex items-center gap-3">
             <div className="text-xs text-slate-400 hidden sm:block">Powered by Gemini 2.5</div>
             <button className="bg-slate-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors">
                My Library
             </button>
        </div>
      </div>
    </header>
  );
};

export default Header;