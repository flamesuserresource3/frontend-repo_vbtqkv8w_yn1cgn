import { motion } from 'framer-motion';
import { CheckCircle2, Users, Sparkles, Briefcase, Globe, Cpu } from 'lucide-react';

const highlights = [
  { title: 'AI-enabled, industry-integrated curriculum', icon: Cpu },
  { title: 'Global certifications & value-added courses', icon: Globe },
  { title: 'Case-based, experiential pedagogy', icon: Sparkles },
  { title: 'Corporate immersion & live consulting projects', icon: Briefcase },
  { title: 'Mentorship: faculty, alumni, and industry leaders', icon: Users },
  { title: 'Cross-functional analytics exposure', icon: CheckCircle2 },
  { title: 'Focus on ethics, empathy, and holistic leadership', icon: CheckCircle2 },
];

export default function WhyPGDM() {
  return (
    <section id="why" className="relative w-full bg-[#0b0b0b] py-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-red-600/20 blur-3xl" />
        <div className="absolute right-0 top-10 h-40 w-40 rounded-full bg-rose-500/20 blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold md:text-4xl"
        >
          Key Differentiators
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mx-auto mt-3 max-w-2xl text-center text-white/70"
        >
          A program built for the era of AI — rigorous, experiential, and globally connected.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map(({ title, icon: Icon }, idx) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[.06] to-white/[.03] p-5 shadow-xl backdrop-blur hover:shadow-rose-900/20"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-red-600/10 blur-2xl transition-all duration-300 group-hover:scale-110" />
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 place-content-center rounded-xl bg-red-600/20 text-red-400 ring-1 ring-red-600/30">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-medium leading-snug text-white md:text-lg">{title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
