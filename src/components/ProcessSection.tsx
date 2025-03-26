
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Check, ArrowRight } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We analyze your business needs and identify opportunities for AI implementation.',
      progress: 20,
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'We develop a customized AI roadmap aligned with your business objectives.',
      progress: 40,
    },
    {
      number: '03',
      title: 'Development',
      description: 'Our experts build and train AI models specifically for your business challenges.',
      progress: 60,
    },
    {
      number: '04',
      title: 'Integration',
      description: 'We seamlessly implement AI solutions into your existing systems and workflows.',
      progress: 80,
    },
    {
      number: '05',
      title: 'Optimization',
      description: 'Continuous monitoring and refinement to maximize the value of your AI investments.',
      progress: 100,
    },
  ];

  const benefits = [
    'Accelerated business growth',
    'Improved operational efficiency',
    'Enhanced customer experiences',
    'Data-driven decision making',
    'Competitive market advantage',
    'Future-proof operations',
  ];

  return (
    <section id="process" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-synthium-50 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-purple-50 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-synthium-50 text-synthium-500 text-sm font-medium mb-4 border border-synthium-100">
            Our Approach
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-gray-900">
            A Proven <span className="text-gradient-primary">Process</span> for AI Success
          </h2>
          <p className="text-lg text-gray-600">
            Our structured methodology ensures that your AI initiatives deliver tangible business value.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <AnimatedSection animation="right" className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex">
                <div className="mr-6">
                  <div className="w-14 h-14 rounded-xl bg-synthium-50 flex items-center justify-center text-synthium-500 font-semibold border border-synthium-100">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 flex items-center">
                    {step.title}
                    <ArrowRight size={18} className="ml-2 text-synthium-500" />
                  </h3>
                  <p className="text-gray-600 mb-3">{step.description}</p>
                  <Progress value={step.progress} className="h-2 bg-gray-100" />
                </div>
              </div>
            ))}
          </AnimatedSection>

          <AnimatedSection animation="left">
            <div className="glass rounded-xl p-8 h-full border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                How Your Business <span className="text-gradient-secondary">Benefits</span>
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                    <div className="mt-1 mr-3 w-6 h-6 rounded-full bg-success flex items-center justify-center text-white">
                      <Check size={14} />
                    </div>
                    <p className="text-gray-700 font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
