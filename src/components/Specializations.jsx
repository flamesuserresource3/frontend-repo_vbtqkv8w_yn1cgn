import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, BarChart3, Users, Layers, Briefcase } from 'lucide-react';

const specializations = [
  {
    id: 1,
    title: 'Finance & Valuation',
    tagline: 'Become a full-stack valuation and corporate finance professional.',
    icon: BarChart3,
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop',
    learnings: [
      'Company, Start-up & Asset Valuation',
      'Investment Banking & Deal Advisory',
      'ESG, AI & Tech-Driven Financial Decision-Making',
      'Financial Modelling using Excel, Python, Capital IQ, Pitchbook',
    ],
    outcomes:
      'Investment Banking • Equity Research • Valuation Firms • Corporate Finance • Consulting',
  },
  {
    id: 2,
    title: 'Banking & Finance',
    tagline: 'Develop dual expertise in Indian Banking + Global Financial Systems.',
    icon: Layers,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop',
    learnings: [
      'Retail, Corporate & Digital Banking',
      'FinTech, Blockchain & Payment Ecosystems',
      'Treasury, Risk, Credit & Compliance Analytics',
      'International Banking & GIFT City Framework',
    ],
    outcomes:
      'Banking • FinTech • NBFCs • Risk & Compliance • Wealth Management • Global Finance Centers',
  },
  {
    id: 3,
    title: 'Talent Management & Behavioural Analytics',
    tagline: 'Blend HR strategy with behavioural science and analytics.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1557425529-b1ae9c141e7d?q=80&w=1600&auto=format&fit=crop',
    learnings: [
      'HR Analytics & Predictive Workforce Planning',
      'Leadership, Personality & Psychometric Assessment',
      'Employee Wellbeing, Inclusion & Culture Strategy',
      'AI-Driven Talent Management Tools',
    ],
    outcomes:
      'HR Business Partner • HR Analytics Specialist • OD Consultant • Leadership Development Expert',
  },
  {
    id: 4,
    title: 'Marketing & Digital Intelligence',
    tagline: 'Become a data-driven marketing strategist.',
    icon: Globe,
    image: 'https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?q=80&w=1600&auto=format&fit=crop',
    learnings: [
      'Brand Strategy & Consumer Insight',
      'Performance Marketing & Social Intelligence',
      'AI-Powered Content & Campaign Optimization',
      'Marketing Analytics: Google Analytics, Power BI, Tableau',
    ],
    outcomes:
      'Digital Strategist • Brand Manager • SEO/SEM Specialist • Growth Marketer • Marketing Analyst',
  },
  {
    id: 5,
    title: 'Business Analytics & Artificial Intelligence',
    tagline: 'Turn data into strategy and AI into business value.',
    icon: Cpu,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCdXNpbmVzcyUyMEFuYWx5dGljcyUyMCUyNiUyMEFydGlmaWNpYWx8ZW58MHwwfHx8MTc2MjI3OTgwNXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    learnings: [
      'Machine Learning, Predictive & Prescriptive Modelling',
      'Cloud Analytics (AWS / Azure / Google Cloud)',
      'BI Tools: Power BI, Tableau, Looker',
      'Data Engineering & AI Ethics',
    ],
    outcomes:
      'Business Analyst • Data Scientist • AI Consultant • BI Developer • Product Analyst',
  },
  {
    id: 6,
    title: 'Global Hospitality & Supply Chain Intelligence',
    tagline:
      'Lead service excellence with data-driven operations & logistics.',
    icon: Briefcase,
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop',
    learnings: [
      'Hospitality Operations & Customer Experience Design',
      'Supply Chain Modelling & Logistics Intelligence',
      'SAP, ERP & Predictive Forecasting Systems',
      'Sustainable & Smart Service Systems',
    ],
    outcomes:
      'Supply Chain Manager • Logistics Analyst • Hotel/Resort Operations • Procurement Consultant',
  },
];

function StackedCard({ spec, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative h-40 w-full overflow-hidden md:h-52">
        <img src={spec.image} alt={spec.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent" />
        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-800 backdrop-blur">
          <spec.icon className="h-4 w-4 text-indigo-600" /> {spec.title}
        </div>
      </div>
      <div className="p-6">
        <p className="text-sm text-gray-600">{spec.tagline}</p>

        <div className="mt-4">
          <p className="text-sm font-medium text-gray-900">Key Learning Areas</p>
          <ul className="mt-2 space-y-2 text-sm text-gray-700">
            {spec.learnings.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 rounded-xl bg-indigo-50 p-3 text-sm text-indigo-900">
          <span className="font-medium">Outcome Careers: </span>
          {spec.outcomes}
        </div>
      </div>

      {/* stacked shadow accents */}
      <div className="pointer-events-none absolute inset-x-6 bottom-2 h-3 rounded-full bg-gray-200/60 blur-md transition group-hover:bg-indigo-300/50" />
    </motion.article>
  );
}

export default function Specializations() {
  return (
    <section className="relative bg-gray-50">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" aria-hidden />
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="mb-10 space-y-3 text-center md:text-left">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">Specializations Offered</h2>
          <p className="mx-auto max-w-3xl text-gray-600">
            Students select one specialization to gain deep industry expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {specializations.map((spec, i) => (
            <StackedCard key={spec.id} spec={spec} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
