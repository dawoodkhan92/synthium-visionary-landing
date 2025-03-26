
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { trackPageView } from '@/services/analytics';
import { ArrowRight, Check, Cpu, Zap, Lock, LineChart } from 'lucide-react';
import Button from '@/components/Button';

const CustomSolutions: React.FC = () => {
  useEffect(() => {
    document.title = 'Custom AI Solutions - SynthiumAI';
    trackPageView('service-custom-solutions');
  }, []);

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const solutionAreas = [
    {
      title: "Predictive Analytics",
      description: "Anticipate market trends, customer behavior, and business opportunities with AI-powered predictive models.",
      icon: LineChart,
      examples: [
        "Sales forecasting systems",
        "Customer churn prediction",
        "Predictive maintenance for equipment",
        "Market trend analysis"
      ]
    },
    {
      title: "Computer Vision",
      description: "Extract insights from visual data with custom computer vision solutions tailored to your specific use case.",
      icon: Cpu,
      examples: [
        "Quality control automation",
        "Visual inspection systems",
        "Document processing",
        "Inventory management"
      ]
    },
    {
      title: "Natural Language Processing",
      description: "Understand, generate, and analyze human language to automate processes and uncover valuable insights.",
      icon: Zap,
      examples: [
        "Intelligent customer service bots",
        "Document classification",
        "Sentiment analysis",
        "Automated content generation"
      ]
    },
    {
      title: "Decision Intelligence",
      description: "Optimize complex decision-making processes with AI systems that augment human judgment.",
      icon: Lock,
      examples: [
        "Risk assessment frameworks",
        "Resource allocation systems",
        "Pricing optimization",
        "Recommendation engines"
      ]
    }
  ];

  return (
    <PageLayout 
      title="Custom AI Solutions" 
      subtitle="Tailored artificial intelligence applications built for your unique business challenges"
      className="max-w-5xl"
    >
      <section className="mb-12">
        <p className="text-lg">
          Off-the-shelf AI products often fail to address the unique complexities of your business. At SynthiumAI, 
          we build custom AI solutions designed specifically for your challenges, data, and objectives. Our team of 
          AI engineers, data scientists, and industry experts collaborate closely with you to develop innovative 
          applications that deliver measurable business impact.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Solution Areas</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {solutionAreas.map((area) => (
            <div key={area.title} className="border border-gray-100 rounded-lg p-6 bg-white shadow-sm">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-synthium-50 rounded-full mr-4">
                  <area.icon className="text-synthium-500" size={24} />
                </div>
                <h3 className="text-xl font-semibold">{area.title}</h3>
              </div>
              <p className="mb-4 text-gray-600">{area.description}</p>
              <div>
                <p className="font-medium mb-2">Example applications:</p>
                <ul className="space-y-1">
                  {area.examples.map((example, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Our Development Process</h2>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-gray-200 hidden md:block"></div>
          <div className="space-y-12">
            <div className="relative md:pl-16">
              <div className="md:absolute left-0 top-0 w-9 h-9 rounded-full bg-synthium-500 text-white flex items-center justify-center">1</div>
              <div className="border border-gray-100 rounded-lg p-6 bg-white shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Discovery & Requirements</h3>
                <p className="text-gray-600">
                  We work closely with your team to understand your business challenges, existing systems, data 
                  landscape, and objectives. This phase defines the scope and success criteria for your custom solution.
                </p>
              </div>
            </div>
            
            <div className="relative md:pl-16">
              <div className="md:absolute left-0 top-0 w-9 h-9 rounded-full bg-synthium-500 text-white flex items-center justify-center">2</div>
              <div className="border border-gray-100 rounded-lg p-6 bg-white shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Solution Architecture</h3>
                <p className="text-gray-600">
                  Our engineers design a comprehensive solution architecture that addresses your specific needs while 
                  ensuring scalability, security, and integration with your existing systems.
                </p>
              </div>
            </div>
            
            <div className="relative md:pl-16">
              <div className="md:absolute left-0 top-0 w-9 h-9 rounded-full bg-synthium-500 text-white flex items-center justify-center">3</div>
              <div className="border border-gray-100 rounded-lg p-6 bg-white shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Data Preparation & Model Development</h3>
                <p className="text-gray-600">
                  We prepare and transform your data, then develop and train custom AI models using state-of-the-art 
                  techniques. We continuously refine these models to achieve optimal performance for your specific use case.
                </p>
              </div>
            </div>
            
            <div className="relative md:pl-16">
              <div className="md:absolute left-0 top-0 w-9 h-9 rounded-full bg-synthium-500 text-white flex items-center justify-center">4</div>
              <div className="border border-gray-100 rounded-lg p-6 bg-white shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Integration & Deployment</h3>
                <p className="text-gray-600">
                  We implement the complete solution, integrating it seamlessly with your existing systems and workflows. 
                  Our deployment process ensures minimal disruption to your operations.
                </p>
              </div>
            </div>
            
            <div className="relative md:pl-16">
              <div className="md:absolute left-0 top-0 w-9 h-9 rounded-full bg-synthium-500 text-white flex items-center justify-center">5</div>
              <div className="border border-gray-100 rounded-lg p-6 bg-white shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Testing & Validation</h3>
                <p className="text-gray-600">
                  We conduct rigorous testing to ensure your solution meets all requirements and performs reliably 
                  under real-world conditions. This includes functional testing, performance testing, and user acceptance testing.
                </p>
              </div>
            </div>
            
            <div className="relative md:pl-16">
              <div className="md:absolute left-0 top-0 w-9 h-9 rounded-full bg-synthium-500 text-white flex items-center justify-center">6</div>
              <div className="border border-gray-100 rounded-lg p-6 bg-white shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Monitoring & Optimization</h3>
                <p className="text-gray-600">
                  After deployment, we provide ongoing monitoring, performance optimization, and model retraining 
                  to ensure your solution continues to deliver value as your business evolves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 rounded-full mr-3">
                <span className="text-blue-600 font-semibold text-sm">HC</span>
              </div>
              <h3 className="font-semibold">Healthcare Provider</h3>
            </div>
            <p className="mb-4">
              A national healthcare provider needed to improve patient outcomes while reducing costs. We developed a 
              custom AI solution that analyzed medical records, treatment plans, and outcomes data to identify 
              opportunities for care optimization.
            </p>
            <p className="font-medium">Results:</p>
            <ul className="space-y-1 mt-2">
              <li className="flex items-start gap-2">
                <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
                <span>19% reduction in hospital readmissions</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
                <span>$12.5M annual savings in operational costs</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
                <span>Improved patient satisfaction scores by 27%</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-green-100 rounded-full mr-3">
                <span className="text-green-600 font-semibold text-sm">MF</span>
              </div>
              <h3 className="font-semibold">Manufacturing Firm</h3>
            </div>
            <p className="mb-4">
              A global manufacturing company sought to reduce equipment downtime and maintenance costs. We built a 
              custom predictive maintenance system that analyzed sensor data, maintenance records, and operational 
              parameters to forecast equipment failures.
            </p>
            <p className="font-medium">Results:</p>
            <ul className="space-y-1 mt-2">
              <li className="flex items-start gap-2">
                <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
                <span>73% reduction in unexpected downtime</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
                <span>42% decrease in maintenance costs</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
                <span>15% increase in overall equipment effectiveness</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-synthium-50 p-8 rounded-lg border border-synthium-100 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to build your custom AI solution?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Let's discuss your unique business challenges and explore how a custom AI solution can drive tangible results for your organization.
          </p>
          <Button 
            variant="primary" 
            size="lg"
            onClick={handleContactClick}
            icon={<ArrowRight size={20} />}
          >
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default CustomSolutions;
