import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { DialSection } from './CircularDial';

interface MobileNavProps {
  sections: DialSection[];
  activeSection: number;
  onSectionChange: (index: number) => void;
}

export const MobileNav = ({ sections, activeSection, onSectionChange }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSectionClick = (index: number) => {
    onSectionChange(index);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Nav Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 lg:hidden w-12 h-12 rounded-full border-2 border-primary bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary/20 transition-all"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-primary" />
        ) : (
          <Menu className="w-6 h-6 text-primary" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-background/95 backdrop-blur-md z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu Content */}
          <div className="fixed inset-x-0 top-0 bottom-0 z-40 lg:hidden overflow-y-auto">
            <div className="min-h-screen p-6 pt-20">
              <div className="max-w-md mx-auto space-y-3">
                <h2 className="text-xl font-orbitron font-bold text-primary mb-6 text-center">
                  NAVIGATION MENU
                </h2>
                
                {sections.map((section, index) => {
                  const Icon = section.icon;
                  const isActive = index === activeSection;
                  
                  return (
                    <button
                      key={section.id}
                      onClick={() => handleSectionClick(index)}
                      className={`
                        w-full p-4 rounded-lg border-2 transition-all duration-300
                        flex items-center space-x-4
                        ${isActive 
                          ? 'border-primary bg-primary/20 shadow-[0_0_20px_rgba(0,255,255,0.4)]' 
                          : 'border-primary/30 bg-background/60 hover:border-primary/60 hover:bg-primary/10'
                        }
                      `}
                    >
                      <div className={`
                        w-12 h-12 rounded-full border-2 flex items-center justify-center flex-shrink-0
                        ${isActive ? 'border-primary bg-primary/30' : 'border-primary/40 bg-background/40'}
                      `}>
                        <Icon className={`w-6 h-6 ${isActive ? 'text-primary' : 'text-primary/60'}`} />
                      </div>
                      
                      <div className="flex-1 text-left">
                        <div className={`
                          font-orbitron font-bold text-sm
                          ${isActive ? 'text-primary' : 'text-primary/70'}
                        `}>
                          {section.title}
                        </div>
                      </div>

                      {isActive && (
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse flex-shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
