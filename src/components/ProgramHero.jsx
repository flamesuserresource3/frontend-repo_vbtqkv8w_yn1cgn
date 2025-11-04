import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export default function ProgramHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" aria-hidden />
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" aria-hidden />
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-purple-200/40 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.4 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-600/10 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-600/20">
              <Rocket className="h-4 w-4" /> AICTE-Approved • 2-Year Flagship
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              Post Graduate Diploma in Management (PGDM)
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-gray-700">
              The PGDM at ACCMAN is a flagship program designed to develop future-ready, innovation-driven and
              ethically grounded leaders. Blending fundamentals with industry-led specialization and experiential
              learning, students build strong domain expertise alongside digital, analytical and leadership capabilities.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200">Industry-Integrated</span>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200">AI & Analytics</span>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200">Global Certifications</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
            viewport={{ once: true, amount: 0.4 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.img
                whileHover={{ y: -6 }}
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop"
                alt="Students collaborating"
                className="h-44 w-full rounded-2xl object-cover shadow-md md:h-56"
              />
              <motion.img
                whileHover={{ y: -6 }}
                src="https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?q=80&w=1600&auto=format&fit=crop"
                alt="Analytics and dashboards"
                className="h-44 w-full rounded-2xl object-cover shadow-md md:h-56"
              />
              <motion.img
                whileHover={{ y: -6 }}
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
                alt="Mentorship session"
                className="h-44 w-full rounded-2xl object-cover shadow-md md:h-56"
              />
              <motion.img
                whileHover={{ y: -6 }}
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop"
                alt="Corporate networking"
                className="h-44 w-full rounded-2xl object-cover shadow-md md:h-56"
              />
            </div>
            <div className="pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 rounded-2xl bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
