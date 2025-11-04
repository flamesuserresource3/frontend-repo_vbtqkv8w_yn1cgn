import React from 'react';
import { motion } from 'framer-motion';
import { Check, Briefcase, GraduationCap, Users, Sparkles } from 'lucide-react';

const benefits = [
  { what: 'Industry-Integrated Curriculum', how: 'Learn exactly what corporates expect today', icon: GraduationCap },
  { what: 'Case Studies & Live Projects', how: 'Real problem-solving exposure before placement', icon: Briefcase },
  { what: 'Three-Way Mentorship Model', how: 'Guidance from Faculty + Alumni + Industry Leaders', icon: Users },
  { what: 'AI & Analytics-Enabled Learning', how: 'Gain skills for new-age, digital business environments', icon: Check },
  { what: 'Global Certifications', how: 'Boost your job readiness & professional profile', icon: Check },
  { what: 'Corporate Networking & Conclaves', how: 'Direct connect with hiring managers, leaders & domain experts', icon: Briefcase },
  { what: 'Career & Placement Support', how: 'Tailored job-prep, internships & role mapping', icon: Users },
];

export default function WhyPGDM() {
  return (
    <section className="relative border-t border-gray-100 bg-white">
      <div className="absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-indigo-50/70 to-transparent" aria-hidden />
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="mb-10 flex items-center justify-between gap-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">Why Study PGDM at ACCMAN?</h2>
            <p className="mt-3 text-gray-600">We combine academic rigor with practical industry application.</p>
          </div>
          <div className="hidden rounded-xl bg-indigo-50 px-3 py-2 text-sm text-indigo-700 ring-1 ring-indigo-100 md:block">
            <Sparkles className="mr-1 inline h-4 w-4" /> Outcome-focused learning
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {benefits.map(({ what, how, icon: Icon }, idx) => (
            <motion.div
              key={what}
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: idx * 0.05, ease: 'easeOut' }}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="absolute right-0 top-0 h-24 w-24 -translate-y-12 translate-x-10 rotate-12 rounded-full bg-indigo-500/5 blur-xl transition group-hover:opacity-100" aria-hidden />
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{what}</p>
                  <p className="mt-1 text-sm text-gray-600">{how}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
