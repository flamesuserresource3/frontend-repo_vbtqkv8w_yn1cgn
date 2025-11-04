import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Download, Rocket, GraduationCap } from 'lucide-react';

export default function ProgramHero() {
  return (
    <section id="home" className="relative min-h-[80vh] md:min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-red-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-rose-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-24 lg:gap-16">
        {/* Copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-red-500" />
            AICTE-approved • 2-year Full-time PGDM
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl"
          >
            Create AI‑ready, ethically grounded leaders
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 max-w-xl text-base text-white/70 md:text-lg"
          >
            ACCMAN’s PGDM blends academic rigor with real‑world application through case studies, simulations, live projects, and global exposure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#apply"
              className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-red-600/30 transition hover:bg-red-500"
            >
              <Rocket className="h-4 w-4" /> Apply Now
            </a>
            <a
              href="#brochure"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
            >
              <Download className="h-4 w-4" /> Download Brochure
            </a>
          </motion.div>

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            className="mt-6 grid max-w-xl grid-cols-1 gap-3 text-sm text-white/70 sm:grid-cols-2"
          >
            {[
              'AI-enabled, industry-integrated curriculum',
              'Global certifications & value-added courses',
              'Case-based, experiential pedagogy',
              'Corporate immersion & live consulting projects',
            ].map((item) => (
              <motion.li
                key={item}
                variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
                className="flex items-start gap-2"
              >
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* 3D Spline Scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[380px] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur md:h-[520px]"
        >
          <Spline
            scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* Accent gradient overlays (non-interactive) */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-red-500/20 blur-3xl" />
            <div className="absolute bottom-6 right-6 h-24 w-24 rounded-full bg-rose-400/20 blur-2xl" />
          </div>

          {/* Floating badges */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/80 backdrop-blur"
          >
            <GraduationCap className="h-3.5 w-3.5 text-rose-300" /> 120 Credits
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
