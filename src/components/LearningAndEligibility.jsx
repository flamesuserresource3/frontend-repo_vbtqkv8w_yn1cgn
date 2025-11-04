import { motion } from 'framer-motion';
import { BookOpen, BadgeCheck, Users2, Briefcase, GraduationCap, Phone, Mail, MapPin, Download, Linkedin, Instagram, Youtube, Facebook, Twitter } from 'lucide-react';

export default function LearningAndEligibility() {
  return (
    <section id="experience" className="relative w-full bg-white py-20 text-neutral-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/2 h-60 w-60 -translate-y-1/2 rounded-full bg-red-200/60 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold md:text-4xl text-red-700"
        >
          Program Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mx-auto mt-3 max-w-3xl text-center text-neutral-700"
        >
          Learn by Doing. Lead by Insight. Classes go beyond theory — engage in case studies, live consulting, simulations, and research projects that connect learning to corporate reality.
        </motion.p>

        {/* Key Highlights */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-gradient-to-b from-white to-rose-50 p-6"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-content-center rounded-xl bg-red-50 text-red-600 ring-1 ring-red-200">
                <BookOpen className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold">AI-powered pedagogy and data-driven decision-making</h3>
            </div>
            <ul className="mt-5 space-y-3 text-sm text-neutral-700">
              <li>Hands-on labs for analytics, marketing, and HR</li>
              <li>Leadership development through experiential modules</li>
              <li>Global exposure through industry tie-ups</li>
            </ul>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-gradient-to-b from-white to-rose-50 p-6"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-content-center rounded-xl bg-red-50 text-red-600 ring-1 ring-red-200">
                <BadgeCheck className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold">Admission Snapshot</h3>
            </div>
            <ul className="mt-5 space-y-3 text-sm text-neutral-700">
              <li>Eligibility: Bachelor’s degree (min 50%)</li>
              <li>Entrance Exams: CAT / XAT / CMAT / GMAT / MAT</li>
              <li>Selection: Application + Personal Interview</li>
              <li>Duration: 2 Years | Credits: 120</li>
            </ul>
            <div id="brochure" className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="/pgdm-brochure.pdf"
                className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-red-500"
                download
              >
                <Download className="h-4 w-4" /> Download Brochure
              </a>
              <a href="#apply" className="text-sm text-neutral-700 hover:text-red-700">Apply Now</a>
            </div>
          </motion.article>
        </div>

        {/* Faculty, Industry, Placement */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-content-center rounded-lg bg-red-50 text-red-600 ring-1 ring-red-200"><Users2 className="h-5 w-5" /></div>
              <h3 className="font-semibold">Faculty & Mentors</h3>
            </div>
            <p className="mt-3 text-sm text-neutral-700">
              Guided by Dr. Krity Gulati (Director) and a faculty network of industry experts, corporate mentors, and academic scholars. Every course blends theory with lived business experience.
            </p>
          </motion.article>
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-content-center rounded-lg bg-red-50 text-red-600 ring-1 ring-red-200"><Briefcase className="h-5 w-5" /></div>
              <h3 className="font-semibold">Corporate Connect & Immersive Learning</h3>
            </div>
            <p className="mt-3 text-sm text-neutral-700">
              Regular industry sessions, CHRO talks, finance summits, and live projects with top firms in consulting, BFSI, tech, and hospitality. Experience business through mentorship, internships, and real-world problem solving.
            </p>
          </motion.article>
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-content-center rounded-lg bg-red-50 text-red-600 ring-1 ring-red-200"><GraduationCap className="h-5 w-5" /></div>
              <h3 className="font-semibold">Placements & Career Pathways</h3>
            </div>
            <p className="mt-3 text-sm text-neutral-700">
              Our graduates work in consulting, analytics, finance, HR-tech, and global operations. Top Recruiters: Deloitte, PwC, EY, Accenture, IBM, Google, Amazon, Marriott, KPMG, Flipkart.
            </p>
            <p className="mt-2 text-xs text-neutral-600">
              Career Edge: 40% projected growth in analytics-led roles by 2027 (McKinsey). Programs mapped to emerging skill needs — digital, AI, sustainability.
            </p>
          </motion.article>
        </div>

        {/* Campus & Alumni */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6"
          >
            <h3 className="text-lg font-semibold">Campus & Student Life</h3>
            <p className="mt-3 text-sm text-neutral-700">
              Located in Greater Noida’s Knowledge Hub with innovation labs, analytics centers, and student-led clubs across Finance, Marketing, Analytics, Entrepreneurship, and Culture.
            </p>
            <blockquote className="mt-4 rounded-lg border border-neutral-200 bg-rose-50 p-4 text-sm text-neutral-800">
              “ACCMAN helped me translate learning into leadership.” – Alumni, Class of 2023
              <br />
              “The live projects and AI labs made me industry-ready from day one.” – PGDM Student
            </blockquote>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6"
          >
            <h3 className="text-lg font-semibold">Global Exposure</h3>
            <p className="mt-3 text-sm text-neutral-700">
              Access international insights through global case studies, cross-border finance simulations, and projects focused on AI, sustainability, and digital transformation.
            </p>
          </motion.article>
        </div>

        {/* Contact & Social */}
        <div id="apply" className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-gradient-to-b from-white to-rose-50 p-6"
          >
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <p className="mt-1 text-sm text-neutral-700">Admissions Office – ACCMAN Institute of Management</p>
            <div className="mt-4 space-y-3 text-sm text-neutral-700">
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-red-600" /> admissions@accman.in</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-red-600" /> +91-XXXX-XXXXXX</p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-red-600" /> Plot No. ___, Greater Noida, NCR</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-gradient-to-b from-white to-rose-50 p-6"
          >
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-neutral-800">
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 hover:text-red-700"><Linkedin className="h-4 w-4 text-red-600" /> LinkedIn</a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 hover:text-red-700"><Instagram className="h-4 w-4 text-red-600" /> Instagram</a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 hover:text-red-700"><Youtube className="h-4 w-4 text-red-600" /> YouTube</a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 hover:text-red-700"><Facebook className="h-4 w-4 text-red-600" /> Facebook</a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 hover:text-red-700"><Twitter className="h-4 w-4 text-red-600" /> X</a>
            </div>
          </motion.div>
        </div>

        {/* FAQs */}
        <div id="learn" className="mt-12">
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-2xl font-semibold text-red-700"
          >
            FAQs
          </motion.h3>
          <div className="mx-auto mt-6 max-w-3xl divide-y divide-neutral-200 overflow-hidden rounded-2xl border border-neutral-200">
            {[
              {
                q: 'Is the PGDM AICTE-approved?',
                a: 'Yes, approved by the AICTE, Ministry of Education, Government of India.'
              },
              {
                q: 'What makes ACCMAN different?',
                a: 'AI-enabled pedagogy, live industry projects, global certifications, and three-way mentorship.'
              },
              {
                q: 'Are global certifications included?',
                a: 'Yes, from Google, Microsoft, and recognized global partners.'
              },
              {
                q: 'Does the program offer placement support?',
                a: 'Yes, with personalized mentoring and corporate tie-ups across industries.'
              },
            ].map((item, i) => (
              <motion.details
                key={item.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.03 }}
                className="group bg-white p-4 open:bg-rose-50"
              >
                <summary className="cursor-pointer list-none text-sm font-medium text-neutral-900">
                  {item.q}
                </summary>
                <p className="mt-2 text-sm text-neutral-700">{item.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
