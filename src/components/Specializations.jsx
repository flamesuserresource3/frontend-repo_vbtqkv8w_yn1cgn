import React from 'react';
import { Cpu, Globe, BarChart3, Users, Layers, Briefcase } from 'lucide-react';

const specializations = [
  {
    id: 1,
    title: 'Finance & Valuation',
    tagline: 'Become a full-stack valuation and corporate finance professional.',
    icon: BarChart3,
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

export default function Specializations() {
  return (
    <section className="relative bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="mb-10 space-y-3">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">Specializations Offered</h2>
          <p className="max-w-3xl text-gray-600">
            Students select one specialization to gain deep industry expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {specializations.map((spec) => (
            <article key={spec.id} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <spec.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{spec.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{spec.tagline}</p>
                </div>
              </div>

              <div className="mt-5">
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

              <div className="mt-4 rounded-lg bg-indigo-50 p-3 text-sm text-indigo-900">
                <span className="font-medium">Outcome Careers: </span>
                {spec.outcomes}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
