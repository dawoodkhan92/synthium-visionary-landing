
import React, { useState, useEffect } from 'react';
import { X, MessageSquare, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import Button from './Button';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isAnimated, setIsAnimated] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Pulse animation after 5 seconds to draw attention
    const timer = setTimeout(() => {
      setIsAnimated(true);
      setTimeout(() => setIsAnimated(false), 2000);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    console.log('Chat message sent:', message);
    toast({
      title: "Message sent!",
      description: "We'll respond to your inquiry shortly.",
    });
    
    setMessage('');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="glass shadow-lg rounded-xl w-80 md:w-96 overflow-hidden transition-all duration-300 transform translate-y-0">
          <div className="bg-gradient-primary p-4 text-white flex items-center justify-between">
            <div className="flex items-center">
              <MessageSquare size={20} className="mr-2" />
              <span className="font-medium">Chat with SynthiumAI</span>
            </div>
            <button 
              onClick={toggleChat}
              className="text-white hover:text-white/80 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="bg-white p-4 h-64 overflow-y-auto">
            <div className="p-3 bg-gray-100 rounded-lg mb-3 max-w-[80%]">
              <p className="text-sm">
                Hello! How can we help you with AI solutions for your business today?
              </p>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="p-3 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-synthium-500 focus:border-transparent transition"
              />
              <Button
                type="submit"
                variant="primary"
                className="px-3"
                icon={<Send size={16} />}
              >
                Send
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className={`bg-synthium-500 text-white p-4 rounded-full shadow-lg hover:bg-synthium-600 transition-all duration-300 ${
            isAnimated ? 'animate-pulse' : ''
          }`}
          aria-label="Open chat"
        >
          <MessageSquare size={24} />
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
