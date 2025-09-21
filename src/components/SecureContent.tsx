import { Fragment } from 'react';
import { parseTextWithLinks } from '@/lib/security';

interface SecureContentProps {
  content: string;
  className?: string;
}

/**
 * A component that renders text content with secure links
 * Any URLs in the text will be rendered as <a> tags with proper security attributes
 */
export const SecureContent = ({ content, className }: SecureContentProps) => {
  const segments = parseTextWithLinks(content);

  return (
    <span className={className}>
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
    </span>
  );
};