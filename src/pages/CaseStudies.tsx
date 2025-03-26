
import React, { useEffect, useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { trackPageView } from '@/services/analytics';
import { ArrowRight, Search, Filter, Check, Building2, Globe } from 'lucide-react';

const CaseStudies: React.FC = () => {
  useEffect(() => {
    document.title = 'Case Studies - SynthiumAI Success Stories';
    trackPageView('case-studies');
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [activeIndustry, setActiveIndustry] = useState('all');
  const [activeSolution, setActiveSolution] = useState('all');

  const caseStudies = [
    {
      id: 1,
      title: "Global Bank Reduces Fraud by 89% with AI Detection System",
      client: "MegaBank International",
      industry: "Financial Services",
      solution: "Custom AI Solutions",
      challenge: "Facing rising fraud costs and sophisticated attack methods, MegaBank needed to improve their fraud detection capabilities beyond rule-based systems.",
      approach: "We developed a custom machine learning system that analyzes transaction patterns in real-time, identifying subtle indicators of fraudulent activity that traditional systems miss.",
      results: [
        "89% reduction in fraudulent transactions",
        "$42 million in prevented fraud losses in first year",
        "67% decrease in false positive alerts",
        "Customer satisfaction increased by 24% due to fewer legitimate transactions being flagged"
      ],
      logo: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=80&h=80"
    },
    {
      id: 2,
      title: "Healthcare Provider Improves Patient Outcomes with Predictive Analytics",
      client: "National Health Systems",
      industry: "Healthcare",
      solution: "AI Strategy",
      challenge: "NHS wanted to reduce hospital readmissions and improve patient outcomes by better predicting which patients were at high risk for complications.",
      approach: "We created a comprehensive AI strategy and implemented a predictive analytics system that identifies at-risk patients and recommends personalized intervention strategies.",
      results: [
        "23% reduction in hospital readmissions",
        "19% improvement in patient satisfaction scores",
        "$18.5 million annual savings in avoidable care costs",
        "87% adoption rate among clinical staff"
      ],
      logo: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=80&h=80"
    },
    {
      id: 3,
      title: "Manufacturing Giant Optimizes Operations with Predictive Maintenance",
      client: "Global Manufacturing Corp",
      industry: "Manufacturing",
      solution: "Integration",
      challenge: "GMC was experiencing costly downtime due to equipment failures and inefficient maintenance scheduling across their 12 production facilities.",
      approach: "We integrated an AI-powered predictive maintenance system with their existing ERP and industrial IoT infrastructure, enabling real-time monitoring and failure prediction.",
      results: [
        "72% reduction in unplanned downtime",
        "38% decrease in maintenance costs",
        "$27 million annual productivity improvement",
        "Extension of average equipment lifespan by 4.3 years"
      ],
      logo: "https://images.unsplash.com/photo-1581093196277-9f12b9d31f8e?auto=format&fit=crop&q=80&w=80&h=80"
    },
    {
      id: 4,
      title: "Retail Chain Personalizes Customer Experience with AI Recommendation Engine",
      client: "Fashion Forward Retailers",
      industry: "Retail",
      solution: "Custom AI Solutions",
      challenge: "FFR wanted to increase online sales and customer loyalty by delivering more personalized product recommendations across digital channels.",
      approach: "We developed a custom AI recommendation engine that analyzes customer behavior, purchase history, and preferences to deliver highly relevant product suggestions.",
      results: [
        "41% increase in average order value",
        "28% improvement in conversion rates",
        "52% higher email campaign engagement",
        "3.2x ROI on AI implementation within 9 months"
      ],
      logo: "https://images.unsplash.com/photo-1633409361618-c73427e9e206?auto=format&fit=crop&q=80&w=80&h=80"
    },
    {
      id: 5,
      title: "Energy Company Optimizes Grid Management with AI Forecasting",
      client: "PowerGrid Utilities",
      industry: "Energy",
      solution: "Custom AI Solutions",
      challenge: "PGU needed to improve energy distribution efficiency and integrate renewable sources while maintaining grid stability.",
      approach: "We created a machine learning system that predicts energy demand, optimizes distribution, and manages the integration of variable renewable energy sources.",
      results: [
        "18% improvement in grid efficiency",
        "34% reduction in energy waste",
        "$31 million annual cost savings",
        "42% increase in renewable energy utilization"
      ],
      logo: "https://images.unsplash.com/photo-1584011045249-23d818913929?auto=format&fit=crop&q=80&w=80&h=80"
    },
    {
      id: 6,
      title: "Insurance Firm Streamlines Claims Processing with AI Automation",
      client: "Secure Insurance Group",
      industry: "Insurance",
      solution: "Integration",
      challenge: "SIG was struggling with slow, labor-intensive claims processing that resulted in customer dissatisfaction and high operational costs.",
      approach: "We integrated an AI-powered claims processing system that automates document analysis, fraud detection, and claims routing while seamlessly connecting with existing systems.",
      results: [
        "76% reduction in claims processing time",
        "64% decrease in processing costs",
        "29% improvement in customer satisfaction",
        "93% accuracy in automated fraud detection"
      ],
      logo: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=80&h=80"
    }
  ];

  const industries = ['all', ...new Set(caseStudies.map(study => study.industry))];
  const solutions = ['all', ...new Set(caseStudies.map(study => study.solution))];

  const filteredStudies = caseStudies.filter(study => {
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          study.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          study.challenge.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = activeIndustry === 'all' || study.industry === activeIndustry;
    const matchesSolution = activeSolution === 'all' || study.solution === activeSolution;
    return matchesSearch && matchesIndustry && matchesSolution;
  });

  return (
    <PageLayout 
      title="Case Studies" 
      subtitle="Explore how SynthiumAI has helped organizations transform their operations and achieve measurable results"
      className="max-w-6xl"
    >
      <section className="mb-12">
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-synthium-500 focus:border-transparent bg-white transition"
              />
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <Building2 size={18} className="text-gray-500 mr-2" />
                <select
                  value={activeIndustry}
                  onChange={(e) => setActiveIndustry(e.target.value)}
                  className="p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-synthium-500 focus:border-transparent bg-white"
                >
                  <option value="all">All Industries</option>
                  {industries.filter(i => i !== 'all').map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-center">
                <Filter size={18} className="text-gray-500 mr-2" />
                <select
                  value={activeSolution}
                  onChange={(e) => setActiveSolution(e.target.value)}
                  className="p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-synthium-500 focus:border-transparent bg-white"
                >
                  <option value="all">All Solutions</option>
                  {solutions.filter(s => s !== 'all').map(solution => (
                    <option key={solution} value={solution}>{solution}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {filteredStudies.length > 0 ? (
          <div className="space-y-8">
            {filteredStudies.map(study => (
              <div key={study.id} className="border border-gray-100 rounded-lg overflow-hidden bg-white shadow-sm">
                <div className="grid md:grid-cols-4">
                  <div className="md:col-span-3 p-8">
                    <div className="flex items-center mb-4">
                      <img 
                        src={study.logo} 
                        alt={study.client} 
                        className="w-12 h-12 rounded object-cover mr-4"
                        loading="lazy"
                      />
                      <div>
                        <h4 className="font-semibold text-lg">{study.client}</h4>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center">
                            <Building2 size={14} className="mr-1" />
                            {study.industry}
                          </span>
                          <span className="flex items-center">
                            <Globe size={14} className="mr-1" />
                            {study.solution}
                          </span>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4">{study.title}</h3>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Challenge:</h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Approach:</h4>
                      <p className="text-gray-600">{study.approach}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Results:</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="md:border-l border-gray-100 bg-gray-50 flex items-center justify-center p-8">
                    <div className="text-center">
                      <a 
                        href="#" 
                        className="text-synthium-500 hover:text-synthium-600 font-medium flex items-center justify-center"
                      >
                        <span>Full Case Study</span>
                        <ArrowRight size={16} className="ml-1" />
                      </a>
                      <a 
                        href="#" 
                        className="block mt-4 text-gray-500 hover:text-gray-700 text-sm"
                      >
                        Download PDF
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-50 rounded-lg">
            <p className="text-xl text-gray-600 mb-4">No case studies found matching your criteria</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveIndustry('all');
                setActiveSolution('all');
              }}
              className="text-synthium-500 hover:text-synthium-600 font-medium"
            >
              Reset filters
            </button>
          </div>
        )}
      </section>

      <section>
        <div className="bg-synthium-50 p-8 rounded-lg border border-synthium-100 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to become our next success story?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Contact us today to discuss how we can help your organization leverage artificial intelligence to solve 
            challenges, optimize operations, and create new value.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center bg-synthium-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-synthium-600 transition-colors"
          >
            Schedule a Consultation
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </section>
    </PageLayout>
  );
};

export default CaseStudies;
