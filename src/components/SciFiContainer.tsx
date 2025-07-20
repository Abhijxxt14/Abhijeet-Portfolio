import { ReactNode, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface SciFiContainerProps {
  children: ReactNode;
  className?: string;
  isVisible: boolean;
  animationDelay?: number;
}

export const SciFiContainer = ({ 
  children, 
  className, 
  isVisible, 
  animationDelay = 0 
}: SciFiContainerProps) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, animationDelay);
      return () => clearTimeout(timer);
    } else {
      setShouldAnimate(false);
    }
  }, [isVisible, animationDelay]);

  return (
    <div
      className={cn(
        'sci-fi-container p-6 transition-all duration-1000',
        shouldAnimate 
          ? 'opacity-100 scale-100 animate-hologram-in' 
          : 'opacity-0 scale-95',
        className
      )}
    >
      {children}
    </div>
  );
};