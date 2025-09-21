import { useState } from 'react';
import { User, GraduationCap, Rocket, Trophy, Heart, Mail, Code, Brain } from 'lucide-react';
import { SciFiContainer } from './SciFiContainer';
import { TypingText } from './TypingText';
import { StatusPanel } from './StatusPanel';
import { TerminalDisplay } from './TerminalDisplay';
import { SecureContent } from './SecureContent';
import sciFiBackground from '@/assets/sci-fi-background.jpg';

interface Section {
  id: string;
  title: string;
  icon: typeof User;
  content: string[];
  subtitle?: string;
}

const sections: Section[] = [
  {
    id: 'personal', 
    title: 'NEURAL PROFILE',
    subtitle: 'Personal Identity Matrix',
    icon: User,
    content: [
      'DESIGNATION: Abhijeet Soren',
      'CLASSIFICATION: Front End Developer & IoT Enthusiast',
      'COORDINATES: Bhubaneswar, Odisha, India',
      'SPECIALIZATION: React, Vite, IoT Development, Web Technologies',
      'CLEARANCE LEVEL: B.Tech Student (2023-2027)',
      'BIOMETRIC STATUS: Active'
    ]
  },
  {
    id: 'education',
    title: 'KNOWLEDGE BASE',
    subtitle: 'Educational Algorithms',
    icon: GraduationCap,
    content: [
      'Bachelor of Technology (Pursuing) - Institute of Technical Education and Research, SOA (2023-2027)',
      'Class 12 - DPS Kalinga (Completed)',
      'Date of Birth: 14.11.2004',
      'Current Status: Undergraduate Student',
      'Focus Areas: Computer Science & Engineering',
      'Academic Journey: Building foundation in technology'
    ]
  },
  {
    id: 'projects',
    title: 'PROJECT ARCHIVES',
    subtitle: 'Mission Accomplishments',
    icon: Rocket,
    content: [
      'VigilloT: IoT monitoring system with real-time anomaly detection and notifications',
      'Built with Vite and React, featuring responsive interface for device visualization',
      'Live Demo: https://abhijeetvigillot.netlify.app/',
      'CodeCrafter: Interactive front-end teaching platform for web development beginners',
      'Features tutorials, coding challenges, and real-time feedback for HTML, CSS, JavaScript',
      'Live Demo: https://codecrafterz.netlify.app/ (In Development)'
    ]
  },
  {
    id: 'extracurricular',
    title: 'AUXILIARY PROGRAMS',
    subtitle: 'Extended Activities',
    icon: Trophy,
    content: [
      'STUDENT: Bachelor of Technology Computer Science - SOA University',
      'DEVELOPER: Personal projects in Internet of Things and Web Development',
      'LEARNER: Continuous skill development in modern web technologies',
      'CREATOR: Building educational platforms for coding beginners',
      'INNOVATOR: Exploring Internet of Things solutions for real-world problems',
      'TECH ENTHUSIAST: Passionate about emerging technologies'
    ]
  },
  {
    id: 'about',
    title: 'CONSCIOUSNESS PROFILE',
    subtitle: 'Core Directives and Philosophy',
    icon: Heart,
    content: [
      'PRIMARY DIRECTIVE: Creating innovative solutions through technology',
      'MISSION: Building user-friendly applications that solve real-world problems',
      'PASSION: Internet of Things development and interactive web experiences',
      'FOCUS: Front-end development with emphasis on React and modern frameworks',
      'PHILOSOPHY: Technology should be accessible and educational for everyone',
      'VISION: Becoming a skilled developer who contributes to technological advancement'
    ]
  },
  {
    id: 'contact',
    title: 'COMMUNICATION PROTOCOLS',
    subtitle: 'Quantum Channel Access',
    icon: Mail,
    content: [
      'EMAIL: abhijeetsoren222@gmail.com',
      'PHONE: +91-9348957556',
      'LINKEDIN: https://www.linkedin.com/in/abhijeet-soren-a7654b2b5/',
      'PROJECTS: VigilloT & CodeCrafter (Live Demos Available)',
      'AVAILABILITY: Open for collaboration and opportunities',
      'PREFERRED: Email for professional inquiries'
    ]
  }
];

