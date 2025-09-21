import { Fragment } from 'react';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { cn } from '@/lib/utils';
import { parseTextWithLinks } from '@/lib/security';

interface TypingTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  showCursor?: boolean;
  secureLinks?: boolean;
}

export const TypingText = ({ 
  text, 
  className, 
  speed = 30, 
  delay = 0,
  showCursor = true,
  secureLinks = false
}: TypingTextProps) => {
  const { displayedText, isComplete } = useTypingEffect(text, speed, delay);

  if (secureLinks && displayedText) {
    const segments = parseTextWithLinks(displayedText);
    
    return (
      <span className={cn('hologram-text', className)}>
        {segments.map((segment, index) => {
          if (segment.type === 'link') {
            return (
              <a
                key={index}
                href={segment.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-hologram-glow underline underline-offset-2"
              >
                {segment.content}
              </a>
            );
          }
          return <span key={index}>{segment.content}</span>;
        })}
        {showCursor && !isComplete && (
          <span className="animate-typing border-r-2 border-primary ml-1"></span>
        )}
      </span>
    );
  }

  return (
    <span className={cn('hologram-text', className)}>
      {displayedText}
      {showCursor && !isComplete && (
        <span className="animate-typing border-r-2 border-primary ml-1"></span>
      )}
    </span>
  );
};