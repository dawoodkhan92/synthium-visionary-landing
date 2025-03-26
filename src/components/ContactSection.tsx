
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import Button from './Button';
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, ArrowRight, Check } from 'lucide-react';
import { trackFormSubmission, trackEvent } from '@/services/analytics';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    serviceInterest: '',
    message: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);

  const aiServices = [
    'AI Strategy Consulting',
    'Custom AI Solutions',
    'AI Integration Services',
    'AI Training & Workshops',
    'AI Maintenance & Support',
    'Not sure yet'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setFormData((prev) => ({ ...prev, [name]: val }));
    
    // Track service interest if the service field is changed
    if (name === 'serviceInterest' && value !== '') {
      trackEvent('Form', 'ServiceSelected', value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 1) {
      // Validate first step
      if (!formData.name || !formData.email) {
        toast({
          title: "Missing information",
          description: "Please fill in your name and email address.",
          variant: "destructive",
        });
        return;
      }
      
      // Proceed to second step
      setStep(2);
      trackEvent('Form', 'Step1Complete');
      return;
    }
    
    // Submit the form
    setIsSubmitting(true);
    
    try {
      // In a real implementation, you would send this data to your backend
      console.log('Form submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Track form submission
      trackFormSubmission('contact');
      
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
        phone: '',
        serviceInterest: '',
        message: '',
        consent: false
      });
      
      // Reset to step 1
      setStep(1);
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                    <div className="space-y-4 mb-6">
                      <h4 className="font-semibold">Our clients see:</h4>
                      <div className="flex items-start gap-2">
                        <Check size={16} className="mt-1 flex-shrink-0" />
                        <p className="text-sm text-white/90">40% reduction in operational costs</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check size={16} className="mt-1 flex-shrink-0" />
                        <p className="text-sm text-white/90">60% faster data analysis & insights</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check size={16} className="mt-1 flex-shrink-0" />
                        <p className="text-sm text-white/90">35% increase in customer satisfaction</p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-white/80 mb-4">Follow us on social media</p>
                      <div className="flex space-x-4">
                        {['Twitter', 'LinkedIn', 'Facebook'].map((platform) => (
                          <a 
                            key={platform} 
                            href="#" 
                            className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                            onClick={() => trackEvent('Social', 'Click', platform)}
                          >
                            {platform[0]}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-3 p-8 lg:p-12">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {step === 1 ? (
                      <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                              Full Name*
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
                              Email Address*
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
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-synthium-500 focus:border-transparent transition"
                            />
                          </div>
                        </div>
                        <div>
                          <Button 
                            type="submit" 
                            variant="primary" 
                            className="w-full" 
                            icon={<ArrowRight size={18} />}
                          >
                            Continue
                          </Button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <label htmlFor="serviceInterest" className="block text-sm font-medium text-gray-700 mb-1">
                            Which AI service are you interested in?
                          </label>
                          <select
                            id="serviceInterest"
                            name="serviceInterest"
                            value={formData.serviceInterest}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-synthium-500 focus:border-transparent transition"
                          >
                            <option value="">Select a service...</option>
                            {aiServices.map((service) => (
                              <option key={service} value={service}>
                                {service}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                            How can we help with your AI needs?
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
                        <div className="flex items-start">
                          <input
                            type="checkbox"
                            id="consent"
                            name="consent"
                            checked={formData.consent}
                            onChange={handleChange}
                            className="mt-1 mr-2"
                            required
                          />
                          <label htmlFor="consent" className="text-sm text-gray-600">
                            I agree to receive communications from SynthiumAI about their services and AI industry insights. View our <a href="#" className="text-synthium-500 hover:underline">Privacy Policy</a>.
                          </label>
                        </div>
                        <div className="flex gap-4">
                          <Button 
                            type="button" 
                            variant="outline" 
                            className="w-1/3" 
                            onClick={() => setStep(1)}
                          >
                            Back
                          </Button>
                          <Button 
                            type="submit" 
                            variant="primary" 
                            className="w-2/3" 
                            icon={<Send size={18} />}
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                          </Button>
                        </div>
                      </>
                    )}
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
