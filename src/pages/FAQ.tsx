
import React, { useEffect, useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { trackPageView } from '@/services/analytics';
import { ChevronDown, ChevronUp, Search, ArrowRight } from 'lucide-react';

const FAQ: React.FC = () => {
  useEffect(() => {
    document.title = 'Frequently Asked Questions - SynthiumAI';
    trackPageView('faq');
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('General');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const faqCategories = [
    'General',
    'AI Strategy',
    'Implementation',
    'Technology',
    'Pricing',
    'Support'
  ];

  const faqItems = [
    {
      id: 'general-1',
      category: 'General',
      question: 'What is SynthiumAI and what services do you offer?',
      answer: 'SynthiumAI is a leading artificial intelligence solutions provider that helps businesses leverage AI to innovate, automate, and grow. Our core services include AI Strategy Consulting, Custom AI Solutions, AI Integration Services, AI Training & Workshops, AI Maintenance & Support, and AI Research & Innovation. We work with organizations across industries to implement practical, ethical, and effective AI solutions that drive measurable business results.'
    },
    {
      id: 'general-2',
      category: 'General',
      question: 'How is SynthiumAI different from other AI companies?',
      answer: 'SynthiumAI differentiates itself through our business-first approach to AI. While we have deep technical expertise, we focus on understanding your business challenges and objectives first, then applying the right AI technologies to solve them. Additionally, we emphasize knowledge transfer and capacity building, helping your team develop the skills to maintain and extend AI solutions. Our end-to-end capabilities—from strategy to implementation to ongoing support—also set us apart from companies that only specialize in one aspect of the AI lifecycle.'
    },
    {
      id: 'general-3',
      category: 'General',
      question: 'What industries does SynthiumAI work with?',
      answer: 'SynthiumAI works across a wide range of industries including financial services, healthcare, manufacturing, retail, energy, telecommunications, and the public sector. Our diverse team includes experts with domain knowledge in these industries, allowing us to understand sector-specific challenges and regulations. While AI applications vary by industry, our methodologies and frameworks are adaptable to different business contexts.'
    },
    {
      id: 'strategy-1',
      category: 'AI Strategy',
      question: 'How do I know if my organization is ready for AI?',
      answer: 'Organizational readiness for AI depends on several factors, including data maturity, technical infrastructure, business objectives, and cultural factors. Key indicators of readiness include having clear business problems that AI could potentially solve, access to relevant data, executive sponsorship, and willingness to invest in change management. Through our AI Readiness Assessment, we evaluate these and other dimensions to determine your organization\'s preparedness and identify any gaps that need to be addressed before implementation.'
    },
    {
      id: 'strategy-2',
      category: 'AI Strategy',
      question: 'How long does it take to develop an AI strategy?',
      answer: 'Developing a comprehensive AI strategy typically takes 4-8 weeks, depending on the size and complexity of your organization. The process includes stakeholder interviews, current state assessment, opportunity identification, capability gap analysis, and roadmap development. For larger enterprises with multiple business units, the timeline may extend to 10-12 weeks. We can also offer accelerated strategy engagements for organizations with urgent needs or those seeking to focus on specific business areas.'
    },
    {
      id: 'strategy-3',
      category: 'AI Strategy',
      question: 'What ROI can I expect from AI investments?',
      answer: 'ROI from AI investments varies significantly based on the specific use cases, implementation quality, and organizational factors. In our experience, well-executed AI projects typically deliver ROI in the range of 5-10x over a three-year period. Common sources of return include operational cost reduction (through automation), revenue growth (through enhanced customer experiences or new products), and risk mitigation. During the strategy phase, we work with you to develop detailed business cases for each AI initiative, including projected costs, benefits, and timeline to positive ROI.'
    },
    {
      id: 'implementation-1',
      category: 'Implementation',
      question: 'How long does it take to implement an AI solution?',
      answer: 'Implementation timelines vary based on the complexity of the solution, the state of your data and infrastructure, and organizational factors. Simple AI implementations might take 2-3 months, while more complex enterprise-wide solutions can take 6-12 months or longer. We typically use an agile approach, delivering functionality in phases so you can begin realizing value earlier. During the scoping phase, we\'ll provide detailed timelines based on your specific requirements and constraints.'
    },
    {
      id: 'implementation-2',
      category: 'Implementation',
      question: 'What data requirements are needed for AI projects?',
      answer: 'Data requirements vary by type of AI solution, but generally include considerations of volume (sufficient quantity), variety (diverse data types if needed), velocity (how quickly data is generated and processed), veracity (accuracy and quality), and value (relevance to the business problem). For supervised learning applications, labeled data is essential. The specific requirements depend on your use case—some applications need years of historical data, while others can work with more limited datasets. During the assessment phase, we evaluate your data readiness and recommend any necessary steps to prepare data for AI applications.'
    },
    {
      id: 'implementation-3',
      category: 'Implementation',
      question: 'How do you ensure AI solutions integrate with our existing systems?',
      answer: 'Integration is a core consideration in our implementation approach. We begin by thoroughly understanding your existing technology ecosystem, then design solutions with integration in mind from the start. We use standard APIs, microservices architectures, and robust data pipelines to ensure seamless connectivity. For legacy systems with limited API capabilities, we develop custom adapters or middleware as needed. Our integration specialists work closely with your IT team throughout the process to ensure alignment with your technology standards and minimize disruption to existing operations.'
    },
    {
      id: 'technology-1',
      category: 'Technology',
      question: 'What AI technologies does SynthiumAI use?',
      answer: 'SynthiumAI is technology-agnostic, selecting the best tools and frameworks for each client\'s specific needs. Our solutions may incorporate various machine learning techniques (supervised, unsupervised, and reinforcement learning), deep learning, natural language processing, computer vision, optimization algorithms, and other AI approaches. We work with established frameworks like TensorFlow, PyTorch, scikit-learn, and cloud-based AI services from providers like AWS, Google Cloud, and Microsoft Azure. Our focus is on choosing the right technology for your business problem rather than forcing a particular solution.'
    },
    {
      id: 'technology-2',
      category: 'Technology',
      question: 'How do you ensure AI solutions are ethical and responsible?',
      answer: 'Ethical and responsible AI is central to our approach. We have a formal framework that addresses key dimensions including fairness and bias mitigation, transparency and explainability, privacy and security, human oversight, and accountability. Throughout the development process, we conduct regular ethical assessments, test for unintended consequences and biases, and ensure appropriate governance mechanisms are in place. We also emphasize transparency with stakeholders about both the capabilities and limitations of AI systems.'
    },
    {
      id: 'technology-3',
      category: 'Technology',
      question: 'How do you handle data privacy and security concerns?',
      answer: 'We take data privacy and security extremely seriously. Our processes comply with relevant regulations (GDPR, CCPA, HIPAA, etc.) and industry standards. Security measures include data encryption, access controls, secure development practices, and regular security testing. We conduct privacy impact assessments for projects involving sensitive data and implement privacy-by-design principles. Our team is trained in data protection best practices, and we work with your security and compliance teams to ensure alignment with your organizational requirements.'
    },
    {
      id: 'pricing-1',
      category: 'Pricing',
      question: 'How do you structure pricing for AI projects?',
      answer: 'Our pricing structures are flexible and tailored to the nature of the engagement. For well-defined projects, we often use a fixed-price model based on detailed scoping. For more exploratory work or projects requiring an agile approach, we may use a time-and-materials model or a phased pricing structure. We also offer subscription models for ongoing services like AI maintenance and support. In all cases, we provide transparent pricing with clearly defined deliverables and milestones.'
    },
    {
      id: 'pricing-2',
      category: 'Pricing',
      question: 'What is the typical investment required for an AI implementation?',
      answer: 'Investment requirements vary significantly based on the scope and complexity of the implementation. Small-scale, focused AI projects might start at $50,000-$100,000, while enterprise-wide transformative initiatives can require investments of $500,000-$2,000,000+ over multiple phases. During the strategy and scoping phases, we work with you to prioritize initiatives based on business impact and implementation feasibility, allowing you to scale your investment according to demonstrated value.'
    },
    {
      id: 'pricing-3',
      category: 'Pricing',
      question: 'Do you offer any financing options for AI projects?',
      answer: 'Yes, we offer several financing options to help organizations manage the investment in AI. These include phased implementation approaches that spread costs over time, subscription-based pricing models for certain services, and partnerships with financial institutions that can provide technology financing. For qualified clients, we also occasionally consider outcome-based pricing models where a portion of our compensation is tied to achieving specific business results.'
    },
    {
      id: 'support-1',
      category: 'Support',
      question: 'What kind of ongoing support do you provide after implementation?',
      answer: 'We offer comprehensive post-implementation support through our AI Maintenance & Support service. This includes monitoring system performance, regular model retraining and updating, technical troubleshooting, and continuous optimization. Support is available at different service levels, from basic technical support during business hours to premium 24/7 support with guaranteed response times. We also provide knowledge transfer and documentation to enable your team to handle routine maintenance and simple modifications.'
    },
    {
      id: 'support-2',
      category: 'Support',
      question: 'How do you handle changes or updates to AI models over time?',
      answer: 'AI models require ongoing maintenance to maintain performance as data patterns change and new data becomes available. Our approach includes regular monitoring of model performance against key metrics, scheduled retraining cycles based on your specific needs, and version control systems to manage model evolution. For clients with our maintenance agreements, we provide proactive recommendations for model improvements and handle the technical aspects of updating models in production environments.'
    },
    {
      id: 'support-3',
      category: 'Support',
      question: 'Do you provide training for our team to maintain AI solutions?',
      answer: 'Yes, knowledge transfer and team enablement are central to our approach. We offer customized training programs for different stakeholders including technical teams, business users, and executives. Technical training covers model maintenance, system monitoring, and troubleshooting. For business users, we focus on effectively interpreting and acting on AI outputs. We also provide comprehensive documentation, standard operating procedures, and ongoing coaching to ensure your team can confidently work with the AI solutions we implement.'
    }
  ];

  const filteredFAQs = faqItems.filter(item => {
    return (
      item.category === activeCategory &&
      (searchTerm === '' || 
       item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
       item.answer.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <PageLayout 
      title="Frequently Asked Questions" 
      subtitle="Find answers to common questions about our AI solutions and services"
      className="max-w-4xl"
    >
      <section className="mb-8">
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-synthium-500 focus:border-transparent transition"
          />
        </div>
        
        <div className="flex overflow-x-auto pb-3 mb-6 hide-scrollbar">
          <div className="flex space-x-2">
            {faqCategories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                  activeCategory === category 
                    ? 'bg-synthium-500 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {filteredFAQs.length > 0 ? (
          <div className="space-y-4">
            {filteredFAQs.map((item) => (
              <div 
                key={item.id} 
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-lg">{item.question}</h3>
                  {openItems[item.id] ? (
                    <ChevronUp size={20} className="text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-500 flex-shrink-0" />
                  )}
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openItems[item.id] ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="p-5 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10 bg-gray-50 rounded-lg">
            <p className="text-gray-600 mb-2">No FAQs found matching your search criteria.</p>
            <button
              onClick={() => setSearchTerm('')}
              className="text-synthium-500 hover:text-synthium-600 font-medium"
            >
              Clear search
            </button>
          </div>
        )}
      </section>

      <section>
        <div className="bg-synthium-50 p-8 rounded-lg border border-synthium-100 text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            If you couldn't find the answer you were looking for, our team is here to help. Contact us directly 
            and we'll respond as quickly as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center bg-synthium-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-synthium-600 transition-colors"
            >
              Contact Us
              <ArrowRight size={16} className="ml-2" />
            </a>
            <a 
              href="mailto:info@synthiumai.com" 
              className="inline-flex items-center justify-center bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default FAQ;
