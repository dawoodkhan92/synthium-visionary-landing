
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  delay = 0,
}) => {
  return (
    <div 
      className="glass p-8 rounded-2xl transition-all duration-300 hover:shadow-md group h-full"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 rounded-xl bg-synthium-50 flex items-center justify-center mb-6 text-synthium-600 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-3">
        <Icon size={28} className="transition-transform duration-500 ease-out" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
