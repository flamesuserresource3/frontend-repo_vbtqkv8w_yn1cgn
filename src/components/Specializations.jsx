import { motion } from 'framer-motion';
import { Layers, BarChart3, TrendingUp, Brain, Users, Globe } from 'lucide-react';

const specs = [
  {
    title: 'Finance & Valuation',
    icon: BarChart3,
    img: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Banking & Finance',
    icon: Layers,
    img: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Talent Management & Behavioural Analytics',
    icon: Users,
    img: 'https://images.unsplash.com/photo-1557427705-28ef207d3fbc?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Marketing & Digital Intelligence',
    icon: TrendingUp,
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Business Analytics & AI',
    icon: Brain,
    img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Global Hospitality & Supply Chain Intelligence',
    icon: Globe,
    img: 'https://images.unsplash.com/photo-1485609315582-cfffa02888e8?q=80&w=1600&auto=format&fit=crop',
  },
];

function StackedCard({ title, icon: Icon, img, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm"
    >
      <div className="relative h-60 w-full overflow-hidden sm:h-64">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-red-200/60 blur-2xl" />
        </div>
        <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs text-neutral-800 backdrop-blur">
          <Icon className="h-4 w-4 text-red-600" /> {title}
        </div>
      </div>
      <div className="p-5">
        <p className="text-sm text-neutral-700">
          Dive deep into {title} with projects, tools, and mentorship tailored for high‑impact careers.
        </p>
      </div>
    </motion.article>
  );
}

export default function Specializations() {
  return (
    <section id="spec" className="relative w-full bg-white py-20 text-neutral-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-10 h-56 w-56 -translate-x-1/2 rounded-full bg-rose-200/60 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold md:text-4xl text-red-700"
        >
          Specializations Offered
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mx-auto mt-3 max-w-2xl text-center text-neutral-700"
        >
          Choose a track and stack your skills with real‑world tools and capstone projects.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {specs.map((s, i) => (
            <StackedCard key={s.title} index={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
