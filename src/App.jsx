import React from 'react';
import ProgramHero from './components/ProgramHero';
import WhyPGDM from './components/WhyPGDM';
import Specializations from './components/Specializations';
import LearningAndEligibility from './components/LearningAndEligibility';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-indigo-600" />
            <span className="text-sm font-semibold">ACCMAN PGDM</span>
          </div>
          <nav className="hidden gap-6 text-sm text-gray-600 md:flex">
            <a href="#why" className="hover:text-gray-900">Why PGDM</a>
            <a href="#spec" className="hover:text-gray-900">Specializations</a>
            <a href="#learn" className="hover:text-gray-900">Learning</a>
          </nav>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </header>

      <ProgramHero />
      <div id="why"><WhyPGDM /></div>
      <div id="spec"><Specializations /></div>
      <div id="learn"><LearningAndEligibility /></div>

      <footer className="border-t border-gray-100 bg-white/80">
        <div className="mx-auto max-w-6xl px-6 py-10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} ACCMAN Business School • PGDM Program
        </div>
      </footer>
    </div>
  );
}

export default App;
