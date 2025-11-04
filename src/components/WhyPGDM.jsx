import React from 'react';
import { Check, Briefcase, GraduationCap, Users } from 'lucide-react';

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
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">Why Study PGDM at ACCMAN?</h2>
          <p className="mt-3 text-gray-600">We combine academic rigor with practical industry application.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {benefits.map(({ what, how, icon: Icon }) => (
            <div
              key={what}
              className="group flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{what}</p>
                <p className="mt-1 text-sm text-gray-600">{how}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
