
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { trackPageView } from '@/services/analytics';
import { Download, BookOpen, Clock, Calendar, FileText, ArrowRight } from 'lucide-react';

const Guides: React.FC = () => {
  useEffect(() => {
    document.title = 'AI Guides & Resources - SynthiumAI';
    trackPageView('guides');
  }, []);

  const featuredGuides = [
    {
      title: "The Executive's Guide to AI Strategy",
      description: "A comprehensive framework for business leaders to develop and implement effective AI strategies.",
      image: "https://images.unsplash.com/photo-1578496479932-143d729b1fd4?auto=format&fit=crop&q=80&w=1200&h=750",
      category: "Strategy",
      date: "July 2023",
      readTime: "25 min"
    },
    {
      title: "Measuring AI ROI: Beyond Cost Savings",
      description: "How to evaluate the full business impact of AI investments, including direct and indirect benefits.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200&h=750",
      category: "Business",
      date: "May 2023",
      readTime: "20 min"
    },
    {
      title: "Building an Effective AI Center of Excellence",
      description: "Best practices for establishing a centralized AI capability that drives innovation across your organization.",
      image: "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?auto=format&fit=crop&q=80&w=1200&h=750",
      category: "Organization",
      date: "June 2023",
      readTime: "30 min"
    }
  ];

  const resourceCategories = [
    {
      title: "Getting Started with AI",
      resources: [
        {
          title: "AI 101: Core Concepts for Business Leaders",
          type: "Guide",
          date: "July 2023"
        },
        {
          title: "Assessing Your Organization's AI Readiness",
          type: "Toolkit",
          date: "June 2023"
        },
        {
          title: "Identifying High-Value AI Use Cases",
          type: "Worksheet",
          date: "August 2023"
        },
        {
          title: "Building Your First AI Project: A Step-by-Step Approach",
          type: "Guide",
          date: "May 2023"
        }
      ]
    },
    {
      title: "AI Implementation",
      resources: [
        {
          title: "Data Preparation Best Practices for AI Projects",
          type: "Guide",
          date: "April 2023"
        },
        {
          title: "Selecting the Right AI Technologies: Evaluation Framework",
          type: "Toolkit",
          date: "June 2023"
        },
        {
          title: "Managing AI Projects: Agile Methodology Adaptations",
          type: "Guide",
          date: "July 2023"
        },
        {
          title: "AI Integration Patterns for Enterprise Systems",
          type: "Technical Paper",
          date: "March 2023"
        }
      ]
    },
    {
      title: "AI Governance & Ethics",
      resources: [
        {
          title: "Creating an Ethical AI Framework for Your Organization",
          type: "Guide",
          date: "May 2023"
        },
        {
          title: "AI Risk Assessment Template",
          type: "Toolkit",
          date: "April 2023"
        },
        {
          title: "Navigating AI Regulations: Global Compliance Overview",
          type: "Report",
          date: "August 2023"
        },
        {
          title: "Responsible AI Checklist for Practitioners",
          type: "Worksheet",
          date: "July 2023"
        }
      ]
    }
  ];

  const whitepapers = [
    {
      title: "The Future of Work in an AI-Enhanced Economy",
      description: "Exploring how artificial intelligence will transform jobs, skills, and organizational structures over the next decade.",
      pages: 42,
      date: "June 2023"
    },
    {
      title: "AI Governance Frameworks: Comparative Analysis",
      description: "A detailed comparison of AI governance approaches across industries and regions, with practical implementation guidance.",
      pages: 38,
      date: "May 2023"
    },
    {
      title: "Beyond Prediction: The Rise of Decision Intelligence",
      description: "How decision intelligence is evolving beyond predictive analytics to transform business decision-making processes.",
      pages: 55,
      date: "July 2023"
    }
  ];

  return (
    <PageLayout 
      title="AI Guides & Resources" 
      subtitle="Free, valuable resources to help you navigate the world of artificial intelligence"
      className="max-w-6xl"
    >
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Featured Guides</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredGuides.map((guide, index) => (
            <div key={index} className="border border-gray-100 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={guide.image} 
                  alt={guide.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-synthium-500 text-white rounded-full text-xs font-medium">{guide.category}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{guide.title}</h3>
                <p className="text-gray-600 mb-4">{guide.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    <span>{guide.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    <span>{guide.readTime}</span>
                  </div>
                </div>
                <a 
                  href="#" 
                  className="flex items-center justify-center w-full p-2 bg-synthium-50 text-synthium-500 rounded-lg hover:bg-synthium-100 transition-colors font-medium"
                >
                  <Download size={16} className="mr-2" />
                  Download Guide
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Resource Library</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {resourceCategories.map((category, index) => (
            <div key={index} className="border border-gray-100 rounded-lg bg-white shadow-sm p-6">
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.resources.map((resource, i) => (
                  <li key={i} className="border-b border-gray-100 pb-3 last:border-b-0 last:pb-0">
                    <div className="flex justify-between items-start mb-1">
                      <div className="pr-2">
                        <h4 className="font-medium text-gray-900">{resource.title}</h4>
                      </div>
                      <div className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs flex-shrink-0">
                        {resource.type}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500 flex items-center">
                        <Calendar size={12} className="mr-1" />
                        {resource.date}
                      </div>
                      <a 
                        href="#" 
                        className="text-synthium-500 hover:text-synthium-600 text-sm flex items-center"
                      >
                        <Download size={14} className="mr-1" />
                        Download
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
              <a 
                href="#" 
                className="flex items-center justify-center mt-4 text-synthium-500 hover:text-synthium-600 font-medium"
              >
                <span>View all resources</span>
                <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Whitepapers & Reports</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {whitepapers.map((whitepaper, index) => (
            <div key={index} className="bg-white border border-gray-100 p-6 rounded-lg shadow-sm">
              <div className="mb-4">
                <BookOpen size={28} className="text-synthium-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">{whitepaper.title}</h3>
              <p className="text-gray-600 mb-4">{whitepaper.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  <span>{whitepaper.date}</span>
                </div>
                <div className="flex items-center">
                  <FileText size={14} className="mr-1" />
                  <span>{whitepaper.pages} pages</span>
                </div>
              </div>
              <a 
                href="#" 
                className="flex items-center justify-center w-full p-2 bg-synthium-50 text-synthium-500 rounded-lg hover:bg-synthium-100 transition-colors font-medium"
              >
                <Download size={16} className="mr-2" />
                Download Whitepaper
              </a>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="bg-synthium-50 p-8 rounded-lg border border-synthium-100">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:pr-8 mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Need Custom Resources?</h2>
              <p className="text-gray-600 max-w-xl">
                Our team can develop tailored guidance and training materials specific to your industry and challenges.
                Contact us to discuss your educational needs.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center bg-synthium-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-synthium-600 transition-colors"
              >
                Contact Us
                <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Guides;
