
import React from 'react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  position,
  company,
  className,
}) => {
  return (
    <div className={cn("glass rounded-2xl p-8 h-full flex flex-col", className)}>
      <div className="mb-6 text-3xl text-synthium-200">"</div>
      <p className="text-gray-700 italic mb-6 flex-grow">{quote}</p>
      <div className="mt-auto">
        <p className="font-semibold text-gray-900">{author}</p>
        <p className="text-sm text-gray-600">
          {position}, {company}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
