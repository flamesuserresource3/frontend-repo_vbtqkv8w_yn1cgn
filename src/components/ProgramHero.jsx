import React from 'react';

export default function ProgramHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">AICTE-Approved • 2-Year Flagship</span>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Post Graduate Diploma in Management (PGDM)
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-gray-700">
            The PGDM at ACCMAN is a 2-year, AICTE-approved flagship program designed to develop future-ready,
            innovation-driven and ethically grounded leaders. The program blends management fundamentals,
            industry-led specialization, and experiential learning, enabling students to build strong domain
            expertise along with digital, analytical and leadership capabilities.
          </p>
        </div>
      </div>
    </section>
  );
}
