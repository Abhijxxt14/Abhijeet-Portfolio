import { useEffect, useState } from 'react';
import { TypingText } from './TypingText';
import type { DialSection } from './CircularDial';

interface ContentPanelProps {
  section: {
    id: string;
    title: string;
    subtitle?: string;
    icon: typeof import('lucide-react').User;
    content: string[];
  };
  sectionIndex: number;
}

export const ContentPanel = ({ section, sectionIndex }: ContentPanelProps) => {
  const [key, setKey] = useState(0);
  const Icon = section.icon;

  // Force re-render when section changes to restart animations
  useEffect(() => {
    setKey(prev => prev + 1);
  }, [section.id]);

  return (
    <div key={key} className="h-full flex flex-col p-8 overflow-hidden">
      {/* Header */}
      <div className="flex items-center space-x-4 border-b border-primary/30 pb-6 mb-6">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
          <div className="relative w-16 h-16 rounded-full border-2 border-primary bg-background/80 flex items-center justify-center">
            <Icon className="w-8 h-8 text-primary animate-pulse-glow" />
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-orbitron font-bold hologram-text mb-1">
            <TypingText text={section.title} speed={50} delay={200} />
          </h2>
          {section.subtitle && (
            <p className="text-sm text-primary/70 font-tech">
              <TypingText text={section.subtitle} speed={30} delay={1000} />
            </p>
          )}
        </div>
        <div className="text-right">
          <div className="text-xs font-orbitron text-primary/50 mb-1">SECTION</div>
          <div className="text-3xl font-orbitron font-bold text-primary">
            {String(sectionIndex + 1).padStart(2, '0')}
          </div>
        </div>
      </div>

      {/* Content Area - Scrollable but styled to fit */}
      <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
        <div className="grid grid-cols-1 gap-4">
          {section.content.map((item, itemIndex) => {
            // Calculate dynamic delays for staggered animation
            const delay = 1500 + (itemIndex * 400);
            
            return (
              <div
                key={itemIndex}
                className="group relative"
                style={{
                  animationDelay: `${itemIndex * 100}ms`,
                }}
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content Card */}
                <div className="relative flex items-start space-x-3 p-4 rounded-lg border border-primary/10 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                  {/* Bullet Point */}
                  <div className="relative mt-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <div className="absolute inset-0 w-2 h-2 rounded-full bg-primary/50 animate-ping" />
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex-1 font-tech text-primary/90 leading-relaxed">
                    <TypingText
                      text={item}
                      speed={15}
                      delay={delay}
                      showCursor={false}
                      secureLinks={true}
                    />
                  </div>
                </div>
                
                {/* Connection Line to Next Item */}
                {itemIndex < section.content.length - 1 && (
                  <div className="ml-[11px] h-3 w-0.5 bg-gradient-to-b from-primary/30 to-transparent" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Stats */}
      <div className="mt-6 pt-4 border-t border-primary/20">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-xs font-orbitron text-primary/50 mb-1">ENTRIES</div>
            <div className="text-lg font-orbitron font-bold text-primary">
              {String(section.content.length).padStart(2, '0')}
            </div>
          </div>
          <div>
            <div className="text-xs font-orbitron text-primary/50 mb-1">STATUS</div>
            <div className="text-sm font-orbitron font-bold text-green-400">ACTIVE</div>
          </div>
          <div>
            <div className="text-xs font-orbitron text-primary/50 mb-1">SYNC</div>
            <div className="text-sm font-orbitron font-bold text-primary">100%</div>
          </div>
        </div>
      </div>
    </div>
  );
};
