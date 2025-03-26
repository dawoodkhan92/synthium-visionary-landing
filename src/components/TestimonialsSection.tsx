
import React from 'react';
import TestimonialCard from './TestimonialCard';
import AnimatedSection from './AnimatedSection';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "SynthiumAI transformed our customer service operations with their chatbot solution. We've seen a 40% reduction in response time and significant cost savings.",
      author: "Sarah Johnson",
      position: "CTO",
      company: "TechFusion"
    },
    {
      quote: "Their AI-driven predictive analytics platform helped us identify market trends early, giving us a competitive advantage and increasing our quarterly revenue by 23%.",
      author: "Michael Chen",
      position: "CEO",
      company: "Innovate Partners"
    },
    {
      quote: "The custom machine learning model SynthiumAI built for our supply chain has reduced wastage by 35% and optimized inventory levels across all our distribution centers.",
      author: "Jennifer Paterson",
      position: "COO",
      company: "Global Logistics"
    }
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-synthium-50 text-synthium-600 text-sm font-medium mb-4">
            Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-gray-900">
            Trusted by Forward-Thinking Companies
          </h2>
          <p className="text-lg text-gray-600">
            See how organizations like yours have achieved remarkable results with our AI solutions.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 150}>
              <TestimonialCard
                quote={testimonial.quote}
                author={testimonial.author}
                position={testimonial.position}
                company={testimonial.company}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
