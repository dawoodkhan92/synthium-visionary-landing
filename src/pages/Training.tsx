
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { trackPageView } from '@/services/analytics';
import { ArrowRight, Check, BookOpen, Users, Award, Calendar } from 'lucide-react';
import Button from '@/components/Button';

const Training: React.FC = () => {
  useEffect(() => {
    document.title = 'AI Training & Workshops - SynthiumAI';
    trackPageView('service-training');
  }, []);

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const trainingPrograms = [
    {
      title: "AI Fundamentals for Business Leaders",
      description: "A comprehensive introduction to AI concepts, capabilities, and business applications for executives and decision-makers.",
      duration: "1 day",
      audience: "Executives, Directors, Senior Managers",
      icon: BookOpen,
      topics: [
        "AI terminology and core concepts",
        "Current capabilities and limitations",
        "Business impact across industries",
        "Implementation considerations",
        "Ethical and governance issues"
      ]
    },
    {
      title: "AI Strategy Development Workshop",
      description: "Hands-on sessions to help your team create a tailored AI roadmap aligned with your organization's objectives.",
      duration: "2 days",
      audience: "Strategy Teams, Innovation Leaders, IT Directors",
      icon: Calendar,
      topics: [
        "Opportunity identification and prioritization",
        "Resource planning and allocation",
        "Technical feasibility assessment",
        "Implementation roadmapping",
        "ROI measurement and optimization"
      ]
    },
    {
      title: "AI for Technical Teams",
      description: "Technical training for IT professionals, developers, and data teams to build, deploy, and maintain AI solutions.",
      duration: "3-5 days",
      audience: "Developers, Data Scientists, IT Specialists",
      icon: Users,
      topics: [
        "Machine learning fundamentals",
        "Data preparation and feature engineering",
        "Model development and evaluation",
        "Deployment and integration",
        "Monitoring and maintenance"
      ]
    },
    {
      title: "AI Change Management Program",
      description: "Comprehensive training to help organizations manage the human side of AI transformation.",
      duration: "Custom",
      audience: "HR Leaders, Team Managers, Change Agents",
      icon: Award,
      topics: [
        "Managing AI-driven organizational change",
        "Workforce planning and skill development",
        "Internal communication strategies",
        "Addressing resistance and concerns",
        "Building an AI-positive culture"
      ]
    }
  ];

  return (
    <PageLayout 
      title="AI Training & Workshops" 
      subtitle="Empower your team with the knowledge and skills to succeed in the AI-driven future"
      className="max-w-5xl"
    >
      <section className="mb-12">
        <p className="text-lg">
          Technology alone doesn't drive successful AI adoption—people do. Our training programs are designed to 
          build organizational AI capabilities at all levels, from executive leadership to technical teams. 
          We deliver engaging, practical learning experiences that prepare your workforce to leverage AI effectively.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Training Programs</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {trainingPrograms.map((program) => (
            <div key={program.title} className="border border-gray-100 rounded-lg p-6 bg-white shadow-sm">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-synthium-50 rounded-full mr-4">
                  <program.icon className="text-synthium-500" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{program.title}</h3>
                  <div className="flex gap-3 text-sm text-gray-500 mt-1">
                    <span>{program.duration}</span>
                    <span className="text-gray-300">|</span>
                    <span>{program.audience}</span>
                  </div>
                </div>
              </div>
              <p className="mb-4 text-gray-600">{program.description}</p>
              <div>
                <p className="font-medium mb-2">Key topics:</p>
                <ul className="space-y-1">
                  {program.topics.map((topic, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Training Approach</h2>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-3">Customized Content</h3>
              <p className="text-gray-600">
                We tailor our training programs to your industry, organizational context, and specific AI applications, 
                ensuring relevance and immediate applicability.
              </p>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-3">Experiential Learning</h3>
              <p className="text-gray-600">
                Our workshops emphasize hands-on activities, case studies, and real-world scenarios to reinforce 
                concepts and build practical skills.
              </p>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-3">Multi-format Delivery</h3>
              <p className="text-gray-600">
                We offer flexible delivery options including in-person workshops, virtual sessions, self-paced 
                courses, and blended learning approaches.
              </p>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-3">Expert Instructors</h3>
              <p className="text-gray-600">
                Our trainers combine deep AI expertise with instructional design skills to create engaging, 
                effective learning experiences.
              </p>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-3">Continuous Support</h3>
              <p className="text-gray-600">
                Training extends beyond the classroom with follow-up resources, office hours, and communities of 
                practice to support ongoing learning.
              </p>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-3">Measurable Outcomes</h3>
              <p className="text-gray-600">
                We define clear learning objectives and success metrics, measuring knowledge acquisition and 
                skill application to demonstrate ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Enterprise AI Literacy Programs</h2>
        <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
          <p className="mb-6">
            Beyond specialized training, we help organizations build broad AI literacy across their workforce 
            through comprehensive education programs that:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-1">
                <Check size={18} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Demystify AI Technology</h3>
                <p className="text-gray-600 text-sm">
                  Make AI concepts accessible to employees at all levels through clear, jargon-free explanations and relatable examples.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-1">
                <Check size={18} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Address AI Concerns</h3>
                <p className="text-gray-600 text-sm">
                  Proactively tackle common fears and misconceptions about AI with transparent communication and balanced perspectives.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-1">
                <Check size={18} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Promote Ethical AI Use</h3>
                <p className="text-gray-600 text-sm">
                  Embed ethical considerations and responsible AI principles into all levels of training and organizational culture.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-1">
                <Check size={18} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Enable AI Collaboration</h3>
                <p className="text-gray-600 text-sm">
                  Create a common language and understanding that facilitates collaboration between technical and non-technical teams.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-1">
                <Check size={18} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Build Internal Champions</h3>
                <p className="text-gray-600 text-sm">
                  Identify and develop internal AI advocates who can drive adoption and provide peer support across departments.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-1">
                <Check size={18} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Sustain Long-term Learning</h3>
                <p className="text-gray-600 text-sm">
                  Create ongoing learning opportunities that keep pace with AI advancements and evolving organizational needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Training Success Story</h2>
        <div className="bg-synthium-50 p-8 rounded-lg border border-synthium-100">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-synthium-200 rounded-full mr-3">
              <span className="text-synthium-700 font-semibold text-sm">RC</span>
            </div>
            <h3 className="font-semibold text-lg">Retail Corporation</h3>
          </div>
          <p className="mb-6">
            A national retail chain with 15,000 employees was implementing AI-powered demand forecasting, inventory 
            management, and customer experience solutions. They needed to quickly build AI capabilities across multiple 
            roles and levels.
          </p>
          <div className="mb-6">
            <h4 className="font-medium mb-2">Our Training Solution:</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Check size={16} className="text-synthium-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium">Executive AI Leadership Program</span>
                  <p className="text-sm text-gray-600">2-day immersive workshop for C-suite and VPs to align on AI vision and strategy</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-synthium-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium">AI for Store Managers</span>
                  <p className="text-sm text-gray-600">Virtual training sessions on using AI insights for operational decision-making</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-synthium-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium">Technical AI Bootcamp</span>
                  <p className="text-sm text-gray-600">Intensive 5-day program for IT teams on implementing and maintaining AI systems</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-synthium-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium">AI Basics for All Employees</span>
                  <p className="text-sm text-gray-600">Online micro-learning series to build organization-wide AI literacy</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-white p-5 rounded-lg">
            <h4 className="font-medium mb-3">Results:</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-3xl font-bold text-synthium-500 mb-1">94%</p>
                <p className="text-sm">Of participants reported confidence in working with AI tools</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-3xl font-bold text-synthium-500 mb-1">3x</p>
                <p className="text-sm">Faster adoption of new AI capabilities</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-3xl font-bold text-synthium-500 mb-1">62%</p>
                <p className="text-sm">Reduction in AI implementation support tickets</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to build AI capabilities in your organization?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Contact us to discuss your AI training needs and how we can create a customized learning program for your team.
          </p>
          <Button 
            variant="primary" 
            size="lg"
            onClick={handleContactClick}
            icon={<ArrowRight size={20} />}
          >
            Schedule a Training Consultation
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default Training;
