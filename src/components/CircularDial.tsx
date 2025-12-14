import { useEffect, useRef, useState } from 'react';
import { User, GraduationCap, Rocket, Trophy, Heart, Mail } from 'lucide-react';

export interface DialSection {
  id: string;
  title: string;
  icon: typeof User;
  angle: number;
}

interface CircularDialProps {
  sections: DialSection[];
  activeSection: number;
  onSectionChange: (index: number) => void;
}

export const CircularDial = ({ sections, activeSection, onSectionChange }: CircularDialProps) => {
  const dialRef = useRef<HTMLDivElement>(null);
  const [currentAngle, setCurrentAngle] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle mouse wheel scroll
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // Determine scroll direction
    const direction = e.deltaY > 0 ? 1 : -1;
    
    // Calculate next section
    let nextSection = activeSection + direction;
    
    // Wrap around
    if (nextSection < 0) {
      nextSection = sections.length - 1;
    } else if (nextSection >= sections.length) {
      nextSection = 0;
    }
    
    onSectionChange(nextSection);
    
    // Reset animation lock after transition
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  // Smooth animation to target angle
  useEffect(() => {
    const sectionAngle = 360 / sections.length;
    const snapAngle = activeSection * sectionAngle;
    setCurrentAngle(snapAngle);
  }, [activeSection, sections.length]);

  const dialSize = 320;
  const radius = dialSize / 2 - 40;
  const sectionAngle = 360 / sections.length;

  return (
    <div className="flex items-center justify-center h-full" onWheel={handleWheel}>
      <div
        ref={dialRef}
        className="relative"
        style={{ width: dialSize, height: dialSize }}
      >
        {/* Outer Ring */}
        <div className="absolute inset-0 rounded-full border-4 border-primary/30 shadow-[0_0_30px_rgba(0,255,255,0.3)]">
          {/* Gradient overlay */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/5 to-transparent" />
        </div>

        {/* Center Circle */}
        <div className="absolute inset-[30%] rounded-full border-2 border-primary/50 bg-background/80 backdrop-blur-sm shadow-[inset_0_0_20px_rgba(0,255,255,0.2)]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-xs font-orbitron text-primary/60 mb-1">SYSTEM</div>
              <div className="text-2xl font-orbitron font-bold text-primary animate-pulse">
                {activeSection + 1}
              </div>
            </div>
          </div>
        </div>

        {/* Rotating Container */}
        <div
          className="absolute inset-0 transition-transform duration-500 ease-out"
          style={{
            transform: `rotate(${-currentAngle}deg)`,
          }}
        >
          {/* Section Icons */}
          {sections.map((section, index) => {
            const angle = index * sectionAngle;
            const radian = (angle - 90) * (Math.PI / 180);
            const x = dialSize / 2 + radius * Math.cos(radian);
            const y = dialSize / 2 + radius * Math.sin(radian);
            const Icon = section.icon;
            const isActive = index === activeSection;

            return (
              <div
                key={section.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: x,
                  top: y,
                  transform: `translate(-50%, -50%) rotate(${currentAngle}deg)`,
                  transition: 'all 0.5s ease-out',
                }}
              >
                <div
                  className={`
                    w-16 h-16 rounded-full border-2 flex items-center justify-center
                    transition-all duration-300
                    ${isActive 
                      ? 'border-primary bg-primary/20 shadow-[0_0_20px_rgba(0,255,255,0.6)] scale-125' 
                      : 'border-primary/40 bg-background/60 hover:border-primary/70 hover:bg-background/80'
                    }
                  `}
                >
                  <Icon 
                    className={`
                      transition-all duration-300
                      ${isActive ? 'w-8 h-8 text-primary' : 'w-6 h-6 text-primary/60'}
                    `}
                  />
                </div>
                
                {/* Section Label */}
                <div
                  className={`
                    absolute top-full mt-2 left-1/2 transform -translate-x-1/2
                    font-orbitron text-xs text-center whitespace-nowrap
                    transition-all duration-300
                    ${isActive ? 'text-primary font-bold opacity-100' : 'text-primary/50 opacity-70'}
                  `}
                >
                  {section.title.split(' ').map((word, i) => (
                    <div key={i}>{word}</div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Indicator Line */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent"
            style={{
              height: radius - 20,
              left: '50%',
              top: '20px',
              transform: 'translateX(-50%)',
              boxShadow: '0 0 10px rgba(0, 255, 255, 0.8)',
            }}
          />
        </div>

        {/* Tick Marks */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: sections.length }).map((_, i) => {
            const angle = i * sectionAngle;
            return (
              <div
                key={i}
                className="absolute w-0.5 h-4 bg-primary/30 left-1/2 top-0 origin-bottom"
                style={{
                  transform: `translateX(-50%) rotate(${angle}deg)`,
                  transformOrigin: `center ${dialSize / 2}px`,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
