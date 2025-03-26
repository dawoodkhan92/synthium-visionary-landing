
import React from 'react';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About', href: '#' },
        { name: 'Team', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Privacy', href: '#' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'AI Strategy', href: '#' },
        { name: 'Custom Solutions', href: '#' },
        { name: 'Integration', href: '#' },
        { name: 'Training', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '#' },
        { name: 'Case Studies', href: '#' },
        { name: 'Guides', href: '#' },
        { name: 'FAQ', href: '#' },
      ],
    },
  ];

  return (
    <footer className={cn("bg-gray-50 py-16", className)}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="font-display text-2xl font-semibold mb-4">
              <span className="text-gradient">Synthium</span>
              <span className="text-sm font-medium text-synthium-600 ml-1">AI</span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Transforming businesses through intelligent AI solutions. We help organizations leverage artificial intelligence to innovate, automate, and grow.
            </p>
          </div>
          
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold text-gray-900 mb-4">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-600 hover:text-synthium-600 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} SynthiumAI. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-synthium-600 transition-colors">
              Twitter
            </a>
            <a href="#" className="text-gray-500 hover:text-synthium-600 transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-gray-500 hover:text-synthium-600 transition-colors">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
