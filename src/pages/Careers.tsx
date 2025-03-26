
import React, { useEffect, useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { trackPageView } from '@/services/analytics';
import Button from '@/components/Button';

const Careers: React.FC = () => {
  useEffect(() => {
    document.title = 'Careers at SynthiumAI - Join Our Team';
    trackPageView('careers');
  }, []);

  const [activeTab, setActiveTab] = useState('all');

  const positions = [
    {
      title: "Senior AI Engineer",
      location: "San Francisco, CA",
      type: "Full-time",
      department: "Engineering",
      description: "We're looking for an experienced AI Engineer to join our team and help develop state-of-the-art solutions for our clients. You'll work on challenging projects that push the boundaries of what's possible with artificial intelligence."
    },
    {
      title: "Machine Learning Researcher",
      location: "Boston, MA",
      type: "Full-time",
      department: "Research",
      description: "Join our research team to explore cutting-edge approaches in deep learning, natural language processing, and computer vision. You'll collaborate with top minds in the field to advance the state of AI technology."
    },
    {
      title: "AI Solutions Consultant",
      location: "Chicago, IL",
      type: "Full-time",
      department: "Consulting",
      description: "As an AI Solutions Consultant, you'll work directly with clients to understand their business challenges and design AI-powered solutions that deliver real impact. This role combines technical expertise with business acumen."
    },
    {
      title: "Data Scientist",
      location: "Remote",
      type: "Full-time",
      department: "Engineering",
      description: "We're seeking a talented Data Scientist to help our clients extract valuable insights from their data. You'll design and implement data pipelines, build predictive models, and translate complex findings into actionable business recommendations."
    },
    {
      title: "Product Manager - AI Solutions",
      location: "New York, NY",
      type: "Full-time",
      department: "Product",
      description: "Lead the development of our AI product suite, from concept to launch. You'll work at the intersection of technology, design, and business to create products that solve real-world problems through artificial intelligence."
    },
    {
      title: "Technical Writer - AI Documentation",
      location: "Remote",
      type: "Contract",
      department: "Operations",
      description: "Help us make complex AI concepts accessible through clear, engaging documentation. You'll create technical guides, tutorials, and other content that enables our clients to maximize the value of our solutions."
    }
  ];

  const filteredPositions = activeTab === 'all' 
    ? positions 
    : positions.filter(position => position.department.toLowerCase() === activeTab);

  const departments = ['all', ...new Set(positions.map(p => p.department.toLowerCase()))];

  return (
    <PageLayout 
      title="Careers at SynthiumAI" 
      subtitle="Join us in shaping the future of artificial intelligence"
    >
      <section className="mb-12">
        <p>
          At SynthiumAI, we're building a team of exceptional individuals who are passionate about using artificial 
          intelligence to transform how businesses operate. We offer challenging work, collaborative culture, and 
          the opportunity to make a real impact in a rapidly evolving field.
        </p>
        <p className="mt-4">
          Our team members enjoy competitive compensation, comprehensive benefits, flexible work arrangements, and 
          continuous learning opportunities. Most importantly, you'll be part of a supportive community that values 
          diversity, creativity, and innovative thinking.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Why Join SynthiumAI?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-5 border border-gray-100 rounded-lg bg-white shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Meaningful Work</h3>
            <p>Help solve complex challenges across industries and make a tangible impact through AI innovation.</p>
          </div>
          <div className="p-5 border border-gray-100 rounded-lg bg-white shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Growth & Learning</h3>
            <p>Access to cutting-edge technology, research, and continuous professional development opportunities.</p>
          </div>
          <div className="p-5 border border-gray-100 rounded-lg bg-white shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Inclusive Culture</h3>
            <p>A diverse, collaborative environment where different perspectives are valued and everyone can thrive.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Open Positions</h2>
        
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {departments.map(dept => (
              <button
                key={dept}
                onClick={() => setActiveTab(dept)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === dept 
                    ? 'bg-synthium-500 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {dept.charAt(0).toUpperCase() + dept.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="space-y-6">
          {filteredPositions.map((position, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 bg-white">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{position.title}</h3>
                  <p className="text-synthium-500">{position.department}</p>
                </div>
                <div className="flex flex-wrap gap-2 text-sm">
                  <span className="px-3 py-1 bg-gray-100 rounded-full">{position.location}</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full">{position.type}</span>
                </div>
              </div>
              <p className="mb-4">{position.description}</p>
              <Button variant="primary" size="sm">Apply Now</Button>
            </div>
          ))}
          
          {filteredPositions.length === 0 && (
            <div className="text-center py-10 bg-gray-50 rounded-lg">
              <p className="text-gray-600">No open positions in this department currently.</p>
              <p className="mt-2">
                Don't see a role that fits? Send your resume to <a href="mailto:careers@synthiumai.com" className="text-synthium-500 hover:underline">careers@synthiumai.com</a>
              </p>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default Careers;
