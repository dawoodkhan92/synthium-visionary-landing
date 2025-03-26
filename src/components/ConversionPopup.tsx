
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Button from './Button';

interface ConversionPopupProps {
  delay?: number; // Delay in milliseconds before showing the popup
}

const ConversionPopup: React.FC<ConversionPopupProps> = ({ delay = 15000 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Show popup after delay
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem('synthium_popup_seen');
      if (!hasSeenPopup && !isDismissed) {
        setIsVisible(true);
        localStorage.setItem('synthium_popup_seen', 'true');
      }
    }, delay);

    // Add exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (
        e.clientY <= 0 && 
        !isDismissed && 
        !localStorage.getItem('synthium_popup_seen')
      ) {
        setIsVisible(true);
        localStorage.setItem('synthium_popup_seen', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [delay, isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full relative overflow-hidden">
        <button 
          onClick={handleDismiss}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 z-10"
          aria-label="Close popup"
        >
          <X size={20} />
        </button>
        
        <div className="bg-gradient-primary p-4 text-white">
          <h3 className="text-xl font-bold">Ready to Transform Your Business?</h3>
        </div>
        
        <div className="p-6">
          <p className="text-gray-700 mb-4">
            Get a free consultation with our AI experts and discover how SynthiumAI can help your business grow.
          </p>
          
          <div className="space-y-2 mb-6">
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
              <span className="text-sm text-gray-700">Custom AI solutions tailored to your needs</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
              <span className="text-sm text-gray-700">Improve operational efficiency by up to 40%</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
              <span className="text-sm text-gray-700">Stay ahead of your competition</span>
            </div>
          </div>
          
          <div className="flex flex-col space-y-2">
            <Button variant="primary" className="w-full" onClick={() => window.location.href = '#contact'}>
              Book Free Consultation
            </Button>
            <button 
              onClick={handleDismiss} 
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              No thanks, I'm not interested in growth
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversionPopup;
