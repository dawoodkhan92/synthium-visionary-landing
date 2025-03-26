
import React from 'react';
import ServiceCard from './ServiceCard';
import AnimatedSection from './AnimatedSection';
import { Brain, Code, Users, Lightbulb, Cog, Sparkles } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: 'AI Strategy Consulting',
      description: 'We help you develop a comprehensive AI strategy aligned with your business goals, identifying opportunities for AI implementation.',
      icon: Lightbulb,
      variant: 'primary' as const,
    },
    {
      title: 'Custom AI Solutions',
      description: 'Our team builds tailored AI applications designed to address your specific business challenges with cutting-edge technology.',
      icon: Code,
      variant: 'secondary' as const,
    },
    {
      title: 'AI Integration Services',
      description: 'Seamlessly integrate AI technologies into your existing systems and workflows to enhance productivity and decision-making.',
      icon: Cog,
      variant: 'primary' as const,
    },
    {
      title: 'AI Training & Workshops',
      description: 'Empower your team with specialized AI training programs designed to build internal capabilities and AI literacy.',
      icon: Users,
      variant: 'secondary' as const,
    },
    {
      title: 'AI Maintenance & Support',
      description: 'Ongoing monitoring, optimization, and support for your AI systems to ensure they continue to deliver value over time.',
      icon: Brain,
      variant: 'primary' as const,
    },
    {
      title: 'AI Research & Innovation',
      description: 'Stay at the forefront of AI advancements with our research services that explore new applications for your business.',
      icon: Sparkles,
      variant: 'secondary' as const,
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-synthium-50 text-synthium-500 text-sm font-medium mb-4 border border-synthium-100">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-gray-900">
            Comprehensive <span className="text-gradient-primary">AI Solutions</span> for Your Business
          </h2>
          <p className="text-lg text-gray-600">
            We provide end-to-end AI services to help businesses innovate, automate, and transform their operations.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 100}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                variant={service.variant}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
