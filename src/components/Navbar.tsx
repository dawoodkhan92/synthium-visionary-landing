
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import Button from './Button';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { 
      name: 'Services', 
      hasDropdown: true,
      href: '#services',
      dropdownLinks: [
        { name: 'AI Strategy', href: '/services/ai-strategy' },
        { name: 'Custom Solutions', href: '/services/custom-solutions' },
        { name: 'Integration', href: '/services/integration' },
        { name: 'Training', href: '/services/training' },
      ]
    },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
    { 
      name: 'Resources', 
      hasDropdown: true,
      href: '#',
      dropdownLinks: [
        { name: 'Blog', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Guides', href: '/guides' },
        { name: 'FAQ', href: '/faq' },
      ]
    },
    { 
      name: 'About', 
      hasDropdown: true,
      href: '/about',
      dropdownLinks: [
        { name: 'About Us', href: '/about' },
        { name: 'Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Privacy', href: '/privacy' },
      ]
    },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full',
        scrolled 
          ? 'py-3 glass shadow-sm border-b border-gray-100' 
          : 'py-5 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="font-display text-2xl font-bold">
            <span className="text-gradient-primary">Synthium</span>
            <span className="text-sm font-medium text-synthium-500 ml-1">AI</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                link.hasDropdown ? (
                  <NavigationMenuItem key={link.name}>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-gray-50 data-[state=open]:bg-gray-50">
                      {link.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-1 p-2">
                        {link.dropdownLinks?.map((dropdownLink) => (
                          <li key={dropdownLink.name}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={dropdownLink.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900"
                              >
                                <div className="text-sm font-medium leading-none">{dropdownLink.name}</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={link.name}>
                    {link.href.startsWith('#') ? (
                      <a
                        href={link.href}
                        className="text-gray-700 hover:text-synthium-500 font-medium transition-colors px-3 py-2"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-gray-700 hover:text-synthium-500 font-medium transition-colors px-3 py-2"
                      >
                        {link.name}
                      </Link>
                    )}
                  </NavigationMenuItem>
                )
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <Button variant="primary" size="sm">
            Get Started
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700 hover:text-gray-900 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden absolute left-0 right-0 top-full glass border-b border-gray-100 shadow-sm transition-all duration-300 ease-in-out overflow-hidden',
          isOpen ? 'max-h-[80vh] py-4 overflow-y-auto' : 'max-h-0'
        )}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-1">
          {navLinks.map((link) => (
            <div key={link.name} className="py-1">
              {link.hasDropdown ? (
                <div className="mb-2">
                  <div className="font-medium text-gray-700 py-2">
                    {link.name}
                  </div>
                  <div className="pl-4 border-l border-gray-200 ml-2 space-y-1">
                    {link.dropdownLinks?.map((dropdownLink) => (
                      <Link
                        key={dropdownLink.name}
                        to={dropdownLink.href}
                        className="block text-gray-600 hover:text-synthium-500 py-2 transition-colors text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        {dropdownLink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                link.href.startsWith('#') ? (
                  <a
                    href={link.href}
                    className="text-gray-700 hover:text-synthium-500 py-2 font-medium transition-colors block"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    className="text-gray-700 hover:text-synthium-500 py-2 font-medium transition-colors block"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>
          ))}
          <Button variant="primary" className="mt-4">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
