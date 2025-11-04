import { motion } from 'framer-motion';
import { CheckCircle2, Users, Sparkles, Briefcase, Globe, Cpu } from 'lucide-react';

const highlights = [
  { title: 'AI + Analytics-Integrated Curriculum — learn through real projects, simulations, and AI-enabled tools', icon: Cpu },
  { title: 'Global Certifications — Google Analytics, Power BI, Python, HR Analytics, Machine Learning, etc.', icon: Globe },
  { title: 'Industry Immersion — live projects, conclaves, innovation bootcamps', icon: Briefcase },
  { title: 'Three-Way Mentorship — from faculty, alumni & industry professionals', icon: Users },
  { title: 'Holistic Development — focus on ethics, empathy & leadership agility', icon: Sparkles },
  { title: 'Cross-Functional Learning — finance, marketing, HR & analytics exposure', icon: CheckCircle2 },
];

export default function WhyPGDM() {
  return (
    <section id="why" className="relative w-full bg-white py-20 text-neutral-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-rose-200/60 blur-3xl" />
        <div className="absolute right-0 top-10 h-40 w-40 rounded-full bg-red-200/60 blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold md:text-4xl text-red-700"
        >
          Why Choose ACCMAN PGDM
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mx-auto mt-3 max-w-3xl text-center text-neutral-700"
        >
          A future-focused program designed to build AI-ready, innovation-driven, and ethically grounded leaders.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map(({ title, icon: Icon }, idx) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-gradient-to-b from-white to-rose-50 p-5 shadow-sm hover:shadow-md"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-red-200/60 blur-2xl transition-all duration-300 group-hover:scale-110" />
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 place-content-center rounded-xl bg-red-50 text-red-600 ring-1 ring-red-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-medium leading-snug md:text-lg">{title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
