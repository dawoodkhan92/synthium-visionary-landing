
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { trackPageView } from '@/services/analytics';
import { ArrowRight, Check, Database, Server, Layers, Repeat } from 'lucide-react';
import Button from '@/components/Button';

const Integration: React.FC = () => {
  useEffect(() => {
    document.title = 'AI Integration Services - SynthiumAI';
    trackPageView('service-integration');
  }, []);

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <PageLayout 
      title="AI Integration Services" 
      subtitle="Seamlessly connect AI solutions with your existing systems and workflows"
      className="max-w-5xl"
    >
      <section className="mb-12">
        <p className="text-lg">
          Even the most powerful AI solutions deliver limited value if they're not properly integrated into your 
          existing technology ecosystem and business processes. SynthiumAI's integration services ensure that your 
          AI investments connect seamlessly with your legacy systems, data sources, and workflows to maximize ROI 
          and user adoption.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Integration Capabilities</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 border border-gray-100 rounded-lg bg-white shadow-sm">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-synthium-50 rounded-full mr-4">
                <Database className="text-synthium-500" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Data Integration</h3>
            </div>
            <p className="mb-4">
              Connect AI systems with diverse data sources across your organization, ensuring real-time access to 
              the information needed for accurate analysis and decision-making.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">ETL pipeline development</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Data lake/warehouse integration</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Real-time data streaming</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Data quality and governance</span>
              </li>
            </ul>
          </div>
          
          <div className="p-6 border border-gray-100 rounded-lg bg-white shadow-sm">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-synthium-50 rounded-full mr-4">
                <Server className="text-synthium-500" size={24} />
              </div>
              <h3 className="text-xl font-semibold">System Integration</h3>
            </div>
            <p className="mb-4">
              Seamlessly connect AI solutions with your enterprise applications, databases, and infrastructure to 
              create a cohesive technology ecosystem.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">ERP/CRM system integration</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Legacy system connectivity</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">API development and management</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Microservices architecture</span>
              </li>
            </ul>
          </div>
          
          <div className="p-6 border border-gray-100 rounded-lg bg-white shadow-sm">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-synthium-50 rounded-full mr-4">
                <Layers className="text-synthium-500" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Process Integration</h3>
            </div>
            <p className="mb-4">
              Align AI capabilities with your business processes to automate workflows, enhance decision-making, 
              and improve operational efficiency.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Business process analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Workflow automation</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Decision support integration</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Change management support</span>
              </li>
            </ul>
          </div>
          
          <div className="p-6 border border-gray-100 rounded-lg bg-white shadow-sm">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-synthium-50 rounded-full mr-4">
                <Repeat className="text-synthium-500" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Cloud & DevOps Integration</h3>
            </div>
            <p className="mb-4">
              Deploy and manage AI solutions across hybrid and multi-cloud environments with robust DevOps practices 
              for continuous delivery and optimization.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Cloud platform integration</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">CI/CD pipeline development</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Infrastructure as code</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Monitoring and observability</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Our Integration Approach</h2>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
          <ol className="space-y-6">
            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-synthium-500 text-white flex items-center justify-center flex-shrink-0 mt-1">1</div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Assessment & Discovery</h3>
                <p className="text-gray-600">
                  We conduct a comprehensive analysis of your existing systems, data architecture, business processes, 
                  and integration requirements to create a detailed integration strategy.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-synthium-500 text-white flex items-center justify-center flex-shrink-0 mt-1">2</div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Architecture Design</h3>
                <p className="text-gray-600">
                  Our architects design a robust integration framework that addresses your technical requirements 
                  while ensuring scalability, security, and performance.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-synthium-500 text-white flex items-center justify-center flex-shrink-0 mt-1">3</div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Development & Configuration</h3>
                <p className="text-gray-600">
                  We build the necessary integration components, including APIs, connectors, data pipelines, and 
                  microservices, following best practices for reliability and maintainability.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-synthium-500 text-white flex items-center justify-center flex-shrink-0 mt-1">4</div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Testing & Validation</h3>
                <p className="text-gray-600">
                  We conduct rigorous testing to ensure data integrity, system interoperability, performance, and 
                  security across the integrated environment.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-synthium-500 text-white flex items-center justify-center flex-shrink-0 mt-1">5</div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Deployment & Transition</h3>
                <p className="text-gray-600">
                  We implement the integration solution with minimal disruption to your operations, following a 
                  carefully planned deployment strategy that may include phased rollouts.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-synthium-500 text-white flex items-center justify-center flex-shrink-0 mt-1">6</div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Monitoring & Support</h3>
                <p className="text-gray-600">
                  We provide ongoing monitoring, maintenance, and support to ensure optimal performance of your 
                  integrated AI ecosystem, with proactive issue resolution and continuous improvements.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Integration Success Story</h2>
        <div className="bg-synthium-50 p-8 rounded-lg border border-synthium-100">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-synthium-200 rounded-full mr-3">
              <span className="text-synthium-700 font-semibold text-sm">FS</span>
            </div>
            <h3 className="font-semibold text-lg">Financial Services Leader</h3>
          </div>
          <p className="mb-6">
            A global financial services company needed to integrate several AI models into their existing customer 
            service infrastructure to improve client experiences while maintaining strict security and compliance 
            requirements.
          </p>
          <div className="mb-6">
            <h4 className="font-medium mb-2">Integration Challenges:</h4>
            <ul className="space-y-1">
              <li className="flex items-start gap-2">
                <Check size={16} className="text-synthium-500 mt-1 flex-shrink-0" />
                <span>Complex legacy systems with limited API capabilities</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-synthium-500 mt-1 flex-shrink-0" />
                <span>Real-time data requirements across multiple channels</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-synthium-500 mt-1 flex-shrink-0" />
                <span>Stringent security and regulatory compliance needs</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-synthium-500 mt-1 flex-shrink-0" />
                <span>24/7 operation with zero downtime requirements</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Our Solution:</h4>
            <ul className="space-y-1 mb-6">
              <li className="flex items-start gap-2">
                <Check size={16} className="text-synthium-500 mt-1 flex-shrink-0" />
                <span>Developed a microservices architecture with API gateway for secure, controlled access</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-synthium-500 mt-1 flex-shrink-0" />
                <span>Implemented real-time event streaming for cross-channel data synchronization</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-synthium-500 mt-1 flex-shrink-0" />
                <span>Created custom adapters for legacy system integration with minimal modifications</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-synthium-500 mt-1 flex-shrink-0" />
                <span>Deployed blue-green deployment strategy for zero-downtime updates</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium mb-2">Results:</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-3xl font-bold text-synthium-500 mb-1">68%</p>
                <p className="text-sm">Faster customer issue resolution</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-3xl font-bold text-synthium-500 mb-1">42%</p>
                <p className="text-sm">Reduction in manual processing</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-3xl font-bold text-synthium-500 mb-1">99.9%</p>
                <p className="text-sm">System availability maintained</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to integrate AI into your business?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Our integration experts can help you connect AI solutions with your existing systems for maximum impact with minimal disruption.
          </p>
          <Button 
            variant="primary" 
            size="lg"
            onClick={handleContactClick}
            icon={<ArrowRight size={20} />}
          >
            Schedule an Integration Consultation
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default Integration;
