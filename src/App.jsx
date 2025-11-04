import React from 'react';
import ProgramHero from './components/ProgramHero';
import WhyPGDM from './components/WhyPGDM';
import Specializations from './components/Specializations';
import LearningAndEligibility from './components/LearningAndEligibility';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <ProgramHero />
      <WhyPGDM />
      <Specializations />
      <LearningAndEligibility />

      <footer className="border-t border-gray-100">
        <div className="mx-auto max-w-6xl px-6 py-10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} ACCMAN Business School • PGDM Program
        </div>
      </footer>
    </div>
  );
}

export default App;
