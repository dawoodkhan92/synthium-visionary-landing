
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
  variant?: 'primary' | 'secondary';
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  delay = 0,
  variant = 'primary',
}) => {
  return (
    <div 
      className="glass p-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group h-full"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={cn(
        "service-icon",
        variant === 'primary' ? "service-icon-primary" : "service-icon-secondary"
      )}>
        <Icon size={28} className="transition-transform duration-500 ease-out" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
