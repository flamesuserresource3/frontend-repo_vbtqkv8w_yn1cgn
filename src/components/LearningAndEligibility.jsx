import { motion } from 'framer-motion';
import { BookOpen, BadgeCheck, FileText, Users2, Briefcase, GraduationCap, Phone, Mail, MapPin, Download, Linkedin, Instagram, Youtube, Facebook, Twitter } from 'lucide-react';

export default function LearningAndEligibility() {
  return (
    <section id="learn" className="relative w-full bg-[#0b0b0b] py-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/2 h-60 w-60 -translate-y-1/2 rounded-full bg-red-600/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold md:text-4xl"
        >
          Pedagogy, Curriculum & Admissions
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Pedagogy */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[.06] to-white/[.03] p-6 backdrop-blur"
          >
            <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-rose-600/20 blur-2xl" />
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-content-center rounded-xl bg-red-600/20 text-red-400 ring-1 ring-red-600/30">
                <BookOpen className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold">Pedagogy & Curriculum</h3>
            </div>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-400" /> Experiential methods: Live projects, case simulations</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-400" /> Technology integration: AI tools, analytics software, digital platforms</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-400" /> Research-driven modules co-designed with industry partners</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-400" /> Global certifications: HR Analytics, Digital Strategy, Python, ML, Power BI</li>
            </ul>
          </motion.article>

          {/* Admissions */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[.06] to-white/[.03] p-6 backdrop-blur"
          >
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-red-600/20 blur-2xl" />
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-content-center rounded-xl bg-red-600/20 text-red-400 ring-1 ring-red-600/30">
                <BadgeCheck className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold">Eligibility & Admissions</h3>
            </div>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-400" /> Eligibility: Bachelor’s degree (minimum 50%)</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-400" /> Tests: CAT / XAT / CMAT / GMAT / MAT + Personal Interview</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-400" /> Duration: 2 years (Full-time) • Credits: 120</li>
            </ul>
            <div id="brochure" className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="/pgdm-brochure.pdf"
                className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-red-600/30 transition hover:bg-red-500"
                download
              >
                <Download className="h-4 w-4" /> Download PGDM Brochure
              </a>
              <a href="#apply" className="text-sm text-white/70 hover:text-white">Need help? Contact Admissions</a>
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
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0e0e0e] p-6"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-content-center rounded-lg bg-red-600/20 text-red-400 ring-1 ring-red-600/30"><Users2 className="h-5 w-5" /></div>
              <h3 className="font-semibold">Faculty & Leadership</h3>
            </div>
            <p className="mt-3 text-sm text-white/70">
              Led by Dr. Krity Gulati (Director) and supported by industry practitioners and academic experts, including CA Rajiv Singh and Dr. Shivesh Pratap.
            </p>
          </motion.article>
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0e0e0e] p-6"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-content-center rounded-lg bg-red-600/20 text-red-400 ring-1 ring-red-600/30"><Briefcase className="h-5 w-5" /></div>
              <h3 className="font-semibold">Industry Connect</h3>
            </div>
            <p className="mt-3 text-sm text-white/70">
              Corporate conclaves, CHRO talks, innovation bootcamps, and live projects across BFSI, Consulting, Technology, FMCG, and Hospitality.
            </p>
          </motion.article>
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0e0e0e] p-6"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-content-center rounded-lg bg-red-600/20 text-red-400 ring-1 ring-red-600/30"><GraduationCap className="h-5 w-5" /></div>
              <h3 className="font-semibold">Placements & Careers</h3>
            </div>
            <p className="mt-3 text-sm text-white/70">
              Strong outcomes in Consulting, BFSI, Analytics, HR‑Tech, Marketing, and Supply Chain. Recruiters include Deloitte, PwC, Accenture, IBM, Amazon, Marriott, EY, KPMG.
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
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[.06] to-white/[.03] p-6"
          >
            <h3 className="text-lg font-semibold">Contact / Enquiry</h3>
            <div className="mt-4 space-y-3 text-sm text-white/80">
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-rose-300" /> +91-XXXX-XXXXXX</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-rose-300" /> admissions@accman.in</p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-rose-300" /> ACCMAN Institute of Management, Greater Noida</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[.06] to-white/[.03] p-6"
          >
            <h3 className="text-lg font-semibold">Social Media</h3>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-white/80">
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 hover:bg-white/10"><Linkedin className="h-4 w-4" /> LinkedIn</a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 hover:bg-white/10"><Instagram className="h-4 w-4" /> Instagram</a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 hover:bg-white/10"><Youtube className="h-4 w-4" /> YouTube</a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 hover:bg-white/10"><Facebook className="h-4 w-4" /> Facebook</a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 hover:bg-white/10"><Twitter className="h-4 w-4" /> X</a>
            </div>
          </motion.div>
        </div>

        {/* FAQs */}
        <div className="mt-12">
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-2xl font-semibold"
          >
            FAQs
          </motion.h3>
          <div className="mx-auto mt-6 max-w-3xl divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10">
            {[{
              q: 'Is the PGDM AICTE approved?',
              a: 'Yes, the program is approved by AICTE, Ministry of Education, Govt. of India.'
            }, {
              q: 'Are global certifications included?',
              a: 'Yes – Google Analytics, Python, Power BI, Machine Learning, and more.'
            }, {
              q: 'What are the placement prospects?',
              a: 'Strong corporate tie‑ups with top global recruiters across domains.'
            }].map((item, i) => (
              <motion.details
                key={item.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.03 }}
                className="group bg-[#0e0e0e] p-4 open:bg-[#111]"
              >
                <summary className="cursor-pointer list-none text-sm font-medium text-white/90">
                  {item.q}
                </summary>
                <p className="mt-2 text-sm text-white/70">{item.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
