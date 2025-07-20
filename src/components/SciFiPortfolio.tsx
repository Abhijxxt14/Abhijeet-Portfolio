import { useState } from 'react';
import { User, GraduationCap, Rocket, Trophy, Heart, Mail } from 'lucide-react';
import { SciFiContainer } from './SciFiContainer';
import { TypingText } from './TypingText';
import sciFiBackground from '@/assets/sci-fi-background.jpg';

interface Section {
  id: string;
  title: string;
  icon: typeof User;
  content: string[];
}

const sections: Section[] = [
  {
    id: 'personal',
    title: 'Personal Info',
    icon: User,
    content: [
      'Name: Alex Chen',
      'Role: Full-Stack Developer',
      'Location: Neo Tokyo, 2087',
      'Specialization: Quantum Computing & AI'
    ]
  },
  {
    id: 'education',
    title: 'Education',
    icon: GraduationCap,
    content: [
      'Ph.D. Computer Science - MIT Institute of Technology (2085)',
      'M.S. Artificial Intelligence - Stanford University (2083)',
      'B.S. Quantum Computing - Tokyo Tech (2081)',
      'Certified in Neural Network Architecture'
    ]
  },
  {
    id: 'projects',
    title: 'Projects & Achievements',
    icon: Rocket,
    content: [
      'Quantum AI Framework - Revolutionary quantum-classical hybrid computing system',
      'Neural Interface Protocol - Direct brain-computer communication interface',
      'Holographic Data Visualization - 3D holographic data manipulation platform',
      'Published 15 papers in top-tier quantum computing journals'
    ]
  },
  {
    id: 'extracurricular',
    title: 'Extra-curriculars',
    icon: Trophy,
    content: [
      'Captain of University Quantum Chess Team',
      'Volunteer at Digital Consciousness Research Lab',
      'Member of Interplanetary Coding Society',
      'Mentor for young AI developers'
    ]
  },
  {
    id: 'about',
    title: 'About Me',
    icon: Heart,
    content: [
      'Passionate about pushing the boundaries of human-computer interaction',
      'Believes in using technology to solve global challenges',
      'Enjoys creating immersive digital experiences',
      'Always exploring the intersection of consciousness and computation'
    ]
  },
  {
    id: 'contact',
    title: 'Contact',
    icon: Mail,
    content: [
      'Neural Network: alex.chen@quantum.neural',
      'Hologram: +81-xxx-xxx-xxxx',
      'Quantum Channel: alexchen_dev',
      'Available for interdimensional collaboration'
    ]
  }
];

export const SciFiPortfolio = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <div 
      className="min-h-screen bg-background text-foreground relative overflow-hidden grid-background"
      style={{
        backgroundImage: `url(${sciFiBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      {/* Side Navigation */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-20 space-y-4">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`nav-icon group ${
                activeSection === section.id ? 'active' : ''
              }`}
              title={section.title}
            >
              <Icon className="w-6 h-6 text-primary group-hover:text-hologram-glow transition-colors" />
            </button>
          );
        })}
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 pl-32 pr-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-orbitron font-black hologram-text mb-4 animate-text-glow">
              <TypingText text="NEURAL INTERFACE" speed={100} />
            </h1>
            <p className="text-xl text-muted-foreground font-tech">
              <TypingText 
                text="// Quantum Developer Portfolio System v2.087 //" 
                speed={50}
                delay={2000}
              />
            </p>
          </div>

          {/* Content Sections */}
          {sections.map((section, index) => (
            <SciFiContainer
              key={section.id}
              isVisible={activeSection === section.id}
              animationDelay={500}
              className="mb-8 max-w-3xl mx-auto"
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-4 border-b border-primary/30 pb-4">
                  <section.icon className="w-8 h-8 text-primary glow" />
                  <h2 className="text-3xl font-orbitron font-bold hologram-text">
                    {activeSection === section.id && (
                      <TypingText text={section.title} speed={50} delay={800} />
                    )}
                  </h2>
                </div>
                
                <div className="space-y-4">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="text-lg font-tech leading-relaxed">
                      {activeSection === section.id && (
                        <TypingText 
                          text={`> ${item}`}
                          speed={25}
                          delay={1200 + (itemIndex * 400)}
                          showCursor={false}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </SciFiContainer>
          ))}

          {/* Instructions */}
          {!activeSection && (
            <SciFiContainer isVisible={true} animationDelay={1000} className="text-center">
              <p className="text-xl font-tech text-muted-foreground">
                <TypingText 
                  text=">>> Click on navigation icons to access portfolio sections <<<"
                  speed={40}
                  delay={3000}
                />
              </p>
            </SciFiContainer>
          )}
        </div>
      </div>

      {/* Floating Particles Effect */}
      <div className="fixed inset-0 pointer-events-none z-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};