export const AdvancedSciFiPortfolio = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <div 
      className="min-h-screen bg-background text-foreground relative overflow-x-hidden"
      style={{
        backgroundImage: `url(${sciFiBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Enhanced Background Overlay */}
      <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
      
      {/* Matrix Rain Effect */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Command Center Layout */}
      <div className="command-center relative z-10">
        
        {/* Left Navigation Panel */}
        <div className="nav-panel">
          <div className="mb-6">
            <h2 className="text-sm md:text-lg font-orbitron font-bold text-primary mb-4 tracking-wider text-center md:text-left">
              NAVIGATION
            </h2>
          </div>
          
          <div className="grid grid-cols-3 gap-2 md:grid-cols-1 md:space-y-3 md:gap-0">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`nav-icon-advanced w-full group ${
                    activeSection === section.id ? 'active' : ''
                  }`}
                  title={section.title}
                >
                  <div className="flex flex-col items-center space-y-2">
                    <Icon className="w-6 h-6 text-primary group-hover:text-hologram-glow transition-colors" />
                    <span className="text-xs font-orbitron text-center leading-tight hidden md:block">
                      {section.title.split(' ').map((word, i) => (
                        <div key={i}>{word}</div>
                      ))}
                    </span>
                    <span className="text-xs font-orbitron text-center leading-tight md:hidden">
                      {section.title.split(' ')[0]}
                    </span>
                  </div>
                  
                  {/* Data stream effect */}
                  {activeSection === section.id && (
                    <div className="data-stream"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Central Holographic Display */}
        <div className="main-display">
          {/* Header HUD */}
          <div className="relative mb-4 md:mb-6">
            <div className="holo-screen p-4 md:p-6 text-center">
              {/* HUD Corner Elements */}
              <div className="hud-corner top-left"></div>
              <div className="hud-corner top-right"></div>
              <div className="hud-corner bottom-left"></div>
              <div className="hud-corner bottom-right"></div>
              
              {/* Scanning Line */}
              <div className="scan-line"></div>
              
              <h1 className="text-2xl md:text-4xl font-orbitron font-black hologram-text mb-2 animate-text-glow">
                <TypingText text="ABHIJEET SOREN - PORTFOLIO SYSTEM" speed={80} />
              </h1>
              <div className="text-primary/80 font-tech text-xs md:text-sm">
                <TypingText 
                  text="// FRONT END DEVELOPER & IOT ENTHUSIAST //" 
                  speed={40}
                  delay={3000}
                />
              </div>
              
              {/* Status bar */}
              <div className="flex justify-center space-x-3 md:space-x-6 mt-4 text-xs font-mono">
                <span className="text-green-400">● ONLINE</span>
                <span className="text-primary">● QUANTUM-LINKED</span>
                <span className="text-blue-400">● ENCRYPTED</span>
              </div>
            </div>
          </div>

          {/* Main Content Display */}
          <div className="flex-1 overflow-y-auto">
            {sections.map((section) => (
              activeSection === section.id && (
                <div key={section.id} className="holo-screen p-4 md:p-8 min-h-full">
                  {/* HUD Elements */}
                  <div className="hud-corner top-left"></div>
                  <div className="hud-corner top-right"></div>
                  <div className="hud-corner bottom-left"></div>
                  <div className="hud-corner bottom-right"></div>
                  
                  <SciFiContainer
                    isVisible={true}
                    animationDelay={200}
                    className="min-h-full border-none bg-transparent p-0"
                  >
                    <div className="space-y-4 md:space-y-6">
                      {/* Section Header */}
                      <div className="flex items-center space-x-3 md:space-x-4 border-b border-primary/30 pb-3 md:pb-4">
                        <section.icon className="w-6 h-6 md:w-8 md:h-8 text-primary animate-pulse-glow" />
                        <div>
                          <h2 className="text-xl md:text-2xl font-orbitron font-bold hologram-text">
                            <TypingText text={section.title} speed={60} delay={500} />
                          </h2>
                          {section.subtitle && (
                            <p className="text-xs md:text-sm text-muted-foreground font-tech">
                              <TypingText text={section.subtitle} speed={40} delay={1500} />
                            </p>
                          )}
                        </div>
                      </div>
                      
                      {/* Content Grid */}
                      <div className="grid grid-cols-1 gap-3 md:gap-4 max-h-96 md:max-h-none overflow-y-auto">
                        {section.content.map((item, itemIndex) => (
                          <div 
                            key={itemIndex} 
                            className="flex items-start space-x-2 md:space-x-3 p-2 md:p-3 rounded-lg border border-primary/10 backdrop-blur-sm"
                            style={{ 
                              background: 'linear-gradient(90deg, hsl(180 100% 50% / 0.03), transparent)' 
                            }}
                          >
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary mt-1.5 md:mt-2 animate-pulse flex-shrink-0"></div>
                            <div className="font-tech text-primary/90 leading-relaxed text-sm md:text-base">
                              <TypingText 
                                text={item}
                                speed={20}
                                delay={2000 + (itemIndex * 600)}
                                showCursor={false}
                                secureLinks={true}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </SciFiContainer>
                </div>
              )
            ))}

            {/* Welcome Screen */}
            {!activeSection && (
              <div className="holo-screen p-4 md:p-8 text-center min-h-full flex flex-col justify-center">
                <div className="hud-corner top-left"></div>
                <div className="hud-corner top-right"></div>
                <div className="hud-corner bottom-left"></div>
                <div className="hud-corner bottom-right"></div>
                
                <div className="space-y-4 md:space-y-6">
                  <div className="text-4xl md:text-6xl">🧠</div>
                  <h2 className="text-xl md:text-3xl font-orbitron font-bold hologram-text">
                    <TypingText text="SYSTEM INITIALIZED - WELCOME" speed={60} delay={1000} />
                  </h2>
                  <p className="text-sm md:text-lg font-tech text-muted-foreground max-w-md mx-auto px-4">
                    <TypingText 
                      text=">>> SELECT A NAVIGATION MODULE TO EXPLORE MY PORTFOLIO <<<"
                      speed={30}
                      delay={4000}
                    />
                  </p>
                  
                  {/* Animated Circuit Pattern */}
                  <div className="mt-6 md:mt-8 h-px w-48 md:w-64 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent animate-circuit-flow"></div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Info Panel */}
        <div className="info-panel">
          <StatusPanel />
          
          <div className="mt-4 md:mt-6">
            <TerminalDisplay />
          </div>
          
          {/* Additional HUD Elements */}
          <div className="mt-4 md:mt-6 space-y-2 md:space-y-3">
            <div className="text-xs font-orbitron font-bold text-primary tracking-wider text-center md:text-left">
              SYSTEM METRICS
            </div>
            
            <div className="space-y-1 md:space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">System Synchronization</span>
                <span className="text-primary font-mono">99.2%</span>
              </div>
              <div className="w-full bg-background/20 rounded-full h-1">
                <div className="bg-primary h-1 rounded-full animate-pulse-glow" style={{ width: '99%' }}></div>
              </div>
              
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Data Coherence</span>
                <span className="text-primary font-mono">97.8%</span>
              </div>
              <div className="w-full bg-background/20 rounded-full h-1">
                <div className="bg-primary h-1 rounded-full animate-pulse-glow" style={{ width: '97%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-5">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              backgroundColor: `hsl(${180 + Math.random() * 40}, 100%, ${50 + Math.random() * 30}%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};
