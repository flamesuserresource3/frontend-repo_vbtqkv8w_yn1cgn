import React from 'react';
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
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
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
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
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
          </div>
        </div>
      </div>
    </section>
  );
}
