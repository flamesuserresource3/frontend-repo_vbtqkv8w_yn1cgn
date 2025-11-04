import { useEffect } from 'react';
import ProgramHero from './components/ProgramHero';
import WhyPGDM from './components/WhyPGDM';
import Specializations from './components/Specializations';
import LearningAndEligibility from './components/LearningAndEligibility';

export default function App() {
  // Smooth scroll for in-page anchors
  useEffect(() => {
    const handler = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      const id = target.getAttribute('href');
      if (id && id !== '#') {
        const el = document.querySelector(id);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="text-base font-semibold">
            ACCMAN PGDM
          </a>
          <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
            <a href="#why" className="hover:text-white">Why PGDM</a>
            <a href="#spec" className="hover:text-white">Specializations</a>
            <a href="#learn" className="hover:text-white">Curriculum & Admissions</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main>
        <ProgramHero />
        <WhyPGDM />
        <Specializations />
        <LearningAndEligibility />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0b0b0b] py-10 text-white/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <p className="text-sm">© {new Date().getFullYear()} ACCMAN Institute of Management. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs">
            <a href="#home" className="hover:text-white">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
