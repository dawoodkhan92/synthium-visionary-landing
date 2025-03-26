
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import Button from './Button';
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send this data to your backend
    console.log('Form submitted:', formData);
    
    // Show success message
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-synthium-50 text-synthium-500 text-sm font-medium mb-4 border border-synthium-100">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-gray-900">
            Start Your <span className="text-gradient-primary">AI Transformation</span> Today
          </h2>
          <p className="text-lg text-gray-600">
            Schedule a consultation with our AI experts and discover how we can help your business grow.
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="glass rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-2 bg-gradient-primary p-8 lg:p-12 text-white">
                  <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                  
                  <div className="space-y-8">
                    <div className="flex items-start">
                      <div className="mr-4 p-2 bg-white/10 rounded-lg">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="text-white/80 mb-1 text-sm">Email</p>
                        <p className="font-medium">contact@synthiumai.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-4 p-2 bg-white/10 rounded-lg">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="text-white/80 mb-1 text-sm">Phone</p>
                        <p className="font-medium">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-4 p-2 bg-white/10 rounded-lg">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-white/80 mb-1 text-sm">Address</p>
                        <p className="font-medium">123 AI Boulevard, Suite 456<br />San Francisco, CA 94105</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-12 pt-8 border-t border-white/20">
                    <p className="text-white/80 mb-4">Follow us on social media</p>
                    <div className="flex space-x-4">
                      {['Twitter', 'LinkedIn', 'Facebook'].map((platform) => (
                        <a key={platform} href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                          {platform[0]}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-3 p-8 lg:p-12">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-synthium-500 focus:border-transparent transition"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-synthium-500 focus:border-transparent transition"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-synthium-500 focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        How can we help?
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-synthium-500 focus:border-transparent transition"
                        required
                      ></textarea>
                    </div>
                    <div>
                      <Button 
                        type="submit" 
                        variant="primary" 
                        className="w-full" 
                        icon={<Send size={18} />}
                      >
                        Send Message
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
