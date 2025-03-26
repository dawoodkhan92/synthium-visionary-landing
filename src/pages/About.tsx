
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { trackPageView } from '@/services/analytics';

const About: React.FC = () => {
  useEffect(() => {
    document.title = 'About SynthiumAI - Our Mission & Values';
    trackPageView('about');
  }, []);

  return (
    <PageLayout 
      title="About SynthiumAI" 
      subtitle="Pioneering the future of AI solutions for businesses worldwide"
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Story</h2>
        <p>
          Founded in 2020, SynthiumAI emerged from a simple yet powerful vision: to make artificial intelligence accessible, 
          practical, and transformative for businesses of all sizes. What began as a small team of AI researchers and 
          business strategists has grown into a global leader in enterprise AI solutions.
        </p>
        <p className="mt-4">
          Our journey started when our founders recognized a critical gap in the market – while AI technology was 
          advancing rapidly, businesses struggled to implement it effectively. SynthiumAI was born to bridge this gap, 
          combining cutting-edge technology with practical business applications.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p>
          At SynthiumAI, our mission is to democratize artificial intelligence by developing intuitive, scalable, and 
          ethical AI solutions that drive measurable business outcomes. We believe that AI should be a force for positive 
          transformation, helping organizations work smarter, faster, and with greater impact.
        </p>
        <p className="mt-4">
          We're committed to ensuring that the benefits of AI are accessible to organizations of all sizes, across all 
          industries. By demystifying complex technology and focusing on practical applications, we empower our clients 
          to lead in the age of intelligence.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Values</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Innovation with Purpose</h3>
            <p>We pursue technological advancement not for its own sake, but to solve real problems and create meaningful impact.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Ethical Intelligence</h3>
            <p>We believe AI must be developed and deployed responsibly, with transparency, fairness, and human wellbeing at its core.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Client Partnership</h3>
            <p>We succeed when our clients succeed. We build deep, collaborative relationships focused on long-term value creation.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
            <p>In a rapidly evolving field, we maintain a culture of curiosity, humility, and constant improvement.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Global Impact</h2>
        <p>
          Today, SynthiumAI serves clients across six continents, spanning industries from healthcare and finance to 
          manufacturing and retail. Our solutions have helped organizations reduce operational costs by an average of 35%, 
          increase productivity by 42%, and launch entirely new AI-powered products and services.
        </p>
        <p className="mt-4">
          As we look to the future, we remain dedicated to pushing the boundaries of what's possible with AI while 
          staying true to our founding vision of technology that serves human needs and empowers organizations to thrive.
        </p>
      </section>
    </PageLayout>
  );
};

export default About;
