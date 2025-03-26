
import React from 'react';
import Button from './Button';
import AnimatedSection from './AnimatedSection';
import { ArrowRight, Bar, Braces, LineChart, BarChart } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-ai-grid bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-white/90"></div>
      
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-synthium-50 rounded-full opacity-30 blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-purple-50 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-synthium-50 text-synthium-600 text-sm font-medium border border-synthium-100">
              AI-Powered Business Transformation
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 text-balance leading-tight">
              Transform Your Business With <span className="text-gradient-blend">Intelligent AI</span> Solutions
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              SynthiumAI helps businesses leverage artificial intelligence to automate processes, gain insights, and stay ahead of the competition.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="primary" 
                icon={<ArrowRight size={20} />}
                className="font-medium"
              >
                Book Free Consultation
              </Button>
              <Button size="lg" variant="outline">
                Explore Services
              </Button>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={600} className="mt-16">
            <div className="pt-10 border-t border-gray-100">
              <p className="text-sm text-gray-500 mb-6">Trusted by innovative companies worldwide</p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                <div className="flex items-center gap-2 text-gray-400 font-semibold">
                  <Bar size={20} className="text-synthium-500" />
                  <span>Microsoft</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 font-semibold">
                  <Braces size={20} className="text-synthium-500" />
                  <span>Google</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 font-semibold">
                  <LineChart size={20} className="text-synthium-500" />
                  <span>Amazon</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 font-semibold">
                  <BarChart size={20} className="text-synthium-500" />
                  <span>Intel</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 font-semibold">
                  <Bar size={20} className="text-synthium-500" />
                  <span>IBM</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
