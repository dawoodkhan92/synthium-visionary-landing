
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Check } from 'lucide-react';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We analyze your business needs and identify opportunities for AI implementation.',
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'We develop a customized AI roadmap aligned with your business objectives.',
    },
    {
      number: '03',
      title: 'Development',
      description: 'Our experts build and train AI models specifically for your business challenges.',
    },
    {
      number: '04',
      title: 'Integration',
      description: 'We seamlessly implement AI solutions into your existing systems and workflows.',
    },
    {
      number: '05',
      title: 'Optimization',
      description: 'Continuous monitoring and refinement to maximize the value of your AI investments.',
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
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-synthium-50 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-synthium-50 text-synthium-600 text-sm font-medium mb-4">
            Our Approach
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-gray-900">
            A Proven Process for AI Success
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
                  <div className="w-12 h-12 rounded-full bg-synthium-50 flex items-center justify-center text-synthium-600 font-semibold">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </AnimatedSection>

          <AnimatedSection animation="left">
            <div className="glass rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                How Your Business Benefits
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mt-1 mr-3 w-5 h-5 rounded-full bg-synthium-100 flex items-center justify-center text-synthium-600">
                      <Check size={12} />
                    </div>
                    <p className="text-gray-700">{benefit}</p>
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
