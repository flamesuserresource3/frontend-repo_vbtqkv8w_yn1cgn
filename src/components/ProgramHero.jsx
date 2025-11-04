import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Download, Rocket, GraduationCap } from 'lucide-react';

export default function ProgramHero() {
  return (
    <section id="home" className="relative min-h-[80vh] md:min-h-[90vh] w-full overflow-hidden bg-white text-neutral-900">
      {/* Background subtle glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-rose-200/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-red-200/40 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24 lg:gap-16">
        {/* Copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs text-red-700"
          >
            <span className="h-2 w-2 rounded-full bg-red-500" />
            AICTE-approved • 2 Years • Full-time • Greater Noida
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl"
          >
            Post Graduate Diploma in Management (PGDM)
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 max-w-xl text-base text-neutral-700 md:text-lg"
          >
            A future-focused management program that blends business fundamentals, technology, and real-world application. Designed to create AI-ready, innovation-driven, and ethically grounded leaders, ACCMAN’s PGDM transforms learners into agile professionals who can lead with data, creativity, and purpose.
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
              className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-red-600/20 transition hover:bg-red-500"
            >
              <Rocket className="h-4 w-4" /> Apply Now
            </a>
            <a
              href="#brochure"
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition hover:border-red-300 hover:text-red-700"
            >
              <Download className="h-4 w-4" /> Download Brochure
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6"
          >
            <h3 className="text-sm font-semibold text-neutral-900">Specializations</h3>
            <p className="mt-2 text-sm text-neutral-700">
              Finance & Valuation • Banking & Finance • Talent Management & Behavioural Analytics • Marketing & Digital Intelligence • Business Analytics & AI • Global Hospitality & Supply Chain Intelligence
            </p>
          </motion.div>
        </div>

        {/* 3D Spline Scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[380px] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl md:h-[520px]"
        >
          <Spline
            scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* Accent gradient overlays (non-interactive) */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-red-400/20 blur-3xl" />
            <div className="absolute bottom-6 right-6 h-24 w-24 rounded-full bg-rose-300/30 blur-2xl" />
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-3 py-1 text-xs text-neutral-800 backdrop-blur"
          >
            <GraduationCap className="h-3.5 w-3.5 text-red-600" /> 120 Credits
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
