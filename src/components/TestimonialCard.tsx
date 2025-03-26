
import React from 'react';
import { cn } from '@/lib/utils';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  className?: string;
  variant?: 'primary' | 'secondary';
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  position,
  company,
  className,
  variant = 'primary',
}) => {
  return (
    <div className={cn(
      "glass rounded-xl p-8 h-full flex flex-col card-hover", 
      className,
      variant === 'secondary' ? "border-l-4 border-l-purple-500" : "border-l-4 border-l-synthium-500"
    )}>
      <div className={cn(
        "mb-6",
        variant === 'secondary' ? "text-purple-500" : "text-synthium-500"
      )}>
        <Quote size={28} />
      </div>
      <p className="text-gray-700 italic mb-6 flex-grow">{quote}</p>
      <div className="mt-auto pt-6 border-t border-gray-100">
        <p className="font-semibold text-gray-900">{author}</p>
        <p className="text-sm text-gray-600">
          {position}, {company}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
