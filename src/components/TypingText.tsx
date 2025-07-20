import { useTypingEffect } from '@/hooks/useTypingEffect';
import { cn } from '@/lib/utils';

interface TypingTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  showCursor?: boolean;
}

export const TypingText = ({ 
  text, 
  className, 
  speed = 30, 
  delay = 0,
  showCursor = true
}: TypingTextProps) => {
  const { displayedText, isComplete } = useTypingEffect(text, speed, delay);

  return (
    <span className={cn('hologram-text', className)}>
      {displayedText}
      {showCursor && !isComplete && (
        <span className="animate-typing border-r-2 border-primary ml-1"></span>
      )}
    </span>
  );
};