
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ProcessSection from '@/components/ProcessSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import ConversionPopup from '@/components/ConversionPopup';
import { initializeAnalytics, trackPageView } from '@/services/analytics';

const Index: React.FC = () => {
  useEffect(() => {
    // Set page title
    document.title = 'SynthiumAI - Intelligent AI Solutions for Business';
    
    // Initialize analytics
    initializeAnalytics();
    
    // Track page view
    trackPageView('homepage');
    
    // Add schema.org structured data for rich snippets (in addition to the one in index.html)
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'SynthiumAI - Intelligent AI Solutions for Business',
      'description': 'Transform your business with intelligent AI solutions from SynthiumAI',
      'url': window.location.href,
      'speakable': {
        '@type': 'SpeakableSpecification',
        'cssSelector': ['h1', 'h2', '.speakable']
      }
    });
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <ChatWidget />
      <ConversionPopup delay={10000} />
    </div>
  );
};

export default Index;
