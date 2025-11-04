import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, Check } from 'lucide-react';

const pedagogy = [
  'Case-based learning + Harvard/Global case libraries',
  'Live company projects & Industry simulation labs',
  'Capstone Projects at final semester',
  'Internship & corporate immersion',
];

const eligibility = [
  'Bachelor’s Degree (any discipline)',
  'Scores from CAT / MAT / XAT / CMAT / ATMA / University Test Accepted',
];

export default function LearningAndEligibility() {
  return (
    <section className="relative">
      <div className="absolute inset-x-0 -top-10 h-20 bg-gradient-to-b from-gray-50 to-transparent" aria-hidden />
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                <BookOpen className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Program Pedagogy (How You Learn)</h3>
            </div>
            <ul className="mt-4 space-y-3 text-gray-700">
              {pedagogy.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Eligibility</h3>
            </div>
            <ul className="mt-4 space-y-3 text-gray-700">
              {eligibility.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <img
              src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop"
              alt="Campus life"
              className="mt-6 h-36 w-full rounded-xl object-cover md:h-40"
            />
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-emerald-300/20 blur-xl" aria-hidden />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
