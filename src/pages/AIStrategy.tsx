
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { trackPageView } from '@/services/analytics';
import { Check, ArrowRight } from 'lucide-react';
import Button from '@/components/Button';

const AIStrategy: React.FC = () => {
  useEffect(() => {
    document.title = 'AI Strategy Consulting - SynthiumAI';
    trackPageView('service-ai-strategy');
  }, []);

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <PageLayout 
      title="AI Strategy Consulting" 
      subtitle="Develop a comprehensive AI roadmap aligned with your business objectives"
      className="max-w-5xl"
    >
      <section className="mb-12">
        <p className="text-lg">
          In today's rapidly evolving technological landscape, implementing AI without a clear strategy can lead to 
          wasted resources and missed opportunities. Our AI Strategy Consulting service helps you develop a tailored 
          roadmap for AI adoption that aligns with your business goals, organizational capabilities, and market position.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Our Approach</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border border-gray-100 rounded-lg bg-white shadow-sm">
            <div className="mb-4 p-3 bg-synthium-50 inline-block rounded-full">
              <span className="text-2xl font-bold text-synthium-500">01</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Discovery & Assessment</h3>
            <p>We analyze your current capabilities, data assets, and business challenges to identify high-impact AI opportunities.</p>
          </div>
          <div className="p-6 border border-gray-100 rounded-lg bg-white shadow-sm">
            <div className="mb-4 p-3 bg-synthium-50 inline-block rounded-full">
              <span className="text-2xl font-bold text-synthium-500">02</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Strategy Development</h3>
            <p>We create a comprehensive AI roadmap with prioritized initiatives, resource requirements, and implementation timelines.</p>
          </div>
          <div className="p-6 border border-gray-100 rounded-lg bg-white shadow-sm">
            <div className="mb-4 p-3 bg-synthium-50 inline-block rounded-full">
              <span className="text-2xl font-bold text-synthium-500">03</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Implementation Planning</h3>
            <p>We develop detailed plans for executing on your AI strategy, including technology selection, team structure, and change management.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Key Benefits</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start gap-3">
            <Check className="text-green-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-1">Strategic Alignment</h3>
              <p className="text-gray-600">Ensure AI initiatives support your core business objectives and create measurable value</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Check className="text-green-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-1">Resource Optimization</h3>
              <p className="text-gray-600">Focus investments on AI applications with the highest ROI potential</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Check className="text-green-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-1">Risk Mitigation</h3>
              <p className="text-gray-600">Identify and address potential challenges before they impact implementation</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Check className="text-green-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-1">Competitive Advantage</h3>
              <p className="text-gray-600">Position your organization at the forefront of AI innovation in your industry</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Check className="text-green-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-1">Organizational Readiness</h3>
              <p className="text-gray-600">Develop the skills, processes, and culture needed for successful AI adoption</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Check className="text-green-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-1">Scalable Framework</h3>
              <p className="text-gray-600">Create a flexible strategy that can evolve as technology and business needs change</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Our Methodology</h2>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
          <ul className="space-y-4">
            <li className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-synthium-500 text-white flex items-center justify-center flex-shrink-0 mt-1">1</div>
              <div>
                <h3 className="font-semibold">Current State Analysis</h3>
                <p className="text-gray-600">We evaluate your existing technology infrastructure, data assets, business processes, and team capabilities.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-synthium-500 text-white flex items-center justify-center flex-shrink-0 mt-1">2</div>
              <div>
                <h3 className="font-semibold">Opportunity Identification</h3>
                <p className="text-gray-600">We identify and prioritize potential AI use cases based on business impact, implementation complexity, and strategic alignment.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-synthium-500 text-white flex items-center justify-center flex-shrink-0 mt-1">3</div>
              <div>
                <h3 className="font-semibold">Strategic Roadmap Development</h3>
                <p className="text-gray-600">We create a phased implementation plan with clear milestones, resource requirements, and success metrics.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-synthium-500 text-white flex items-center justify-center flex-shrink-0 mt-1">4</div>
              <div>
                <h3 className="font-semibold">Technology & Partner Selection</h3>
                <p className="text-gray-600">We recommend optimal technology solutions and potential implementation partners based on your specific needs.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-synthium-500 text-white flex items-center justify-center flex-shrink-0 mt-1">5</div>
              <div>
                <h3 className="font-semibold">Organizational Readiness Plan</h3>
                <p className="text-gray-600">We develop strategies for skill development, change management, and organizational alignment.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-synthium-50 p-8 rounded-lg border border-synthium-100 mb-12">
        <h2 className="text-2xl font-bold mb-4">Case Study: Global Retail Chain</h2>
        <p className="mb-4">
          A leading retail chain with over 500 locations worldwide wanted to leverage AI to improve customer experience, 
          optimize inventory management, and streamline operations. Our strategy consulting team:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Conducted a comprehensive assessment of their data infrastructure and business processes</li>
          <li>Identified high-impact AI opportunities across customer analytics, supply chain, and store operations</li>
          <li>Developed a 3-year AI roadmap with prioritized initiatives and clear ROI projections</li>
          <li>Created a detailed implementation plan including technology selection and team structure</li>
        </ul>
        <p className="font-semibold">Results:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>30% reduction in inventory costs through AI-powered demand forecasting</li>
          <li>22% increase in customer satisfaction through personalized shopping experiences</li>
          <li>$15M annual savings from operational efficiencies</li>
        </ul>
      </section>

      <section>
        <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to develop your AI strategy?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Our expert consultants are ready to help you create a customized AI roadmap that drives real business results.
          </p>
          <Button 
            variant="primary" 
            size="lg"
            onClick={handleContactClick}
            icon={<ArrowRight size={20} />}
          >
            Schedule a Strategy Consultation
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default AIStrategy;
