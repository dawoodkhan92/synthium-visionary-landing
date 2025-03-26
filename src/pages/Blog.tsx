
import React, { useEffect, useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { trackPageView } from '@/services/analytics';
import { Calendar, Clock, ChevronRight, Search } from 'lucide-react';

const Blog: React.FC = () => {
  useEffect(() => {
    document.title = 'Blog - SynthiumAI Insights and News';
    trackPageView('blog');
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Enterprise Decision-Making",
      excerpt: "How advanced artificial intelligence is transforming how businesses make strategic and operational decisions.",
      category: "AI Strategy",
      author: "Dr. Sarah Chen",
      date: "June 15, 2023",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: 2,
      title: "Implementing Ethical AI: A Framework for Responsible Innovation",
      excerpt: "A comprehensive approach to building AI systems that are not only powerful but also ethical, transparent, and fair.",
      category: "Ethics & Governance",
      author: "Michael Rodriguez",
      date: "May 28, 2023",
      readTime: "12 min",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: 3,
      title: "The ROI of AI: Measuring Business Impact Beyond Cost Savings",
      excerpt: "How organizations can evaluate the full spectrum of value created by artificial intelligence investments.",
      category: "Business Value",
      author: "Aisha Patel",
      date: "May 12, 2023",
      readTime: "10 min",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: 4,
      title: "Deep Learning Breakthroughs: Latest Advances in Neural Networks",
      excerpt: "Exploring recent innovations in deep learning architectures that are pushing the boundaries of AI capabilities.",
      category: "Technical",
      author: "Dr. James Wilson",
      date: "April 30, 2023",
      readTime: "15 min",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: 5,
      title: "AI-Powered Customer Experience: Beyond Chatbots",
      excerpt: "How leading companies are using sophisticated AI to create personalized, engaging customer journeys.",
      category: "Customer Experience",
      author: "Elena Volkov",
      date: "April 15, 2023",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: 6,
      title: "Building AI Capability: Strategic Approaches to Talent and Technology",
      excerpt: "Strategies for developing the organizational capabilities needed to succeed with artificial intelligence.",
      category: "AI Strategy",
      author: "David Kim",
      date: "March 28, 2023",
      readTime: "9 min",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  const categories = ['all', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <PageLayout 
      title="SynthiumAI Blog" 
      subtitle="Insights, analysis, and thought leadership on artificial intelligence and its business applications"
      className="max-w-6xl"
    >
      <section className="mb-12">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-synthium-500 focus:border-transparent transition"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category 
                    ? 'bg-synthium-500 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'All Categories' : category}
              </button>
            ))}
          </div>
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <article key={post.id} className="border border-gray-100 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="px-3 py-1 bg-synthium-50 text-synthium-600 rounded-full text-xs font-medium">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <a href="#" className="text-synthium-500 hover:text-synthium-600 flex items-center">
                      <span>Read</span>
                      <ChevronRight size={16} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-50 rounded-lg">
            <p className="text-xl text-gray-600 mb-4">No articles found matching your criteria</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('all');
              }}
              className="text-synthium-500 hover:text-synthium-600 font-medium"
            >
              Reset filters
            </button>
          </div>
        )}
      </section>

      <section>
        <div className="bg-synthium-50 p-8 rounded-lg border border-synthium-100">
          <h2 className="text-2xl font-bold mb-4 text-center">Subscribe to Our Newsletter</h2>
          <p className="text-center mb-6 max-w-2xl mx-auto">
            Stay informed with the latest AI insights, trends, and best practices delivered straight to your inbox.
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-synthium-500 focus:border-transparent transition"
                required
              />
              <button
                type="submit"
                className="bg-synthium-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-synthium-600 transition-colors"
              >
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </section>
    </PageLayout>
  );
};

export default Blog;
