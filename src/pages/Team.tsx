
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { trackPageView } from '@/services/analytics';

const Team: React.FC = () => {
  useEffect(() => {
    document.title = 'Our Team - SynthiumAI Leadership';
    trackPageView('team');
  }, []);

  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      title: "Founder & CEO",
      bio: "With a Ph.D. in Machine Learning from Stanford and previous leadership roles at Google AI, Sarah brings unparalleled expertise in translating complex AI concepts into business value.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Michael Rodriguez",
      title: "Chief Technology Officer",
      bio: "Former Head of Engineering at Tesla's Autopilot division, Michael leads our technical strategy and product development with a focus on scalable, robust AI systems.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Aisha Patel",
      title: "Chief Strategy Officer",
      bio: "With 15+ years of consulting experience at McKinsey, Aisha helps our clients integrate AI into their strategic roadmaps for maximum business impact.",
      image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Dr. James Wilson",
      title: "Chief Research Officer",
      bio: "Leading our R&D initiatives, James brings academic rigor from his tenure as Professor of Computer Science at MIT and practical experience from his work with numerous Fortune 500 companies.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Elena Volkov",
      title: "VP of Client Success",
      bio: "With her background in organizational psychology and change management, Elena ensures our clients achieve measurable success through effective AI implementation.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "David Kim",
      title: "VP of Engineering",
      bio: "A seasoned software architect with extensive experience at Amazon and Microsoft, David leads our engineering team in building robust, scalable AI solutions.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200"
    }
  ];

  return (
    <PageLayout 
      title="Our Team" 
      subtitle="Meet the experts behind SynthiumAI's innovative solutions"
    >
      <section className="mb-12">
        <p>
          At SynthiumAI, our greatest asset is our people. Our diverse team brings together world-class expertise in 
          artificial intelligence, software engineering, business strategy, and industry-specific knowledge.
        </p>
        <p className="mt-4">
          United by a passion for harnessing the power of AI to solve complex business challenges, our team works 
          collaboratively to deliver solutions that drive measurable impact for our clients.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Leadership Team</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex gap-5 p-5 rounded-lg border border-gray-100 bg-white shadow-sm">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-20 h-20 object-cover rounded-full"
                loading="lazy"
              />
              <div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-synthium-500 mb-2">{member.title}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Team;
