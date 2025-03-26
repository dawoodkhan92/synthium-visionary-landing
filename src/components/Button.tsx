
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  onClick,
  ...props
}) => {
  const baseStyles = "relative inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-synthium-500 overflow-hidden";
  
  const variants = {
    primary: "bg-synthium-600 text-white hover:bg-synthium-700 shadow-sm",
    outline: "border border-synthium-600 text-synthium-600 hover:bg-synthium-50 hover:text-synthium-700",
    ghost: "text-synthium-600 hover:bg-synthium-50 hover:text-synthium-700",
    link: "text-synthium-600 hover:underline underline-offset-4 hover:text-synthium-700"
  };
  
  const sizes = {
    sm: "py-2 px-4 text-sm",
    md: "py-2.5 px-5 text-base",
    lg: "py-3 px-7 text-lg"
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Create ripple effect
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
    ripple.classList.add('absolute', 'rounded-full', 'bg-white', 'opacity-30', 'animate-ripple');
    
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 1000);
    
    if (onClick) onClick();
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
